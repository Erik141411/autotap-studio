import Navbar from "@/components/Navbar";
import GameSidebar from "@/components/GameSidebar";
import MainContent from "@/components/MainContent";
import ChatPanel from "@/components/ChatPanel";

const Index = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 min-h-0">
        <GameSidebar />
        <MainContent />
        <ChatPanel />
      </div>
    </div>
  );
};

export default Index;
