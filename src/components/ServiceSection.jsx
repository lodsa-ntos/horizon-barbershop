import React from "react";
import GlobalContainer from "./Container";

function ServiceSection() {
  return (
    <section className="bg-white py-3 min-h-screen">
      {/* Section Title */}
      <h2 className="text-xs sm:text-sm text-matte-golden-beige font-semibold text-center block mb-2 uppercase tracking-wide">
        Os Nossos Serviços
      </h2>
      <p className="text-center text-charcoal-black mb-10 text-[32px] font-medium leading-10 tracking-wide">
        Cortes, aparos e tratamentos <br />
        que elevam o teu estilo e confiança.
      </p>

      <GlobalContainer>
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">

          {/* Service Card 1 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-1.jpg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-400 mb-4">
                  Cortes modernos e clássicos para todos os estilos.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte de classíco
            </h3>
          </div>

          {/* Service Card 2 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-1.jpg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-400 mb-4">
                  Cortes modernos e clássicos para todos os estilos.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte de classíco
            </h3>
          </div>

          {/* Service Card 3 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-1.jpg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-400 mb-4">
                  Cortes modernos e clássicos para todos os estilos.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte de classíco
            </h3>
          </div>

          {/* Service Card 4 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-1.jpg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-400 mb-4">
                  Cortes modernos e clássicos para todos os estilos.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte de classíco
            </h3>
          </div>

          {/* Service Card 5 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-1.jpg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-400 mb-4">
                  Cortes modernos e clássicos para todos os estilos.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte de classíco
            </h3>
          </div>

          {/* Service Card 6 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-1.jpg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-400 mb-4">
                  Cortes modernos e clássicos para todos os estilos.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte de classíco
            </h3>
          </div>

          {/* Service Card 7 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-1.jpg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-400 mb-4">
                  Cortes modernos e clássicos para todos os estilos.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte de classíco
            </h3>
          </div>

          {/* Service Card 8 */}
          <div className="text-center mb-2">
            <div className="bg-gray-100 max-w-xs mx-auto h-[345px] shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src="images/cortes/classicos/classico-1.jpg"
                alt="corte de cabelo"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[485px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-400 mb-4">
                  Cortes modernos e clássicos para todos os estilos.
                </p>
              </div>
            </div>
            <h3 className="flex justify-center mt-4 text-[16px] font-regular mb-3">
              Corte de classíco
            </h3>
          </div>

        </div>
      </GlobalContainer>
    </section>
  );
}

export default ServiceSection;
