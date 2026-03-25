import { useState } from "react";
import { Settings } from "lucide-react";

interface PanelRow {
  label: string;
  value: number;
  hasAccent: boolean;
}

const initialRows: PanelRow[] = [
  { label: "Further Settings", value: 54, hasAccent: true },
  { label: "Further Settings", value: 54, hasAccent: false },
  { label: "Further Settings", value: 54, hasAccent: false },
  { label: "Further Settings", value: 54, hasAccent: false },
  { label: "Further Settings", value: 54, hasAccent: true },
  { label: "Further Settings", value: 54, hasAccent: false },
  { label: "Further Settings", value: 54, hasAccent: false },
  { label: "Further Settings", value: 54, hasAccent: false },
];

const FiveMPanel = () => {
  const [rows, setRows] = useState(initialRows);

  const updateValue = (index: number, delta: number) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, value: Math.max(0, row.value + delta) } : row
      )
    );
  };

  return (
    <div className="w-[320px] select-none">
      {/* Header */}
      <div className="flex flex-col items-center pt-6 pb-4">
        {/* Logo */}
        <div className="relative mb-3">
          <svg width="48" height="28" viewBox="0 0 48 28" fill="none" className="opacity-60">
            <path d="M12 14C12 7.4 17.4 2 24 2C30.6 2 36 7.4 36 14C36 20.6 30.6 26 24 26" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M36 14C36 20.6 30.6 26 24 26C17.4 26 12 20.6 12 14C12 7.4 17.4 2 24 2" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          </svg>
        </div>
        <h1 className="text-foreground font-bold text-lg tracking-[0.25em] uppercase">Replace</h1>
        <p className="text-muted-foreground text-[10px] tracking-[0.5em] uppercase mt-0.5">Scripts</p>
      </div>

      {/* Rows */}
      <div className="space-y-[2px]">
        {rows.map((row, index) => (
          <div
            key={index}
            className="flex items-center h-[38px] relative"
            style={{
              background: row.hasAccent
                ? "linear-gradient(90deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.03) 40%, transparent 100%)"
                : "hsl(0 0% 0% / 0.35)",
            }}
          >
            {/* Green accent bar */}
            {row.hasAccent && (
              <div className="absolute left-0 top-[6px] bottom-[6px] w-[3px] rounded-r bg-primary" />
            )}

            {/* Icon + Label */}
            <div className="flex items-center gap-2.5 pl-4 flex-1">
              <Settings className="w-3.5 h-3.5 text-primary opacity-70" />
              <span className="text-foreground text-xs font-medium">{row.label}</span>
            </div>

            {/* Value control */}
            <div className="flex items-center gap-1 pr-3">
              <button
                onClick={() => updateValue(index, -1)}
                className="text-primary text-xs font-bold w-5 h-5 flex items-center justify-center hover:text-primary/80 transition-colors"
              >
                &lt;
              </button>
              <div className="w-[42px] h-[26px] border border-primary/40 rounded-sm flex items-center justify-center bg-black/30"
                style={{
                  borderStyle: "dashed",
                }}
              >
                <span className="text-primary text-xs font-bold">{row.value}</span>
              </div>
              <button
                onClick={() => updateValue(index, 1)}
                className="text-primary text-xs font-bold w-5 h-5 flex items-center justify-center hover:text-primary/80 transition-colors"
              >
                &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveMPanel;
