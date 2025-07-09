import React from "react";
import GlobalContaineir from "./Container";
import { MdPerson } from "react-icons/md";
import StarRating from "../utils/StarRating";

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

          {/* Testimonial Card 1 */}
          <div className="bg-[#f9fafb] border-b-2 border-solid border-[#bb8c4d] inset-0 rounded-lg shadow-md">
            
            <div className="bg-[#2B2B2B] p-6 rounded-t-lg flex items-center justify-between gap-5">
              <div className="flex items-center justify-start gap-2">
                <div className=" bg-[#484848] w-10 h-10 rounded-full flex items-center justify-center">
                  <MdPerson className="text-[#F8F5F2] size-5" />
                </div>

                {/* Customer Name */}
                <div>
                  <h3 className="text-base text-white font-bold">André Costa</h3>
                <span className="text-[0.75rem] text-[#999] font-[700]">Cliente verificado</span>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <StarRating rating={5} />
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-[#2B2B2B] mb-4 p-6">
              "Ambiente tranquilo, atendimento top e um corte que me surpreendeu. Voltarei com certeza."
            </p>
          </div>

            {/* Testimonial Card 2 */}
            <div className="bg-[#f9fafb] border-b-2 border-solid border-[#bb8c4d] inset-0 rounded-lg shadow-md">
            
            <div className="bg-[#2B2B2B] p-6 rounded-t-lg flex items-center justify-between gap-5">
              <div className="flex items-center justify-start gap-2">
                <div className=" bg-[#484848] w-10 h-10 rounded-full flex items-center justify-center">
                  <MdPerson className="text-[#F8F5F2] size-5" />
                </div>

                {/* Customer Name */}
                <div>
                  <h3 className="text-base text-white font-bold">Tiago Rodrigues</h3>
                <span className="text-[0.75rem] text-[#999] font-[700]">Cliente verificado</span>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <StarRating rating={5} />
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-[#2B2B2B] mb-4 p-6">
              "Profissionalismo e simpatia desde o primeiro minuto. O degradê ficou impecável."
            </p>
          </div>

            {/* Testimonial Card 3 */}
            <div className="bg-[#f9fafb] border-b-2 border-solid border-[#bb8c4d] inset-0 rounded-lg shadow-md">
            
            <div className="bg-[#2B2B2B] p-6 rounded-t-lg flex items-center justify-between gap-5">
              <div className="flex items-center justify-start gap-2">
                <div className=" bg-[#484848] w-10 h-10 rounded-full flex items-center justify-center">
                  <MdPerson className="text-[#F8F5F2] size-5" />
                </div>

                {/* Customer Name */}
                <div>
                  <h3 className="text-base text-white font-bold">Miguel Barros</h3>
                <span className="text-[0.75rem] text-[#999] font-[700]">Cliente verificado</span>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <StarRating rating={5} />
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-[#2B2B2B] mb-4 p-6">
              "Corte perfeito, barba alinhada e uma conversa agradável. Tudo impecável."
            </p>
          </div>

            {/* Testimonial Card 4 */}
            <div className="bg-[#f9fafb] border-b-2 border-solid border-[#bb8c4d] inset-0 rounded-lg shadow-md">
            
            <div className="bg-[#2B2B2B] p-6 rounded-t-lg flex items-center justify-between gap-5">
              <div className="flex items-center justify-start gap-2">
                <div className=" bg-[#484848] w-10 h-10 rounded-full flex items-center justify-center">
                  <MdPerson className="text-[#F8F5F2] size-5" />
                </div>

                {/* Customer Name */}
                <div>
                  <h3 className="text-base text-white font-bold">Joana Ferreira</h3>
                <span className="text-[0.75rem] text-[#999] font-[700]">Cliente verificado</span>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <StarRating rating={5} />
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-[#2B2B2B] mb-4 p-6">
              "Levei o meu filho para cortar o cabelo e adorámos o atendimento. Super atenciosos."
            </p>
          </div>

          {/* Testimonial Card 5 */}
          <div className="bg-[#f9fafb] border-b-2 border-solid border-[#bb8c4d] inset-0 rounded-lg shadow-md">
            
            <div className="bg-[#2B2B2B] p-6 rounded-t-lg flex items-center justify-between gap-5">
              <div className="flex items-center justify-start gap-2">
                <div className=" bg-[#484848] w-10 h-10 rounded-full flex items-center justify-center">
                  <MdPerson className="text-[#F8F5F2] size-5" />
                </div>

                {/* Customer Name */}
                <div>
                  <h3 className="text-base text-white font-bold">Fábio Martins</h3>
                <span className="text-[0.75rem] text-[#999] font-[700]">Cliente verificado</span>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <StarRating rating={5} />
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-[#2B2B2B] mb-4 p-6">
              "Foi a minha primeira vez e fiquei impressionado. Um dos melhores cortes que já tive."
            </p>
          </div>

          { /* Testimonial Card 6 */}
          <div className="bg-[#f9fafb] border-b-2 border-solid border-[#bb8c4d] inset-0 rounded-lg shadow-md">
            
            <div className="bg-[#2B2B2B] p-6 rounded-t-lg flex items-center justify-between gap-5">
              <div className="flex items-center justify-start gap-2">
                <div className=" bg-[#484848] w-10 h-10 rounded-full flex items-center justify-center">
                  <MdPerson className="text-[#F8F5F2] size-5" />
                </div>

                {/* Customer Name */}
                <div>
                  <h3 className="text-base text-white font-bold">Inês Rocha</h3>
                <span className="text-[0.75rem] text-[#999] font-[700]">Cliente verificado</span>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <StarRating rating={5} />
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-[#2B2B2B] mb-4 p-6">
              "Acompanhei o meu namorado e acabei por marcar um corte também. Saímos os dois satisfeitos."
            </p>
          </div>
        </div>
      </GlobalContaineir>
    </section>
  );
}

export default TestimonySection;
