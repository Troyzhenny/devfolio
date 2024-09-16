import { Link } from "react-router-dom";
import { navList } from "../constants/index";
import logoImg from "/images/logoImg.svg";
import PrimaryButton from "./ui/PrimaryButton";

const Navbar = () => {
  return (
    <header className="full-width pady-5 flex position-fixed">
      <nav className="flex-center full-width padx-5">
        <Link to="/">
          <img 
            src={logoImg} 
            alt="Tevin's logo" 
            width={20} 
            height={20} 
            className="transition-all pointer"
          />
        </Link>

        <div className="flex justify-center text-gray pointer padx-5 text-sm list-gap transition-all">
          {navList.map((nav) => (
            <Link key={nav.name} to={nav.path} className="hover-white">
              {nav.name}
            </Link>
          ))}
        </div>

        <PrimaryButton />
      </nav>
    </header>
  );
};

export default Navbar;
