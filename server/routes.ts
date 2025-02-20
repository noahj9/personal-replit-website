import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  app.get("/api/portfolio", async (_req, res) => {
    const items = await storage.getPortfolioItems();
    res.json(items);
  });

  app.get("/api/photos", async (_req, res) => {
    const photos = await storage.getPhotos();
    res.json(photos);
  });

  app.get("/api/experiences", async (_req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  return httpServer;
}
