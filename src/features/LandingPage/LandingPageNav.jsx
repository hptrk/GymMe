import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import { HiMenuAlt2 } from "react-icons/hi";

function LandingPageNav() {
  return (
    <nav className="flex items-center justify-between bg-transparent px-6 py-3">
      <HiMenuAlt2 color="#fafafa" size={30} />
      <Logo />
      <Button>login</Button>
    </nav>
  );
}

export default LandingPageNav;
