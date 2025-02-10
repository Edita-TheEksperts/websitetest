"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard6() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex mb-[32px]">
      <div
        className="relative w-[617px] h-[557px] perspective-1000 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        {/* Card Container */}
        <motion.div
          className="relative w-full h-full transition-transform duration-700"
          animate={{ rotateY: flipped ? 180 : 0 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full bg-cover bg-center text-white p-6 rounded-lg overflow-hidden"
            style={{
                background: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url('/images/Eco-Projekte.png') lightgray center center / cover no-repeat",
                backfaceVisibility: "hidden",
            }}
          >
            {/* Top Left Text */}
            <div className="absolute top-6 left-6 z-10">
              <h2
                className="text-white text-left text-[16px] lg:text-[28px] font-extrabold uppercase lg:leading-[37px]"
              >
                DIE MOBILIAR
              </h2>
              <p
                className="text-white text-left text-[16px] lg:text-[28px] font-normal uppercase lg:leading-[37px]"
              >
                WEITERENTWICKLUNG <br /> CRM
              </p>
              <p
                className="text-white text-left text-[20px] font-[300] leading-[33px] lg:block hidden"
              >
               Click to read more...
              </p>
            </div>

            {/* Top Right Tags */}
            <div className="font-matt absolute top-6 right-6 z-10 flex flex-col gap-[8px] items-end">
              {[
                "Salesforce",
                "Product Owner",
                "Administrator",
                "Sales Cloud",
                "Experience Cloud",
                "Marketing Cloud",
                "Training",
                "Support",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-black leading-[20px] text-[14px] lg:text-[20px] font-[400] lg:font-[500] px-[8px] lg:px-[15px] py-[8px] rounded-[8px] inline-block whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Left Status */}
            <div className="absolute  flex-col bottom-6 left-6 z-10 flex space-x-2 text-sm">
            <h2 className="text-start text-[14px] lg:text-[20px] font-[300] font-matt leading-[33px] ml-[8px]">Progress</h2>
            <div className="flex flex-col lg:flex-row space-y-2 md:space-y-0 md:space-x-2 items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none">
  <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
</svg> 
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none">
  <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
</svg>    <svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none">
  <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
</svg> 
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none">
  <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="url(#paint0_linear_2696_2946)"/>
  <defs>
    <linearGradient id="paint0_linear_2696_2946" x1="0" y1="8.5" x2="131" y2="8.5" gradientUnits="userSpaceOnUse">
      <stop offset="0.9149" stop-color="#0009FF"/>
      <stop offset="0.915" stop-color="#D9D9D9"/>
    </linearGradient>
  </defs>
</svg>
            </div>
          </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full bg-cover bg-center text-white flex justify-center items-center rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/images/Mobiliar_Back.png')",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col absolute inset-0 bg-[#007934] justify-center items-center px-10 space-y-6">
              <h2
                className="text-white text-center text-[16px] font-[300] leading-[23px]"
              >
Für unseren Kunden [Musterfirma AG] haben wir innerhalb von nur zwei Monaten eine neue, moderne Website realisiert. Das Projekt umfasste ein ansprechendes Webdesign, das perfekt auf die Markenidentität des Unternehmens abgestimmt wurde. Die technische Umsetzung erfolgte durch ein massgeschneidertes Webdevelopment, das eine benutzerfreundliche Navigation und optimale Ladezeiten sicherstellt.              </h2>
              <h2
                className="text-white text-center text-[16px] font-[300] leading-[23px]"
              >
Zusätzlich haben wir ein Support-Paket integriert, das sicherstellt, dass die Website jederzeit auf dem neuesten Stand bleibt und bei Bedarf schnell Anpassungen vorgenommen werden können. Das Ergebnis ist eine leistungsstarke und optisch ansprechende Website, die die Online-Präsenz unseres Kunden nachhaltig stärkt.              </h2>
              <h2
                className="text-white text-center text-[16px] font-[300] leading-[23px]"
              >
Dieses Projekt zeigt, wie Design, Technologie und kontinuierliche Betreuung zu einem erfolgreichen Ergebnis führen.              </h2>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
