import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Limousine Quote Submissions
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
