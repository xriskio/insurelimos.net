import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { 
  insertLimoQuoteSchema,
  insertTNCQuoteSchema,
  insertNEMTQuoteSchema,
  insertPublicAutoQuoteSchema,
  insertContactMessageSchema,
  insertWorkersCompQuoteSchema,
  insertExcessLiabilityQuoteSchema,
  insertCyberLiabilityQuoteSchema,
  insertTransportQuoteSchema,
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ObjectStorageService, ObjectNotFoundError } from "./objectStorage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
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
      res.status(201).json({ success: true, message });
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

  // Workers Compensation Quote Submission
  app.post("/api/quotes/workers-comp", async (req, res) => {
    try {
      const validatedData = insertWorkersCompQuoteSchema.parse(req.body);
      const quote = await storage.createWorkersCompQuote(validatedData);
      res.status(201).json({ success: true, quote });
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
      res.status(201).json({ success: true, quote });
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
      res.status(201).json({ success: true, quote });
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

  // Comprehensive Transport Quote Submission
  app.post("/api/quotes/transport", async (req, res) => {
    try {
      const validatedData = insertTransportQuoteSchema.parse(req.body);
      const quote = await storage.createTransportQuote(validatedData);
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

  return httpServer;
}
