import { Gamepad2 } from "lucide-react";
import GameCard from "./GameCard";

const games = [
  { name: "Blackjack", playing: 7, gradient: "linear-gradient(135deg, #2d1b0e 0%, #5c3a1e 100%)", icon: "🃏" },
  { name: "Mines", playing: 8, gradient: "linear-gradient(135deg, #1a2a1a 0%, #3d5c2a 100%)", icon: "💎" },
  { name: "Roulette", playing: 7, gradient: "linear-gradient(135deg, #2a1a1a 0%, #5c2a2a 100%)", icon: "🎰" },
  { name: "Limbo", playing: 7, gradient: "linear-gradient(135deg, #1a1a2a 0%, #2a3a5c 100%)", icon: "🚀" },
  { name: "Plinko", playing: 4, gradient: "linear-gradient(135deg, #2a1a2a 0%, #5c2a5c 100%)", icon: "⚪" },
  { name: "Dice", playing: 5, gradient: "linear-gradient(135deg, #1a2a2a 0%, #2a5c5c 100%)", icon: "🎲" },
  { name: "Cases", playing: 12, gradient: "linear-gradient(135deg, #2a2a1a 0%, #5c5c2a 100%)", icon: "📦" },
  { name: "Case Battles", playing: 3, gradient: "linear-gradient(135deg, #2a1a1a 0%, #5c3a2a 100%)", icon: "⚔️" },
  { name: "Chicken", playing: 6, gradient: "linear-gradient(135deg, #2a2a1a 0%, #5c4a2a 100%)", icon: "🐔" },
  { name: "Crash", playing: 9, gradient: "linear-gradient(135deg, #1a1a2a 0%, #3a2a5c 100%)", icon: "📈" },
];

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      {/* Banner */}
      <div
        className="w-full h-[200px] rounded-xl overflow-hidden relative mb-8"
        style={{
          background: "linear-gradient(135deg, hsl(145 80% 25%) 0%, hsl(180 60% 20%) 50%, hsl(200 70% 25%) 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-between px-10">
          <div>
            <h2 className="text-3xl font-black text-foreground uppercase leading-tight">
              Free Codes, Events,
              <br />
              Updates & Giveaways
            </h2>
            <div className="mt-3 bg-primary rounded-lg px-4 py-2 inline-block">
              <span className="text-primary-foreground text-sm font-bold">
                Join the community & never miss out!
              </span>
            </div>
            <div className="mt-3">
              <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-5 py-2.5 font-bold text-sm transition-colors">
                💬 JOIN DISCORD
              </button>
            </div>
          </div>
          <div className="text-8xl opacity-50">🎮</div>
        </div>
      </div>

      {/* Games section */}
      <div className="flex items-center gap-2 mb-5">
        <Gamepad2 className="w-5 h-5 text-foreground" />
        <h3 className="text-lg font-bold text-foreground">Games</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {games.map((game) => (
          <GameCard key={game.name} {...game} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
