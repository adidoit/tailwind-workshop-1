import { cn } from "@/lib/utils";
import { Map, ShoppingBag, Info, Settings, LucideIcon } from "lucide-react";

type NavButtonProps = {
  active?: boolean;
  icon: LucideIcon;
};

const NavButton = ({ active, icon: Icon }: NavButtonProps) => {
  return (
    <button className={cn("p-2 rounded-lg px-3", active && "bg-sky-500/50")}>
      <Icon className="text-neutral-600" />
    </button>
  );
};

export const Navigation = () => {
  return (
    <div className="flex gap-x-4">
      <NavButton active icon={Map} />
      <NavButton icon={ShoppingBag} />
      <NavButton icon={Info} />
      <NavButton icon={Settings} />
    </div>
  );
};
