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
  limoQuotes,
  tncQuotes,
  nemtQuotes,
  publicAutoQuotes,
  contactMessages,
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
}

export const storage = new DatabaseStorage();
