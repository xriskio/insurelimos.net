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
  type AmbulanceQuote,
  type InsertAmbulanceQuote,
  type CaptiveQuote,
  type InsertCaptiveQuote,
  type AdminUser,
  type InsertAdminUser,
  type PageView,
  type InsertPageView,
  type VisitorSession,
  type InsertVisitorSession,
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
  ambulanceQuotes,
  captiveQuotes,
  adminUsers,
  pageViews,
  visitorSessions,
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
  
  // Ambulance Quotes
  createAmbulanceQuote(quote: InsertAmbulanceQuote): Promise<AmbulanceQuote>;
  getAllAmbulanceQuotes(): Promise<AmbulanceQuote[]>;
  
  // Captive Quotes
  createCaptiveQuote(quote: InsertCaptiveQuote): Promise<CaptiveQuote>;
  getAllCaptiveQuotes(): Promise<CaptiveQuote[]>;
  
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
  
  // Admin Users
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  getAllAdminUsers(): Promise<AdminUser[]>;
  getAdminUserByEmail(email: string): Promise<AdminUser | null>;
  getAdminUserById(id: string): Promise<AdminUser | null>;
  updateAdminUser(id: string, data: Partial<InsertAdminUser>): Promise<AdminUser | null>;
  deleteAdminUser(id: string): Promise<boolean>;
  updateAdminUserLastLogin(id: string): Promise<void>;
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

  // Ambulance Quotes
  async createAmbulanceQuote(quote: InsertAmbulanceQuote): Promise<AmbulanceQuote> {
    const [result] = await db.insert(ambulanceQuotes).values(quote).returning();
    return result;
  }

  async getAllAmbulanceQuotes(): Promise<AmbulanceQuote[]> {
    return db.select().from(ambulanceQuotes).orderBy(desc(ambulanceQuotes.createdAt));
  }

  // Captive Quotes
  async createCaptiveQuote(quote: InsertCaptiveQuote): Promise<CaptiveQuote> {
    const [result] = await db.insert(captiveQuotes).values(quote).returning();
    return result;
  }

  async getAllCaptiveQuotes(): Promise<CaptiveQuote[]> {
    return db.select().from(captiveQuotes).orderBy(desc(captiveQuotes.createdAt));
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

  // Admin Users
  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const [result] = await db.insert(adminUsers).values(user).returning();
    return result;
  }

  async getAllAdminUsers(): Promise<AdminUser[]> {
    return db.select().from(adminUsers).orderBy(desc(adminUsers.createdAt));
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | null> {
    const [result] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return result || null;
  }

  async getAdminUserById(id: string): Promise<AdminUser | null> {
    const [result] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return result || null;
  }

  async updateAdminUser(id: string, data: Partial<InsertAdminUser>): Promise<AdminUser | null> {
    const [result] = await db.update(adminUsers).set({
      ...data,
      updatedAt: new Date(),
    }).where(eq(adminUsers.id, id)).returning();
    return result || null;
  }

  async deleteAdminUser(id: string): Promise<boolean> {
    const result = await db.delete(adminUsers).where(eq(adminUsers.id, id));
    return true;
  }

  async updateAdminUserLastLogin(id: string): Promise<void> {
    await db.update(adminUsers).set({ lastLogin: new Date() }).where(eq(adminUsers.id, id));
  }

  // Page Views & Analytics
  async createPageView(view: InsertPageView): Promise<PageView> {
    const [result] = await db.insert(pageViews).values(view).returning();
    return result;
  }

  async getPageViews(limit = 100): Promise<PageView[]> {
    return db.select().from(pageViews).orderBy(desc(pageViews.createdAt)).limit(limit);
  }

  async getPageViewsByDateRange(startDate: Date, endDate: Date): Promise<PageView[]> {
    return db.select().from(pageViews)
      .where(sql`${pageViews.createdAt} >= ${startDate} AND ${pageViews.createdAt} <= ${endDate}`)
      .orderBy(desc(pageViews.createdAt));
  }

  async createOrUpdateVisitorSession(sessionData: InsertVisitorSession): Promise<VisitorSession> {
    const existing = await db.select().from(visitorSessions)
      .where(eq(visitorSessions.sessionId, sessionData.sessionId));
    
    if (existing.length > 0) {
      const currentPageCount = parseInt(existing[0].pageCount || "1");
      const [result] = await db.update(visitorSessions)
        .set({ 
          lastVisit: new Date(),
          pageCount: String(currentPageCount + 1)
        })
        .where(eq(visitorSessions.sessionId, sessionData.sessionId))
        .returning();
      return result;
    } else {
      const [result] = await db.insert(visitorSessions).values(sessionData).returning();
      return result;
    }
  }

  async getVisitorSessions(limit = 100): Promise<VisitorSession[]> {
    return db.select().from(visitorSessions).orderBy(desc(visitorSessions.lastVisit)).limit(limit);
  }

  async getVisitorSessionsByDateRange(startDate: Date, endDate: Date): Promise<VisitorSession[]> {
    return db.select().from(visitorSessions)
      .where(sql`${visitorSessions.firstVisit} >= ${startDate} AND ${visitorSessions.firstVisit} <= ${endDate}`)
      .orderBy(desc(visitorSessions.lastVisit));
  }

  async getAnalyticsStats(): Promise<{
    totalPageViews: number;
    uniqueVisitors: number;
    todayPageViews: number;
    todayVisitors: number;
    topPages: { pagePath: string; count: number }[];
    topReferrers: { referrer: string; count: number }[];
    topLocations: { country: string; count: number }[];
    deviceBreakdown: { deviceType: string; count: number }[];
  }> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [totalViews] = await db.select({ count: sql<number>`count(*)` }).from(pageViews);
    const [uniqueVisitors] = await db.select({ count: sql<number>`count(distinct ${pageViews.sessionId})` }).from(pageViews);
    const [todayViews] = await db.select({ count: sql<number>`count(*)` }).from(pageViews)
      .where(sql`${pageViews.createdAt} >= ${today}`);
    const [todayUnique] = await db.select({ count: sql<number>`count(distinct ${pageViews.sessionId})` }).from(pageViews)
      .where(sql`${pageViews.createdAt} >= ${today}`);

    const topPages = await db.select({
      pagePath: pageViews.pagePath,
      count: sql<number>`count(*)`
    }).from(pageViews).groupBy(pageViews.pagePath).orderBy(sql`count(*) desc`).limit(10);

    const topReferrers = await db.select({
      referrer: pageViews.referrer,
      count: sql<number>`count(*)`
    }).from(pageViews).where(sql`${pageViews.referrer} is not null AND ${pageViews.referrer} != ''`)
      .groupBy(pageViews.referrer).orderBy(sql`count(*) desc`).limit(10);

    const topLocations = await db.select({
      country: pageViews.country,
      count: sql<number>`count(*)`
    }).from(pageViews).where(sql`${pageViews.country} is not null`)
      .groupBy(pageViews.country).orderBy(sql`count(*) desc`).limit(10);

    const deviceBreakdown = await db.select({
      deviceType: pageViews.deviceType,
      count: sql<number>`count(*)`
    }).from(pageViews).where(sql`${pageViews.deviceType} is not null`)
      .groupBy(pageViews.deviceType).orderBy(sql`count(*) desc`);

    return {
      totalPageViews: Number(totalViews?.count || 0),
      uniqueVisitors: Number(uniqueVisitors?.count || 0),
      todayPageViews: Number(todayViews?.count || 0),
      todayVisitors: Number(todayUnique?.count || 0),
      topPages: topPages.map(p => ({ pagePath: p.pagePath, count: Number(p.count) })),
      topReferrers: topReferrers.map(r => ({ referrer: r.referrer || '', count: Number(r.count) })),
      topLocations: topLocations.map(l => ({ country: l.country || 'Unknown', count: Number(l.count) })),
      deviceBreakdown: deviceBreakdown.map(d => ({ deviceType: d.deviceType || 'Unknown', count: Number(d.count) })),
    };
  }
}

export const storage = new DatabaseStorage();
