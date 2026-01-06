import { Calendar, Bell, BarChart3, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Calendar, label: "Schedule", path: "/" },
  { icon: Bell, label: "Reminders", path: "/reminders" },
  { icon: BarChart3, label: "Insights", path: "/insights" },
  { icon: User, label: "Profile", path: "/profile" },
];

const BottomNavBar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="max-w-md mx-auto flex items-center justify-around py-1 pb-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;
