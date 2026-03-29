import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage, db } from "./storage";
import { segments, modules, bestPractices } from "@shared/schema";
import { SEGMENTS } from "./seed-data";
import { sql } from "drizzle-orm";

function seedDatabase() {
  // Check if already seeded
  const existing = db.select().from(segments).all();
  if (existing.length > 0) return;

  for (const seg of SEGMENTS) {
    const inserted = storage.insertSegment({
      name: seg.name,
      slug: seg.slug,
      icon: seg.icon,
      description: seg.description,
      category: seg.category,
      status: seg.status as any,
      progress: seg.progress,
      order: seg.order,
    });

    for (const mod of seg.modules) {
      storage.insertModule({
        segmentId: inserted.id,
        name: mod.name,
        slug: mod.slug,
        icon: mod.icon,
        description: mod.description,
        status: "not_started",
        progress: 0,
        order: mod.order,
      });
    }

    if (seg.bestPractices) {
      seg.bestPractices.forEach((bp, i) => {
        storage.insertBestPractice({
          segmentId: inserted.id,
          title: bp.title,
          source: bp.source,
          sourceUrl: bp.sourceUrl || null,
          content: bp.content,
          category: bp.category,
          order: i + 1,
        });
      });
    }
  }
}

function recalculateProgress(segmentId: number) {
  const mods = storage.getModulesBySegment(segmentId);
  const avgProgress = mods.length > 0
    ? Math.round(mods.reduce((acc, m) => acc + m.progress, 0) / mods.length)
    : 0;
  storage.updateSegment(segmentId, { progress: avgProgress });
}

function recalculateModuleProgress(moduleId: number) {
  const moduleTasks = storage.getTasksByModule(moduleId);
  if (moduleTasks.length === 0) {
    const mod = storage.updateModule(moduleId, { progress: 0, status: "not_started" });
    if (mod) recalculateProgress(mod.segmentId);
    return;
  }
  const completed = moduleTasks.filter(t => t.status === "completed").length;
  const progress = Math.round((completed / moduleTasks.length) * 100);
  const status = progress === 100 ? "active" : progress > 0 ? "in_progress" : "not_started";
  const mod = storage.updateModule(moduleId, { progress, status });
  if (mod) {
    recalculateProgress(mod.segmentId);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed on startup
  seedDatabase();

  // GET all segments with module count
  app.get("/api/segments", (_req, res) => {
    const segs = storage.getSegments();
    const result = segs.map(seg => {
      const mods = storage.getModulesBySegment(seg.id);
      return { ...seg, moduleCount: mods.length };
    });
    res.json(result);
  });

  // GET single segment with modules, best practices, tasks
  app.get("/api/segments/:slug", (req, res) => {
    const seg = storage.getSegmentBySlug(req.params.slug);
    if (!seg) return res.status(404).json({ error: "Segment not found" });

    const mods = storage.getModulesBySegment(seg.id);
    const bps = storage.getBestPracticesBySegment(seg.id);
    const segTasks = storage.getTasksBySegment(seg.id);

    const modulesWithTasks = mods.map(mod => ({
      ...mod,
      tasks: segTasks.filter(t => t.moduleId === mod.id),
    }));

    res.json({ ...seg, modules: modulesWithTasks, bestPractices: bps });
  });

  // PATCH segment
  app.patch("/api/segments/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updated = storage.updateSegment(id, req.body);
    if (!updated) return res.status(404).json({ error: "Segment not found" });
    res.json(updated);
  });

  // PATCH module
  app.patch("/api/modules/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updated = storage.updateModule(id, req.body);
    if (!updated) return res.status(404).json({ error: "Module not found" });
    recalculateProgress(updated.segmentId);
    res.json(updated);
  });

  // GET stats
  app.get("/api/stats", (_req, res) => {
    res.json(storage.getStats());
  });

  // POST task
  app.post("/api/tasks", (req, res) => {
    const task = storage.createTask(req.body);
    recalculateModuleProgress(task.moduleId);
    res.status(201).json(task);
  });

  // PATCH task
  app.patch("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updated = storage.updateTask(id, req.body);
    if (!updated) return res.status(404).json({ error: "Task not found" });
    recalculateModuleProgress(updated.moduleId);
    res.json(updated);
  });

  // POST creative score
  app.post("/api/creative-scores", (req, res) => {
    const { scores, totalScore, segmentId } = req.body;
    const saved = storage.saveCreativeScore({
      segmentId: segmentId || "creative-playbook",
      scores: typeof scores === "string" ? scores : JSON.stringify(scores),
      totalScore,
      createdAt: new Date().toISOString(),
    });
    res.status(201).json(saved);
  });

  // GET latest creative score
  app.get("/api/creative-scores/latest", (_req, res) => {
    const latest = storage.getLatestCreativeScore();
    if (!latest) return res.json(null);
    res.json(latest);
  });

  // DELETE task
  app.delete("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = storage.deleteTask(id);
    if (!deleted) return res.status(404).json({ error: "Task not found" });
    recalculateModuleProgress(deleted.moduleId);
    res.json({ success: true });
  });

  return httpServer;
}
