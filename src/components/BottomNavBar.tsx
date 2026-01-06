import { Calendar, Bell, BarChart3, User } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active }: NavItemProps) => (
  <button className={`nav-item ${active ? 'active' : ''}`}>
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="max-w-md mx-auto flex items-center justify-around py-1 pb-6">
        <NavItem 
          icon={<Calendar className="w-6 h-6" />} 
          label="Schedule" 
          active 
        />
        <NavItem 
          icon={<Bell className="w-6 h-6" />} 
          label="Reminders" 
        />
        <NavItem 
          icon={<BarChart3 className="w-6 h-6" />} 
          label="Insights" 
        />
        <NavItem 
          icon={<User className="w-6 h-6" />} 
          label="Profile" 
        />
      </div>
    </div>
  );
};

export default BottomNavBar;
