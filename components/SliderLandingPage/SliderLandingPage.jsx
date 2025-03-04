"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper"; // ✅ Correct import for Swiper v8.4.7
import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  "/images/logos/the-eksperts-dieMobiliar.png",
  "/images/logos/the-eksperts-phc.png",
  "/images/logos/the-eksperts-Ballenberg.png",
  "/images/logos/the-eksperts-mobile-zone.png",
  "/images/logos/the-eksperts-salesforce.png",
  "/images/logos/the-eksperts-baurex.png",
  "/images/logos/the-eksperts-eco.png",
  "/images/logos/the-eksperts-voiceline.png",
  "/images/logos/the-eksperts-nettoo.png",
  "/images/logos/the-eksperts-DEF.png",
  "/images/logos/the-eksperts-divid.png",
  "/images/logos/the-eksperts-greenfinity.png",
  "/images/logos/the-eksperts-Ballenberg.png",
  "/images/logos/the-eksperts-M.png",
  "/images/logos/the-eksperts-max.png",
  "/images/logos/the-eksperts-mint.png",
  "/images/logos/the-eksperts-novalex.png",
  "/images/logos/the-eksperts-plattenformat.png",
  "/images/logos/the-eksperts-rexhepi.png",
  "/images/logos/the-eksperts-smzh.png",
  "/images/logos/the-eksperts-spitex.png",
  "/images/logos/the-eksperts-vonBergen.png",
  "/images/logos/the-eksperts-X.png",
  "/images/logos/the-eksperts-alterswohnhilfe.png",
];

export default function PartnersSlider() {
  return (
    <div className="flex justify-center py-4">
      <div className="sliderfix w-full max-w-[380px] md:max-w-[600px] lg:max-w-[1310px] px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={12}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            1280: { slidesPerView: 12, spaceBetween: 6 }, // Large screens (12 logos)
            1024: { slidesPerView: 8, spaceBetween: 6 }, // Medium screens (8 logos)
            768: { slidesPerView: 6, spaceBetween: 6 }, // Tablets (6 logos)
            640: { slidesPerView: 5, spaceBetween: 6 }, // Smaller tablets (5 logos)
            480: { slidesPerView: 3, spaceBetween: 8 },  // Large phones (3 logos)
            320: { slidesPerView: 2, spaceBetween: 10 }, // Small phones (2 logos, better spacing)
          }}
        >
          {partners.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="w-[86px] h-[86px] md:h-[86px] lg:h-[86px] max-h-[86px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
