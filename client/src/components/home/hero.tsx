import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Noah Jina
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground mt-4">
              Software Engineer & Travel Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-4"
          >
            <Link href="/portfolio">
              <Button size="lg" className="rounded-full">
                View Portfolio
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg" className="rounded-full">
                Read Blog
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
