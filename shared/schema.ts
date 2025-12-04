import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Comprehensive Transportation Quote Submissions (Limo, TNC, NEMT, Public Auto)
export const transportQuotes = pgTable("transport_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  quoteType: text("quote_type").notNull(),
  
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
  createdAt: true,
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
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

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
