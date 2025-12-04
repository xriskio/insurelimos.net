import { 
  type LimoQuote, 
  type InsertLimoQuote,
  type TNCQuote,
  type InsertTNCQuote,
  type NEMTQuote,
  type InsertNEMTQuote,
  type PublicAutoQuote,
  type InsertPublicAutoQuote,
  type ContactMessage,
  type InsertContactMessage,
  type WorkersCompQuote,
  type InsertWorkersCompQuote,
  type ExcessLiabilityQuote,
  type InsertExcessLiabilityQuote,
  type CyberLiabilityQuote,
  type InsertCyberLiabilityQuote,
  limoQuotes,
  tncQuotes,
  nemtQuotes,
  publicAutoQuotes,
  contactMessages,
  workersCompQuotes,
  excessLiabilityQuotes,
  cyberLiabilityQuotes,
} from "@shared/schema";
import { db } from "./db";
import { desc } from "drizzle-orm";

export interface IStorage {
  // Limo Quotes
  createLimoQuote(quote: InsertLimoQuote): Promise<LimoQuote>;
  getAllLimoQuotes(): Promise<LimoQuote[]>;
  
  // TNC Quotes
  createTNCQuote(quote: InsertTNCQuote): Promise<TNCQuote>;
  getAllTNCQuotes(): Promise<TNCQuote[]>;
  
  // NEMT Quotes
  createNEMTQuote(quote: InsertNEMTQuote): Promise<NEMTQuote>;
  getAllNEMTQuotes(): Promise<NEMTQuote[]>;
  
  // Public Auto Quotes
  createPublicAutoQuote(quote: InsertPublicAutoQuote): Promise<PublicAutoQuote>;
  getAllPublicAutoQuotes(): Promise<PublicAutoQuote[]>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  // Workers Comp Quotes
  createWorkersCompQuote(quote: InsertWorkersCompQuote): Promise<WorkersCompQuote>;
  getAllWorkersCompQuotes(): Promise<WorkersCompQuote[]>;
  
  // Excess Liability Quotes
  createExcessLiabilityQuote(quote: InsertExcessLiabilityQuote): Promise<ExcessLiabilityQuote>;
  getAllExcessLiabilityQuotes(): Promise<ExcessLiabilityQuote[]>;
  
  // Cyber Liability Quotes
  createCyberLiabilityQuote(quote: InsertCyberLiabilityQuote): Promise<CyberLiabilityQuote>;
  getAllCyberLiabilityQuotes(): Promise<CyberLiabilityQuote[]>;
}

export class DatabaseStorage implements IStorage {
  // Limo Quotes
  async createLimoQuote(quote: InsertLimoQuote): Promise<LimoQuote> {
    const [result] = await db.insert(limoQuotes).values(quote).returning();
    return result;
  }

  async getAllLimoQuotes(): Promise<LimoQuote[]> {
    return db.select().from(limoQuotes).orderBy(desc(limoQuotes.createdAt));
  }

  // TNC Quotes
  async createTNCQuote(quote: InsertTNCQuote): Promise<TNCQuote> {
    const [result] = await db.insert(tncQuotes).values(quote).returning();
    return result;
  }

  async getAllTNCQuotes(): Promise<TNCQuote[]> {
    return db.select().from(tncQuotes).orderBy(desc(tncQuotes.createdAt));
  }

  // NEMT Quotes
  async createNEMTQuote(quote: InsertNEMTQuote): Promise<NEMTQuote> {
    const [result] = await db.insert(nemtQuotes).values(quote).returning();
    return result;
  }

  async getAllNEMTQuotes(): Promise<NEMTQuote[]> {
    return db.select().from(nemtQuotes).orderBy(desc(nemtQuotes.createdAt));
  }

  // Public Auto Quotes
  async createPublicAutoQuote(quote: InsertPublicAutoQuote): Promise<PublicAutoQuote> {
    const [result] = await db.insert(publicAutoQuotes).values(quote).returning();
    return result;
  }

  async getAllPublicAutoQuotes(): Promise<PublicAutoQuote[]> {
    return db.select().from(publicAutoQuotes).orderBy(desc(publicAutoQuotes.createdAt));
  }

  // Contact Messages
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [result] = await db.insert(contactMessages).values(message).returning();
    return result;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
  }

  // Workers Comp Quotes
  async createWorkersCompQuote(quote: InsertWorkersCompQuote): Promise<WorkersCompQuote> {
    const [result] = await db.insert(workersCompQuotes).values(quote).returning();
    return result;
  }

  async getAllWorkersCompQuotes(): Promise<WorkersCompQuote[]> {
    return db.select().from(workersCompQuotes).orderBy(desc(workersCompQuotes.createdAt));
  }

  // Excess Liability Quotes
  async createExcessLiabilityQuote(quote: InsertExcessLiabilityQuote): Promise<ExcessLiabilityQuote> {
    const [result] = await db.insert(excessLiabilityQuotes).values(quote).returning();
    return result;
  }

  async getAllExcessLiabilityQuotes(): Promise<ExcessLiabilityQuote[]> {
    return db.select().from(excessLiabilityQuotes).orderBy(desc(excessLiabilityQuotes.createdAt));
  }

  // Cyber Liability Quotes
  async createCyberLiabilityQuote(quote: InsertCyberLiabilityQuote): Promise<CyberLiabilityQuote> {
    const [result] = await db.insert(cyberLiabilityQuotes).values(quote).returning();
    return result;
  }

  async getAllCyberLiabilityQuotes(): Promise<CyberLiabilityQuote[]> {
    return db.select().from(cyberLiabilityQuotes).orderBy(desc(cyberLiabilityQuotes.createdAt));
  }
}

export const storage = new DatabaseStorage();
