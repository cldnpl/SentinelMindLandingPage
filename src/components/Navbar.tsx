import { Shield, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold text-foreground">SentinelMind</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/elbeekk/hackeurope" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="#hero">
            <Button size="sm" className="gradient-primary text-primary-foreground font-semibold">
              Add to Chrome
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
