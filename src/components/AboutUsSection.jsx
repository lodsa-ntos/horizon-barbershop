import React from "react";
import { TbHexagonNumber1Filled } from "react-icons/tb";
import { TbHexagonNumber2Filled } from "react-icons/tb";

function AboutUsSection() {
  const aboutUsData = [
    {
      icon: (
        <>
          <div><TbHexagonNumber1Filled className="text-beige-darker size-6"/></div>
        </>
      ),
      title: <h3>Quem Somos?</h3>,
      description: (
        <p>
          Na Horizon Barber’shop, acreditamos que um corte de cabelo é mais do
          que estética, é uma afirmação de identidade. Criámos um espaço onde o
          tempo abranda, o ambiente acolhe e cada detalhe importa. <br /> <br />{" "}
          Aqui, tradição e precisão encontram-se para oferecer um serviço focado
          no cuidado masculino, com profissionalismo, atenção ao detalhe e
          estilo intemporal. Cada visita é uma experiência pensada, não uma
          rotina apressada.
        </p>
      ),
    },
    {
      icon: (
        <>
          <div><TbHexagonNumber2Filled className="text-beige-darker size-6"/></div>
        </>
      ),
      title: <h3>Para Quem É?</h3>,
      description: (
        <p>
          A Horizon é para o homem que procura mais do que um corte rápido. É
          para quem valoriza a sua imagem com consciência e pretende alinhar o
          exterior com quem realmente é. <br /> <br />Recebemos clientes exigentes,
          discretos, focados, homens que apreciam conforto, qualidade e
          autenticidade. Não seguimos tendências; moldamos estilos com carácter.
        </p>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-[#F6F4F0] mb-[80px] py-16 "
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* Left side Heading text */}
          <div className="">
            <p className="text-sm text-beige-darker font-medium font-Satoshi mb-2">
              Obter mais
            </p>

            <h2 className="text-3xl md:w-4/5 w-full md:text-6xl font-bold font-Satoshi text-gray-900">
              Sobre nós
            </h2>
          </div>

          {/* Middle side text */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {aboutUsData.map((item, index) => (
              <div key={index} className="flex space-x-4">
                <div className="w-12 h-12 flex items-center justify-start rounded-lg ">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-Satoshi text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-Satoshi text-base/6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
