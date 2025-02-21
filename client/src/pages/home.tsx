import { Hero } from "@/components/home/hero";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { SubstackEmbed } from "@/components/blog/substack-embed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import data from "../../../public/data.json";  // Import the data from the JSON file
import { format } from "date-fns";
import { getLogoSrc } from "@/components/layout/logoLoader";
import { Mail } from "lucide-react";
import resumePdf from '../../../public/resume.pdf';

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

      <section id="education" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Education</h2>
          <div className="max-w-3xl space-y-6">
            {data.education?.map((edu) => (
              <Card key={edu.id} className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-grow pr-4">
                      <CardTitle>{edu.degree}</CardTitle>
                      <div className="text-sm text-muted-foreground mt-3">
                        {edu.school} ·{" "}
                        {format(new Date(edu.startDate), "MMM yyyy")} -{" "}
                        {edu.endDate ? format(new Date(edu.endDate), "MMM yyyy") : "Present"}
                      </div>
                      <CardContent className="px-0 mt-5">
                        <p className="whitespace-pre-line">{edu.description}</p>
                        {edu.achievements && (
                          <ul className="list-disc list-inside mt-2">
                            {edu.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </div>
                    {edu.imageUrl && (
                      <img 
                        src={getLogoSrc(edu.imageUrl)}
                        alt={`${edu.school} logo`}
                        className="h-16"
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

      <section id="contact" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Get in Touch!</h2>
          <p className="mb-4">
            I'm always looking for new opportunities and collaborations. If you'd like to get in touch, feel free to send me an email!
          </p>
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:njina.hba2025@ivey.ca" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>njina.hba2025@ivey.ca</span>
            </a>
            
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-fit px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
            >
              View My Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
