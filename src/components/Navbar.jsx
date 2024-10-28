import { Link } from "react-router-dom";
import { navList } from "../constants/index";
import logoImg from "/images/logoImg.svg";
import PrimaryButton from "./ui/ContactBtn";
import BurgerMenu from "./ui/HamburgerMenu";

const Navbar = () => {
  return (
    <header id="--header" className="full-width justify-around pady-5 flex-center position-fixed">
      <Link to="/">

      <div>
        <img
          src={logoImg}
          alt="Tevin's logo"
          width={20}
          height={20}
          className="transition-all pointer"
        />
      </div>
      </Link>

      <nav
        className="flex-center justify-center text-gray pointer padx-5 text-sm gap transition-all"
      >
        {navList.map((nav) => (
          <Link key={nav.name} to={nav.path} className="hover-white">
            {nav.name}
          </Link>
        ))}
      </nav>

      <div className="flex-center justify-center gap-sm">
        <PrimaryButton value="Contact" />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
