import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export default function Portfolio() {
  return (
    <div className="container py-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <PortfolioGrid />
    </div>
  );
}
