import type { Express, Request, Response, NextFunction } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import session from "express-session";
import { 
  insertLimoQuoteSchema,
  insertTNCQuoteSchema,
  insertNEMTQuoteSchema,
  insertPublicAutoQuoteSchema,
  insertContactMessageSchema,
  insertServiceRequestSchema,
  insertBlogPostSchema,
  insertNewsReleaseSchema,
  insertSiteContentSchema,
  insertWorkersCompQuoteSchema,
  insertExcessLiabilityQuoteSchema,
  insertCyberLiabilityQuoteSchema,
  insertTransportQuoteSchema,
  insertAmbulanceQuoteSchema,
  insertCaptiveQuoteSchema,
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ObjectStorageService, ObjectNotFoundError } from "./objectStorage";
import { 
  sendQuoteNotificationToAdmin, 
  sendQuoteConfirmationToCustomer,
  sendServiceRequestNotificationToAdmin,
  sendServiceRequestConfirmationToCustomer,
  sendContactNotificationToAdmin,
  sendContactConfirmationToCustomer
} from "./email";
import { generateBlogPost, generateNewsRelease, improveContent } from "./perplexity";
import { insertAdminUserSchema } from "@shared/schema";
import crypto from "crypto";

// Super Admin credentials (from environment)
const SUPER_ADMIN_EMAIL = "admin@insurelimos.net";
const SUPER_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

// Simple password hashing
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}

// Middleware to check if user is authenticated as admin
function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && (req.session as any).isAdmin) {
    next();
  } else {
    res.status(401).json({ success: false, error: "Unauthorized - Admin login required" });
  }
}

