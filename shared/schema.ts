import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  link: text("link"),
  order: integer("order").notNull(),
});

export const photos = pgTable("photos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description"),
  date: timestamp("date").notNull(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  description: text("description").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  order: integer("order").notNull(),
});

export const insertPortfolioItemSchema = createInsertSchema(portfolioItems).pick({
  title: true,
  description: true,
  imageUrl: true,
  link: true,
  order: true,
});

export const insertPhotoSchema = createInsertSchema(photos).pick({
  title: true,
  imageUrl: true,
  description: true,
  date: true,
});

export const insertExperienceSchema = createInsertSchema(experiences).pick({
  company: true,
  role: true,
  description: true,
  startDate: true,
  endDate: true,
  order: true,
});

export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;

export type Photo = typeof photos.$inferSelect;
export type InsertPhoto = z.infer<typeof insertPhotoSchema>;

export type Experience = typeof experiences.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
