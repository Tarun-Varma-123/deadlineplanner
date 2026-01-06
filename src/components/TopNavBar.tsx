import { GraduationCap } from "lucide-react";

interface TopNavBarProps {
  avatarUrl?: string;
}

const TopNavBar = ({ avatarUrl }: TopNavBarProps) => {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-semibold text-foreground text-lg">Smart Deadline</span>
      </div>
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
        {avatarUrl ? (
          <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary-foreground font-semibold">
            J
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
