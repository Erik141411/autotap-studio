import FiveMPanel from "@/components/FiveMPanel";

const FiveMView = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #1a1a1a 100%)",
      }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Green ambient glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />

      {/* Branding top left */}
      <div className="absolute top-4 left-5 opacity-30">
        <p className="text-muted-foreground text-xs italic">by Erik_141</p>
      </div>

      {/* Panel */}
      <FiveMPanel />

      {/* Bottom hint */}
      <div className="absolute bottom-5 text-center">
        <p className="text-muted-foreground text-[10px] opacity-40">
          FiveM Panel Preview — Nur für eigene Server
        </p>
      </div>
    </div>
  );
};

export default FiveMView;
