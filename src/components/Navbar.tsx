import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative z-10">
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />
      <ul className="hidden sm:flex items-center justify-end flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={index === navLinks.length - 1 ? `` : `mr-10`}
          >
            <a
              href={`#${link.id}`}
              className="text-white font-poppins font-normal cursor-pointer text-[16px]"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="sm:hidden flex items-center justify-end cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? close : menu}
          alt="menu"
          className="object-contain h-[28px] w-[28px]"
        />
      </div>
      <div
        className={`sm:hidden ${
          isOpen ? `block` : `hidden`
        } flex flex-col items-center justify-center bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar p-6`}
      >
        <ul className="flex items-center justify-end flex-1 flex-col">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={index === navLinks.length - 1 ? `` : `mb-10`}
            >
              <a
                href={`#${link.id}`}
                className="text-white font-poppins font-normal cursor-pointer text-[16px]"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
