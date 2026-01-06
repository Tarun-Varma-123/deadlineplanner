import StatusBar from "@/components/StatusBar";
import TopNavBar from "@/components/TopNavBar";
import BottomNavBar from "@/components/BottomNavBar";
import { TrendingUp, Clock, CheckCircle, Target } from "lucide-react";

const stats = [
  {
    label: "Study Hours",
    value: "24.5",
    unit: "hrs",
    change: "+12%",
    icon: Clock,
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Tasks Done",
    value: "18",
    unit: "/25",
    change: "+8%",
    icon: CheckCircle,
    color: "bg-success/10 text-success",
  },
  {
    label: "On-Time Rate",
    value: "92",
    unit: "%",
    change: "+5%",
    icon: Target,
    color: "bg-accent/10 text-accent",
  },
  {
    label: "Productivity",
    value: "A-",
    unit: "",
    change: "↑",
    icon: TrendingUp,
    color: "bg-warning/10 text-warning",
  },
];

const weeklyData = [
  { day: "Mon", hours: 4.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 5.1 },
  { day: "Thu", hours: 2.8 },
  { day: "Fri", hours: 4.0 },
  { day: "Sat", hours: 2.5 },
  { day: "Sun", hours: 2.4 },
];

const maxHours = Math.max(...weeklyData.map((d) => d.hours));

const Insights = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <StatusBar />
      <TopNavBar />

      <main className="pb-28 px-5">
        <div className="py-4">
          <h1 className="text-2xl font-bold text-foreground">Insights</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Your productivity this week
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {stats.map((stat) => (
            <div key={stat.label} className="ios-card">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-4 h-4" />
                </div>
                <span className="text-xs text-success font-medium">{stat.change}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-card-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.unit}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Weekly Chart */}
        <div className="ios-card">
          <h3 className="font-semibold text-card-foreground mb-4">Weekly Study Hours</h3>
          <div className="flex items-end justify-between gap-2 h-32">
            {weeklyData.map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-muted rounded-t-lg relative" style={{ height: "100%" }}>
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all duration-500"
                    style={{ height: `${(item.hours / maxHours) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{item.day}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
            <span className="text-sm text-muted-foreground">Total this week</span>
            <span className="font-semibold text-card-foreground">24.5 hours</span>
          </div>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
};

export default Insights;
