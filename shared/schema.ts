import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Comprehensive Transportation Quote Submissions (Limo, TNC, NEMT, Public Auto)
export const transportQuotes = pgTable("transport_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  referenceNumber: text("reference_number").notNull(),
  quoteType: text("quote_type").notNull(),
  status: text("status").default("new").notNull(),
  notes: text("notes"),
  
  // Insured Information
  insuredName: text("insured_name").notNull(),
  dba: text("dba"),
  contactName: text("contact_name").notNull(),
  contactEmail: text("contact_email").notNull(),
  contactPhone: text("contact_phone").notNull(),
  businessWebsite: text("business_website"),
  yearsInBusiness: text("years_in_business"),
  businessType: text("business_type"),
  mailingAddress: text("mailing_address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  cpucNumber: text("cpuc_number"),
  tcpNumber: text("tcp_number"),
  
  // Coverage Information
  effectiveDate: text("effective_date"),
  liabilityLimit: text("liability_limit"),
  currentCarrier: text("current_carrier"),
  currentPremium: text("current_premium"),
  expirationDate: text("expiration_date"),
  operatingRadius: text("operating_radius"),
  statesOfOperation: text("states_of_operation"),
  filingsNeeded: text("filings_needed").array(),
  
  // Vehicle Information (JSON array)
  vehicles: text("vehicles"),
  
  // Driver Information (JSON array)
  drivers: text("drivers"),
  
  // Loss History
  lossHistory: text("loss_history"),
  
  // Uploaded Documents
  uploadedDocuments: text("uploaded_documents").array(),
  
  // Additional Info
  additionalInfo: text("additional_info"),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertTransportQuoteSchema = createInsertSchema(transportQuotes).omit({
  id: true,
  referenceNumber: true,
  createdAt: true,
  status: true,
  notes: true,
});

export type InsertTransportQuote = z.infer<typeof insertTransportQuoteSchema>;
export type TransportQuote = typeof transportQuotes.$inferSelect;

// Keep legacy table for backwards compatibility
export const limoQuotes = pgTable("limo_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  zipCode: text("zip_code").notNull(),
  yearsInBusiness: text("years_in_business"),
  radiusOfOperation: text("radius_of_operation"),
  vehicleCount: text("vehicle_count").notNull(),
  vehicleType: text("vehicle_type").notNull(),
  liabilityLimit: text("liability_limit"),
  hasCurrentInsurance: boolean("has_current_insurance").default(false),
  currentCarrier: text("current_carrier"),
  additionalDetails: text("additional_details"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertLimoQuoteSchema = createInsertSchema(limoQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertLimoQuote = z.infer<typeof insertLimoQuoteSchema>;
export type LimoQuote = typeof limoQuotes.$inferSelect;

// TNC Quote Submissions
export const tncQuotes = pgTable("tnc_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  zipCode: text("zip_code").notNull(),
  primaryPlatform: text("primary_platform").notNull(),
  yearsDriving: text("years_driving"),
  vehicleYear: text("vehicle_year").notNull(),
  vehicleMake: text("vehicle_make").notNull(),
  vehicleModel: text("vehicle_model").notNull(),
  coverageType: text("coverage_type"),
  comments: text("comments"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertTNCQuoteSchema = createInsertSchema(tncQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertTNCQuote = z.infer<typeof insertTNCQuoteSchema>;
export type TNCQuote = typeof tncQuotes.$inferSelect;

// NEMT Quote Submissions
export const nemtQuotes = pgTable("nemt_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  wheelchairAccessible: boolean("wheelchair_accessible").default(false),
  stretcherAccessible: boolean("stretcher_accessible").default(false),
  numberOfVehicles: text("number_of_vehicles").notNull(),
  operationType: text("operation_type").notNull(),
  contractType: text("contract_type").notNull(),
  radius: text("radius"),
  notes: text("notes"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertNEMTQuoteSchema = createInsertSchema(nemtQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertNEMTQuote = z.infer<typeof insertNEMTQuoteSchema>;
export type NEMTQuote = typeof nemtQuotes.$inferSelect;

// Public Auto Quote Submissions
export const publicAutoQuotes = pgTable("public_auto_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactPerson: text("contact_person").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  businessType: text("business_type").notNull(),
  fleetSize: text("fleet_size").notNull(),
  filingNeeded: text("filing_needed").notNull(),
  dotNumber: text("dot_number"),
  mcNumber: text("mc_number"),
  coverageNeeds: text("coverage_needs"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPublicAutoQuoteSchema = createInsertSchema(publicAutoQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertPublicAutoQuote = z.infer<typeof insertPublicAutoQuoteSchema>;
export type PublicAutoQuote = typeof publicAutoQuotes.$inferSelect;

// Contact Form Submissions
export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  subject: text("subject").default("General Inquiry").notNull(),
  message: text("message").notNull(),
  status: text("status").default("new").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
  status: true,
  notes: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Service Requests
export const serviceRequests = pgTable("service_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  requestType: text("request_type").notNull(),
  policyNumber: text("policy_number").notNull(),
  insuredName: text("insured_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  effectiveDate: text("effective_date"),
  details: text("details").notNull(),
  additionalInfo: text("additional_info"),
  status: text("status").default("new").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertServiceRequestSchema = createInsertSchema(serviceRequests).omit({
  id: true,
  createdAt: true,
  status: true,
  notes: true,
});

export type InsertServiceRequest = z.infer<typeof insertServiceRequestSchema>;
export type ServiceRequest = typeof serviceRequests.$inferSelect;

// Blog Posts
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  author: text("author").default("InsureLimos Team").notNull(),
  imageUrl: text("image_url"),
  readTime: text("read_time"),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

// News Releases
export const newsReleases = pgTable("news_releases", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  author: text("author").default("InsureLimos").notNull(),
  imageUrl: text("image_url"),
  published: boolean("published").default(false).notNull(),
  publishDate: timestamp("publish_date").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertNewsReleaseSchema = createInsertSchema(newsReleases).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertNewsRelease = z.infer<typeof insertNewsReleaseSchema>;
export type NewsRelease = typeof newsReleases.$inferSelect;

// Workers Compensation Quote Submissions
export const workersCompQuotes = pgTable("workers_comp_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  numberOfEmployees: text("number_of_employees").notNull(),
  annualPayroll: text("annual_payroll").notNull(),
  businessType: text("business_type").notNull(),
  hasCurrentCoverage: boolean("has_current_coverage").default(false),
  currentCarrier: text("current_carrier"),
  experienceModifier: text("experience_modifier"),
  notes: text("notes"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWorkersCompQuoteSchema = createInsertSchema(workersCompQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertWorkersCompQuote = z.infer<typeof insertWorkersCompQuoteSchema>;
export type WorkersCompQuote = typeof workersCompQuotes.$inferSelect;

// Excess Liability Quote Submissions
export const excessLiabilityQuotes = pgTable("excess_liability_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  currentLiabilityLimit: text("current_liability_limit").notNull(),
  desiredExcessLimit: text("desired_excess_limit").notNull(),
  businessType: text("business_type").notNull(),
  fleetSize: text("fleet_size"),
  underlyingCarrier: text("underlying_carrier"),
  notes: text("notes"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertExcessLiabilityQuoteSchema = createInsertSchema(excessLiabilityQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertExcessLiabilityQuote = z.infer<typeof insertExcessLiabilityQuoteSchema>;
export type ExcessLiabilityQuote = typeof excessLiabilityQuotes.$inferSelect;

// Cyber Liability Quote Submissions
export const cyberLiabilityQuotes = pgTable("cyber_liability_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  annualRevenue: text("annual_revenue").notNull(),
  numberOfRecords: text("number_of_records").notNull(),
  hasCurrentCoverage: boolean("has_current_coverage").default(false),
  acceptsCreditCards: boolean("accepts_credit_cards").default(false),
  storesCustomerData: boolean("stores_customer_data").default(false),
  desiredLimit: text("desired_limit"),
  notes: text("notes"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCyberLiabilityQuoteSchema = createInsertSchema(cyberLiabilityQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertCyberLiabilityQuote = z.infer<typeof insertCyberLiabilityQuoteSchema>;
export type CyberLiabilityQuote = typeof cyberLiabilityQuotes.$inferSelect;

// Ambulance Quote Submissions
export const ambulanceQuotes = pgTable("ambulance_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  serviceType: text("service_type").notNull(),
  numberOfAmbulances: text("number_of_ambulances").notNull(),
  serviceArea: text("service_area"),
  annualCalls: text("annual_calls"),
  effectiveDate: text("effective_date"),
  liabilityLimit: text("liability_limit"),
  currentCarrier: text("current_carrier"),
  currentPremium: text("current_premium"),
  expirationDate: text("expiration_date"),
  operatingRadius: text("operating_radius"),
  statesOfOperation: text("states_of_operation"),
  filingsNeeded: text("filings_needed").array(),
  hasAutoLiability: boolean("has_auto_liability").default(false),
  hasPhysicalDamage: boolean("has_physical_damage").default(false),
  hasWorkersComp: boolean("has_workers_comp").default(false),
  hasInlandMarine: boolean("has_inland_marine").default(false),
  hasGeneralLiability: boolean("has_general_liability").default(false),
  hasProfessionalLiability: boolean("has_professional_liability").default(false),
  hasProperty: boolean("has_property").default(false),
  hasUmbrella: boolean("has_umbrella").default(false),
  hasEbl: boolean("has_ebl").default(false),
  vehicles: text("vehicles"),
  drivers: text("drivers"),
  lossHistory: text("loss_history"),
  notes: text("notes"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertAmbulanceQuoteSchema = createInsertSchema(ambulanceQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertAmbulanceQuote = z.infer<typeof insertAmbulanceQuoteSchema>;
export type AmbulanceQuote = typeof ambulanceQuotes.$inferSelect;

// Captive Program Quote Submissions
export const captiveQuotes = pgTable("captive_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  businessType: text("business_type").notNull(),
  fleetSize: text("fleet_size").notNull(),
  annualPremium: text("annual_premium").notNull(),
  yearsInBusiness: text("years_in_business"),
  captiveType: text("captive_type").notNull(),
  currentCarrier: text("current_carrier"),
  lossRatio: text("loss_ratio"),
  safetyProgram: text("safety_program"),
  riskManagement: text("risk_management"),
  notes: text("notes"),
  uploadedDocuments: text("uploaded_documents").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCaptiveQuoteSchema = createInsertSchema(captiveQuotes).omit({
  id: true,
  createdAt: true,
});

export type InsertCaptiveQuote = z.infer<typeof insertCaptiveQuoteSchema>;
export type CaptiveQuote = typeof captiveQuotes.$inferSelect;

// Site Content Management
export const siteContent = pgTable("site_content", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  section: text("section").notNull().unique(),
  title: text("title"),
  subtitle: text("subtitle"),
  content: text("content"),
  buttonText: text("button_text"),
  buttonLink: text("button_link"),
  imageUrl: text("image_url"),
  metadata: jsonb("metadata"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertSiteContentSchema = createInsertSchema(siteContent).omit({
  id: true,
  updatedAt: true,
});

export type InsertSiteContent = z.infer<typeof insertSiteContentSchema>;
export type SiteContent = typeof siteContent.$inferSelect;

// Admin Users for portal access
export const adminUsers = pgTable("admin_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  role: text("role").default("agent").notNull(),
  active: boolean("active").default(true).notNull(),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  lastLogin: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;

// Page Views / Visitor Tracking
export const pageViews = pgTable("page_views", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  ipAddress: text("ip_address"),
  city: text("city"),
  region: text("region"),
  country: text("country"),
  pagePath: text("page_path").notNull(),
  pageTitle: text("page_title"),
  referrer: text("referrer"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  userAgent: text("user_agent"),
  deviceType: text("device_type"),
  browser: text("browser"),
  os: text("os"),
  screenWidth: text("screen_width"),
  screenHeight: text("screen_height"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPageViewSchema = createInsertSchema(pageViews).omit({
  id: true,
  createdAt: true,
});

export type InsertPageView = z.infer<typeof insertPageViewSchema>;
export type PageView = typeof pageViews.$inferSelect;

// Visitor Sessions (for unique visitor tracking)
export const visitorSessions = pgTable("visitor_sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull().unique(),
  ipAddress: text("ip_address"),
  city: text("city"),
  region: text("region"),
  country: text("country"),
  userAgent: text("user_agent"),
  deviceType: text("device_type"),
  browser: text("browser"),
  os: text("os"),
  referrer: text("referrer"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  landingPage: text("landing_page"),
  pageCount: text("page_count").default("1"),
  firstVisit: timestamp("first_visit").defaultNow().notNull(),
  lastVisit: timestamp("last_visit").defaultNow().notNull(),
});

export const insertVisitorSessionSchema = createInsertSchema(visitorSessions).omit({
  id: true,
  firstVisit: true,
  lastVisit: true,
});

export type InsertVisitorSession = z.infer<typeof insertVisitorSessionSchema>;
export type VisitorSession = typeof visitorSessions.$inferSelect;
