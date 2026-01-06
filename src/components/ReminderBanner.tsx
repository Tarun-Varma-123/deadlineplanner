import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReminderBanner = () => {
  return (
    <div className="mx-5 alert-banner bg-success-light">
      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
        <Bell className="w-4 h-4 text-success" />
      </div>
      <p className="flex-1 text-sm text-foreground">
        <span className="font-medium">Reminder:</span> Chemistry Lab Report due tomorrow at 11:59 PM
      </p>
      <Button 
        size="sm" 
        className="bg-success hover:bg-success/90 text-success-foreground rounded-full px-4 h-8 text-xs font-semibold"
      >
        Got it!
      </Button>
    </div>
  );
};

export default ReminderBanner;
