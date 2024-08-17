import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { Actions } from "@/components/actions";

const Header = () => {
  return (
    <header className="h-16 border-b-2">
      <nav className="flex justify-between max-w-screen-lg mx-auto h-full items-center">
        <Logo />
        <Navigation />
        <Actions />
      </nav>
    </header>
  );
};

export default Header;
