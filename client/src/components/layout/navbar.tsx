import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/gallery", label: "Gallery" },
  { path: "/blog", label: "Blog" },
  { path: "/experience", label: "Experience" },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <a className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Noah Jina</span>
            </a>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`transition-colors hover:text-foreground/80 ${
                    location === item.path ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col space-y-4 mt-8">
              {NAV_ITEMS.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`text-lg ${
                      location === item.path ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
