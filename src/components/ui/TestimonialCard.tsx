import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
}

export function TestimonialCard({ quote, author, title }: TestimonialCardProps) {
  return (
    <div className="bg-card p-8 md:p-10 rounded-sm relative">
      <Quote className="absolute top-6 left-6 h-8 w-8 text-accent/30" />
      <blockquote className="relative z-10">
        <p className="text-foreground leading-relaxed italic mb-6 pt-6">
          "{quote}"
        </p>
        <footer>
          <cite className="not-italic">
            <span className="font-serif text-lg block">{author}</span>
            <span className="text-muted-foreground text-sm">{title}</span>
          </cite>
        </footer>
      </blockquote>
    </div>
  );
}
