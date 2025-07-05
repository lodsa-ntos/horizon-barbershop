import React from "react";
import { BsScissors } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 transition-all duration-300 z-50 bg-charcoal-black text-white">
      <div className="w-full flex items-center justify-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 transition-all duration-300">
        <div className="flex items-center justify-between gap-10">
          {/* Navigation Links Left Side*/}
          <div>
            <ul className="flex space-x-6 ">
              <li>
                <a
                  href="/"
                  className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Logo or Brand Name */}
          <div className="relative w-32 h-72 bg-matte-golden-beige text-white text-center flex flex-col items-center justify-center banner-clip space-y-1">
            {/* <!-- Conteúdo --> */}
            <BsScissors className="w-7 h-7 mt-5"/>
            <div className="text-sm md:text-base flex-wrap items-center justify-center">
              <p className="font-bold">HORIZON</p>
              <p className="text-xs">Barber'shop</p>
            </div>
          </div>

          {/* Navigation Links Right Side */}
          <div>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
