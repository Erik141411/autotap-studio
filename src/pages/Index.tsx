import MinecraftHero from "@/components/MinecraftHero";
import FeatureBlocks from "@/components/FeatureBlocks";
import AutoClickerControl from "@/components/AutoClickerControl";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinecraftHero />
      <FeatureBlocks />
      
      {/* Main Clicker Section */}
      <section id="clicker" className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              AUTO CLICKER
            </h2>
            <p className="text-xl font-body text-muted-foreground">
              Stelle CPS ein und starte den Clicker
            </p>
          </div>
          
          <AutoClickerControl />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4 border-border stone-texture">
        <div className="container mx-auto text-center">
          <p className="font-body text-muted-foreground text-lg">
            © 2025 Minecraft Auto Clicker
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-body">
            Nur für eigene Server • Erstellt mit Lovable
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
