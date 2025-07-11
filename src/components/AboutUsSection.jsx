import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { IoIosCut } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";

function AboutUsSection() {
  const aboutUsData = [
    {
      icon: (
        <>
          <div>
            <RiTeamFill className="text-beige-darker size-6" />
          </div>
        </>
      ),
      title: <h3>Quem Somos?</h3>,
      description: (
        <p>
          A
            Horizon Barber'shop
          nasceu com a missão de resgatar a{" "}
          <strong className="text-matte-golden-beige ">
            {" "}
            essência da barbearia tradicional
          </strong>
          , aliando técnica moderna, ambiente acolhedor e um atendimento focado
          no detalhe.
          <br /> <br />
          Somos apaixonados por estilo, precisão e autenticidade — criamos
          experiências, não apenas cortes.
        </p>
      ),
    },
    {
      icon: (
        <>
          <div>
            <IoIosCut className="text-beige-darker size-6" />
          </div>
        </>
      ),
      title: <h3>O que nos move?</h3>,
      description: (
        <p>
          Acreditamos que o cuidado pessoal vai além da aparência.
          <br /> <br />
          Por isso, 
          <strong className="text-matte-golden-beige ml-1">
            oferecemos serviços personalizados
          </strong>
          , escutamos cada cliente e
          respeitamos o teu tempo, o teu gosto e a tua identidade.
          <strong className="text-matte-golden-beige"> Cortar o cabelo é também cuidar da autoestima.
          </strong>
        </p>
      ),
    },
  ];

  return (
    <section id="features" className="w-full bg-[#F6F4F0] mb-[80px] py-16 ">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
  
        {/* Middle side text */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">

            {/* Left side Heading text */}
          <div className="flex flex-col justify-start items-start col-span-1 md:col-span-2 lg:col-span-1 mb-8">

            <h2 className="text-[12px] text-beige-darker font-medium block uppercase leading-4 tracking-wider mb-2">
              Sobre nós
            </h2>

            <p className="text-start text-charcoal-black text-[32px] font-[400] leading-10 tracking-wide mb-10">
            <strong>Corte, identidade</strong> e <strong> confiança,</strong> <br />
               mais do que um simples serviço.
            </p>
          </div>

            {aboutUsData.map((item, index) => (
              <div key={index} className="flex flex-col items-start justify-start space-y-4">
                
                <div className="flex items-center space-x-4">
                  {item.icon}
                 <h3 className="text-xl font-semibold font-Satoshi text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-600 font-Satoshi text-base/6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
