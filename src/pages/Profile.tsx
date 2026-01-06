import StatusBar from "@/components/StatusBar";
import TopNavBar from "@/components/TopNavBar";
import BottomNavBar from "@/components/BottomNavBar";
import { User, Bell, Palette, Shield, HelpCircle, LogOut, ChevronRight } from "lucide-react";

const menuItems = [
  { icon: User, label: "Edit Profile", description: "Update your personal info" },
  { icon: Bell, label: "Notifications", description: "Manage alerts & reminders" },
  { icon: Palette, label: "Appearance", description: "Theme & display settings" },
  { icon: Shield, label: "Privacy", description: "Data & security options" },
  { icon: HelpCircle, label: "Help & Support", description: "FAQs and contact us" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <StatusBar />
      <TopNavBar />

      <main className="pb-28 px-5">
        {/* Profile Header */}
        <div className="ios-card flex items-center gap-4 my-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold">
            J
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-card-foreground">John Smith</h2>
            <p className="text-muted-foreground text-sm">john.smith@university.edu</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                Computer Science
              </span>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                Year 2
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="ios-card text-center">
            <span className="text-2xl font-bold text-primary">12</span>
            <p className="text-xs text-muted-foreground mt-1">Active Tasks</p>
          </div>
          <div className="ios-card text-center">
            <span className="text-2xl font-bold text-success">47</span>
            <p className="text-xs text-muted-foreground mt-1">Completed</p>
          </div>
          <div className="ios-card text-center">
            <span className="text-2xl font-bold text-accent">92%</span>
            <p className="text-xs text-muted-foreground mt-1">On Time</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="ios-card p-0 overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors ${
                index !== menuItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-medium text-card-foreground">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <button className="ios-card w-full flex items-center justify-center gap-2 mt-4 text-destructive font-medium">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </main>

      <BottomNavBar />
    </div>
  );
};

export default Profile;
