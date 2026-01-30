import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "text-sm tracking-[0.2em] uppercase mb-4 block",
            light ? "text-accent" : "text-accent"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6",
          light ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {align === "center" && <div className="divider-gold mb-6" />}
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
