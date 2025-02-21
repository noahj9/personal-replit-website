import { Hero } from "@/components/home/hero";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { SubstackEmbed } from "@/components/blog/substack-embed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import data from "../../../public/data.json";  // Import the data from the JSON file
import { format } from "date-fns";
import { getLogoSrc } from "@/components/layout/logoLoader";

export default function Home() {
  // Directly access experiences from the data.json file
  const experiences = data.experiences;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />

      <section id="experience" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
          <div className="max-w-3xl space-y-6">
            {/* Directly render experiences */}
            {experiences?.map((exp) => (
              <Card key={exp.id} className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-grow pr-4">
                      <CardTitle>{exp.role}</CardTitle>
                      <div className="text-sm text-muted-foreground mt-3">
                        {exp.company} ·{" "}
                        {format(new Date(exp.startDate), "MMM yyyy")} -{" "}
                        {exp.endDate ? format(new Date(exp.endDate), "MMM yyyy") : "Present"}
                      </div>
                      <CardContent className="px-0 mt-5">
                        <p className="whitespace-pre-line">{exp.description}</p>
                      </CardContent>
                    </div>
                    {exp.imageUrl && (
                      <img 
                        src={getLogoSrc(exp.imageUrl)}
                        alt={`${exp.company} logo`}
                        className="w-16 flex-shrink-0"
                      />
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="portfolio" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
          <PortfolioGrid />
        </div>
      </section> */}

      <section id="blog" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Blog</h2>
          <div className="max-w-3xl">
            <SubstackEmbed />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Photo Gallery</h2>
          <PhotoGrid />
        </div>
      </section>
    </div>
  );
}
