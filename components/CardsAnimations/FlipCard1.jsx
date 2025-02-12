"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font-matt flex mb-[32px]">
      <div
        className="flipcard relative w-[390px] h-[557px] md:w-[750px] md:h-[557px]  lg:h-[557px]  perspective-1000 cursor-pointer"
        onClick={() => {
          if (!isMobile) {
            setFlipped(!flipped);
          }
        }}
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
            <div className=" absolute top-6 left-6 z-10">
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
                style={{ fontFamily: "Matt Trial" }}
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

            <div className="absolute  flex-col bottom-6 left-6 z-10 flex space-x-2 text-sm">
            <h2 className="text-start text-[14px] lg:text-[20px] font-[300] font-matt leading-[33px] ml-[8px]">Project Completed, Currently: Optimizing</h2>
            <div className="flex flex-col lg:flex-row space-y-2 md:space-y-2 lg:space-y-0 lg:space-x-2 items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none">
                <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
                </svg> 
                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none">
                <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
                </svg> 
                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none">
                <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
                </svg> 
                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none">
                <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
                </svg> 
            </div>
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
              >
Für die Mobiliar wurde Salesforce als Cloud-Lösung implementiert. Die Sales Cloud, Experience Cloud, Marketing Cloud und Data Cloud sind im Einsatz. Die Basis-Implementierung ist abgeschlossen, und wir befinden uns nun in der Optimierungsphase sowie im täglichen operativen Geschäft. Unser aktueller Fokus liegt auf Strategie, Business-Analyse, Product Ownership, Verhandlungen mit Service Providern und punktuellen Hands-on-Entwicklungen.            </h2>

            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
