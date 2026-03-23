import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardContent from "@/components/DashboardContent";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardContent />
    </div>
  );
};

export default Index;
