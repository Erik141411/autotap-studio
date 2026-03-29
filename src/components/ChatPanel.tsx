import { Send, Smile, MessageCircle } from "lucide-react";
import { useState } from "react";

const mockMessages: { user: string; avatar: string; message: string; time: string; isAdmin?: boolean }[] = [];

const ChatPanel = () => {
  const [message, setMessage] = useState("");

  return (
    <aside className="w-[280px] bg-card border-l border-border flex flex-col min-h-0">
      {/* Header */}
      <div className="h-12 flex items-center justify-between px-4 border-b border-border">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">Chat</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">34 online</span>
        </div>
      </div>

      {/* Discord promo */}
      <div className="mx-3 mt-3 p-3 rounded-lg bg-[#5865F2]/10 border border-[#5865F2]/20">
        <div className="flex items-center gap-2">
          <span className="text-lg">💬</span>
          <span className="text-sm font-semibold text-[#5865F2]">Join our Discord!</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {mockMessages.map((msg, i) => (
          <div key={i} className="flex gap-2.5">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm flex-shrink-0">
              {msg.avatar}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold ${msg.isAdmin ? "text-accent" : "text-muted-foreground"}`}>
                  {msg.user}
                </span>
              </div>
              <p className="text-sm text-foreground break-words">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-muted-foreground">0/150</span>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Smile className="w-4 h-4" />
            </button>
            <button className="text-primary hover:text-primary/80 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ChatPanel;
