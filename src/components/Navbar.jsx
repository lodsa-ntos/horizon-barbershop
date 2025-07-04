import React from "react";

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
          <div class="relative w-32 h-72 bg-[#A68C6D] text-white text-center flex flex-col items-center justify-center clip-bandeira">
            {/* <!-- Conteúdo --> */}
            <svg
              class="w-6 h-6 mb-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              {/* <!-- Exemplo de ícone de tesoura, substitua por outro se quiser --> */}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.121 14.121l5.657-5.657m-2.828 8.485a3 3 0 11-4.243-4.243m4.243 0a3 3 0 11-4.243-4.243m6.364 6.364L9.88 9.879M7.757 16.243a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
            <p class="text-sm font-bold leading-tight">
              BARBER
              <br />
              REVOLUTION
            </p>
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
