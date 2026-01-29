import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/collections", label: "Collections" },
  { href: "/custom", label: "Custom Suits" },
  { href: "/owner", label: "Our Artisan" },
  { href: "/contact", label: "Contact" },
];

const collections = [
  { href: "/collections#mens", label: "Men's Suits" },
  { href: "/collections#womens", label: "Women's Suits" },
  { href: "/custom", label: "Custom Tailoring" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-semibold tracking-tight">
                Elegance
              </span>
              <span className="block text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mt-1">
                Bespoke Tailoring
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Crafting exceptional suits for distinguished gentlemen and elegant
              ladies since 1985. Where tradition meets modern sophistication.
            </p>
            <div className="h-px w-16 bg-accent" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-serif text-lg mb-6">Collections</h4>
            <ul className="space-y-3">
              {collections.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  42 Savile Row, Mayfair
                  <br />
                  London, W1S 3PR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+442071234567"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +44 (0) 20 7123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:enquiries@elegancetailoring.com"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  enquiries@elegancetailoring.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Mon – Sat: 9:00 AM – 7:00 PM
                  <br />
                  Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Elegance Bespoke Tailoring. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
