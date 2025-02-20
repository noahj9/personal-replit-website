import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20"
          >
            <img
              src="https://placehold.co/400x400"
              alt="Noah Jina"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col items-center md:items-start space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Noah Jina
              </h1>
              <p className="mx-auto md:mx-0 max-w-[700px] text-lg text-muted-foreground mt-4">
                Software Engineer & Travel Enthusiast
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-4"
            >
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Read Blog
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}