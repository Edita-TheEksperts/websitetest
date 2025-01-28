'use client'
import Image from 'next/image';
import styles from '../Card/style.module.scss'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Card = ({i, title, title1, title2, description, src, url, color, progress, range, targetScale}) => {
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

  return (
    <div 
      ref={container} 
      className={styles.cardContainer}
      onMouseEnter={handleMouseEnter} // Trigger hover effect
      onMouseLeave={handleMouseLeave} // Reset when mouse leaves
    >
      <motion.div 
        style={{
          background: isHovered
            ? color // Apply the hover color (card's color prop)
            : '#FAFAFA', // Default background color
          scale, 
          top: `calc(-5vh + ${i * 25}px)`
        }} 
        className={styles.card}
      >
        <h2 className="font-matt flex items-start text-left text-[62px] font-[700] lg:leading-[80px] mt-[10px]">{title}</h2>
        <div className={styles.body}>
          <div className={styles.description} >
          <p className=' text-black mb-8 font-matt font-[700] text-[18px] mt-6 lg:mt-0 lg:text-[20px] leading-[28px] lg:leading-[33px]'>{title1}</p>
            <p className="text-black mb-8 font-matt text-[14px] leading-[25px] lg:text-[18px] font-[300] lg:leading-[33px]">{description}</p>
            <p className="text-black mb-8 font-matt font-[700] text-[18px] lg:mt-0 lg:text-[20px] leading-[28px] lg:leading-[33px]">{title2}</p>
            <span>
              <a className='font-matt border-2 border-[#0009FF] text-white bg-[#0009FF] group-hover:bg-black group-hover:text-white group-hover:border-black px-4 py-1 rounded-[20px] font-[700] md:text-[14px] text-[12px] transition-colors duration-300 text-center' href={url} target="_blank">Mehr <br></br>erfahren</a>
              <a className='ml-[16px] font-matt border-2 border-[#0009FF] text-[#0009FF] bg-white px-4 py-1 rounded-[20px] font-[700] md:text-[14px] text-[12px] transition-all duration-300 text-center' href={url} target="_blank">Jetzt Projekt<br></br> Starten</a>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/images/${src}`}
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