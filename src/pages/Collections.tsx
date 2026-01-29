import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SuitCard } from "@/components/ui/SuitCard";

// Import images
import mensBusiness from "@/assets/suit-mens-business.jpg";
import mensWedding from "@/assets/suit-mens-wedding.jpg";
import mensFormal from "@/assets/suit-mens-formal.jpg";
import womensBusiness from "@/assets/suit-womens-business.jpg";
import womensWedding from "@/assets/suit-womens-wedding.jpg";
import womensFormal from "@/assets/suit-womens-formal.jpg";
import heroImage from "@/assets/hero-suits.jpg";

const mensSuits = [
  {
    image: mensBusiness,
    name: "The Executive",
    description:
      "A refined charcoal business suit crafted for the modern professional. Premium Italian wool with exceptional drape and comfort.",
    category: "men" as const,
  },
  {
    image: mensWedding,
    name: "The Ceremony",
    description:
      "An elegant navy three-piece wedding suit designed for your most memorable day. Satin details and impeccable tailoring.",
    category: "men" as const,
  },
  {
    image: mensFormal,
    name: "The Black Tie",
    description:
      "A classic black tuxedo for formal occasions. Peak lapels with satin facing, crafted for moments that demand perfection.",
    category: "men" as const,
  },
];

const womensSuits = [
  {
    image: womensBusiness,
    name: "The Powerhouse",
    description:
      "A sophisticated tailored suit for the accomplished woman. Feminine silhouette meets commanding boardroom presence.",
    category: "women" as const,
  },
  {
    image: womensWedding,
    name: "The Bride's Choice",
    description:
      "An ivory wedding suit for the modern bride. Elegant alternative to the traditional gown, beautifully structured.",
    category: "women" as const,
  },
  {
    image: womensFormal,
    name: "The Evening",
    description:
      "A dramatic black evening ensemble for special occasions. Flowing lines and sophisticated detailing for red carpet moments.",
    category: "women" as const,
  },
];

export default function Collections() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our suit collections"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block">
              Our Collections
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight mb-6">
              Suits That Define
              <br />
              <span className="text-gold-gradient">Excellence</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Explore our curated collections for men and women, each piece a
              masterwork of bespoke tailoring.
            </p>
          </div>
        </div>
      </section>

      {/* Men's Collection */}
      <section id="mens" className="section-padding bg-background scroll-mt-24">
        <div className="container-custom">
          <SectionHeading
            subtitle="Men's Collection"
            title="Suits for Gentlemen"
            description="From the boardroom to the ballroom, our men's collection offers distinguished styling for every occasion."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {mensSuits.map((suit, index) => (
              <SuitCard key={index} {...suit} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom">
        <div className="h-px bg-border" />
      </div>

      {/* Women's Collection */}
      <section id="womens" className="section-padding bg-background scroll-mt-24">
        <div className="container-custom">
          <SectionHeading
            subtitle="Women's Collection"
            title="Suits for Ladies"
            description="Elegance redefined for the modern woman. Power, grace, and sophistication in perfect harmony."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {womensSuits.map((suit, index) => (
              <SuitCard key={index} {...suit} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Can't Find What You're Looking For?"
            title="Create Your Own Design"
            description="Our master tailors can bring your vision to life. Every detail customized to your preferences."
            light
          />
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild variant="hero" size="xl">
              <Link to="/custom">Design Your Suit</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
