import { Sparkles } from "lucide-react";
import StudyTaskItem from "./StudyTaskItem";

const tasks = [
  {
    subject: "chemistry" as const,
    title: "Finish Draft of Chemistry Lab Report",
    timeRange: "9:00 AM - 11:00 AM",
    progress: 65,
  },
  {
    subject: "history" as const,
    title: "Research History Essay on WWII",
    timeRange: "11:30 AM - 1:00 PM",
    progress: 30,
  },
  {
    subject: "math" as const,
    title: "Practice Calculus Integrals",
    timeRange: "2:00 PM - 3:30 PM",
    completed: true,
  },
  {
    subject: "economics" as const,
    title: "Revise Economics Chapter Notes",
    timeRange: "4:00 PM - 5:00 PM",
  },
];

const TodayStudyPlanCard = () => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <div className="ios-card mx-5">
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="w-5 h-5 text-accent" />
        <h3 className="font-semibold text-card-foreground text-lg">Today's Study Plan</h3>
        <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
          AI-Generated
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{today}</p>

      <div>
        {tasks.map((task, index) => (
          <StudyTaskItem key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TodayStudyPlanCard;
