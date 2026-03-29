import { useState } from "react";
import { Wallet, LogIn } from "lucide-react";
import WalletDialog from "./WalletDialog";

const Navbar = () => {
  const [walletOpen, setWalletOpen] = useState(false);
  return (
    <>

    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-black text-sm">N</span>
        </div>
        <span className="font-extrabold text-foreground text-lg tracking-tight">
          nitro<span className="text-primary">gamble</span>
        </span>
      </div>

      {/* Center - Balance & Wallet */}
      <div className="flex items-center gap-3">
        <div className="bg-secondary rounded-lg px-4 py-1.5 text-sm font-bold text-foreground">
          $0.00
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-1.5 text-sm font-bold transition-colors">
          <Wallet className="w-4 h-4" />
          Wallet
        </button>
      </div>

      {/* Right - Auth */}
      <button className="flex items-center gap-2 bg-secondary hover:bg-muted text-foreground rounded-lg px-4 py-2 text-sm font-medium transition-colors">
        <LogIn className="w-4 h-4" />
        Sign In
      </button>
    </header>
  );
};

export default Navbar;
