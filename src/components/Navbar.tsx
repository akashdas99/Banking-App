import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex w-full py-6 justify-between items-center">
      <img src={logo} alt="Modernbank" className="w-[124px] h-[32px]" />
      <ul className="flex-1 list-none items-center justify-end sm:flex hidden navbar">
        {navLinks.map((nav, id) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              id === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar sm:hidden`}
      >
        <ul className="list-none items-start flex flex-col flex-1 justify-end navbar">
          {navLinks.map((nav, id) => (
            <li
              key={nav.id}
              className={`py-4 font-poppins font-normal cursor-pointer text-[16px] text-white ${
                id === navLinks.length - 1 ? "mr-0" : "mb-4"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