// Middleware to check if user is super admin
function requireSuperAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.session && (req.session as any).isAdmin && (req.session as any).isSuperAdmin) {
    next();
  } else {
    res.status(403).json({ success: false, error: "Super admin access required" });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // ============== ADMIN AUTHENTICATION ==============

  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Email and password required" });
    }

    // Check super admin first
    if (email === SUPER_ADMIN_EMAIL && password === SUPER_ADMIN_PASSWORD) {
      (req.session as any).isAdmin = true;
      (req.session as any).isSuperAdmin = true;
      (req.session as any).adminEmail = email;
      (req.session as any).adminName = "Super Admin";
      (req.session as any).adminRole = "super_admin";
      return res.json({ success: true, message: "Login successful", role: "super_admin" });
    }

    // Check database users
    try {
      const user = await storage.getAdminUserByEmail(email);
      if (user && user.active && verifyPassword(password, user.password)) {
        (req.session as any).isAdmin = true;
        (req.session as any).isSuperAdmin = false;
        (req.session as any).adminEmail = user.email;
        (req.session as any).adminName = user.name;
        (req.session as any).adminRole = user.role;
        (req.session as any).adminId = user.id;
        
        // Update last login
        await storage.updateAdminUserLastLogin(user.id);
        
        return res.json({ success: true, message: "Login successful", role: user.role });
      }
    } catch (error) {
      console.error("Database login check error:", error);
    }

    res.status(401).json({ success: false, error: "Invalid credentials" });
  });

  // Admin logout
  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ success: false, error: "Logout failed" });
      }
      res.json({ success: true, message: "Logged out successfully" });
    });
  });

  // Check admin auth status
  app.get("/api/admin/status", (req, res) => {
    const isAdmin = req.session && (req.session as any).isAdmin;
    const isSuperAdmin = req.session && (req.session as any).isSuperAdmin;
    const adminName = (req.session as any)?.adminName || "";
    const adminRole = (req.session as any)?.adminRole || "";
    res.json({ 
      success: true, 
      isAuthenticated: !!isAdmin,
      isSuperAdmin: !!isSuperAdmin,
      name: adminName,
      role: adminRole
    });
  });

  // ============== ADMIN USER MANAGEMENT (Super Admin Only) ==============

  // Get all admin users
  app.get("/api/admin/users", requireAdminAuth, async (req, res) => {
    // Only super admin can view all users
    if (!(req.session as any).isSuperAdmin) {
      return res.status(403).json({ success: false, error: "Super admin access required" });
    }
    try {
      const users = await storage.getAllAdminUsers();
      // Don't send passwords
      const safeUsers = users.map(({ password, ...user }) => user);
      res.json({ success: true, users: safeUsers });
    } catch (error) {
      console.error("Error fetching admin users:", error);
      res.status(500).json({ success: false, error: "Failed to fetch users" });
    }
  });

  // Create admin user
  app.post("/api/admin/users", requireAdminAuth, async (req, res) => {
    if (!(req.session as any).isSuperAdmin) {
      return res.status(403).json({ success: false, error: "Super admin access required" });
    }
    try {
      const { email, password, name, role, active } = req.body;
      
      if (!email || !password || !name) {
        return res.status(400).json({ success: false, error: "Email, password, and name are required" });
      }

      // Check if email already exists
      const existing = await storage.getAdminUserByEmail(email);
      if (existing) {
        return res.status(400).json({ success: false, error: "Email already exists" });
      }

      const hashedPassword = hashPassword(password);
      const user = await storage.createAdminUser({
        email,
        password: hashedPassword,
        name,
        role: role || "agent",
        active: active !== false,
      });
      
      const { password: _, ...safeUser } = user;
      res.status(201).json({ success: true, user: safeUser });
    } catch (error: any) {
      console.error("Error creating admin user:", error);
      res.status(500).json({ success: false, error: error.message || "Failed to create user" });
    }
  });

  // Update admin user
  app.patch("/api/admin/users/:id", requireAdminAuth, async (req, res) => {
    if (!(req.session as any).isSuperAdmin) {
      return res.status(403).json({ success: false, error: "Super admin access required" });
    }
    try {
      const { id } = req.params;
      const { email, password, name, role, active } = req.body;
      
      const updateData: any = {};
      if (email) updateData.email = email;
      if (name) updateData.name = name;
      if (role) updateData.role = role;
      if (active !== undefined) updateData.active = active;
      if (password) updateData.password = hashPassword(password);

      const user = await storage.updateAdminUser(id, updateData);
      if (!user) {
        return res.status(404).json({ success: false, error: "User not found" });
      }
      
      const { password: _, ...safeUser } = user;
      res.json({ success: true, user: safeUser });
    } catch (error) {
      console.error("Error updating admin user:", error);
      res.status(500).json({ success: false, error: "Failed to update user" });
    }
  });

  // Delete admin user
  app.delete("/api/admin/users/:id", requireAdminAuth, async (req, res) => {
    if (!(req.session as any).isSuperAdmin) {
      return res.status(403).json({ success: false, error: "Super admin access required" });
    }
    try {
      await storage.deleteAdminUser(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting admin user:", error);
      res.status(500).json({ success: false, error: "Failed to delete user" });
    }
  });
  
  // Limousine Quote Submission
  app.post("/api/quotes/limo", async (req, res) => {
    try {
      const validatedData = insertLimoQuoteSchema.parse(req.body);
      const quote = await storage.createLimoQuote(validatedData);
      res.status(201).json({ success: true, quote });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating limo quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  // TNC Quote Submission
  app.post("/api/quotes/tnc", async (req, res) => {
    try {
      const validatedData = insertTNCQuoteSchema.parse(req.body);
      const quote = await storage.createTNCQuote(validatedData);
      res.status(201).json({ success: true, quote });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating TNC quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  // NEMT Quote Submission
  app.post("/api/quotes/nemt", async (req, res) => {
    try {
      const validatedData = insertNEMTQuoteSchema.parse(req.body);
      const quote = await storage.createNEMTQuote(validatedData);
      res.status(201).json({ success: true, quote });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating NEMT quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  // Public Auto Quote Submission
  app.post("/api/quotes/public-auto", async (req, res) => {
    try {
      const validatedData = insertPublicAutoQuoteSchema.parse(req.body);
      const quote = await storage.createPublicAutoQuote(validatedData);
      res.status(201).json({ success: true, quote });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating public auto quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  // Contact Form Submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Generate a message ID
      const messageId = `MSG-${Date.now().toString(36).toUpperCase()}`;
      
      // Send email notifications asynchronously
      const emailData = {
        messageId,
        name: message.name,
        email: message.email,
        phone: message.phone || undefined,
        subject: message.subject,
        message: message.message,
      };
      
      Promise.all([
        sendContactNotificationToAdmin(emailData),
        sendContactConfirmationToCustomer(emailData),
      ]).catch(err => console.error("Email notification error:", err));
      
      res.status(201).json({ success: true, message, messageId });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating contact message:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit message" 
      });
    }
  });

  // Get all quotes endpoints (for internal review/admin)
  app.get("/api/quotes/limo", async (req, res) => {
    try {
      const quotes = await storage.getAllLimoQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching limo quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  app.get("/api/quotes/tnc", async (req, res) => {
    try {
      const quotes = await storage.getAllTNCQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching TNC quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  app.get("/api/quotes/nemt", async (req, res) => {
    try {
      const quotes = await storage.getAllNEMTQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching NEMT quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  app.get("/api/quotes/public-auto", async (req, res) => {
    try {
      const quotes = await storage.getAllPublicAutoQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching public auto quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ success: false, error: "Failed to fetch messages" });
    }
  });

  // Update contact message status
  app.patch("/api/contact/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      const message = await storage.updateContactMessageStatus(id, status, notes);
      if (!message) {
        return res.status(404).json({ success: false, error: "Message not found" });
      }
      res.json({ success: true, message });
    } catch (error) {
      console.error("Error updating contact message:", error);
      res.status(500).json({ success: false, error: "Failed to update message" });
    }
  });

  // Service Request Submission
  app.post("/api/service-requests", async (req, res) => {
    try {
      const validatedData = insertServiceRequestSchema.parse(req.body);
      const request = await storage.createServiceRequest(validatedData);
      
      // Generate a request ID
      const requestId = `SR-${Date.now().toString(36).toUpperCase()}`;
      
      // Send email notifications asynchronously
      const emailData = {
        requestId,
        requestType: request.requestType,
        policyNumber: request.policyNumber,
        insuredName: request.insuredName,
        contactName: request.contactName,
        email: request.email,
        phone: request.phone,
        details: request.details,
        allFields: request,
      };
      
      Promise.all([
        sendServiceRequestNotificationToAdmin(emailData),
        sendServiceRequestConfirmationToCustomer(emailData),
      ]).catch(err => console.error("Email notification error:", err));
      
      res.status(201).json({ success: true, request, requestId });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating service request:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit service request" 
      });
    }
  });

  app.get("/api/service-requests", requireAdminAuth, async (req, res) => {
    try {
      const requests = await storage.getAllServiceRequests();
      res.json({ success: true, requests });
    } catch (error) {
      console.error("Error fetching service requests:", error);
      res.status(500).json({ success: false, error: "Failed to fetch service requests" });
    }
  });

  // Update service request status (protected)
  app.patch("/api/service-requests/:id/status", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      const request = await storage.updateServiceRequestStatus(id, status, notes);
      if (!request) {
        return res.status(404).json({ success: false, error: "Service request not found" });
      }
      res.json({ success: true, request });
    } catch (error) {
      console.error("Error updating service request:", error);
      res.status(500).json({ success: false, error: "Failed to update service request" });
    }
  });

  // Workers Compensation Quote Submission
  app.post("/api/quotes/workers-comp", async (req, res) => {
    try {
      const validatedData = insertWorkersCompQuoteSchema.parse(req.body);
      const quote = await storage.createWorkersCompQuote(validatedData);
      
      // Generate reference number and send emails
      const referenceNumber = `WC-${Date.now().toString(36).toUpperCase()}`;
      const emailData = {
        referenceNumber,
        quoteType: "Workers Compensation",
        businessName: quote.businessName,
        contactName: quote.contactName,
        contactEmail: quote.email,
        contactPhone: quote.phone,
        state: "N/A",
        allFields: quote,
      };
      
      Promise.all([
        sendQuoteNotificationToAdmin(emailData),
        sendQuoteConfirmationToCustomer(emailData),
      ]).catch(err => console.error("Email notification error:", err));
      
      res.status(201).json({ success: true, quote, referenceNumber });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating workers comp quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  app.get("/api/quotes/workers-comp", async (req, res) => {
    try {
      const quotes = await storage.getAllWorkersCompQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching workers comp quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  // Excess Liability Quote Submission
  app.post("/api/quotes/excess-liability", async (req, res) => {
    try {
      const validatedData = insertExcessLiabilityQuoteSchema.parse(req.body);
      const quote = await storage.createExcessLiabilityQuote(validatedData);
      
      // Generate reference number and send emails
      const referenceNumber = `EL-${Date.now().toString(36).toUpperCase()}`;
      const emailData = {
        referenceNumber,
        quoteType: "Excess Liability",
        businessName: quote.businessName,
        contactName: quote.contactName,
        contactEmail: quote.email,
        contactPhone: quote.phone,
        state: "N/A",
        allFields: quote,
      };
      
      Promise.all([
        sendQuoteNotificationToAdmin(emailData),
        sendQuoteConfirmationToCustomer(emailData),
      ]).catch(err => console.error("Email notification error:", err));
      
      res.status(201).json({ success: true, quote, referenceNumber });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating excess liability quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  app.get("/api/quotes/excess-liability", async (req, res) => {
    try {
      const quotes = await storage.getAllExcessLiabilityQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching excess liability quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  // Cyber Liability Quote Submission
  app.post("/api/quotes/cyber-liability", async (req, res) => {
    try {
      const validatedData = insertCyberLiabilityQuoteSchema.parse(req.body);
      const quote = await storage.createCyberLiabilityQuote(validatedData);
      
      // Generate reference number and send emails
      const referenceNumber = `CL-${Date.now().toString(36).toUpperCase()}`;
      const emailData = {
        referenceNumber,
        quoteType: "Cyber Liability",
        businessName: quote.businessName,
        contactName: quote.contactName,
        contactEmail: quote.email,
        contactPhone: quote.phone,
        state: "N/A",
        allFields: quote,
      };
      
      Promise.all([
        sendQuoteNotificationToAdmin(emailData),
        sendQuoteConfirmationToCustomer(emailData),
      ]).catch(err => console.error("Email notification error:", err));
      
      res.status(201).json({ success: true, quote, referenceNumber });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating cyber liability quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  app.get("/api/quotes/cyber-liability", async (req, res) => {
    try {
      const quotes = await storage.getAllCyberLiabilityQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching cyber liability quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  // Ambulance Quote Submission
  app.post("/api/quotes/ambulance", async (req, res) => {
    try {
      const validatedData = insertAmbulanceQuoteSchema.parse(req.body);
      const quote = await storage.createAmbulanceQuote(validatedData);
      
      // Generate reference number and send emails
      const referenceNumber = `AMB-${Date.now().toString(36).toUpperCase()}`;
      const emailData = {
        referenceNumber,
        quoteType: "Ambulance",
        businessName: quote.businessName,
        contactName: quote.contactName,
        contactEmail: quote.email,
        contactPhone: quote.phone,
        state: "N/A",
        allFields: quote,
      };
      
      Promise.all([
        sendQuoteNotificationToAdmin(emailData),
        sendQuoteConfirmationToCustomer(emailData),
      ]).catch(err => console.error("Email notification error:", err));
      
      res.status(201).json({ success: true, quote, referenceNumber });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating ambulance quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  app.get("/api/quotes/ambulance", async (req, res) => {
    try {
      const quotes = await storage.getAllAmbulanceQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching ambulance quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  // Captive Program Quote Submission
  app.post("/api/quotes/captive", async (req, res) => {
    try {
      const validatedData = insertCaptiveQuoteSchema.parse(req.body);
      const quote = await storage.createCaptiveQuote(validatedData);
      
      // Generate reference number and send emails
      const referenceNumber = `CAP-${Date.now().toString(36).toUpperCase()}`;
      const emailData = {
        referenceNumber,
        quoteType: "Captive Program",
        businessName: quote.businessName,
        contactName: quote.contactName,
        contactEmail: quote.email,
        contactPhone: quote.phone,
        state: "N/A",
        allFields: quote,
      };
      
      Promise.all([
        sendQuoteNotificationToAdmin(emailData),
        sendQuoteConfirmationToCustomer(emailData),
      ]).catch(err => console.error("Email notification error:", err));
      
      res.status(201).json({ success: true, quote, referenceNumber });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating captive quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  app.get("/api/quotes/captive", async (req, res) => {
    try {
      const quotes = await storage.getAllCaptiveQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching captive quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  // Comprehensive Transport Quote Submission
  app.post("/api/quotes/transport", async (req, res) => {
    try {
      const validatedData = insertTransportQuoteSchema.parse(req.body);
      const quote = await storage.createTransportQuote(validatedData);
      
      // Send email notifications asynchronously (don't block the response)
      const emailData = {
        referenceNumber: quote.referenceNumber,
        quoteType: quote.quoteType,
        businessName: quote.insuredName,
        contactName: quote.contactName,
        contactEmail: quote.contactEmail,
        contactPhone: quote.contactPhone,
        state: quote.state,
        allFields: quote,
      };
      
      // Send emails in the background
      Promise.all([
        sendQuoteNotificationToAdmin(emailData),
        sendQuoteConfirmationToCustomer(emailData),
      ]).catch(err => console.error("Email notification error:", err));
      
      res.status(201).json({ success: true, quote });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      }
      console.error("Error creating transport quote:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote" 
      });
    }
  });

  app.get("/api/quotes/transport", async (req, res) => {
    try {
      const quotes = await storage.getAllTransportQuotes();
      res.json({ success: true, quotes });
    } catch (error) {
      console.error("Error fetching transport quotes:", error);
      res.status(500).json({ success: false, error: "Failed to fetch quotes" });
    }
  });

  // Update transport quote status (protected)
  app.patch("/api/quotes/transport/:id/status", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      const quote = await storage.updateTransportQuoteStatus(id, status, notes);
      if (!quote) {
        return res.status(404).json({ success: false, error: "Quote not found" });
      }
      res.json({ success: true, quote });
    } catch (error) {
      console.error("Error updating transport quote:", error);
      res.status(500).json({ success: false, error: "Failed to update quote" });
    }
  });

  // Dashboard Stats (protected)
  app.get("/api/dashboard/stats", requireAdminAuth, async (req, res) => {
    try {
      const stats = await storage.getDashboardStats();
      res.json({ success: true, stats });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      res.status(500).json({ success: false, error: "Failed to fetch stats" });
    }
  });

  // Get all submissions (for admin dashboard - protected)
  app.get("/api/dashboard/all", requireAdminAuth, async (req, res) => {
    try {
      const [quotes, contacts, serviceRequests] = await Promise.all([
        storage.getAllTransportQuotes(),
        storage.getAllContactMessages(),
        storage.getAllServiceRequests(),
      ]);
      res.json({ 
        success: true, 
        data: {
          quotes,
          contacts,
          serviceRequests,
        }
      });
    } catch (error) {
      console.error("Error fetching all submissions:", error);
      res.status(500).json({ success: false, error: "Failed to fetch submissions" });
    }
  });

  // File upload endpoints for quote documents
  app.post("/api/objects/upload", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ error: "Failed to get upload URL" });
    }
  });

  app.get("/objects/:objectPath(*)", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const objectFile = await objectStorageService.getObjectEntityFile(req.path);
      objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error accessing object:", error);
      if (error instanceof ObjectNotFoundError) {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }
  });

  app.put("/api/objects/finalize", async (req, res) => {
    if (!req.body.uploadURL) {
      return res.status(400).json({ error: "uploadURL is required" });
    }
    try {
      const objectStorageService = new ObjectStorageService();
      const objectPath = objectStorageService.normalizeObjectEntityPath(req.body.uploadURL);
      res.status(200).json({ objectPath });
    } catch (error) {
      console.error("Error finalizing upload:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // ============== BLOG POSTS ==============
  
  // Get all blog posts (admin)
  app.get("/api/blog/all", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json({ success: true, posts });
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ success: false, error: "Failed to fetch posts" });
    }
  });

  // Get published blog posts (public)
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json({ success: true, posts });
    } catch (error) {
      console.error("Error fetching published blog posts:", error);
      res.status(500).json({ success: false, error: "Failed to fetch posts" });
    }
  });

  // Get single blog post by slug
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ success: false, error: "Post not found" });
      }
      res.json({ success: true, post });
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ success: false, error: "Failed to fetch post" });
    }
  });

  // Create blog post (protected)
  app.post("/api/blog", requireAdminAuth, async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json({ success: true, post });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ success: false, error: validationError.message });
      }
      console.error("Error creating blog post:", error);
      res.status(500).json({ success: false, error: "Failed to create post" });
    }
  });

  // Update blog post (protected)
  app.patch("/api/blog/:id", requireAdminAuth, async (req, res) => {
    try {
      const post = await storage.updateBlogPost(req.params.id, req.body);
      if (!post) {
        return res.status(404).json({ success: false, error: "Post not found" });
      }
      res.json({ success: true, post });
    } catch (error) {
      console.error("Error updating blog post:", error);
      res.status(500).json({ success: false, error: "Failed to update post" });
    }
  });

  // Delete blog post (protected)
  app.delete("/api/blog/:id", requireAdminAuth, async (req, res) => {
    try {
      await storage.deleteBlogPost(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({ success: false, error: "Failed to delete post" });
    }
  });

  // Generate blog post with AI (protected)
  app.post("/api/blog/generate", requireAdminAuth, async (req, res) => {
    try {
      const { topic, category } = req.body;
      if (!topic || !category) {
        return res.status(400).json({ success: false, error: "Topic and category are required" });
      }
      const generated = await generateBlogPost(topic, category);
      res.json({ success: true, generated });
    } catch (error: any) {
      console.error("Error generating blog post:", error);
      res.status(500).json({ success: false, error: error.message || "Failed to generate content" });
    }
  });

  // ============== NEWS RELEASES ==============
  
  // Get all news releases (admin)
  app.get("/api/news/all", async (req, res) => {
    try {
      const releases = await storage.getAllNewsReleases();
      res.json({ success: true, releases });
    } catch (error) {
      console.error("Error fetching news releases:", error);
      res.status(500).json({ success: false, error: "Failed to fetch releases" });
    }
  });

  // Get published news releases (public)
  app.get("/api/news", async (req, res) => {
    try {
      const releases = await storage.getPublishedNewsReleases();
      res.json({ success: true, releases });
    } catch (error) {
      console.error("Error fetching published news releases:", error);
      res.status(500).json({ success: false, error: "Failed to fetch releases" });
    }
  });

  // Get single news release by slug
  app.get("/api/news/:slug", async (req, res) => {
    try {
      const release = await storage.getNewsReleaseBySlug(req.params.slug);
      if (!release) {
        return res.status(404).json({ success: false, error: "Release not found" });
      }
      res.json({ success: true, release });
    } catch (error) {
      console.error("Error fetching news release:", error);
      res.status(500).json({ success: false, error: "Failed to fetch release" });
    }
  });

  // Create news release (protected)
  app.post("/api/news", requireAdminAuth, async (req, res) => {
    try {
      const validatedData = insertNewsReleaseSchema.parse(req.body);
      const release = await storage.createNewsRelease(validatedData);
      res.status(201).json({ success: true, release });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ success: false, error: validationError.message });
      }
      console.error("Error creating news release:", error);
      res.status(500).json({ success: false, error: "Failed to create release" });
    }
  });

  // Update news release (protected)
  app.patch("/api/news/:id", requireAdminAuth, async (req, res) => {
    try {
      const release = await storage.updateNewsRelease(req.params.id, req.body);
      if (!release) {
        return res.status(404).json({ success: false, error: "Release not found" });
      }
      res.json({ success: true, release });
    } catch (error) {
      console.error("Error updating news release:", error);
      res.status(500).json({ success: false, error: "Failed to update release" });
    }
  });

  // Delete news release (protected)
  app.delete("/api/news/:id", requireAdminAuth, async (req, res) => {
    try {
      await storage.deleteNewsRelease(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting news release:", error);
      res.status(500).json({ success: false, error: "Failed to delete release" });
    }
  });

  // Generate news release with AI (protected)
  app.post("/api/news/generate", requireAdminAuth, async (req, res) => {
    try {
      const { topic, category } = req.body;
      if (!topic || !category) {
        return res.status(400).json({ success: false, error: "Topic and category are required" });
      }
      const generated = await generateNewsRelease(topic, category);
      res.json({ success: true, generated });
    } catch (error: any) {
      console.error("Error generating news release:", error);
      res.status(500).json({ success: false, error: error.message || "Failed to generate content" });
    }
  });

  // Improve content with AI (protected)
  app.post("/api/content/improve", requireAdminAuth, async (req, res) => {
    try {
      const { content, contentType } = req.body;
      if (!content || !contentType) {
        return res.status(400).json({ success: false, error: "Content and type are required" });
      }
      const improved = await improveContent(content, contentType);
      res.json({ success: true, content: improved });
    } catch (error: any) {
      console.error("Error improving content:", error);
      res.status(500).json({ success: false, error: error.message || "Failed to improve content" });
    }
  });

  // ============== SITE CONTENT ==============
  
  // Get all site content (admin - protected)
  app.get("/api/site-content", requireAdminAuth, async (req, res) => {
    try {
      const content = await storage.getAllSiteContent();
      res.json({ success: true, content });
    } catch (error) {
      console.error("Error fetching site content:", error);
      res.status(500).json({ success: false, error: "Failed to fetch content" });
    }
  });

  // Get specific section content (public)
  app.get("/api/site-content/:section", async (req, res) => {
    try {
      const content = await storage.getSiteContent(req.params.section);
      if (!content) {
        return res.status(404).json({ success: false, error: "Content not found" });
      }
      res.json({ success: true, content });
    } catch (error) {
      console.error("Error fetching site content:", error);
      res.status(500).json({ success: false, error: "Failed to fetch content" });
    }
  });

  // Upsert site content (protected)
  app.post("/api/site-content", requireAdminAuth, async (req, res) => {
    try {
      const validatedData = insertSiteContentSchema.parse(req.body);
      const content = await storage.upsertSiteContent(validatedData);
      res.json({ success: true, content });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ success: false, error: validationError.message });
      }
      console.error("Error saving site content:", error);
      res.status(500).json({ success: false, error: "Failed to save content" });
    }
  });

  return httpServer;
}
