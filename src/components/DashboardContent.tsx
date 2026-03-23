import { Users, Key, Box, KeyRound, Newspaper, Wrench, ChevronRight, Bell } from "lucide-react";

const stats = [
  { label: "Benutzer", value: "2", icon: Users, color: "bg-primary/20 text-primary" },
  { label: "Keys", value: "0", icon: KeyRound, color: "bg-primary/20 text-primary" },
  { label: "Produkte", value: "1", icon: Box, color: "bg-primary/20 text-primary" },
  { label: "Aktive Lizenzen", value: "1", icon: Key, color: "bg-purple-500/20 text-purple-400" },
];

const DashboardContent = () => {
  return (
    <main className="flex-1 min-h-screen bg-background">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-8 py-4">
        {/* Banner */}
        <div className="bg-secondary rounded-full px-5 py-2.5 flex items-center gap-2">
          <span className="text-sm">🎉</span>
          <span className="text-sm text-muted-foreground">Panel released! Danke für jede Registrierung.</span>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex items-center gap-3 bg-secondary rounded-lg px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
              <span className="text-sm">🎮</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Erik_141 🎮</p>
              <p className="text-xs text-primary">Online</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-8 pb-8 space-y-6">
        {/* Dashboard Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🎮</span>
              <span className="text-primary font-semibold text-sm">Dashboard</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Willkommen zurück, Erik_141 🎮 👋!
            </h1>
            <p className="text-muted-foreground text-sm">
              Hier findest du alle wichtigen Informationen zu deinen<br />
              Lizenzen und Produkten.
            </p>
          </div>

          {/* System Status */}
          <div className="bg-card border border-border rounded-xl px-5 py-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">System Status</span>
            </div>
            <p className="text-primary font-semibold text-sm">All Systems Operational</p>
          </div>
        </div>

        {/* Statistiken */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span>🎮</span>
            <h2 className="text-xl font-bold text-foreground">Statistiken</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-5 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News & Changelogs */}
        <div className="grid grid-cols-2 gap-4">
          {/* News */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Newspaper className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-foreground">News</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Newspaper className="w-12 h-12 mb-4 opacity-30" />
              <p className="text-sm">Keine News vorhanden.</p>
            </div>
          </div>

          {/* Changelogs */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Changelogs</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Wrench className="w-12 h-12 mb-4 opacity-30" />
              <p className="text-sm">Keine Changelogs vorhanden.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
