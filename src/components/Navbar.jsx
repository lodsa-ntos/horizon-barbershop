import React from "react";
import { BsScissors } from "react-icons/bs";
import { LuUserRoundX } from "react-icons/lu";
import { TbSearch } from "react-icons/tb";
import { LuUserRoundCheck } from "react-icons/lu";
import GlobalContainer from "./Container";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="flex items-center justify-center h-16 md:h-20">

        <GlobalContainer>
          <div className="flex items-center justify-between gap-10 ">
            {/* Navigation Links Left Side*/}
            <div className="flex items-center justify-between gap-x-10">
              <div className="flex items-center gap-2">
              <TbSearch className="text-matte-golden-beige size-5"/>
              <span className="text-black font-[400] text-sm">Search</span>
            </div>
              <ul className="flex gap-x-10 uppercase text-sm tracking-wide font-[400]">
                <li>
                  <a
                    href="/"
                    className="text-black hover:text-matte-golden-beige transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-black hover:text-matte-golden-beige transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-black hover:text-matte-golden-beige transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Logo or Brand Name */}
            <div className="relative w-32 h-72 bg-matte-golden-beige text-white text-center flex flex-col items-center justify-center banner-clip space-y-1">
              {/* <!-- Conteúdo --> */}
              <img
                src="/logo/horizon-logo.svg"
                alt="Logo"
                className="w-10 h-10 mt-4 sm:w-32 sm:h-14 transition-all duration-200"
              />
              <p className="text-xs font-Lobster font-[400]">Barber'shop</p>
            </div>

            {/* Navigation Links Right Side */}
            <div className="flex items-center justify-between gap-x-10">
              {/* Navigation Links */}
              <ul className="flex gap-x-10 uppercase text-sm tracking-wide font-[400]">
                <li>
                  <a
                    href="/"
                    className="text-black hover:text-matte-golden-beige transition-colors duration-300"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-black hover:text-matte-golden-beige transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-black hover:text-matte-golden-beige transition-colors duration-300"
                  >
                    Booking
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-x-6 text-sm font-medium">
                <li>
                  <a href="/" className="text-black hover:text-matte-golden-beige transition-colors duration-300"><LuUserRoundX className="size-4"/></a>
                </li>
              </ul>
            </div>
          </div>
          
        </GlobalContainer>
      </div>
    </nav>
  );
};

export default Navbar;
