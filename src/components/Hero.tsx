import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-8 animate-slide-up">
          {/* Logo */}
          <div className="w-32 h-32 animate-float">
            <img 
              src={logo} 
              alt="AutoTap Studio Logo" 
              className="w-full h-full object-contain glow-cyan"
            />
          </div>

          {/* Title */}
          <h1 className="text-7xl md:text-8xl font-display font-black tracking-tight">
            <span className="text-glow-cyan text-primary">Auto</span>
            <span className="text-glow-magenta text-secondary">Tap</span>
            <br />
            <span className="text-foreground">Studio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-body font-light text-muted-foreground max-w-2xl">
            Automatisiere wiederkehrende Klick-Abläufe mit 
            <span className="text-primary"> futuristischer Präzision</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-lg px-8 glow-cyan transition-glow hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Jetzt starten
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-display font-bold text-lg px-8 border-glow-magenta transition-glow hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" />
              Features entdecken
            </Button>
          </div>

          {/* Security Notice */}
          <div className="mt-8 px-6 py-3 border border-accent/30 rounded-lg bg-accent/5 max-w-xl">
            <p className="text-sm font-body text-accent/90">
              ⚠️ AutoTap Studio nur für erlaubte Automationen verwenden. 
              Missbrauch kann gegen Nutzungsbedingungen verstoßen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
