import React from "react";
import GlobalContainer from "./Container";
import { MdPerson } from "react-icons/md";
import StarRating from "../utils/StarRating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";



const testimonies = [
  {
    name: "Jane D",
    role: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    rating: 5,
    text: "Pagedone is simply the best tool of investment in the market right now.",
  },
  {
    name: "Harsh P.",
    role: "Product Designer",
    avatar: "https://pagedone.io/asset/uploads/1696229994.png",
    rating: 5,
    text: "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
  },
  {
    name: "Alex K.",
    role: "Design Lead",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png",
    rating: 5,
    text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
  },
];

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
      <GlobalContainer>
        <div>
          <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
            <h2 className="text-4xl text-center font-bold text-gray-900 lg:text-left">Testimonials</h2>
            <div className="flex items-center gap-8">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-prev
              >
                <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-next
              >
                <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: "#slider-button-right",
              prevEl: "#slider-button-left",
            }}
            className="mySwiper"
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonies.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600">
                  <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                    <StarRating rating={t.rating} />
                  </div>
                  <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-5">
                    <img className="rounded-full object-cover" src={t.avatar} alt="avatar" />
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-indigo-600">
                        {t.name}
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">{t.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </GlobalContainer>
    </section>
  );
}

export default TestimonySection;
