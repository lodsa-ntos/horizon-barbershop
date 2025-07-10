import React from "react";
import GlobalContainer from "./Container";

function FooterSection() {
  return (
    <footer className="w-full bg-transparent border-t border-matte-golden-beige-light pt-20 pb-20">
      <GlobalContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
         
          {/* Brand */}
          <div className="">
            <h2 className="text-2xl font-bold font-Lobster text-matte-golden-beige-light mb-2">
              Horizon Barber'shop
            </h2>
            <p className="text-matte-golden-beige-light">
              Corte com visão. Estilo com propósito.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#bb8c4d]">
                  Home
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#bb8c4d]">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:text-[#bb8c4d]">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#reservas" className="hover:text-[#bb8c4d]">
                  Reservas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p class="text-sm">+351 912 345 678</p>
            <p class="text-sm">contato@horizon.pt</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/horizonbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#bb8c4d]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/horizonbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#bb8c4d]"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/horizonbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#bb8c4d]"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/horizonbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#bb8c4d]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </GlobalContainer>
    </footer>
  );
}

export default FooterSection;
