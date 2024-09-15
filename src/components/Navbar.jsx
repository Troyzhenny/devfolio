import { navList } from "../constants/index";
import logoImg from "/images/logoImg.svg"
import PrimaryButton from "./ui/PrimaryButton";

const Navbar = () => {
  return (
    <>
      <header className="full-width  pady-5 flex-center justify-between position-fixed">
        <nav className="flex-center full-width">
          <img src={logoImg} alt="Tevin's logo" width={20} height={20}
          className="transition-all pointer"
          />

          <div className="flex justify-center text-gray pointer padx-5 text-sm list-gap transition-all">
            {navList.map((nav) => (
              <div key={nav} className="hover-white">{nav}</div>
            ))}
          </div>

          <PrimaryButton />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
