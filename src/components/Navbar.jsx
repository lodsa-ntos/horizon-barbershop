import React, { useState, useEffect } from "react";
import { BsScissors } from "react-icons/bs";
import { LuUserRoundX } from "react-icons/lu";
import { TbSearch } from "react-icons/tb";
import { LuUserRoundCheck } from "react-icons/lu";
import GlobalContainer from "./Container";

const navLinksLeft = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

const navLinksRight = [{ label: "Booking", href: "/" }];

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
      <div className="flex items-center justify-center h-16 md:h-20">
        {/* Search */}
        {actionLinks
          .filter((link) => link.showOn === "all")
          .map((link) => (
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

              {/* Dropdown Menu - MORE */}
              <div className="relative" ref={dropdownRef}>
                <button
                  id="dropdownHoverButton"
                  className="flex items-center justify-center text-sm tracking-wide font-[400] text-white hover:text-matte-golden-beige uppercase transition-colors duration-300"
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                >
                  More{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  id="dropdownHover"
                  className={`z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-28 dark:bg-gray-700 transition-all duration-200 ${
                    open ? "" : "hidden"
                  }`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
}

export default Navbar;
