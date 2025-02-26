"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper"; // ✅ Correct import for Swiper v8.4.7
import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  "/images/logos/Mobiliar.png",
  "/images/logos/Phc Test.png",
  "/images/logos/pluxee.png",
  "/images/logos/Mobilezone.png",
  "/images/logos/Salesforcee.png",
  "/images/logos/Novalex.png",
  "/images/logos/Eco.png",
  "/images/logos/Mobilezone (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Rexhepi.png",
  "/images/logos/Max.png",
  "/images/logos/Divid.png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",
  "/images/logos/Awh (1).png",


];

export default function PartnersSlider() {
  return (
    <div className="flex justify-center py-4">
      <div className="w-full max-w-[1310px] px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={2}
          slidesPerView={12}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            1280: { slidesPerView: 12, spaceBetween: 6 }, // Large screens (12 logos)
            1024: { slidesPerView: 8, spaceBetween: 6 }, // Medium screens (8 logos)
            768: { slidesPerView: 6, spaceBetween: 6 }, // Tablets (6 logos)
            640: { slidesPerView: 5, spaceBetween: 6 }, // Smaller tablets (5 logos)
            480: { slidesPerView: 4, spaceBetween: 4 }, // Large phones (4 logos)
            320: { slidesPerView: 3, spaceBetween: 2 }, // Small phones (3 logos)
          }}
        >
          {partners.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="w-[86px] h-[40px] md:h-[50px] lg:h-[86px] max-h-[86px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
