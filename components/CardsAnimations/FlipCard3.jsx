"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FlipCard3() {
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
                background: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url('/images/NettooCard.png') lightgray -365.788px 0px / 179.388% 100% no-repeat",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Top Left Text */}
            <div className="absolute top-6 left-6 z-10">
              <h2
                className="text-white text-left text-[16px] lg:text-[28px] font-extrabold uppercase lg:leading-[37px]"
              >
                Nettoo
              </h2>
              <p
                className="text-white text-left text-[16px] lg:text-[28px] font-normal uppercase lg:leading-[37px]"
              >
                B2B Online Shop
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
                "Project Management",
                "Development",
                "AWS",
                "Design",
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
            <h2 className="text-start text-[14px] lg:text-[20px] font-[300] font-matt leading-[33px] ml-[8px]">Project Completed, Currently: Support</h2>
            <div className="flex flex-col lg:flex-row space-y-2 md:space-y-2 lg:space-y-0  lg:space-x-2 items-start">
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
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col absolute inset-0 bg-[#E4D77E] justify-center items-center px-10 space-y-6">
              <h2
                className="text-black text-center text-[16px] font-[300] leading-[23px]"
              >
Nettoo, der B2B-Online-Shop von Eco Bautec & Design AG, ist unser jüngstes abgeschlossenes Projekt. Der erste Go-Live ist erfolgreich erfolgt. Insgesamt gibt es drei Phasen des Go-Live: Die erste ist abgeschlossen, die zweite bringt eine optimierte Version, und die dritte wird eine vollautomatisierte Lösung sein. Ziel ist es, das Backoffice zu entlasten, sodass sich das Team verstärkt auf Kunden und Organisationsentwicklung konzentrieren kann, anstatt auf Bestellabwicklungen. Der Nettoo-Shop ist eine massgeschneiderte Entwicklung, die auf Schweizer AWS-Servern läuft. Dafür haben wir das alte ERP-System vollständig abgelöst und alle Prozesse in das Backend von Nettoo integriert – ein nahtloses Zusammenspiel von Shop und ERP. Derzeit laufen noch letzte Optimierungsarbeiten.      </h2>

            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
