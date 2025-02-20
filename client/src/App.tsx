import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Portfolio from "@/pages/portfolio";
import Gallery from "@/pages/gallery";
import Blog from "@/pages/blog";
import Experience from "@/pages/experience";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/blog" component={Blog} />
      <Route path="/experience" component={Experience} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <Router />
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
