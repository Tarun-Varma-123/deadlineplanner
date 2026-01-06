import StatusBar from "@/components/StatusBar";
import TopNavBar from "@/components/TopNavBar";
import GreetingSection from "@/components/GreetingSection";
import UpcomingDeadlinesCard from "@/components/UpcomingDeadlinesCard";
import TodayStudyPlanCard from "@/components/TodayStudyPlanCard";
import ReminderBanner from "@/components/ReminderBanner";
import BottomNavBar from "@/components/BottomNavBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {/* Status Bar */}
      <StatusBar />
      
      {/* Top Navigation */}
      <TopNavBar />
      
      {/* Main Content */}
      <main className="pb-28 space-y-4">
        {/* Greeting */}
        <GreetingSection name="John" />
        
        {/* Upcoming Deadlines Card */}
        <UpcomingDeadlinesCard />
        
        {/* Today's Study Plan Card */}
        <TodayStudyPlanCard />
        
        {/* Reminder Banner */}
        <ReminderBanner />
      </main>
      
      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default Index;
