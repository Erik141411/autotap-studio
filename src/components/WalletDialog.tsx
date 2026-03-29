import { useState } from "react";
import { X, Copy } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface WalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletDialog = ({ open, onOpenChange }: WalletDialogProps) => {
  const [tab, setTab] = useState<"deposit" | "withdraw">("deposit");
  const [amount, setAmount] = useState("");

  const username = "DiddyMeister67";
  const command = `/pay ${username} [amount]`;

  const copyCommand = () => {
    const cmd = amount ? `/pay ${username} ${amount}` : command;
    navigator.clipboard.writeText(cmd);
    toast({ title: "Copied!", description: "Command copied to clipboard." });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border text-foreground max-w-md p-0 gap-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl font-black">Wallet</DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <div className="px-6">
          <div className="flex bg-secondary rounded-lg p-1">
            <button
              onClick={() => setTab("deposit")}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${
                tab === "deposit"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Deposit
            </button>
            <button
              onClick={() => setTab("withdraw")}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${
                tab === "withdraw"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Withdraw
            </button>
          </div>
        </div>

        {tab === "deposit" ? (
          <div className="p-6 space-y-5">
            {/* Amount */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-foreground mb-1">AMOUNT</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Use K, M, or B for thousands, millions, billions
              </p>
              <div className="flex items-center bg-secondary border border-border rounded-lg px-3 py-2.5">
                <span className="text-muted-foreground mr-3 font-bold">$</span>
                <input
                  type="text"
                  placeholder="e.g. 100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent flex-1 outline-none text-foreground placeholder:text-muted-foreground text-sm"
                />
              </div>
            </div>

            {/* Run In-Game */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-foreground mb-2">RUN IN-GAME</h4>
              <span className="inline-block bg-secondary border border-border rounded-md px-3 py-1.5 text-sm font-mono text-foreground mb-3">
                {username}
              </span>
              <button
                onClick={copyCommand}
                className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg p-4 text-left transition-colors group"
              >
                <p className="text-sm font-mono font-bold text-foreground">{command}</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Copy className="w-3 h-3" /> Click to copy
                </p>
              </button>
            </div>

            {/* Info */}
            <div className="bg-secondary/50 border border-border rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground">
                Balance updates automatically when payment is received.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {/* Balance */}
            <div>
              <p className="text-sm text-muted-foreground">
                Balance: <span className="font-bold text-foreground">$0.00</span>
              </p>
            </div>

            {/* Amount */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-foreground mb-1">AMOUNT</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Use K, M, or B for thousands, millions, billions
              </p>
              <div className="flex items-center bg-secondary border border-border rounded-lg px-3 py-2.5">
                <span className="text-muted-foreground mr-3 font-bold">$</span>
                <input
                  type="text"
                  placeholder="e.g. 100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent flex-1 outline-none text-foreground placeholder:text-muted-foreground text-sm"
                />
              </div>
            </div>

            {/* Request button */}
            <button className="w-full bg-foreground text-background font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
              Request Withdrawal
            </button>

            {/* Info */}
            <div className="bg-secondary/50 border border-border rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground">
                The bot will pay you in-game. Make sure you're online.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WalletDialog;
