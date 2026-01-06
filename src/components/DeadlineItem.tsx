import { Beaker, BookOpen, Calculator, TrendingUp, LucideIcon } from "lucide-react";

interface DeadlineItemProps {
  subject: "chemistry" | "history" | "math" | "economics";
  title: string;
  dueText: string;
  date: string;
  progress: number;
}

const subjectConfig: Record<string, { icon: LucideIcon; color: string }> = {
  chemistry: { icon: Beaker, color: "bg-chemistry" },
  history: { icon: BookOpen, color: "bg-history" },
  math: { icon: Calculator, color: "bg-math" },
  economics: { icon: TrendingUp, color: "bg-economics" },
};

const DeadlineItem = ({ subject, title, dueText, date, progress }: DeadlineItemProps) => {
  const { icon: Icon, color } = subjectConfig[subject];

  return (
    <div className="py-3">
      <div className="flex items-start gap-3">
        <div className={`subject-icon ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-card-foreground truncate">{title}</h4>
              <span className="text-sm text-muted-foreground">{dueText}</span>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">{date}</span>
          </div>
          <div className="progress-track mt-2">
            <div 
              className="progress-fill bg-primary" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeadlineItem;
