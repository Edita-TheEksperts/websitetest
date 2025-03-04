import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Use Next.js router for navigation

const LogoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter(); // Initialize the Next.js router

  const logos = [
    { default: "/images/the-eksperts-mobiliar-logo.png", hover: "/images/the-eksperts-mobiliar-logo-hover.png" },
    { default: "/images/the-eksperts-phc-logo.png", hover: "/images/the-eksperts-the-eksperts-phc-logo-hover.png" },
    { default: "/images/the-eksperts-netto-logo.png", hover: "/images/the-eksperts-the-eksperts-netto-logo-hover.png" },
    { default: "/images/the-eksperts-mobilezone-official-logo.png", hover: "/images/the-eksperts-mobilezone-logo-hover.png" },
    { default: "/images/the-eksperts-salesforce-logo.png", hover: "/images/the-eksperts-salesforce-logo-hover.png" },
    { default: "/images/the-eksperts-novalex-logo.png", hover: "/images/the-eksperts-novalex-logo-hover.png" },
    { default: "/images/the-eksperts-eco-logo.png", hover: "/images/the-eksperts-eco-logo-hover.png" },
    { default: "/images/the-eksperts-mobilezone-logo.png", hover: "/images/the-eksperts-smzh-logo-hover.png" },
    { default: "/images/the-eksperts-awh-logo.png", hover: "/images/the-eksperts-awh-logo-hover.png" },
    { default: "/images/the-eksperts-rexhepi-logo.png", hover: "/images/the-eksperts-rexhepi-logo-hover.png" },
    { default: "/images/the-eksperts-max-logo.png", hover: "/images/the-eksperts-max-logo-hover.png" },
    { default: "/images/the-eksperts-divid-logo.png", hover: "/images/the-eksperts-divid-logo-hover.png" },
    { default: "/images/the-eksperts-mint-logo.png", hover: "/images/the-eksperts-mint-logo-hover.png" },
    { default: "/images/the-eksperts-def-logo1.png", hover: "/images/the-eksperts-def-logo-hover1.png" },
    { default: "/images/the-eksperts-m-logo.png", hover: "/images/the-eksperts-m-logo-hover.png" },
    { default: "/images/the-eksperts-mobilezone-voiceline-logo.png", hover: "/images/the-eksperts-mobilezone-voiceline-logo-hover.png" },
    { default: "/images/the-eksperts-von-logo.png", hover: "/images/the-eksperts-von-logo-hover1.png" },
    { default: "/images/the-eksperts-spitex-logo.png", hover: "/images/the-eksperts-spitex-logo-hover.png" },
    { default: "/images/the-eksperts-platen-logo.png", hover: "/images/the-eksperts-platen-logo-hover.png" },
    { default: "/images/the-eksperts-baurex-logo.png", hover: "/images/the-eksperts-baurex-logo-hover.png" },
    { default: "/images/the-eksperts-ballenberg-logo.png", hover: "/images/the-eksperts-ballenberg-logo-hover.png" },
    { default: "/images/the-eksperts-x-logo.png", hover: "/images/the-eksperts-x-logo-hover.png" },
    { default: "/images/the-eksperts-yourplace-hover.png", hover: "/images/the-eksperts-yourplace.png" }
  ];

  // Function to navigate to the kontakt page when the specific logo is clicked
  const handleLogoClick = (index) => {
    if (index === logos.length - 1) { // This checks if it's the "yourplace" logo (last one in the list)
      router.push('/kontakt'); // Navigate to kontakt page
    }
  };

  return (
    <div className="font-matt container mx-auto p-4 lg:max-w-[1280px] lg:mb-[300px] mt-[160px] lg:mt-[300px] mb-[160px]">
      <div className="font-matt text-center flex mb-8">
      <h2 className='font-matt font-[700] lg:text-[80px] lg:leading-[80px] responsive-heading justify-center text-center'>
          Vertrauen durch Zusammenarbeit
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[50px] gap-[30px]">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleLogoClick(index)} // Add onClick event for each logo
          >
            
            <Image
              src={logo.default}
              alt={`Logo ${index + 1}`}
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-0' : 'opacity-100'
              }`}
              width={500} // Set an appropriate width
              height={500} // Set an appropriate height
            />

            <Image
              src={logo.hover}
              alt={`Hovered Logo ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              width={500} // Set an appropriate width
              height={500} // Set an appropriate height
/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
