import React, { useState, useEffect } from "react";
import { BsScissors } from "react-icons/bs";
import { LuUserRoundX } from "react-icons/lu";
import { TbSearch } from "react-icons/tb";
import { LuUserRoundCheck } from "react-icons/lu";
import GlobalContainer from "./Container";

const navLinksLeft = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
];

const navLinksRight = [
  { label: "Reservas", href: "/reservas" },
  { label: "Sobre nós", href: "/sobrenos" }
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
    label: "Conta",
    href: "/",
    icon: <LuUserRoundX className="size-4" />,
    className: "hidden md:block px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300",
    showOn: "md",
  },
];

function Navbar() {
  // Move hooks to the top-level of the component
  const [open, setOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-black shadow transition-all duration-300">
      <div className="flex items-center justify-center h-16 md:h-[88px]">
        
        {/* Search */}
        {actionLinks
          .filter((link) => link.showOn === "all")
          .map((link) => (
            <div className={link.className} key={link.label}>
              <ul className="flex transition-all duration-200 ease-in-out">
                <li>
                  <a
                    href={link.href}
                    className="text-white font-regular text-[0.875rem] leading-[1rem] tracking-[.025rem] hover:text-matte-golden-beige  transition-colors duration-300 flex items-center gap-2"
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
              <ul className="flex gap-x-10 uppercase text-sm tracking-wide font-medium">
                {navLinksLeft.map((link) => (
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
            <div className="relative w-28 h-[88px]  text-white text-center flex flex-col items-center justify-center  space-y-1">
              <a href="/">
                <img
                  src="/logo/horizon-logo.svg"
                  alt="Logo"
                  className="w-10 h-10 mt-1 sm:w-64 sm:h-64 transition-all duration-200"
                />
              </a>
            </div>

            {/* Navigation Links Right Side */}
            <div className="flex items-center justify-between gap-x-10">
              <ul className="flex gap-x-10 uppercase text-sm tracking-wide font-medium">
                {navLinksRight.map((link) => (
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
          .filter((link) => link.showOn === "md")
          .map((link) => (
            <div className={link.className} key={link.label}>
              <ul className="flex">
                <li>
                  <a
                    href={link.href}
                    className="text-white font-regular text-[0.875rem] leading-[1rem] tracking-[.025rem] hover:text-matte-golden-beige transition-colors duration-300 flex items-center gap-2"
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
}

export default Navbar;
