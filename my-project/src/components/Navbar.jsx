import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks, features } from "../constants/index.js";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />
      <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
        {navLinks.map((nav, index) => {
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-red bg-stone-100 `}
          >
            <a href={`#${nav.id}`}>{nav.title[index]}</a>
          </li>;
        })}
      </ul>
    <div className="text-red-400 bg-stone-200">
      {features.title}
      hey
    </div>
    </nav>
  );
};

export default Navbar;
