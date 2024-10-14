import { Link } from "react-router-dom";
import { navList } from "../constants/index";
import logoImg from "/images/logoImg.svg";
import PrimaryButton from "./ui/ContactBtn";

const Navbar = () => {
  return (
    <header className="full-width justify-around pady-5 flex position-fixed">
      <Link to="/">
        <img
          src={logoImg}
          alt="Tevin's logo"
          width={20}
          height={20}
          className="transition-all pointer"
        />
      </Link>

      <nav className="flex-center justify-center text-gray pointer padx-5 text-sm gap transition-all">
        {navList.map((nav) => (
          <Link key={nav.name} to={nav.path} className="hover-white">
            {nav.name}
          </Link>
        ))}
      </nav>

      <PrimaryButton value="Contact" />
    </header>
  );
};

export default Navbar;
