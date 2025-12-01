import { Card } from "@/components/ui/card";
import { MousePointer2 } from "lucide-react";

const timelineData = [
  { time: "0.0s", action: "Click Button 1", x: 120, y: 340, color: "cyan" },
  { time: "0.5s", action: "Wait", x: 0, y: 0, color: "muted" },
  { time: "1.2s", action: "Click Input Field", x: 250, y: 180, color: "magenta" },
  { time: "1.8s", action: "Type Text", x: 250, y: 180, color: "blue" },
  { time: "2.5s", action: "Click Submit", x: 450, y: 520, color: "purple" },
  { time: "3.0s", action: "Wait", x: 0, y: 0, color: "muted" },
  { time: "3.8s", action: "Click Confirm", x: 350, y: 280, color: "cyan" },
];

const TimelineVisualization = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4">
          <span className="text-glow-cyan text-primary">Timeline</span>
          <span className="text-foreground"> Visualisierung</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto font-body">
          Sieh jeden Klick, jedes Timing und jede Aktion in Echtzeit
        </p>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 max-w-4xl mx-auto">
          <div className="space-y-4">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`
                  flex items-center gap-4 p-4 rounded-lg border-l-4 
                  bg-muted/10 hover:bg-muted/20 transition-all duration-300
                  animate-slide-up
                  ${item.color === 'cyan' ? 'border-primary' : ''}
                  ${item.color === 'magenta' ? 'border-secondary' : ''}
                  ${item.color === 'blue' ? 'border-accent' : ''}
                  ${item.color === 'purple' ? 'border-neon-purple' : ''}
                  ${item.color === 'muted' ? 'border-muted' : ''}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className={`
                  w-4 h-4 rounded-full flex-shrink-0
                  ${item.color === 'cyan' ? 'bg-primary glow-cyan' : ''}
                  ${item.color === 'magenta' ? 'bg-secondary glow-magenta' : ''}
                  ${item.color === 'blue' ? 'bg-accent glow-blue' : ''}
                  ${item.color === 'purple' ? 'bg-neon-purple glow-purple' : ''}
                  ${item.color === 'muted' ? 'bg-muted' : ''}
                `} />

                {/* Time */}
                <span className="font-display font-bold text-primary min-w-[60px]">
                  {item.time}
                </span>

                {/* Action */}
                <span className="font-body text-foreground flex-1">
                  {item.action}
                </span>

                {/* Coordinates */}
                {item.x > 0 && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <MousePointer2 className="w-4 h-4" />
                    <span>({item.x}, {item.y})</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Timeline Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
              <div className="text-3xl font-display font-bold text-primary">5</div>
              <div className="text-sm font-body text-muted-foreground">Aktionen</div>
            </div>
            <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/30">
              <div className="text-3xl font-display font-bold text-secondary">3.8s</div>
              <div className="text-sm font-body text-muted-foreground">Gesamtzeit</div>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/30">
              <div className="text-3xl font-display font-bold text-accent">2</div>
              <div className="text-sm font-body text-muted-foreground">Wartezeiten</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TimelineVisualization;
