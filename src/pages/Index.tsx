import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import ProfileCards from "@/components/ProfileCards";
import TimelineVisualization from "@/components/TimelineVisualization";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeatureCards />
      <TimelineVisualization />
      <ProfileCards />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground font-body">
            © 2025 AutoTap Studio. 
            <span className="text-accent"> Futuristische Automatisierung</span> für deine Projekte.
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-body">
            Erstellt mit Lovable
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
