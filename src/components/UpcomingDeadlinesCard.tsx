import { AlertTriangle, Clock } from "lucide-react";
import DeadlineItem from "./DeadlineItem";

const deadlines = [
  {
    subject: "chemistry" as const,
    title: "Chemistry Lab Report",
    dueText: "Due 1 day",
    date: "Apr 24",
    progress: 65,
  },
  {
    subject: "history" as const,
    title: "History Essay",
    dueText: "Due this week",
    date: "Apr 26",
    progress: 30,
  },
  {
    subject: "math" as const,
    title: "Calculus Exam",
    dueText: "Due 5 days",
    date: "Apr 28",
    progress: 45,
  },
];

const UpcomingDeadlinesCard = () => {
  return (
    <div className="ios-card mx-5">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-card-foreground text-lg">Upcoming Deadlines</h3>
      </div>

      <div className="divide-y divide-border">
        {deadlines.map((deadline, index) => (
          <DeadlineItem key={index} {...deadline} />
        ))}
      </div>

      {/* Alert Banner */}
      <div className="alert-banner bg-warning-light mt-4">
        <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-4 h-4 text-warning" />
        </div>
        <p className="text-sm text-warning-foreground font-medium">
          High workload spike alert: 6 overlapping deadlines next week!
        </p>
      </div>
    </div>
  );
};

export default UpcomingDeadlinesCard;
