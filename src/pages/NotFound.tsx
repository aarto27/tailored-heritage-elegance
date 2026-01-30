import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container-custom text-center py-20">
        <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block">
          Page Not Found
        </span>
        <h1 className="font-serif text-6xl md:text-8xl font-medium mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild variant="elegant" size="xl">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;