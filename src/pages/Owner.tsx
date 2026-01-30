import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

import ownerImage from "@/assets/owner-portrait.jpg";
import workshopImage from "@/assets/workshop.jpg";

export default function Owner() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={workshopImage}
            alt="Master tailor workshop"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block">
              Meet Our Artisan
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight mb-6">
              The Master
              <br />
              <span className="text-gold-gradient">Behind the Craft</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Four decades of passion, precision, and dedication to the art of
              bespoke tailoring.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="sticky top-32">
              <div className="img-zoom rounded-sm overflow-hidden">
                <img
                  src={ownerImage}
                  alt="Edward Ashworth, Master Tailor"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="font-serif text-2xl">Edward Ashworth III</h2>
                <p className="text-muted-foreground">Master Tailor & Director</p>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-8">
              <SectionHeading
                subtitle="Biography"
                title="A Life Dedicated to Excellence"
                align="left"
              />

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Edward Ashworth III represents the third generation of master
                  tailors in our family. Born into a world of fabric swatches and
                  measuring tapes, he learned his first stitch at the age of seven
                  under the watchful eye of his grandfather, the founder of
                  Elegance Bespoke Tailoring.
                </p>

                <p>
                  After completing his formal training at the London College of
                  Fashion and apprenticing on Savile Row, Edward spent five years
                  honing his craft in the ateliers of Milan and Paris. These
                  experiences broadened his understanding of international
                  tailoring traditions while deepening his appreciation for British
                  craftsmanship.
                </p>

                <p>
                  Returning to London in 2005, Edward joined his father at the helm
                  of Elegance, bringing fresh perspectives while honoring the
                  techniques that had built our reputation. Under his leadership,
                  we expanded our women's collection and embraced sustainable
                  practices without compromising on quality.
                </p>

                <p>
                  Today, Edward leads a team of twelve skilled craftsmen and women,
                  each sharing his passion for perfection. He personally oversees
                  every garment that leaves our atelier, ensuring that each piece
                  meets the exacting standards our clients expect.
                </p>
              </div>

              {/* Quote */}
              <div className="bg-card p-8 rounded-sm relative mt-12">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-accent/30" />
                <blockquote className="relative z-10 pt-6">
                  <p className="font-serif text-xl italic leading-relaxed mb-6">
                    "A suit is not merely clothing—it is armor for the modern
                    world. When you wear a garment crafted with care, precision,
                    and understanding, you carry with you the confidence to face
                    any challenge."
                  </p>
                  <footer className="border-t border-border pt-6">
                    <cite className="not-italic">
                      <span className="font-serif text-lg block">
                        Edward Ashworth III
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Master Tailor & Director
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>

              {/* Philosophy */}
              <div className="mt-12">
                <h3 className="font-serif text-2xl mb-6">
                  Design Philosophy
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Edward's approach to tailoring centers on understanding the
                    individual. He believes that a truly great suit must do more
                    than fit well—it must reflect the wearer's personality, enhance
                    their best qualities, and provide comfort throughout the longest
                    of days.
                  </p>
                  <p>
                    This philosophy extends to every aspect of the process, from
                    the initial consultation where he takes time to understand a
                    client's lifestyle and aspirations, to the final fitting where
                    he ensures every element works in harmony.
                  </p>
                  <p>
                    His commitment to traditional hand techniques—canvassing,
                    pad-stitching, hand-finished buttonholes—isn't merely about
                    preservation. These methods create garments that mold to the
                    body over time, becoming more comfortable with each wearing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
            Meet Edward in Person
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a personal consultation and experience the art of bespoke
            tailoring guided by a master craftsman.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
