import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle, Heart, Shield, Star } from "lucide-react";

import workshopImage from "@/assets/workshop.jpg";
import heroImage from "@/assets/hero-suits.jpg";

const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "Every stitch, every cut, every detail reflects our uncompromising pursuit of perfection.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our love for the craft drives us to create garments that transcend mere clothing.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We build lasting relationships through honesty, transparency, and genuine care.",
  },
];

const timeline = [
  {
    year: "1985",
    title: "The Beginning",
    description:
      "Master Tailor Edward Ashworth established our atelier on Savile Row with a vision of creating the finest bespoke suits.",
  },
  {
    year: "1995",
    title: "Royal Recognition",
    description:
      "Received our first commission from a member of the British aristocracy, establishing our reputation for excellence.",
  },
  {
    year: "2005",
    title: "Women's Collection",
    description:
      "Expanded our expertise to include bespoke tailoring for women, embracing a new era of elegant craftsmanship.",
  },
  {
    year: "2015",
    title: "International Acclaim",
    description:
      "Opened consultation services worldwide while maintaining all production in our London atelier.",
  },
  {
    year: "2024",
    title: "Continuing the Legacy",
    description:
      "The third generation of master tailors now leads our team, honoring tradition while embracing innovation.",
  },
];

const reasons = [
  "Hand-cut patterns created specifically for your body",
  "Over 3,000 premium fabrics from the world's finest mills",
  "Minimum 50 hours of handwork per garment",
  "Lifetime alterations and care program",
  "Private fitting rooms for your comfort",
  "Heritage techniques passed through generations",
];

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={workshopImage}
            alt="Our tailoring workshop"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight mb-6">
              A Legacy of
              <br />
              <span className="text-gold-gradient">Craftsmanship</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Four decades of dedication to the art of bespoke tailoring.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                subtitle="Heritage"
                title="Where It All Began"
                align="left"
              />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In 1985, master tailor Edward Ashworth opened the doors to what
                  would become one of London's most respected bespoke tailoring
                  houses. With nothing but his skills, a small workshop, and an
                  unwavering vision, he set out to create suits that would stand
                  the test of time.
                </p>
                <p>
                  His philosophy was simple: every client deserves to experience
                  the transformative power of a perfectly fitted suit. This belief
                  has guided every decision, every stitch, and every relationship
                  we've built over the past four decades.
                </p>
                <p>
                  Today, the Ashworth family continues to lead our team of master
                  craftsmen, preserving the techniques and values that have made
                  Elegance synonymous with excellence in bespoke tailoring.
                </p>
              </div>
            </div>
            <div className="img-zoom rounded-sm overflow-hidden">
              <img
                src={heroImage}
                alt="Our showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones of Excellence"
            description="Key moments that have shaped our story and strengthened our commitment to the craft."
          />
          <div className="mt-16 max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="font-serif text-lg text-accent-foreground font-medium">
                      {item.year.slice(2)}
                    </span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-px h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-accent text-sm font-medium">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-2xl mt-1 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide every aspect of our work."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-sm card-hover"
              >
                <value.icon className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                subtitle="The Difference"
                title="Why Choose Elegance"
                align="left"
                light
              />
              <ul className="space-y-4 mt-8">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{reason}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-10">
                <Link to="/contact">Experience the Difference</Link>
              </Button>
            </div>
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-sm p-10 text-center">
              <span className="text-6xl md:text-7xl font-serif text-accent">
                40+
              </span>
              <p className="text-primary-foreground text-xl mt-4">
                Years of Excellence
              </p>
              <div className="h-px bg-primary-foreground/20 my-8" />
              <span className="text-5xl md:text-6xl font-serif text-accent">
                5,000+
              </span>
              <p className="text-primary-foreground text-xl mt-4">
                Satisfied Clients
              </p>
              <div className="h-px bg-primary-foreground/20 my-8" />
              <span className="text-5xl md:text-6xl font-serif text-accent">
                100%
              </span>
              <p className="text-primary-foreground text-xl mt-4">
                Handcrafted in London
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Continue the Story With Us
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of our heritage. Schedule a consultation and experience
            the art of bespoke tailoring.
          </p>
          <Button asChild variant="elegant" size="xl">
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
