import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Edit, Trash2 } from "lucide-react";

const profiles = [
  {
    name: "Web Scraper",
    clicks: 245,
    duration: "12m 34s",
    status: "active" as const,
  },
  {
    name: "Form Filler",
    clicks: 89,
    duration: "3m 12s",
    status: "paused" as const,
  },
  {
    name: "Game Bot",
    clicks: 1234,
    duration: "45m 08s",
    status: "active" as const,
  },
];

const ProfileCards = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4">
          <span className="text-glow-magenta text-secondary">Profile</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto font-body">
          Verwalte deine Automatisierungs-Projekte übersichtlich
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  {profile.name}
                </h3>
                <div className={`
                  w-3 h-3 rounded-full animate-glow-pulse
                  ${profile.status === 'active' ? 'bg-primary' : 'bg-muted'}
                `} />
              </div>

              <div className="space-y-2 mb-6 font-body">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Klicks:</span>
                  <span className="text-primary font-semibold">{profile.clicks}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Dauer:</span>
                  <span className="text-secondary font-semibold">{profile.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`font-semibold ${profile.status === 'active' ? 'text-primary' : 'text-muted-foreground'}`}>
                    {profile.status === 'active' ? 'Aktiv' : 'Pausiert'}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-display glow-cyan"
                >
                  <Play className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-secondary/50 text-secondary hover:bg-secondary/10"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-destructive/50 text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-display font-bold px-8 glow-magenta"
          >
            + Neues Profil erstellen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCards;
