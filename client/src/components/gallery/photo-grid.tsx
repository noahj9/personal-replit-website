import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Photo } from "@shared/schema";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { format } from "date-fns";

export function PhotoGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const { data: photos, isLoading } = useQuery<Photo[]>({
    queryKey: ["/api/photos"],
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  // Function to determine image span classes based on aspect ratio or size preference
  const getImageSpanClasses = (index: number) => {
    // Alternate between different sizes for visual interest
    // You can modify this logic based on actual image dimensions
    const patterns = [
      "col-span-1 row-span-1", // Standard
      "col-span-2 row-span-1", // Wide
      "col-span-1 row-span-2", // Tall
      "col-span-2 row-span-2", // Large
    ];
    return patterns[index % patterns.length];
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {photos?.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`cursor-pointer overflow-hidden rounded-lg ${getImageSpanClasses(index)}`}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          {selectedPhoto && (
            <div className="space-y-4">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{selectedPhoto.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(selectedPhoto.date), "MMMM d, yyyy")}
                </p>
                {selectedPhoto.description && (
                  <p className="mt-2">{selectedPhoto.description}</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}