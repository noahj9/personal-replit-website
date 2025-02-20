import { useQuery } from "@tanstack/react-query";
import type { Experience } from "@shared/schema";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container py-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences?.map((exp) => (
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
        ))}
      </div>
    </div>
  );
}
