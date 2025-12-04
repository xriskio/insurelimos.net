import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { 
  insertLimoQuoteSchema,
  insertTNCQuoteSchema,
  insertNEMTQuoteSchema,
  insertPublicAutoQuoteSchema,
  insertContactMessageSchema,
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";

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

  return httpServer;
}
