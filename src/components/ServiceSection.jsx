import React from "react";
import GlobalContainer from "./Container";

function ServiceSection() {
  return (
    <section className="bg-white py-3 min-h-screen">
      {/* Section Title */}
      <h2 className="text-center text-charcoal-black  text-[30px] font-bold leading-10 tracking-wide mb-2">
        Escolhe o teu corte. Reinventa o teu visual.
      </h2>
      <p className="text-center text-charcoal-black  text-[15px] font-medium  tracking-wide mb-14">
        De cortes clássicos a fades modernos, com técnica e atenção ao detalhe.
      </p>

      <GlobalContainer>
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Service Card 1 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-2.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Corte estruturado, manutenção do estilo tradicional.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte Clássico
            </h3>
          </div>

          {/* Service Card 2 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/deluxe/deluxe-2.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Estilos modernos e personalizados, desde tranças clássicas a
                  padrões criativos. Requer agendamento antecipado.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte Deluxe
            </h3>
          </div>

          {/* Service Card 3 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/infantil/infantil-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Adaptado a crianças, rápido e confortável.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte Infantil
            </h3>
          </div>

          {/* Service Card 4 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/barbas/barbas-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Navalha ou máquina, com linha bem definida.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Barba & Contorno
            </h3>
          </div>

          {/* Service Card 5 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/simples/simples-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Para quem tem pressa mas não abdica de um bom estilo. Corte
                  rápido e eficaz.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Serviço Express
            </h3>
          </div>

          {/* Service Card 6 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/shave/shave-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Cuidado completo da barba com espuma, navalha e finalização
                  precisa.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Barba VIP
            </h3>
          </div>

          {/* Service Card 7 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/alinhamento/corte-cabelo-kid+adult-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Corte com degradê perfeito — transição suave entre níveis de
                  cabelo, do natural ao zero.
                </p>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="text-[16px] font-regular leading-tight">
                Corte Pai & Filho
              </h3>
              <p className="text-sm text-gray-500">(Kids + Adulto juntos)</p>
            </div>
          </div>

          {/* Service Card 8 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/skinfade/fade-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Corte com degradê perfeito — transição suave entre níveis de
                  cabelo, do natural ao zero.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Fade / Skin Fade
            </h3>
          </div>
        </div>
      </GlobalContainer>

      {/* CTA Button center */}
      <div>
        <div className="flex justify-center mt-[43px]">
          <a
            href="#"
            className="text-charcoal-black border border-charcoal-black
             hover:ring-inset hover:ring-1 hover:ring-gray-800 px-8 py-2 rounded-full text-lg font-regular transition duration-900 ease-in-out"
          >
            Reservar
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
