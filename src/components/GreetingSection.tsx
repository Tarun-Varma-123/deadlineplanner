interface GreetingSectionProps {
  name: string;
}

const GreetingSection = ({ name }: GreetingSectionProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="px-5 py-4">
      <h1 className="text-2xl font-bold text-foreground">
        {getGreeting()}, {name}! 👋
      </h1>
      <p className="text-muted-foreground mt-1">
        Here's your smart study schedule for today:
      </p>
    </div>
  );
};

export default GreetingSection;
