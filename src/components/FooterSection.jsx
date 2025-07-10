import React from "react";
import GlobalContainer from "./Container";

function FooterSection() {
  return (
    <footer className="w-full bg-transparent border-t border-matte-golden-beige-light pt-8 pb-4">
      <GlobalContainer>
        <div className="flex flex-row gap-12 md:gap-24 pb-10">
         
          {/* Brand */}
          <div className="w-full md:w-[23%]">
            <h2 className="text-2xl font-bold font-Lobster text-[#bb8c4d] mb-2">
              Horizon Barber'shop
            </h2>
            <p className="text-sm text-[#bb8c4d]/90">
              Corte com visão. Estilo com propósito.
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-[20%]">
            <h3 className="text-lg font-semibold mb-4 ">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="block hover:text-[#bb8c4d]">
                  Home
                </a>
              </li>
              <li>
                <a href="#servicos" className="block hover:text-[#bb8c4d]">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="block hover:text-[#bb8c4d]">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#reservas" className="block hover:text-[#bb8c4d]">
                  Reservas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-[20%]">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm">+351 912 345 678</p>
            <p className="text-sm">contato@horizon.pt</p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-[20%]">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/horizonbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#bb8c4d]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/horizonbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#bb8c4d]"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/horizonbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#bb8c4d]"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/horizonbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#bb8c4d]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </GlobalContainer>

      {/* copy */}
        <div className="pt-4 text-center text-sm text-graphite-gray border-t 2">

          <GlobalContainer>
          <div className="flex flex-row justify-between gap-">
            <p>
            &copy; {new Date().getFullYear()} Horizon Barber'shop. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bb8c4d] hover:underline"
            >@lodex.studio</a>
          </p>
          </div>
          </GlobalContainer>
        </div>
    </footer>
  );
}

export default FooterSection;
