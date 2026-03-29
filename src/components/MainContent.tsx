import { Gamepad2 } from "lucide-react";
import GameCard from "./GameCard";

const games = [
  { name: "Blackjack", playing: 7, gradient: "linear-gradient(135deg, #2d1b0e 0%, #5c3a1e 100%)", icon: "🃏" },
  { name: "Mines", playing: 8, gradient: "linear-gradient(135deg, #1a2a1a 0%, #3d5c2a 100%)", icon: "💎" },
  { name: "Roulette", playing: 7, gradient: "linear-gradient(135deg, #2a1a1a 0%, #5c2a2a 100%)", icon: "🎰" },
  { name: "Limbo", playing: 7, gradient: "linear-gradient(135deg, #1a1a2a 0%, #2a3a5c 100%)", icon: "🚀" },
  { name: "Plinko", playing: 4, gradient: "linear-gradient(135deg, #2a1a2a 0%, #5c2a5c 100%)", icon: "⚪" },
  { name: "Dice", playing: 5, gradient: "linear-gradient(135deg, #1a2a2a 0%, #2a5c5c 100%)", icon: "🎲" },
  { name: "Chicken", playing: 6, gradient: "linear-gradient(135deg, #2a2a1a 0%, #5c4a2a 100%)", icon: "🐔" },
  { name: "Crash", playing: 9, gradient: "linear-gradient(135deg, #1a1a2a 0%, #3a2a5c 100%)", icon: "📈" },
];

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      {/* Banner */}
      <div className="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="https://i.imgur.com/lyc044m.png"
          alt="Free Codes, Events, Updates & Giveaways - NitroGamble"
          className="w-full h-auto object-cover rounded-xl"
        />
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
