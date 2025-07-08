import React from "react";
import GlobalContainer from "./Container";

function ExtrasUpsellsSection() {
  return (
    <section className="bg-white min-h-screen">
      <div>
        {/* Image element */}
          <img
          src="images/banners/man-products.jpg"
          alt="corte de cabelo"
          className="block min-w-[100vw] h-80 sm:h-80 md:h-96 lg:h-[650px] object-cover transition duration-300"
        />
      </div>

      {/* Section Title */}
      <div className="block mt-12 mb-6">
        <h2 className="text-[10px] text-beige-darker font-light text-center block mb-2 uppercase leading-4 tracking-[.0625rem]">
          Valor adicional
        </h2>
        <p className="text-center text-charcoal-black  text-[32px] font-[400] leading-10 tracking-wide">
          Extras e Upsells
        </p>
      </div>

      {/* Service Cards */}
      <GlobalContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Service Card 1 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/serviço premium/cor/cor-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Cobertura de brancos ou mudança discreta, sem exageros.
                </p>
              </div>
            </div>
            <h3 className="flex justify-start mt-4 text-[14px] font-regular mb-3">
              Coloração Masculina
            </h3>
          </div>

          {/* Service Card 2 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/serviço premium/cor/limpeza-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Limpeza, tonificação e hidratação em 15 min
                </p>
              </div>
            </div>
            <h3 className="flex justify-start mt-4 text-[14px] font-regular mb-3">
              Terapia Facial Express
            </h3>
          </div>

          {/* Service Card 3 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/serviço premium/cor/sobrancelha-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Limpeza com navalha ou pinça, respeitando o formato do rosto.
                </p>
              </div>
            </div>
            <h3 className="flex justify-start mt-4 text-[14px] font-regular mb-3">
              Design de Sobrancelhas
            </h3>
          </div>

          {/* Service Card 4 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/serviço premium/cor/detox-1.svg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-100 text-shadow-lg-super mb-4">
                  Remove impurezas e reduz oleosidade, pós-barba ideal.
                </p>
              </div>
            </div>
            <h3 className="flex justify-start mt-4 text-[14px] font-regular mb-3">
              Máscara Detox Facial
            </h3>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
}

export default ExtrasUpsellsSection;
