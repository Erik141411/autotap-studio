interface GameCardProps {
  name: string;
  playing: number;
  gradient: string;
  icon: string;
}

const GameCard = ({ name, playing }: GameCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div
        className="aspect-[4/5] rounded-xl overflow-hidden relative flex items-center justify-center transition-transform group-hover:scale-[1.02]"
      >
        <img
          src="https://i.imgur.com/8qQkuNm.jpeg"
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Game name overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-3 px-3">
          <span className="font-extrabold text-foreground text-lg uppercase tracking-wide">{name}</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-center justify-between mt-2 px-1">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">{playing} playing</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
