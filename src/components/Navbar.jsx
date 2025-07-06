import React from "react";
import { BsScissors } from "react-icons/bs";
import { LuUserRoundX } from "react-icons/lu";
import { TbSearch } from "react-icons/tb";
import { LuUserRoundCheck } from "react-icons/lu";
import GlobalContainer from "./Container";

const navLinksLeft = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

const navLinksRight = [
  { label: "Booking", href: "/" },
  { label: "More", href: "/services" },
];

const actionLinks = [
  {
    label: "Search",
    href: "/",
    icon: <TbSearch className="size-5" />,
    className: "px-12",
    showOn: "all",
  },
  {
    label: "Account",
    href: "/",
    icon: <LuUserRoundX className="size-4" />,
    className: "hidden md:block px-12",
    showOn: "md",
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-black shadow">
      <div className="flex items-center justify-center h-16 md:h-20">
        
        {/* Search */} 
        {actionLinks
          .filter(link => link.showOn === "all")
          .map(link => (
            <div className={link.className} key={link.label}>
              <ul className="flex transition-all duration-200 ease-in-out">
                <li>
                  <a
                    href={link.href}
                    className="text-white font-light text-[0.875rem] leading-[1rem] tracking-[.025rem] hover:text-matte-golden-beige  transition-colors duration-300 flex items-center gap-2"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              </ul>
            </div>
          ))}

        <GlobalContainer>
          <div className="flex items-center justify-between gap-10 ">
            {/* Navigation Links Left Side*/}
            <div className="flex items-center justify-between gap-x-10">
              <ul className="flex gap-x-10 uppercase text-sm tracking-wide font-[400]">
                {navLinksLeft.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white hover:text-matte-golden-beige transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LOGO or Brand Name */}
            <div className="relative w-24 h-60 bg-matte-golden-beige text-white text-center flex flex-col items-center justify-center banner-clip space-y-1">
              <img
                src="/logo/horizon-logo.svg"
                alt="Logo"
                className="w-10 h-10 mt-4 sm:w-32 sm:h-14 transition-all duration-200"
              />
              <p className="text-base font-Lobster font-[400]">Barber'shop</p>
            </div>

            {/* Navigation Links Right Side */}
            <div className="flex items-center justify-between gap-x-10">
              <ul className="flex gap-x-10 uppercase text-sm tracking-wide font-[400]">
                {navLinksRight.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white hover:text-matte-golden-beige transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlobalContainer>

        {/* Login */}        
        {actionLinks
          .filter(link => link.showOn === "md")
          .map(link => (
            <div className={link.className} key={link.label}>
              <ul className="flex">
                <li>
                  <a
                    href={link.href}
                    className="text-white font-light text-[0.875rem] leading-[1rem] tracking-[.025rem] hover:text-matte-golden-beige transition-colors duration-300 flex items-center gap-2"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
