import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

import workshopImage from "@/assets/workshop.jpg";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().trim().min(5, "Please enter a valid phone number").max(20, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  gender: z.enum(["male", "female"], { required_error: "Please select a gender" }),
  suitType: z.enum(["ready-made", "custom"], { required_error: "Please select a suit type" }),
  message: z.string().trim().max(1000, "Message is too long").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    gender: "male",
    suitType: "custom",
    message: "",
  });

  useEffect(() => {
    const suitName = searchParams.get("suit");
    const category = searchParams.get("category");
    if (suitName) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in the "${suitName}" suit from your ${category === "women" ? "women's" : "men's"} collection. Please provide more information about customization options.`,
        gender: category === "women" ? "female" : "male",
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Inquiry Received",
        description: "Thank you! We'll contact you within 24 hours to schedule your consultation.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={workshopImage}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-16">
          <div className="max-w-2xl">
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight">
              Begin Your
              <br />
              <span className="text-gold-gradient">Journey</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <SectionHeading
                subtitle="Contact Form"
                title="Place Your Order"
                align="left"
              />
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will contact you within 24
                hours to discuss your requirements.
              </p>

              {isSubmitted ? (
                <div className="bg-card p-10 rounded-sm text-center">
                  <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="font-serif text-2xl mb-4">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your inquiry has been received. One of our consultants will
                    contact you within 24 hours to schedule your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={errors.fullName ? "border-destructive" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 20 7123 4567"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select
                        value={formData.gender}
                        onValueChange={(value) => handleSelectChange("gender", value)}
                      >
                        <SelectTrigger className={errors.gender ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.gender && (
                        <p className="text-destructive text-sm mt-1">{errors.gender}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="suitType">Suit Type *</Label>
                      <Select
                        value={formData.suitType}
                        onValueChange={(value) => handleSelectChange("suitType", value)}
                      >
                        <SelectTrigger className={errors.suitType ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ready-made">Ready-Made Suit</SelectItem>
                          <SelectItem value="custom">Custom/Bespoke Suit</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.suitType && (
                        <p className="text-destructive text-sm mt-1">{errors.suitType}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message / Requirements</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, preferred styles, or any questions..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="elegant"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Place Order / Request Consultation"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading
                subtitle="Visit Our Atelier"
                title="Contact Information"
                align="left"
              />

              <div className="space-y-8 mt-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg mb-2">Address</h4>
                    <p className="text-muted-foreground">
                      42 Savile Row, Mayfair
                      <br />
                      London, W1S 3PR
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg mb-2">Phone</h4>
                    <a
                      href="tel:+442071234567"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +44 (0) 20 7123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg mb-2">Email</h4>
                    <a
                      href="mailto:enquiries@elegancetailoring.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      enquiries@elegancetailoring.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg mb-2">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday – Friday: 9:00 AM – 7:00 PM
                      <br />
                      Saturday: 10:00 AM – 5:00 PM
                      <br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2689526986815!2d-0.14250648421991977!3d51.51145677963675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760528b1b1b1b1%3A0x1234567890abcdef!2sSavile%20Row%2C%20London!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elegance Bespoke Tailoring Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
