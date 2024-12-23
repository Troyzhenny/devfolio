import { Fade as Hamburger } from "hamburger-react";
import { footerLinks, navList } from "../../constants";
import { Link } from "react-router-dom";
import { useState } from "react";


const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false)
  }

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
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
        />

        {isMenuOpen && (
          <div id="menu" className="flex-center justify-center flex-column gap">
            {navList.map((nav) => (
              <Link
                key={nav.name}
                to={nav.path}
                className="hover-white flex-center justify-center"
                onClick={handleMenuLinkClick}
              >
                {nav.name}
              </Link>
            ))}

            <br />
            <br />
            <br />

            <div className="flex-center justify-center gap">
              {footerLinks.map((site) => (
                <Link
                  key={site.name}
                  to={site.url}
                  className="hover-white flex-center gap-sm"
                >
                  <site.Icon />
                  {site.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BurgerMenu;
