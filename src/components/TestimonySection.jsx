import React from "react";
import GlobalContaineir from "./Container";
import { MdPerson } from "react-icons/md";

function TestimonySection() {
  return (
    <section className="bg-white py-20 mb-[48px] min-h-screen">

      {/* Section Title */}
      <div className="block mt-5 mb-6">
        <h2 className="text-center text-charcoal-black  text-[32px] font-[400] leading-10 tracking-wide mb-4 break-words">
          Confiança conquistada a cada corte
        </h2>
        <p className="text-center text-[#767676] text-base font-[400] tracking-wide mb-1 break-words">
          Na Horizon, cada detalhe conta — e são os nossos clientes que melhor
          resumem essa experiência.
        </p>
        <p className="text-center text-[#767676] text-base font-[400] tracking-wide mb-1 break-words flex gap-1 items-center justify-center">
          Mais do que um corte —<strong>palavras de quem confia.</strong>
        </p>
      </div>

      {/* Testimonials */}
      <GlobalContaineir>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


        <div>
          <div className="bg-gray-300 p-6 rounded-t-lg shadow-lg">
            <div className=" bg-beige-darker w-12 h-12 rounded-full flex items-center justify-center"><MdPerson className="text-white size-7"/></div>
            <h3 className="text-lg font-semibold">João Silva</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              "O melhor corte que já tive! Profissionais incríveis e um ambiente
              acolhedor."
            </p>
          </div>
        </div>




          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              "Sempre saio satisfeito! A equipe é super atenciosa e os cortes
              são impecáveis."
            </p>
            <h3 className="text-lg font-semibold">Maria Oliveira</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              "Ambiente agradável e profissionais qualificados. Recomendo a
              todos!"
            </p>
            <h3 className="text-lg font-semibold">Carlos Pereira</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              "Ambiente agradável e profissionais qualificados. Recomendo a
              todos!"
            </p>
            <h3 className="text-lg font-semibold">Carlos Pereira</h3>
          </div>
        </div>
      </GlobalContaineir>
    </section>
  );
}

export default TestimonySection;
