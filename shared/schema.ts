import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const segments = sqliteTable("segments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  icon: text("icon").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  status: text("status").notNull().default("not_started"),
  progress: integer("progress").notNull().default(0),
  order: integer("order").notNull(),
});

export const modules = sqliteTable("modules", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  segmentId: integer("segment_id").notNull(),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  icon: text("icon").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull().default("not_started"),
  progress: integer("progress").notNull().default(0),
  order: integer("order").notNull(),
});

export const bestPractices = sqliteTable("best_practices", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  segmentId: integer("segment_id").notNull(),
  title: text("title").notNull(),
  source: text("source").notNull(),
  sourceUrl: text("source_url"),
  content: text("content").notNull(),
  category: text("category").notNull(),
  order: integer("order").notNull(),
});

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  moduleId: integer("module_id").notNull(),
  segmentId: integer("segment_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").notNull().default("pending"),
  priority: text("priority").notNull().default("medium"),
  owner: text("owner"),
  order: integer("order").notNull(),
});

export const creativeScores = sqliteTable("creative_scores", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  segmentId: text("segment_id").notNull().default("creative-playbook"),
  scores: text("scores").notNull(),
  totalScore: integer("total_score").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertCreativeScoreSchema = createInsertSchema(creativeScores).omit({ id: true });

export const insertSegmentSchema = createInsertSchema(segments).omit({ id: true });
export const insertModuleSchema = createInsertSchema(modules).omit({ id: true });
export const insertBestPracticeSchema = createInsertSchema(bestPractices).omit({ id: true });
export const insertTaskSchema = createInsertSchema(tasks).omit({ id: true });

export type Segment = typeof segments.$inferSelect;
export type InsertSegment = z.infer<typeof insertSegmentSchema>;
export type Module = typeof modules.$inferSelect;
export type InsertModule = z.infer<typeof insertModuleSchema>;
export type BestPractice = typeof bestPractices.$inferSelect;
export type InsertBestPractice = z.infer<typeof insertBestPracticeSchema>;
export type Task = typeof tasks.$inferSelect;
export type InsertTask = z.infer<typeof insertTaskSchema>;
export type CreativeScore = typeof creativeScores.$inferSelect;
export type InsertCreativeScore = z.infer<typeof insertCreativeScoreSchema>;
