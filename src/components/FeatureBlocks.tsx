import { Card } from "@/components/ui/card";
import { Zap, Timer, Settings, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "SCHNELL",
    description: "1-20 CPS einstellbar",
  },
  {
    icon: Timer,
    title: "MODI",
    description: "Normal, Jitter, Burst",
  },
  {
    icon: Settings,
    title: "PRÄZISE",
    description: "Millisekunden-genau",
  },
  {
    icon: Shield,
    title: "SICHER",
    description: "Nur eigene Server",
  },
];

const FeatureBlocks = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card minecraft-border stone-texture hover:bg-accent/10 transition-all duration-200 cursor-pointer"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary pixel-perfect" />
              <h3 className="text-lg font-display mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-lg">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;
