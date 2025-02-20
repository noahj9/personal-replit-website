import { Hero } from "@/components/home/hero";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { SubstackEmbed } from "@/components/blog/substack-embed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Experience } from "@shared/schema";
import { format } from "date-fns";

export default function Home() {
  const { data: experiences, isLoading: experiencesLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />

      <section id="experience" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiencesLoading ? (
              <div className="text-center">Loading...</div>
            ) : (
              experiences?.map((exp) => (
                <Card key={exp.id}>
                  <CardHeader>
                    <CardTitle>{exp.role}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {exp.company} ·{" "}
                      {format(new Date(exp.startDate), "MMM yyyy")} -{" "}
                      {exp.endDate
                        ? format(new Date(exp.endDate), "MMM yyyy")
                        : "Present"}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-line">{exp.description}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
          <PortfolioGrid />
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Blog</h2>
          <div className="max-w-3xl mx-auto">
            <SubstackEmbed />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Photo Gallery</h2>
          <PhotoGrid />
        </div>
      </section>
    </div>
  );
}