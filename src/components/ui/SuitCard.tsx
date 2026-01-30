import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SuitCardProps {
  image: string;
  name: string;
  description: string;
  category: "men" | "women";
}

export function SuitCard({ image, name, description, category }: SuitCardProps) {
  return (
    <div className="group card-hover">
      <div className="img-zoom rounded-sm overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover"
        />
      </div>
      <div className="pt-6 space-y-3">
        <h3 className="font-serif text-xl">{name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <Button asChild variant="elegantOutline" size="sm" className="mt-4">
          <Link to={`/contact?suit=${encodeURIComponent(name)}&category=${category}`}>
            Customize This Suit
          </Link>
        </Button>
      </div>
    </div>
  );
}
