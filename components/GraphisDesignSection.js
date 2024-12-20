import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from "next/image";
import logo3 from "/images/graph.png";
import hoverImage1 from "/images/hover-image1.png";
import hoverImage2 from "/images/hover-image2.png";
import hoverImage3 from "/images/hover-image3.png";
import hoverImage4 from "/images/hover-image4.png";
import hoverImage5 from "/images/hover-image5.png";
import hoverImage6 from "/images/hover-image6.png";

const GraphicDesignSection = () => {
  const additionalImages = [
    hoverImage1,
    hoverImage2,
    hoverImage3,
    hoverImage4,
    hoverImage5,
    hoverImage6,
  ];
  const [currentImage, setCurrentImage] = useState(logo3);
  const [hovering, setHovering] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Tailwind's 'sm' breakpoint is 640px
    };
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Listen for screen size changes

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);



  const handleMouseEnter = () => {
    setHovering(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      setCurrentImage(additionalImages[currentIndex]);
      currentIndex = (currentIndex + 1) % additionalImages.length;
    }, 900);

    document.hoverInterval = interval;
  };

  const handleMouseLeave = () => {
    setHovering(false);
    clearInterval(document.hoverInterval);
    setCurrentImage(logo3);
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="font-matt relative flex flex-col lg:flex-row items-center justify-between bg-[#FAFAFA] p-6 sm:p-8 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px] group transition-all duration-300 hover-radial-gradient-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeVariants}
      style={{
        background: isSmallScreen
          ? 'radial-gradient(105.57% 105.57% at 50% 50%, #D83200 0%, #0009FF 50%)' // Apply gradient on small screens
          : '', // No background on larger screens
      }}
    >
      {/* Image Section */}
      <motion.div
        className="md:block hidden w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={currentImage}
          alt="Graphic Design"
          width={300}
          height={300}
          className="rounded-lg object-contain sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
          priority
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 text-left lg:space-y-8 transition-transform duration-500 lg:group-hover:-translate-x-4"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-white md:text-black font-matt text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-[700] lg:leading-[80px] lg:mb-6 transition-colors duration-300 group-hover:text-white ">
          Graphic Design
        </h2>
        <p className="text-white md:text-black  mb-6 md:mb-4 font-matt font-[700] text-[18px] mt-6 lg:mt-0 lg:text-[20px] leading-[28px] lg:leading-[33px] transition-colors duration-300 group-hover:text-white">
          Visuelle Kommunikation, die Eindruck macht.
        </p>
        <p className="text-white md:text-black  mb-6 md:mb-4 font-matt text-[14px] leading-[25px] lg:text-[18px] font-[300] lg:leading-[33px] transition-colors duration-300 group-hover:text-white">
         
Unser kreatives Team gestaltet Designs, die Ihre Botschaft klar transportieren und Ihre Marke im Gedächtnis bleiben lassen. Ob Logo, komplette Markenidentität, Print oder Digital - wir liefern durchdachte und frische Ideen, die Ihre Zielgruppe begeistern.
        </p>
        <p className="text-white md:text-black  mb-6 md:mb-4 font-matt font-[700] text-[17px] lg:mt-0 lg:text-[20px] leading-[28px] lg:leading-[33px] transition-colors duration-300 group-hover:text-white">
          Zeigen Sie Ihre Marke von ihrer besten Seite!
        </p>
        <div className="flex flex-row items-center justify-center lg:justify-start space-y-0 space-x-4">
        <Link href="/services/graphicdesign">
                                    <motion.button
                                    className={`border-2 border-[#0009FF] text-white bg-[#0009FF] group-hover:bg-black group-hover:text-white group-hover:border-black px-4 py-1 rounded-[20px] font-[800] md:text-[14px] text-[12px] transition-colors duration-300 ${
                                      hoveredButton === "button2" ? "blur-sm" : "blur-none"
                                    }`}
                                    whileHover={{ scale: 1.1 }}
                                    onMouseEnter={() => setHoveredButton("button1")}
                                    onMouseLeave={() => setHoveredButton(null)}
                                  >
                                    MEHR <br /> ERFAHREN
                                  </motion.button>
                                  </Link>
                                  <Link href="/contact">

                                  {/* Button 2 */}
                                  <motion.button
                                    className={`font-matt border-2 border-[#0009FF] text-[#0009FF] bg-white px-4 py-1 rounded-[20px] font-[800] md:text-[14px] text-[12px] transition-all duration-300 ${
                                      hoveredButton === "button1" ? "blur-sm" : "blur-none"
                                    }`}
                                    whileHover={{ scale: 1.1 }}
                                    onMouseEnter={() => setHoveredButton("button2")}
                                    onMouseLeave={() => setHoveredButton(null)}
                                  >
                                    JETZT PROJEKT <br /> STARTEN
                                  </motion.button>
        </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GraphicDesignSection;
