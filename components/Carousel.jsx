import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { BsFacebook, BsGlobe, BsLinkedin, BsYoutube } from "react-icons/bs";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const { t } = useTranslation();
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-dvh">
            {slide.type === "image" ? (
              <Image
                src={slide.imageSrc}
                alt={`Slide ${index + 1}`}
                fill
                quality={100}
                className="object-cover"
              />
            ) : (
              <video
                src={slide.videoSrc}
                autoPlay
                muted
                loop
                controls={false}
                playsInline
                quality={100}
                className="w-full h-full object-cover rounded-lg"
              ></video>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
              <div className="text-center text-white p-4 rounded bg-opacity-70 max-w-full md:max-w-6xl">
                <h2 className="text-2xl lg:text-5xl font-bold tracking-wide break-words">
                {t("carousel.oneMoreDay")}
                </h2>
                <div className="flex flex-col md:flex-row justify-center mt-24 lg:mt-8 gap-4 sm:gap-6">
                  <Link
                    href="/aboutComponents/about"
                    className="relative inline-block text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 border border-white overflow-hidden group"
                  >
                    <span className="relative z-10 transition-colors duration-500 tracking-wide group-hover:text-black">
                   
                    {t("carousel.fireplaceTales")}
                    </span>
                    <span className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"></span>
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute right-5 lg:right-32 bottom-14 lg:bottom-12 flex space-x-4">
        <button
          onClick={handlePrevClick}
          className="relative flex items-center font-semibold cursor-pointer transition-colors duration-300 text-white after:content-[''] after:absolute after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
        >
          <span className="tracking-wider">PREV</span>
        </button>

        <span className="border border-x-10 border-gray-500"></span>

        <button
          onClick={handleNextClick}
          className="relative flex items-center font-semibold cursor-pointer transition-colors duration-300 text-white after:content-[''] after:absolute after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
        >
          <span className="tracking-wider">NEXT</span>
        </button>
      </div>
      <div className="absolute bottom-14 left-10 flex-col space-x-4">
        <Link href="https://www.facebook.com/insifks" target="_blank">
          <span className="tracking-wider text-white transform transition-transform duration-200 hover:scale-105">
            <BsFacebook />
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/company/insi-ks-tech/"
          target="_blank"
        >
          <span className="tracking-wider text-white transform transition-transform duration-200 hover:scale-105">
            <BsLinkedin />
          </span>
        </Link>
        <Link href="https://www.youtube.com/@insiks8341" target="_blank">
          <span className="tracking-wider text-white transform transition-transform duration-200 hover:scale-105">
            <BsYoutube />
          </span>
        </Link>
        <Link href="https://insi-ks.com/home" target="_blank">
          <span className="tracking-wider text-white transform transition-transform duration-200 hover:scale-105">
            <BsGlobe />
          </span>
        </Link>
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 mr-5 text-white">
        <span className="text-4xl">0{currentSlide + 1}</span>
      </div>
    </div>
  );
};

export default Carousel;
