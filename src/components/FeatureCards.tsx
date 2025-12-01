import { Card } from "@/components/ui/card";
import { MousePointerClick, Clock, FolderOpen, BarChart3 } from "lucide-react";

const features = [
  {
    icon: MousePointerClick,
    title: "Klick-Aufnahme",
    description: "Nehme komplexe Klick-Sequenzen in Echtzeit auf",
    color: "cyan" as const,
  },
  {
    icon: Clock,
    title: "Präzises Timing",
    description: "Stelle Delays und Wiederholungen auf die Millisekunde genau ein",
    color: "magenta" as const,
  },
  {
    icon: FolderOpen,
    title: "Profil-System",
    description: "Verwalte verschiedene Projekte und Automatisierungen",
    color: "blue" as const,
  },
  {
    icon: BarChart3,
    title: "Timeline-View",
    description: "Visualisiere und bearbeite deine Klick-Abläufe",
    color: "purple" as const,
  },
];

const FeatureCards = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4">
          <span className="text-glow-cyan text-primary">Features</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto font-body">
          Professionelle Automatisierung trifft auf futuristisches Design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`
                p-6 bg-card/50 backdrop-blur-sm border-2 
                ${feature.color === 'cyan' ? 'border-primary/30 hover:border-primary glow-cyan' : ''}
                ${feature.color === 'magenta' ? 'border-secondary/30 hover:border-secondary glow-magenta' : ''}
                ${feature.color === 'blue' ? 'border-accent/30 hover:border-accent glow-blue' : ''}
                ${feature.color === 'purple' ? 'border-neon-purple/30 hover:border-neon-purple glow-purple' : ''}
                transition-all duration-300 hover:scale-105 cursor-pointer
                animate-slide-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon 
                className={`
                  w-12 h-12 mb-4
                  ${feature.color === 'cyan' ? 'text-primary' : ''}
                  ${feature.color === 'magenta' ? 'text-secondary' : ''}
                  ${feature.color === 'blue' ? 'text-accent' : ''}
                  ${feature.color === 'purple' ? 'text-neon-purple' : ''}
                `}
              />
              <h3 className="text-xl font-display font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
