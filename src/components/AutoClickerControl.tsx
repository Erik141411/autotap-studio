import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Square, MousePointer2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AutoClickerControl = () => {
  const [isActive, setIsActive] = useState(false);
  const [cps, setCps] = useState(10);
  const [clickCount, setClickCount] = useState(0);
  const [mode, setMode] = useState<"normal" | "jitter" | "burst">("normal");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  // Simulate clicks
  const performClick = () => {
    setClickCount((prev) => prev + 1);
    
    // Visual feedback
    const clickIndicator = document.createElement("div");
    clickIndicator.className = "fixed w-4 h-4 bg-primary rounded-full pointer-events-none animate-ping z-50";
    clickIndicator.style.left = `${Math.random() * window.innerWidth}px`;
    clickIndicator.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(clickIndicator);
    setTimeout(() => clickIndicator.remove(), 500);
  };

  const startClicking = () => {
    if (isActive) return;
    
    setIsActive(true);
    setClickCount(0);
    
    toast({
      title: "Auto-Clicker gestartet",
      description: `${cps} Klicks pro Sekunde im ${mode}-Modus`,
    });

    const interval = 1000 / cps;
    
    intervalRef.current = setInterval(() => {
      if (mode === "jitter") {
        const randomDelay = Math.random() * 50;
        setTimeout(performClick, randomDelay);
      } else if (mode === "burst") {
        for (let i = 0; i < 3; i++) {
          setTimeout(performClick, i * 50);
        }
      } else {
        performClick();
      }
    }, interval);
  };

  const stopClicking = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsActive(false);
    
    toast({
      title: "Auto-Clicker gestoppt",
      description: `${clickCount} Klicks ausgeführt`,
    });
  };

  const toggleClicking = () => {
    if (isActive) {
      stopClicking();
    } else {
      startClicking();
    }
  };

  // F9 Hotkey Support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "F9") {
        e.preventDefault();
        toggleClicking();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, cps, mode, clickCount]);

  return (
    <Card className="p-8 bg-card minecraft-border stone-texture max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* Status Display */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <div className={`w-6 h-6 pixel-perfect ${isActive ? 'bg-primary' : 'bg-muted'} animate-pulse`} />
            <h2 className="text-2xl font-display text-foreground">
              {isActive ? "AKTIV" : "BEREIT"}
            </h2>
          </div>
          <div className="text-6xl font-display text-primary">
            {clickCount}
          </div>
          <p className="text-muted-foreground font-body text-xl">Klicks</p>
        </div>

        {/* CPS Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="font-display text-sm text-foreground">CPS (Klicks/Sek)</label>
            <span className="font-display text-xl text-primary">{cps}</span>
          </div>
          <Slider
            value={[cps]}
            onValueChange={(value) => setCps(value[0])}
            min={1}
            max={20}
            step={1}
            disabled={isActive}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground font-body text-center">
            1-20 CPS (empfohlen: 8-14 für Minecraft)
          </p>
        </div>

        {/* Mode Selection */}
        <div className="space-y-2">
          <label className="font-display text-sm text-foreground block">Klick-Modus</label>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant={mode === "normal" ? "default" : "outline"}
              onClick={() => !isActive && setMode("normal")}
              disabled={isActive}
              className="font-display text-xs"
            >
              Normal
            </Button>
            <Button
              variant={mode === "jitter" ? "default" : "outline"}
              onClick={() => !isActive && setMode("jitter")}
              disabled={isActive}
              className="font-display text-xs"
            >
              Jitter
            </Button>
            <Button
              variant={mode === "burst" ? "default" : "outline"}
              onClick={() => !isActive && setMode("burst")}
              disabled={isActive}
              className="font-display text-xs"
            >
              Burst
            </Button>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <Button
            size="lg"
            onClick={startClicking}
            disabled={isActive}
            className="font-display text-lg h-16"
          >
            <Play className="mr-2 h-6 w-6" />
            START
          </Button>
          <Button
            size="lg"
            variant="destructive"
            onClick={stopClicking}
            disabled={!isActive}
            className="font-display text-lg h-16"
          >
            <Square className="mr-2 h-6 w-6" />
            STOP
          </Button>
        </div>

        {/* Info */}
        <div className="pt-4 border-t-4 border-border space-y-3">
          <div className="flex items-start gap-3 bg-muted/20 p-4 minecraft-border">
            <MousePointer2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div className="space-y-1">
              <p className="text-xs font-body text-foreground">
                <span className="font-display text-primary">Normal:</span> Gleichmäßige Klicks
              </p>
              <p className="text-xs font-body text-foreground">
                <span className="font-display text-primary">Jitter:</span> Zufällige Mini-Delays (natürlicher)
              </p>
              <p className="text-xs font-body text-foreground">
                <span className="font-display text-primary">Burst:</span> 3 schnelle Klicks pro Intervall
              </p>
            </div>
          </div>
          
          {/* Hotkey Info */}
          <div className="bg-primary/10 p-4 minecraft-border">
            <p className="text-sm font-display text-primary text-center">
              🎮 Drücke <kbd className="px-2 py-1 bg-card minecraft-border mx-1">F9</kbd> zum An/Aus
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AutoClickerControl;
