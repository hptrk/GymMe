import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import { HiMenuAlt2 } from "react-icons/hi";

function LandingPageNav() {
  return (
    <nav className="grid grid-cols-3 items-center bg-transparent px-6 py-3">
      <HiMenuAlt2 color="#fafafa" size={30} style={{ display: "inline" }} />
      <Logo />
      <Button type={"transparent"} size={"small"} isLastGridItem={true}>
        login
      </Button>
    </nav>
  );
}

export default LandingPageNav;
