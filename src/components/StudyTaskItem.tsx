import { Beaker, BookOpen, Calculator, TrendingUp, Check, LucideIcon } from "lucide-react";

interface StudyTaskItemProps {
  subject: "chemistry" | "history" | "math" | "economics";
  title: string;
  timeRange: string;
  progress?: number;
  completed?: boolean;
}

const subjectConfig: Record<string, { icon: LucideIcon; color: string; bgColor: string }> = {
  chemistry: { icon: Beaker, color: "text-chemistry", bgColor: "bg-chemistry/10" },
  history: { icon: BookOpen, color: "text-history", bgColor: "bg-history/10" },
  math: { icon: Calculator, color: "text-math", bgColor: "bg-math/10" },
  economics: { icon: TrendingUp, color: "text-economics", bgColor: "bg-economics/10" },
};

const StudyTaskItem = ({ subject, title, timeRange, progress, completed }: StudyTaskItemProps) => {
  const { icon: Icon, color, bgColor } = subjectConfig[subject];

  return (
    <div className="task-item">
      <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-card-foreground text-sm leading-tight">{title}</h4>
        <span className="text-xs text-muted-foreground">{timeRange}</span>
      </div>
      <div className="flex-shrink-0">
        {completed ? (
          <div className="w-7 h-7 rounded-full bg-success flex items-center justify-center">
            <Check className="w-4 h-4 text-success-foreground" />
          </div>
        ) : progress !== undefined ? (
          <div className="w-10 h-10 relative">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-muted"
              />
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray={`${progress * 1.005} 100.5`}
                className="text-primary"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-foreground">
              {progress}%
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StudyTaskItem;
