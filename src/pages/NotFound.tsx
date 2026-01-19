import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-[100px] animate-pulse-glow" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md relative z-10"
      >
        <div className="mb-8">
          <span className="font-display text-8xl md:text-9xl font-bold text-gradient glow-text">
            404
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="btn-glow bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border/50 hover:bg-muted/50 hover:border-primary/50">
            <Link to="/contact" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Contact Us
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
