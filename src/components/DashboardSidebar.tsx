import { Home, Package, ShoppingCart, MessageCircle, Users, Key, Box, Activity, Settings, ChevronRight } from "lucide-react";
import { useState } from "react";

const menuSections = [
  {
    label: "HAUPTMENÜ",
    items: [
      { icon: Home, label: "Startseite", active: true },
      { icon: Package, label: "Meine Produkte" },
    ],
  },
  {
    label: "LINKS",
    items: [
      { icon: ShoppingCart, label: "Shop" },
      { icon: MessageCircle, label: "Discord" },
    ],
  },
  {
    label: "ADMIN",
    items: [
      { icon: Users, label: "Benutzer" },
      { icon: Key, label: "Keys" },
      { icon: Box, label: "Produkte" },
      { icon: Activity, label: "Logs" },
      { icon: Settings, label: "Einstellungen" },
    ],
  },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-[220px] min-h-screen bg-sidebar flex flex-col border-r border-border">
      {/* Logo */}
      <div className="p-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Activity className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground text-sm">FiveM Panel</span>
            <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-semibold">BETA</span>
          </div>
          <span className="text-xs text-muted-foreground">by Erik_141</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-6 mt-2">
        {menuSections.map((section) => (
          <div key={section.label}>
            <div className="flex items-center gap-2 px-3 mb-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] font-semibold text-primary tracking-wider">{section.label}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-1">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    item.active
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.active && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 mx-3 mb-4 bg-secondary rounded-lg text-center">
        <p className="text-xs text-muted-foreground">© 2025 Made with ❤️</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">v1.0.0</p>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
