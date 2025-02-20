import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import Home from "@/pages/home";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <Home />
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;