import type {
  PortfolioItem,
  Photo,
  Experience,
  InsertPortfolioItem,
  InsertPhoto,
  InsertExperience,
} from "@shared/schema";

export interface IStorage {
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPhotos(): Promise<Photo[]>;
  getExperiences(): Promise<Experience[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  createPhoto(photo: InsertPhoto): Promise<Photo>;
  createExperience(exp: InsertExperience): Promise<Experience>;
}

export class MemStorage implements IStorage {
  private portfolioItems: Map<number, PortfolioItem>;
  private photos: Map<number, Photo>;
  private experiences: Map<number, Experience>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.portfolioItems = new Map();
    this.photos = new Map();
    this.experiences = new Map();
    this.currentIds = { portfolio: 1, photos: 1, experiences: 1 };

    // Add some sample data
    this.initializeSampleData();
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values()).sort((a, b) => a.order - b.order);
  }

  async getPhotos(): Promise<Photo[]> {
    return Array.from(this.photos.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).sort((a, b) => a.order - b.order);
  }

  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = this.currentIds.portfolio++;
    const portfolioItem = { ...item, id };
    this.portfolioItems.set(id, portfolioItem);
    return portfolioItem;
  }

  async createPhoto(photo: InsertPhoto): Promise<Photo> {
    const id = this.currentIds.photos++;
    const newPhoto = { ...photo, id };
    this.photos.set(id, newPhoto);
    return newPhoto;
  }

  async createExperience(exp: InsertExperience): Promise<Experience> {
    const id = this.currentIds.experiences++;
    const experience = { ...exp, id };
    this.experiences.set(id, experience);
    return experience;
  }

  private initializeSampleData() {
    // Sample portfolio items
    this.createPortfolioItem({
      title: "Project Alpha",
      description: "A revolutionary web application",
      imageUrl: "https://placehold.co/600x400",
      link: "https://example.com",
      order: 1,
    });

    // Sample photos
    this.createPhoto({
      title: "Mountain Sunset",
      imageUrl: "https://placehold.co/800x800",
      description: "Beautiful sunset in the mountains",
      date: new Date("2024-01-15"),
    });

    // Sample experience
    this.createExperience({
      company: "Tech Corp",
      role: "Senior Developer",
      description: "Led development of multiple projects",
      startDate: new Date("2022-01-01"),
      endDate: null,
      order: 1,
    });
  }
}

export const storage = new MemStorage();
