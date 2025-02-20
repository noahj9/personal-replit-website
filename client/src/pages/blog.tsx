import { SubstackEmbed } from "@/components/blog/substack-embed";

export default function Blog() {
  return (
    <div className="container py-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="max-w-3xl mx-auto">
        <SubstackEmbed />
      </div>
    </div>
  );
}
