"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard() {
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
              backgroundImage: "url('/images/Mobiliar.png')",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Top Left Text */}
            <div className="absolute top-6 left-6 z-10">
              <h2
                className="text-white text-left text-[16px] lg:text-[28px] font-extrabold uppercase lg:leading-[37px]"
                style={{ fontFamily: "Matt_Trial" }}
              >
                DIE MOBILIAR
              </h2>
              <p
                className="text-white text-left text-[16px] lg:text-[28px] font-normal uppercase lg:leading-[37px]"
                style={{ fontFamily: "Matt_Trial" }}
              >
                WEITERENTWICKLUNG <br /> CRM
              </p>
              <p
                className="text-white text-left text-[20px] font-[300] leading-[33px] lg:block hidden"
                style={{ fontFamily: "Matt_Trial" }}
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
            <div className="absolute bottom-6 left-6 z-10 flex flex-col lg:flex-row space-x-2 text-sm">
              <span className="text-[14px] lg:text-[16px] font-[300] leading-[33px] font-matt">
                Project{" "}
                <span className="bg-[#0009FF] text-white font-[500] lg:font-[900] px-2 py-1 rounded-tl-[20px]">
                  Completed
                </span>
              </span>
              <span className="text-[14px] lg:text-[16px] font-[300] leading-[33px] font-matt">
                Currently{" "}
                <span className="bg-red-600 text-white font-[500] lg:font-[900] px-2 py-1 rounded-tl-[20px]">
                  Optimizing
                </span>
              </span>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full bg-cover bg-center text-white flex justify-center items-center rounded-lg overflow-hidden"
            style={{
                backfaceVisibility: "hidden",
                background: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url('/images/Mobiliar.png') lightgray 50% / cover no-repeat",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col absolute inset-0 bg-[#DA2222] justify-center items-center px-10 space-y-6">
              <h2
                className="text-white text-center text-[16px] font-[300] leading-[23px]"
                style={{ fontFamily: "Matt_Trial" }}
              >
Für unseren Kunden [Musterfirma AG] haben wir innerhalb von nur zwei Monaten eine neue, moderne Website realisiert. Das Projekt umfasste ein ansprechendes Webdesign, das perfekt auf die Markenidentität des Unternehmens abgestimmt wurde. Die technische Umsetzung erfolgte durch ein massgeschneidertes Webdevelopment, das eine benutzerfreundliche Navigation und optimale Ladezeiten sicherstellt.              </h2>
              <h2
                className="text-white text-center text-[16px] font-[300] leading-[23px]"
                style={{ fontFamily: "Matt_Trial" }}
              >
Zusätzlich haben wir ein Support-Paket integriert, das sicherstellt, dass die Website jederzeit auf dem neuesten Stand bleibt und bei Bedarf schnell Anpassungen vorgenommen werden können. Das Ergebnis ist eine leistungsstarke und optisch ansprechende Website, die die Online-Präsenz unseres Kunden nachhaltig stärkt.              </h2>
              <h2
                className="text-white text-center text-[16px] font-[300] leading-[23px]"
                style={{ fontFamily: "Matt_Trial" }}
              >
Dieses Projekt zeigt, wie Design, Technologie und kontinuierliche Betreuung zu einem erfolgreichen Ergebnis führen.              </h2>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
