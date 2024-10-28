import { Fade as Hamburger } from "hamburger-react";
import { navList } from "../../constants";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <>
      <div id="--ham-container">
        <Hamburger
          direction="right"
          size={20}
          duration={0.3}
          distance="md"
          color="white"
          easing="ease-in"
        >
          {navList.map((nav) => (
            <Link key={nav.name} to={nav.path} className="hover-white">
              {nav.name}
            </Link>
          ))}
        </Hamburger>
      </div>
    </>
  );
};

export default BurgerMenu;
