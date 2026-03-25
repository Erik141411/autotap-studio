import { useState } from "react";
import {
  Power, FileText, Filter, Timer, Shield,
  CheckSquare, AlertTriangle, Users, ChevronDown, X, Plus
} from "lucide-react";

const FiveMPanel = () => {
  const [enableOverrides, setEnableOverrides] = useState(true);
  const [delay, setDelay] = useState(250);
  const [priorityIndex, setPriorityIndex] = useState(2); // High
  const priorities = ["Low", "Medium", "High", "Critical"];
  const [filterTags, setFilterTags] = useState(["Vehicles", "Props", "Peds"]);
  const [excludeTags, setExcludeTags] = useState(["esx_skin", "vMenu", "e..."]);

  const removeFilter = (tag: string) => setFilterTags((t) => t.filter((x) => x !== tag));
  const removeExclude = (tag: string) => setExcludeTags((t) => t.filter((x) => x !== tag));

  return (
    <div
      className="w-[520px] select-none relative"
      style={{
        background: "linear-gradient(180deg, hsl(150 8% 8% / 0.95) 0%, hsl(150 8% 6% / 0.98) 100%)",
        border: "1px solid hsl(var(--primary) / 0.35)",
        borderRadius: "12px",
        boxShadow:
          "0 0 40px hsl(var(--primary) / 0.15), 0 0 80px hsl(var(--primary) / 0.08), inset 0 1px 0 hsl(var(--primary) / 0.1)",
      }}
    >
      {/* Corner glow accents */}
      <div
        className="absolute -top-px -left-px w-24 h-24 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          borderRadius: "12px 0 0 0",
        }}
      />
      <div
        className="absolute -top-px -right-px w-24 h-24 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 100% 0%, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          borderRadius: "0 12px 0 0",
        }}
      />

      {/* Header */}
      <div className="flex flex-col items-center pt-7 pb-5 relative">
        {/* Logo Icon */}
        <div className="mb-3 relative">
          <div
            className="w-14 h-14 flex items-center justify-center rounded-lg"
            style={{
              border: "2px solid hsl(var(--primary) / 0.6)",
              boxShadow: "0 0 20px hsl(var(--primary) / 0.2)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="3" width="9" height="9" rx="2" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
              <rect x="16" y="3" width="9" height="9" rx="2" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
              <rect x="3" y="16" width="9" height="9" rx="2" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
              <rect x="16" y="16" width="9" height="9" rx="2" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
              <line x1="12" y1="7.5" x2="16" y2="7.5" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <line x1="12" y1="20.5" x2="16" y2="20.5" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <line x1="7.5" y1="12" x2="7.5" y2="16" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <line x1="20.5" y1="12" x2="20.5" y2="16" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <h1 className="text-foreground font-bold text-2xl tracking-[0.3em] uppercase">Replace</h1>
        <p className="text-primary/60 text-xs tracking-[0.6em] uppercase mt-0.5">Scripts</p>
        <p className="text-muted-foreground text-[10px] mt-1.5 tracking-wide">Resource Replacement Interface</p>
      </div>

      {/* Rows */}
      <div className="px-3 pb-4 space-y-[3px]">
        {/* ENABLE OVERRIDES */}
        <PanelRow icon={<Power className="w-4 h-4" />} label="ENABLE OVERRIDES">
          <div className="flex items-center rounded overflow-hidden border border-border/60 text-xs">
            <button
              onClick={() => setEnableOverrides(false)}
              className={`px-3 py-1.5 font-semibold transition-colors ${
                !enableOverrides ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ON
            </button>
            <button
              onClick={() => setEnableOverrides(true)}
              className={`px-3 py-1.5 font-semibold transition-colors ${
                enableOverrides
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ON
            </button>
          </div>
        </PanelRow>

        {/* MASTER SCRIPT PATH */}
        <PanelRow icon={<FileText className="w-4 h-4" />} label="MASTER SCRIPT PATH">
          <div className="flex items-center gap-1.5 bg-muted/60 border border-border/40 rounded px-3 py-1.5 text-xs text-muted-foreground cursor-pointer hover:border-primary/30 transition-colors">
            <span>default/overrides/</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </PanelRow>

        {/* FILTER BY TYPE */}
        <PanelRow icon={<Filter className="w-4 h-4" />} label="FILTER BY TYPE">
          <div className="flex items-center gap-1.5">
            {filterTags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 bg-muted/60 border border-border/40 rounded px-2.5 py-1 text-xs text-foreground"
              >
                {tag}
                <X
                  className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => removeFilter(tag)}
                />
              </span>
            ))}
          </div>
        </PanelRow>

        {/* DELAY */}
        <PanelRow icon={<Timer className="w-4 h-4" />} label="DELAY (ms)">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setDelay((d) => Math.max(0, d - 50))}
              className="text-primary text-sm font-bold w-6 h-6 flex items-center justify-center hover:text-primary/80 transition-colors"
            >
              &lt;
            </button>
            <div
              className="w-[52px] h-[28px] border border-primary/40 rounded flex items-center justify-center bg-black/30"
              style={{ borderStyle: "dashed" }}
            >
              <span className="text-primary text-xs font-bold">{delay}</span>
            </div>
            <button
              onClick={() => setDelay((d) => d + 50)}
              className="text-primary text-sm font-bold w-6 h-6 flex items-center justify-center hover:text-primary/80 transition-colors"
            >
              &gt;
            </button>
          </div>
        </PanelRow>

        {/* REPLACEMENT PRIORITY — accented row */}
        <div
          className="flex items-center h-[44px] rounded-md relative px-4"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)",
            border: "1px solid hsl(var(--primary) / 0.2)",
          }}
        >
          <div className="absolute left-0 top-[8px] bottom-[8px] w-[3px] rounded-r bg-primary" />
          <div className="flex items-center gap-2.5 flex-1">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-foreground text-xs font-semibold tracking-wide uppercase">
              REPLACEMENT PRIORITY
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPriorityIndex((i) => Math.max(0, i - 1))}
              className="text-primary text-sm font-bold w-6 h-6 flex items-center justify-center hover:text-primary/80 transition-colors"
            >
              &lt;
            </button>
            <div
              className="min-w-[52px] h-[28px] border border-primary/40 rounded flex items-center justify-center bg-black/30 px-2"
              style={{ borderStyle: "dashed" }}
            >
              <span className="text-primary text-xs font-bold">{priorities[priorityIndex]}</span>
            </div>
            <button
              onClick={() => setPriorityIndex((i) => Math.min(priorities.length - 1, i + 1))}
              className="text-primary text-sm font-bold w-6 h-6 flex items-center justify-center hover:text-primary/80 transition-colors"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* VALIDATE SCRIPTS */}
        <PanelRow icon={<CheckSquare className="w-4 h-4" />} label="VALIDATE SCRIPTS">
          <button className="bg-muted/60 border border-border/40 rounded px-4 py-1.5 text-xs text-foreground hover:bg-muted hover:border-primary/30 transition-colors font-medium">
            Scan resources
          </button>
        </PanelRow>

        {/* EXCLUDE RESOURCES */}
        <PanelRow icon={<AlertTriangle className="w-4 h-4" />} label="EXCLUDE RESOURCES">
          <div className="flex items-center gap-1.5">
            {excludeTags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 bg-muted/60 border border-border/40 rounded px-2 py-1 text-xs text-foreground"
              >
                {tag}
                <X
                  className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => removeExclude(tag)}
                />
              </span>
            ))}
            <button className="w-6 h-6 flex items-center justify-center rounded border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </PanelRow>

        {/* STATUS */}
        <PanelRow icon={<Users className="w-4 h-4" />} label="STATUS">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold">System Idle</span>
          </div>
        </PanelRow>
      </div>
    </div>
  );
};

const PanelRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div
    className="flex items-center h-[44px] rounded-md px-4"
    style={{
      background: "hsl(0 0% 0% / 0.3)",
      border: "1px solid hsl(0 0% 100% / 0.04)",
    }}
  >
    <div className="flex items-center gap-2.5 flex-1">
      <span className="text-primary opacity-80">{icon}</span>
      <span className="text-foreground text-xs font-semibold tracking-wide uppercase">{label}</span>
    </div>
    {children}
  </div>
);

export default FiveMPanel;
