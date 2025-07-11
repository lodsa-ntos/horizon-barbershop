import React, { useRef, useEffect } from "react";
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.destroy();
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className="bg-white py-20 mb-[48px] min-h-screen">
      {/* Section Title */}
      <div>
        <p className="text-center text-gray-900 text-2xl font-bold mb-2">
          Na Horizon, cada detalhe conta — e são os nossos clientes que melhor
          resumem essa experiência.
        </p>
        <p className="text-center text-[#767676] text-base font-[400] tracking-wide mb-1 break-words flex gap-1 items-center justify-center">
          Mais do que um corte —<strong>palavras de quem confia.</strong>
        </p>
      </div>

      {/* Testimonials */}
      <GlobalContainer>
        <div className="flex justify-between items-center mb-8">
          <button
            ref={prevRef}
            className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
            data-carousel-prev
            id="slider-button-left"
            type="button"
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
            ref={nextRef}
            className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
            data-carousel-next
            id="slider-button-right"
            type="button"
          >
            <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none">
              <path
                d="M4.00012 12L20.0001 12M15.0001 6L20.293 11.2929C20.6263 11.6262 20.793 11.7929 20.793 12C20.793 12.2071 20.6263 12.3738 20.293 12.7071L15.0001 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = { swiper };
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
      </GlobalContainer>
    </section>
  );
}

export default TestimonySection;
