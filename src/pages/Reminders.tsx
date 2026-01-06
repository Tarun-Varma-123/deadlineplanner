import StatusBar from "@/components/StatusBar";
import TopNavBar from "@/components/TopNavBar";
import BottomNavBar from "@/components/BottomNavBar";
import { Bell, Plus, Check, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const reminders = [
  {
    id: 1,
    title: "Chemistry Lab Report due tomorrow",
    time: "11:59 PM",
    date: "Apr 24",
    active: true,
  },
  {
    id: 2,
    title: "Start History Essay research",
    time: "2:00 PM",
    date: "Apr 23",
    active: true,
  },
  {
    id: 3,
    title: "Calculus practice session",
    time: "4:00 PM",
    date: "Apr 23",
    completed: true,
  },
  {
    id: 4,
    title: "Review Economics notes",
    time: "6:00 PM",
    date: "Apr 25",
    active: true,
  },
];

const Reminders = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <StatusBar />
      <TopNavBar />

      <main className="pb-28 px-5">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-foreground">Reminders</h1>
          <Button size="sm" className="rounded-full gap-1.5">
            <Plus className="w-4 h-4" />
            Add New
          </Button>
        </div>

        <div className="space-y-3">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className={`ios-card flex items-start gap-3 ${
                reminder.completed ? "opacity-60" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  reminder.completed
                    ? "bg-success"
                    : "bg-primary/10"
                }`}
              >
                {reminder.completed ? (
                  <Check className="w-5 h-5 text-success-foreground" />
                ) : (
                  <Bell className="w-5 h-5 text-primary" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-medium text-card-foreground ${
                    reminder.completed ? "line-through" : ""
                  }`}
                >
                  {reminder.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>
                    {reminder.date} at {reminder.time}
                  </span>
                </div>
              </div>
              <button className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
};

export default Reminders;
