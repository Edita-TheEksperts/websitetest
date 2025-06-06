'use client'
import Image from 'next/image';
import styles from '../Card/style.module.scss'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Card = ({i, title, title1, title2, description, src, link, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // Handling hover state
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const textColorClass = i >= 2 ? 'text-white' : 'text-black';

  return (
    <div 
      ref={container} 
      className={styles.cardContainer}
      onMouseEnter={handleMouseEnter} // Trigger hover effect
      onMouseLeave={handleMouseLeave} // Reset when mouse leaves
    >
      <motion.div 
        style={{
          background: color, // Assuming color is a valid color string (e.g., 'red', '#FF0000', etc.)
          transform: `scale(${scale})`, // Assuming scale is a number (e.g., 1.5)
          top: `calc(-5vh + ${i * 25}px)`, 
          marginBottom: "120px", // Assuming i is an index variable or number
        }}
        
        className={styles.card}
      >
        <h2 className={`font-matt  flex items-start text-left text-[34px] leading-[34px] lg:text-[62px] font-[700] lg:leading-[80px] lg:mt-[10px] ${textColorClass}`}>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description} >
          <p className={`text-black mb-6 font-matt font-[700] text-[14px] w-[340px] lg:w-auto lg:mt-0 lg:text-[20px] leading-[28px] lg:leading-[33px] ${textColorClass}`}>{title1}</p>
          
          <p className={`text-black lg:mb-8 font-matt text-[14px] w-[340px] lg:w-auto leading-[25px] lg:text-[18px] font-[300] lg:leading-[33px] ${textColorClass}`}>
          {title === "Website" ? (
    <div className="text-left">
        <p>
            Wir gestalten Websites, die gut aussehen und performen–
            ob Unternehmensseite, E-Commerce oder Portfolio.
        </p>

        <p><strong className='font-[700]'>Individuelles Design:</strong> Massgeschneidert für Ihre Marke.</p>
        <p><strong className='font-[700]'>Benutzerfreundlich:</strong> Intuitive Navigation und responsives Design.</p>
        <p><strong className='font-[700]'>SEO & Performance:</strong> Optimiert für Suchmaschinen, mit schnellen Ladezeiten und sicherer Technologie.</p>
    </div>
) : (
    <p>{description}</p> // Default for other projects
)}
</p>
            <p className={`text-black mb-4 mt-4 font-matt font-[700] w-[340px] lg:w-auto text-[14px] lg:mt-0 lg:text-[20px] leading-[28px] lg:leading-[33px] ${textColorClass}`}>{title2}</p>
            <span className='w-[350px] lg:w-auto'>
              <a className='font-matt border-2 border-[#00000000] text-white bg-[#000000] px-4 py-1 rounded-[20px] font-[800] md:text-[14px] text-[12px] transition-colors duration-300 text-center uppercase' href={link} target="_blank">Mehr <br></br>erfahren</a>
              <a className='ml-[16px] font-matt border-2 border-white text-[#0009FF] bg-white px-4 py-1 rounded-[20px] font-[800] md:text-[14px] text-[12px] transition-all duration-300 text-center uppercase'  href="https://www.the-eksperts.com/kontakt"
  target="_blank" 
  rel="noopener noreferrer">Jetzt Projekt<br></br> Starten</a>
            </span>
          </div>

          <div className={`${styles.imageContainer} `}>
          <motion.div
              className={ styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={src}
                alt="image" 
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default Card;
