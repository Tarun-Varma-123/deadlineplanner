import { Signal, Wifi, Battery } from "lucide-react";

const StatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className="flex items-center justify-between px-6 py-2 text-foreground">
      <span className="text-sm font-semibold">{currentTime}</span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-5 h-5" />
      </div>
    </div>
  );
};

export default StatusBar;
