import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { path: "home", label: "Home" },
  { path: "experience", label: "Experience" },
  { path: "portfolio", label: "Portfolio" },
  { path: "blog", label: "Blog" },
  { path: "gallery", label: "Gallery" },
];

export function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 dark:bg-black/50">
      <div className="container flex h-16 items-center justify-between max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="w-32">
            <span className="logo text-foreground dark:text-white">Noah Jina</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className="transition-colors hover:text-foreground/80 text-foreground/60 dark:text-white/60 dark:hover:text-white/80"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}