import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/collections", label: "Collections" },
  { href: "/custom", label: "Custom Suits" },
  { href: "/owner", label: "Our Artisan" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col items-start"
          >
            <span className={cn(
              "font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              Elegance
            </span>
            <span className={cn(
              "text-xs tracking-[0.3em] uppercase transition-colors duration-300",
              isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
            )}>
              Bespoke Tailoring
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "link-underline text-sm tracking-wide uppercase transition-colors duration-300",
                  location.pathname === link.href
                    ? "text-accent"
                    : isScrolled
                    ? "text-foreground hover:text-accent"
                    : "text-primary-foreground/90 hover:text-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant={isScrolled ? "gold" : "hero"}
              size="lg"
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-out",
            isOpen ? "max-h-[400px] opacity-100 mt-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-background rounded-sm shadow-lg p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "block text-sm tracking-wide uppercase py-2 transition-colors",
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="w-full mt-4">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
