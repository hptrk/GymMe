import Button from './Button';
import Logo from './Logo';
import { HiMenuAlt2 } from 'react-icons/hi';

function LandingPageNav() {
  return (
    <nav className="h-10">
      <HiMenuAlt2 />
      <Logo />
      <Button>Login</Button>
    </nav>
  );
}

export default LandingPageNav;
