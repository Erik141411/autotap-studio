import {
  Box, Swords, Spade, Bomb, Circle, Dices, Target, Egg,
  ShieldCheck, Gift, Trophy, User, Store
} from "lucide-react";
import { useState } from "react";

const games = [
  { icon: Box, label: "Cases" },
  { icon: Swords, label: "Case Battles" },
  { icon: Spade, label: "Blackjack" },
  { icon: Bomb, label: "Mines" },
  { icon: Circle, label: "Plinko" },
  { icon: Target, label: "Limbo" },
  { icon: Dices, label: "Dice" },
  { icon: Target, label: "Roulette" },
  { icon: Egg, label: "Chicken" },
];

const navLinks = [
  { icon: ShieldCheck, label: "Fairness" },
  { icon: Gift, label: "Affiliate" },
  { icon: Gift, label: "Bonus" },
  { icon: Trophy, label: "Leaderboard" },
  { icon: User, label: "Profile" },
  { icon: Store, label: "Store", highlight: true },
];

const GameSidebar = () => {
  const [activeGame, setActiveGame] = useState("Cases");

  return (
    <aside className="w-[180px] min-h-0 bg-card border-r border-border flex flex-col overflow-y-auto">
      {/* Nav links */}
      <div className="flex flex-wrap gap-1 p-3 border-b border-border">
        {navLinks.map((link) => (
          <button
            key={link.label}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[11px] font-medium transition-colors ${
              link.highlight
                ? "text-accent hover:bg-accent/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <link.icon className="w-3.5 h-3.5" />
            {link.label}
          </button>
        ))}
      </div>

      {/* Games label */}
      <div className="px-4 pt-4 pb-2">
        <span className="text-[11px] font-semibold text-muted-foreground tracking-wider uppercase">Games</span>
      </div>

      {/* Game list */}
      <nav className="flex-1 px-2 pb-4 space-y-0.5">
        {games.map((game) => (
          <button
            key={game.label}
            onClick={() => setActiveGame(game.label)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              activeGame === game.label
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <game.icon className="w-4 h-4" />
            <span>{game.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default GameSidebar;
