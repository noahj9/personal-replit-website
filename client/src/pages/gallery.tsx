import { PhotoGrid } from "@/components/gallery/photo-grid";

export default function Gallery() {
  return (
    <div className="container py-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>
      <PhotoGrid />
    </div>
  );
}
