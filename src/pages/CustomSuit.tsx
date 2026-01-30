import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Ruler, Palette, Scissors, Sparkles } from "lucide-react";

import fabricsImage from "@/assets/fabrics.jpg";
import workshopImage from "@/assets/workshop.jpg";

const processSteps = [
  {
    icon: Palette,
    step: "01",
    title: "Fabric Selection",
    description:
      "Choose from over 3,000 premium fabrics including Italian super 150s wool, English worsted, silk blends, and luxurious cashmere. Our fabric consultants guide you through textures, weights, and patterns.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "Precise Measurements",
    description:
      "Our master tailors take over 30 individual measurements, analyzing your posture, movement, and preferences to create a pattern unique to your body.",
  },
  {
    icon: Scissors,
    step: "03",
    title: "Style & Design",
    description:
      "Select your preferred lapel style, button configuration, pocket details, lining, and every finishing touch. Create a suit that reflects your personal style.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Master Craftsmanship",
    description:
      "Your suit is handcrafted over 6-8 weeks with multiple fittings to ensure perfection. Minimum 50 hours of skilled handwork goes into every garment.",
  },
];

const fabricTypes = [
  {
    name: "Super 150s Wool",
    origin: "Italy",
    description: "Ultra-fine merino wool with exceptional drape and a subtle sheen. Perfect for business and formal wear.",
  },
  {
    name: "English Worsted",
    origin: "England",
    description: "Traditional British cloth with excellent durability and structure. Ideal for year-round suits.",
  },
  {
    name: "Silk Blend",
    origin: "Italy",
    description: "Luxurious silk-wool blend with a sophisticated luster. Perfect for evening and special occasions.",
  },
  {
    name: "Cashmere",
    origin: "Scotland",
    description: "The finest cashmere for ultimate luxury and comfort. Exceptionally soft with natural temperature regulation.",
  },
];

const fitStyles = [
  {
    name: "Classic Fit",
    description: "Traditional silhouette with generous room through the chest and body. Timeless elegance for those who appreciate traditional tailoring.",
  },
  {
    name: "Slim Fit",
    description: "Contemporary cut with a narrower chest and higher armholes. Sharp, modern lines for a refined appearance.",
  },
  {
    name: "Tailored Fit",
    description: "The perfect balance between classic and slim. Flattering for most body types with subtle tapering.",
  },
];

export default function CustomSuit() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={workshopImage}
            alt="Custom suit tailoring"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block">
              Bespoke Experience
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight mb-6">
              Your Vision,
              <br />
              <span className="text-gold-gradient">Our Craft</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Experience the art of true bespoke tailoring. Every stitch made for you.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="The Journey"
            title="Our Bespoke Process"
            description="From your first consultation to the final fitting, every step is designed to create your perfect suit."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-card p-8 md:p-10 rounded-sm card-hover relative overflow-hidden"
              >
                <span className="absolute top-6 right-6 text-6xl font-serif text-accent/20">
                  {step.step}
                </span>
                <step.icon className="h-10 w-10 text-accent mb-6" />
                <h3 className="font-serif text-2xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="img-zoom rounded-sm overflow-hidden">
              <img
                src={fabricsImage}
                alt="Premium suit fabrics"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                subtitle="Premium Materials"
                title="Exceptional Fabrics"
                align="left"
              />
              <div className="space-y-6 mt-8">
                {fabricTypes.map((fabric, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-xl">{fabric.name}</h4>
                      <span className="text-accent text-sm">{fabric.origin}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {fabric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Styles */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Perfect Fit"
            title="Choose Your Style"
            description="Select the silhouette that best complements your frame and personal style."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {fitStyles.map((style, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-sm text-center card-hover"
              >
                <h3 className="font-serif text-2xl mb-4">{style.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subtitle="Timeline"
              title="What to Expect"
              light
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-primary-foreground">
              <div>
                <span className="text-4xl font-serif text-accent">1-2</span>
                <p className="text-xl mt-2">Hours</p>
                <p className="text-primary-foreground/70 text-sm mt-2">
                  Initial consultation and measurements
                </p>
              </div>
              <div>
                <span className="text-4xl font-serif text-accent">6-8</span>
                <p className="text-xl mt-2">Weeks</p>
                <p className="text-primary-foreground/70 text-sm mt-2">
                  Crafting your bespoke suit
                </p>
              </div>
              <div>
                <span className="text-4xl font-serif text-accent">2-3</span>
                <p className="text-xl mt-2">Fittings</p>
                <p className="text-primary-foreground/70 text-sm mt-2">
                  Ensuring the perfect fit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our master tailors and begin your
            bespoke journey today.
          </p>
          <Button asChild variant="elegant" size="xl">
            <Link to="/contact">Request Custom Suit</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
