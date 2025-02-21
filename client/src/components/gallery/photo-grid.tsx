import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { format } from "date-fns";
import data from "../../../../public/data.json"; // Import the data from the JSON file
import { getImgSrc } from "./photoLoader";

type Photo = {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  description?: string;
};

export function PhotoGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Directly use the photos from the imported JSON file
  const photos = data.photos;

  // Function to determine image span classes based on aspect ratio or size preference
  const getImageSpanClasses = (index: number) => {
    // Alternate between different sizes for visual interest
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
            className={`cursor-pointer overflow-hidden rounded-lg transition-transform duration-200 hover:scale-[1.02] ${getImageSpanClasses(index)}`}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={getImgSrc(photo.imageUrl)}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-xl">
          {selectedPhoto && (
            <div className="space-y-4">
              <img
                src={getImgSrc(selectedPhoto.imageUrl)}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-full rounded-lg object-cover object-center"
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
