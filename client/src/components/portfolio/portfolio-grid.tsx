import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@shared/schema";
import { motion } from "framer-motion";

export function PortfolioGrid() {
  const { data: items, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items?.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {item.title}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
