import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SuitCard } from "@/components/ui/SuitCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Award, Scissors, Sparkles, Users } from "lucide-react";

// Import images
import heroImage from "@/assets/hero-suits.jpg";
import mensBusiness from "@/assets/suit-mens-business.jpg";
import mensWedding from "@/assets/suit-mens-wedding.jpg";
import womensBusiness from "@/assets/suit-womens-business.jpg";

const highlights = [
  {
    icon: Award,
    title: "40+ Years",
    description: "Of Master Craftsmanship",
  },
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description: "Perfect Fit Guaranteed",
  },
  {
    icon: Sparkles,
    title: "Premium Fabrics",
    description: "Italian & British Wools",
  },
  {
    icon: Users,
    title: "5,000+ Clients",
    description: "Trusted by Professionals",
  },
];

const featuredSuits = [
  {
    image: mensBusiness,
    name: "The Executive",
    description: "A refined charcoal business suit crafted for the modern professional. Premium wool blend with exceptional drape.",
    category: "men" as const,
  },
  {
    image: mensWedding,
    name: "The Ceremony",
    description: "An elegant navy wedding suit designed for your most memorable day. Three-piece perfection with satin details.",
    category: "men" as const,
  },
  {
    image: womensBusiness,
    name: "The Powerhouse",
    description: "A sophisticated tailored suit for the accomplished woman. Feminine silhouette meets commanding presence.",
    category: "women" as const,
  },
];

const testimonials = [
  {
    quote: "The attention to detail is extraordinary. Every stitch speaks of generations of expertise. I've never felt more confident in a suit.",
    author: "James Richardson",
    title: "CEO, Sterling Investments",
  },
  {
    quote: "From my wedding suit to my entire business wardrobe, Elegance has transformed how I present myself to the world.",
    author: "Victoria Chen",
    title: "Partner, Morgan & Associates",
  },
  {
    quote: "True artistry. The master tailors understood exactly what I needed before I could articulate it myself.",
    author: "Marcus Williams",
    title: "Ambassador, UK Foreign Office",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury tailor shop interior"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-2xl">
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block animate-fade-in">
              Established 1985
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-medium leading-tight mb-6 animate-fade-in-delay">
              Tailored to
              <br />
              <span className="text-gold-gradient">Perfection</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-lg animate-fade-in-delay-2">
              Premium custom suits for distinguished gentlemen and elegant ladies.
              Where heritage craftsmanship meets contemporary sophistication.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/collections">View Collection</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/custom">Customize Your Suit</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                subtitle="Our Legacy"
                title="A Heritage of Excellence"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                For over four decades, Elegance Bespoke Tailoring has been the
                sanctuary for those who appreciate the art of fine dressing. Our
                master tailors bring together centuries of British tailoring
                tradition with contemporary design sensibilities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each suit that leaves our atelier is a testament to patience,
                precision, and an unwavering commitment to excellence. We don't
                just make suits—we craft confidence.
              </p>
              <Button asChild variant="elegant" size="lg">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-6 md:p-8 text-center rounded-sm card-hover"
                >
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suits Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Featured Collection"
            title="Signature Creations"
            description="Discover our most sought-after designs, each representing the pinnacle of bespoke tailoring."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {featuredSuits.map((suit, index) => (
              <SuitCard key={index} {...suit} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="elegant" size="lg">
              <Link to="/collections">View Full Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Tailoring CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subtitle="Bespoke Experience"
              title="Your Vision, Our Craft"
              description="Experience the ultimate in personalization. From selecting the finest fabrics to perfecting every measurement, we create a suit that is uniquely yours."
              light
            />
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button asChild variant="hero" size="xl">
                <Link to="/custom">Start Your Journey</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Stories"
            title="Words of Appreciation"
            description="The trust of our distinguished clientele is our greatest reward."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a private consultation with our master tailors and begin
            your journey to sartorial perfection.
          </p>
          <Button asChild variant="elegant" size="xl">
            <Link to="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
