import { ThemeToggle } from "./theme-toggle";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const NAV_ITEMS = [
  { path: "home", label: "Home" },
  { path: "experience", label: "Experience" },
  { path: "education", label: "Education" },
  // { path: "portfolio", label: "Portfolio" },
  { path: "blog", label: "Blog" },
  { path: "gallery", label: "Gallery" },
  { path: "contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 dark:bg-black/50">
      <div className="container flex h-16 items-center justify-between max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="w-32">
            <h1 className="text-xl sm:text-2xl md:text-3xl flex items-center font-autography mr-10 md:mr-3">Noah Jina</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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

        <div className="flex items-center gap-4">
          {/* Social Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:njina.hba2025@ivey.ca"
              className="text-foreground/60 hover:text-foreground/80 dark:text-white/60 dark:hover:text-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={20} />
            </a>
            <a
              href="https://www.instagram.com/noahj_09/"
              className="text-foreground/60 hover:text-foreground/80 dark:text-white/60 dark:hover:text-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/noahjina/"
              className="text-foreground/60 hover:text-foreground/80 dark:text-white/60 dark:hover:text-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          <ThemeToggle />
          
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 dark:bg-black/90 backdrop-blur-sm">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className="text-left py-2 transition-colors hover:text-foreground/80 text-foreground/60 dark:text-white/60 dark:hover:text-white/80"
              >
                {item.label}
              </button>
            ))}
            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <a
                href="mailto:njina.hba2025@ivey.ca"
                className="text-foreground/60 hover:text-foreground/80 dark:text-white/60 dark:hover:text-white/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail size={20} />
              </a>
              <a
                href="https://www.instagram.com/noahj_09/"
                className="text-foreground/60 hover:text-foreground/80 dark:text-white/60 dark:hover:text-white/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/noahjina/"
                className="text-foreground/60 hover:text-foreground/80 dark:text-white/60 dark:hover:text-white/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}