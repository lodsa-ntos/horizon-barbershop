import React from "react";
import { BsScissors } from "react-icons/bs";
import GlobalContainer from "./Container";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="flex items-center justify-center h-16 md:h-20">
        <GlobalContainer>
          <div className="flex items-center justify-between gap-10">
            {/* Navigation Links Left Side*/}
            <div>
              <ul className="flex space-x-6 uppercase font-bold text-sm">
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
            <div>
              <ul className="flex space-x-6 uppercase font-bold text-sm">
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
          </div>
        </GlobalContainer>
      </div>
    </nav>
  );
};

export default Navbar;
