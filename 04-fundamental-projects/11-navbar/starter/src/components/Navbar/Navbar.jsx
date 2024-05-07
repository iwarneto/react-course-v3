import Links from "./components/Links";
import Logo from "./components/Logo";
import SocialIcons from "./components/SocialIcons";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section>
        <Logo />
        <Links />
        <SocialIcons />
        <button type="button" className="navbar-toggle"><RxHamburgerMenu /></button>
      </section>
    </nav>
  );
};

export default Navbar;