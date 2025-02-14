"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FlipCard4() {
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
    <div className="flex mb-[32px]">
      <div
        className="flipcard relative w-[390px] h-[557px] md:w-[750px] md:h-[557px] lg:w-[617px] lg:h-[557px] perspective-1000 cursor-pointer"
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
              background: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url('/images/Signboard2.png') lightgray center center / cover no-repeat",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Top Left Text */}
            <div className="absolute top-6 left-6 z-10">
              <h2
                className="text-white text-left text-[16px] lg:text-[28px] font-extrabold uppercase lg:leading-[37px]"
              >
                Prime Home Care
              </h2>
              <p
                className="text-white text-left text-[16px] lg:text-[28px] font-normal uppercase lg:leading-[37px]"
              >
                App-Entwicklung & <br /> Salesforce
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
                "Custom Development",
                "Salesforce",
                "Training",
                "Project Management",
                "Sales Cloud",
                "Support",
                "Web Entwicklung",
                "Graphic Design",
                "Administration",
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
            <div className="absolute  flex-col bottom-6 left-6 z-10 flex md:space-x-2 text-sm">
            <h2 className="text-start text-[14px] lg:text-[20px] font-[300] font-matt leading-[33px] md:ml-[8px]">In Progress</h2>
            <div className="flex flex-row space-x-2 md:space-y-0 lg:space-y-0  lg:space-x-2 items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none" className="svg-mobile">
  <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
</svg> 
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none" className="svg-mobile">
  <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#D9D9D9"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none" className="svg-mobile">
  <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#D9D9D9"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="17" viewBox="0 0 131 17" fill="none" className="svg-mobile">
  <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#D9D9D9"/>
</svg> 
            </div>
          </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full bg-cover bg-center text-white flex justify-center items-center rounded-lg overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col absolute inset-0 bg-[#04436F] justify-center items-center px-10 space-y-6">
              <h2
                className="text-white text-center text-[16px] font-[300] leading-[23px]"
              >
Das Projekt befindet sich in der intensiven Umsetzungsphase. Wir begleiten es von der Konzeption bis zur Realisierung. Die gesamte IT-Architektur wird aufgebaut, Geschäftsprozesse werden definiert und optimiert. Die Landing Pages samt Lead-Generierungs-Funnel stehen bereits. Der nächste Schritt umfasst die Entwicklung der Web-App, der Website sowie die Implementierung eines CRM-Systems auf Basis von Salesforce.       </h2>
           
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
