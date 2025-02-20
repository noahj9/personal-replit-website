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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos?.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
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
