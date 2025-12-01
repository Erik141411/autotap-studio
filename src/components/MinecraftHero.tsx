import { Button } from "@/components/ui/button";
import { Play, AlertTriangle } from "lucide-react";
import logo from "@/assets/minecraft-logo.png";
import mcBg from "@/assets/minecraft-bg.png";

const MinecraftHero = () => {
  const scrollToClicker = () => {
    document.getElementById("clicker")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-20 pixel-perfect"
        style={{
          backgroundImage: `url(${mcBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Stone Texture Overlay */}
      <div className="absolute inset-0 stone-texture opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="w-32 h-32 pixel-perfect">
            <img 
              src={logo} 
              alt="Minecraft Auto Clicker Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-display tracking-tight text-foreground">
            MINECRAFT
            <br />
            <span className="text-primary">AUTO CLICKER</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-2xl">
            Automatische Klicks für deine eigenen Minecraft-Server
            <br />
            <span className="text-primary">Einfach • Schnell • Blocky</span>
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={scrollToClicker}
            className="font-display text-lg px-8 h-14"
          >
            <Play className="mr-2 h-6 w-6" />
            JETZT STARTEN
          </Button>

          {/* Legal Notice */}
          <div className="mt-8 px-6 py-4 minecraft-border bg-card max-w-xl stone-texture">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-display text-primary mb-2">
                  ⚠ WICHTIGER HINWEIS
                </p>
                <p className="text-xs font-body text-muted-foreground mb-2">
                  Dieser Auto-Clicker ist nur für private Server und Test-Umgebungen erlaubt. 
                  Die Verwendung auf öffentlichen Servern kann gegen deren Regeln verstoßen.
                </p>
                <p className="text-xs font-body text-primary/80">
                  ℹ️ Browser-Version: Funktioniert nur wenn Browser-Tab aktiv ist. 
                  Für echte Ingame-Klicks bräuchtest du eine native Desktop-App.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftHero;
