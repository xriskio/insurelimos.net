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
  type ServiceRequest,
  type InsertServiceRequest,
  type BlogPost,
  type InsertBlogPost,
  type NewsRelease,
  type InsertNewsRelease,
  type SiteContent,
  type InsertSiteContent,
  type WorkersCompQuote,
  type InsertWorkersCompQuote,
  type ExcessLiabilityQuote,
  type InsertExcessLiabilityQuote,
  type CyberLiabilityQuote,
  type InsertCyberLiabilityQuote,
  type TransportQuote,
  type InsertTransportQuote,
  limoQuotes,
  tncQuotes,
  nemtQuotes,
  publicAutoQuotes,
  contactMessages,
  serviceRequests,
  blogPosts,
  newsReleases,
  siteContent,
  workersCompQuotes,
  excessLiabilityQuotes,
  cyberLiabilityQuotes,
  transportQuotes,
} from "@shared/schema";
import { db } from "./db";
import { desc, eq, sql } from "drizzle-orm";

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
  updateContactMessageStatus(id: string, status: string, notes?: string): Promise<ContactMessage | null>;
  
  // Service Requests
  createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest>;
  getAllServiceRequests(): Promise<ServiceRequest[]>;
  updateServiceRequestStatus(id: string, status: string, notes?: string): Promise<ServiceRequest | null>;
  
  // Blog Posts
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | null>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  // News Releases
  createNewsRelease(release: InsertNewsRelease): Promise<NewsRelease>;
  getAllNewsReleases(): Promise<NewsRelease[]>;
  getPublishedNewsReleases(): Promise<NewsRelease[]>;
  getNewsReleaseBySlug(slug: string): Promise<NewsRelease | null>;
  updateNewsRelease(id: string, release: Partial<InsertNewsRelease>): Promise<NewsRelease | null>;
  deleteNewsRelease(id: string): Promise<boolean>;
  
  // Site Content
  getSiteContent(section: string): Promise<SiteContent | null>;
  getAllSiteContent(): Promise<SiteContent[]>;
  upsertSiteContent(content: InsertSiteContent): Promise<SiteContent>;
  
  // Workers Comp Quotes
  createWorkersCompQuote(quote: InsertWorkersCompQuote): Promise<WorkersCompQuote>;
  getAllWorkersCompQuotes(): Promise<WorkersCompQuote[]>;
  
  // Excess Liability Quotes
  createExcessLiabilityQuote(quote: InsertExcessLiabilityQuote): Promise<ExcessLiabilityQuote>;
  getAllExcessLiabilityQuotes(): Promise<ExcessLiabilityQuote[]>;
  
  // Cyber Liability Quotes
  createCyberLiabilityQuote(quote: InsertCyberLiabilityQuote): Promise<CyberLiabilityQuote>;
  getAllCyberLiabilityQuotes(): Promise<CyberLiabilityQuote[]>;
  
  // Transport Quotes (comprehensive)
  createTransportQuote(quote: InsertTransportQuote): Promise<TransportQuote>;
  getAllTransportQuotes(): Promise<TransportQuote[]>;
  getTransportQuotesByType(type: string): Promise<TransportQuote[]>;
  updateTransportQuoteStatus(id: string, status: string, notes?: string): Promise<TransportQuote | null>;
  
  // Dashboard Stats
  getDashboardStats(): Promise<{
    totalQuotes: number;
    newQuotes: number;
    totalContacts: number;
    newContacts: number;
    totalServiceRequests: number;
    newServiceRequests: number;
  }>;
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

  async updateContactMessageStatus(id: string, status: string, notes?: string): Promise<ContactMessage | null> {
    const updateData: any = { status };
    if (notes !== undefined) updateData.notes = notes;
    const [result] = await db.update(contactMessages).set(updateData).where(eq(contactMessages.id, id)).returning();
    return result || null;
  }

  // Service Requests
  async createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest> {
    const [result] = await db.insert(serviceRequests).values(request).returning();
    return result;
  }

  async getAllServiceRequests(): Promise<ServiceRequest[]> {
    return db.select().from(serviceRequests).orderBy(desc(serviceRequests.createdAt));
  }

  async updateServiceRequestStatus(id: string, status: string, notes?: string): Promise<ServiceRequest | null> {
    const updateData: any = { status };
    if (notes !== undefined) updateData.notes = notes;
    const [result] = await db.update(serviceRequests).set(updateData).where(eq(serviceRequests.id, id)).returning();
    return result || null;
  }

  // Blog Posts
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [result] = await db.insert(blogPosts).values(post).returning();
    return result;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).where(eq(blogPosts.published, true)).orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const [result] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return result || null;
  }

  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | null> {
    const [result] = await db.update(blogPosts).set({ ...post, updatedAt: new Date() }).where(eq(blogPosts.id, id)).returning();
    return result || null;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return true;
  }

  // News Releases
  async createNewsRelease(release: InsertNewsRelease): Promise<NewsRelease> {
    const [result] = await db.insert(newsReleases).values(release).returning();
    return result;
  }

  async getAllNewsReleases(): Promise<NewsRelease[]> {
    return db.select().from(newsReleases).orderBy(desc(newsReleases.publishDate));
  }

  async getPublishedNewsReleases(): Promise<NewsRelease[]> {
    return db.select().from(newsReleases).where(eq(newsReleases.published, true)).orderBy(desc(newsReleases.publishDate));
  }

  async getNewsReleaseBySlug(slug: string): Promise<NewsRelease | null> {
    const [result] = await db.select().from(newsReleases).where(eq(newsReleases.slug, slug));
    return result || null;
  }

  async updateNewsRelease(id: string, release: Partial<InsertNewsRelease>): Promise<NewsRelease | null> {
    const [result] = await db.update(newsReleases).set({ ...release, updatedAt: new Date() }).where(eq(newsReleases.id, id)).returning();
    return result || null;
  }

  async deleteNewsRelease(id: string): Promise<boolean> {
    const result = await db.delete(newsReleases).where(eq(newsReleases.id, id));
    return true;
  }

  // Site Content
  async getSiteContent(section: string): Promise<SiteContent | null> {
    const [result] = await db.select().from(siteContent).where(eq(siteContent.section, section));
    return result || null;
  }

  async getAllSiteContent(): Promise<SiteContent[]> {
    return db.select().from(siteContent).orderBy(siteContent.section);
  }

  async upsertSiteContent(content: InsertSiteContent): Promise<SiteContent> {
    const existing = await this.getSiteContent(content.section);
    if (existing) {
      const [result] = await db.update(siteContent)
        .set({ ...content, updatedAt: new Date() })
        .where(eq(siteContent.section, content.section))
        .returning();
      return result;
    } else {
      const [result] = await db.insert(siteContent).values(content).returning();
      return result;
    }
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

  // Transport Quotes
  private generateReferenceNumber(quoteType: string): string {
    const prefix = quoteType.toUpperCase().substring(0, 3);
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `IL-${prefix}-${timestamp}${random}`;
  }

  async createTransportQuote(quote: InsertTransportQuote): Promise<TransportQuote> {
    const referenceNumber = this.generateReferenceNumber(quote.quoteType);
    const [result] = await db.insert(transportQuotes).values({
      ...quote,
      referenceNumber,
    }).returning();
    return result;
  }

  async getAllTransportQuotes(): Promise<TransportQuote[]> {
    return db.select().from(transportQuotes).orderBy(desc(transportQuotes.createdAt));
  }

  async getTransportQuotesByType(type: string): Promise<TransportQuote[]> {
    return db.select().from(transportQuotes).where(eq(transportQuotes.quoteType, type)).orderBy(desc(transportQuotes.createdAt));
  }

  async updateTransportQuoteStatus(id: string, status: string, notes?: string): Promise<TransportQuote | null> {
    const updateData: any = { status };
    if (notes !== undefined) updateData.notes = notes;
    const [result] = await db.update(transportQuotes).set(updateData).where(eq(transportQuotes.id, id)).returning();
    return result || null;
  }

  // Dashboard Stats
  async getDashboardStats(): Promise<{
    totalQuotes: number;
    newQuotes: number;
    totalContacts: number;
    newContacts: number;
    totalServiceRequests: number;
    newServiceRequests: number;
  }> {
    const [quoteStats] = await db.select({
      total: sql<number>`count(*)`,
      new: sql<number>`count(*) filter (where ${transportQuotes.status} = 'new')`
    }).from(transportQuotes);
    
    const [contactStats] = await db.select({
      total: sql<number>`count(*)`,
      new: sql<number>`count(*) filter (where ${contactMessages.status} = 'new')`
    }).from(contactMessages);
    
    const [serviceStats] = await db.select({
      total: sql<number>`count(*)`,
      new: sql<number>`count(*) filter (where ${serviceRequests.status} = 'new')`
    }).from(serviceRequests);
    
    return {
      totalQuotes: Number(quoteStats?.total || 0),
      newQuotes: Number(quoteStats?.new || 0),
      totalContacts: Number(contactStats?.total || 0),
      newContacts: Number(contactStats?.new || 0),
      totalServiceRequests: Number(serviceStats?.total || 0),
      newServiceRequests: Number(serviceStats?.new || 0),
    };
  }
}

export const storage = new DatabaseStorage();
