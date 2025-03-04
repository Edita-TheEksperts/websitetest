import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Testimonials from '../components/Testimonials/Testimonials';
import LogoSection from '../components/LogoSection/LogoSection'; 
import Hero2 from '../components/HeroComponent/Hero2';
import '../styles/global.css'; 
import AnimatedSection from '../components/AnimatedSection';
import '../styles/swiper.css';
import Wie from '../components/4PillarsComponents/wie'
import Warum from '../components/4PillarsComponents/warum'
import { HeaderSection2 } from '../components/4PillarsComponents/work2';
import Cards from './CardsDataPage/page'


const Home = () => {
    const [hovered, setHovered] = useState(false);
    const [isHeroVisible, setHeroVisible] = useState(true);

    const [hovering, setHovering] = useState(false); 


    useEffect(() => {
        if (typeof window !== "undefined") { // Ensure it's running on the client
          const handleScroll = () => {
            const heroElement = document.getElementById('hero');
            if (!heroElement) return;
      
            const heroHeight = heroElement.offsetHeight;
            const scrollY = window.scrollY;
      
            setHeroVisible(scrollY < heroHeight - 80);
          };
      
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }
      }, []);
      

  return (
    <>
     <Head>
         <title>the eksperts | Die Agentur für Digitale Lösungen</title>

        <link rel="preload" href="/fonts/Matt-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/matt.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="the eksperts bietet professionelle Lösungen in Salesforce, Webentwicklung, Graphic Design und Individuelle Entwicklung. Expertenberatung für digitale Transformation." />
        <meta name="keywords" content="consulting, strategy, experts, business solutions, website, software, Salesforce, digitale Lösungen" />
        <meta name="author" content="the eksperts" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="the eksperts | Die Agentur für Digitale Lösungen" />
        <meta property="og:description" content="the eksperts bietet professionelle Lösungen in Salesforce, Webentwicklung, Graphic Design und Individuelle Entwicklung. Expertenberatung für digitale Transformation." />
        <meta property="og:image" content="/images/the-eksperts-vertical-blue.png" />
        <meta property="og:url" content="https://www.the-eksperts.com/" />
        <meta property="og:site_name" content="the eksperts" />
        <meta property="og:locale" content="de_DE" />

        <meta property="linkedin:site" content="https://www.linkedin.com/company/the-eksperts/" />
        <meta property="linkedin:handle" content="@theeksperts" />
        <meta property="linkedin:cardType" content="summary_large_image" />

        <link rel="canonical" href="https://www.the-eksperts.com/" />
        </Head>

      
      <main className="font-matt flex flex-col items-center bg-white px-4">
        <div className="font-matt w-full max-w-[1280px] mx-auto text-center my-2">
        <Hero2 setHeroVisible={setHeroVisible} />
        </div>
        <HeaderSection2 />
        <div className='lg:mb-[120px] mt-[50px] mb-[85px]'>
         <Cards/>
         </div>
            <Wie/>

            <Warum/>

            <Testimonials/>

            <AnimatedSection/>

            <LogoSection />

            <section className="bg-white py-2 lg:py-2 lg:max-w-[1280px] mx-auto flex flex-col font-matt space-y-2 lg:space-y-0 mb-[20] lg:mb-0">
            <div className="font-matt flex flex-col items-center text-center space-y-12">
            {/* 100% Section */}
            <div className="font-matt flex flex-col items-center px-0">
            <div className="w-full max-w-[390px] lg:max-w-[900px]">
            <Image
                    src="/images/the-eksperts-Frame 24.png" 
                    alt="Description of image"
                    width={1200} 
                    height={675} 
                    loading="lazy"
                    className="w-full h-auto mb-4 "
                />

                    </div>
                    <p className="font-matt text-[22px] lg:text-[28px] lg:leading-[37px] font-[400] lg:font-[900] uppercase lg:mb-12 lg:mt-10">
                    Unserer Kunden empfehlen uns weiter
                    </p>
                </div>

                {/* 3 Länder Section */}
                <div className="font-matt flex flex-col lg:flex-row items-center justify-center text-center lg:text-left space-y-2  lg:space-x-26 px-2 lg:px-0">
                {/* Left Text */}
                <div className="font-matt text-[22px] lg:text-[28px] lg:leading-[37px] font-[400] lg:font-[900] uppercase lg:mr-[50px]">
                <p>Bereits in</p>
                </div>

                {/* SVG */}
                <div className="font-matt w-full max-w-[120px] lg:min-w-[230px]">
                <Image
                    src="/images/the-eksperts-Frame 24 (1).png" // Replace with the actual image path
                    alt="Description of image"
                    loading="lazy"

                    width={1600} // Set the width for the image's aspect ratio
                    height={675} // Set the height for the image's aspect ratio
                    className="w-full h-auto mb-4 "
                />
                </div>

                {/* Right Text */}
                <div className="font-matt text-[22px] lg:text-[28px] lg:leading-[37px] font-[400] lg:font-[900] uppercase lg:px-[30px] lg:mr-[10px]">
                <p>Ländern vertreten und weiter wachsend</p>
                </div>
            </div>

                {/* Hat and 14 Section */}
                <div className="font-matt grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center px-4 lg:px-0 lg:mr-[100px]">
                {/* Hat Section */}
                <div className="font-matt flex flex-col items-center text-center space-y-4 mb-10">
                <div className="w-full max-w-[180px] lg:max-w-[300px] lg:mt-10">
                <Image
                    src="/images/the-eksperts-fi_785418.png" // Replace with the actual image path
                    alt="Description of image"
                    width={1600} // Set the width for the image's aspect ratio
                    height={675} // Set the height for the image's aspect ratio
                    className="w-full h-auto mb-4 "
                    loading="lazy"

                />
                    </div>
                    <p className="font-matt text-[22px] lg:text-[28px] lg:leading-[37px] font-[400] lg:font-[900] mt-4 uppercase">
                    Gründung der <br></br>The Eksperts Academy
                    </p>
                </div>

                {/* 14 Section */}
                <div className="font-matt flex flex-col items-center text-center lg:text-left space-y-4 md:space-x-32">
                    <div className="w-full flex lg:justify-center items-center">
                        <div className="section14 w-full max-w-[220px] lg:max-w-[380px] ml-[45px] md:ml-[100px] lg:ml-[190px]">
                        <Image
                            src="/images/the-eksperts-Frame 24 (2).png" // Replace with the actual image path
                            alt="Description of image"
                            width={1600} // Set the width for the image's aspect ratio
                            height={675} // Set the height for the image's aspect ratio
                            className="w-full h-auto mb-4 lg:mb-10 "
                            loading="lazy"

                        />
                        </div>
                    </div>
                    <p className="font-matt text-[22px] lg:text-[28px] lg:leading-[37px] font-[400] lg:font-[900] mt-4 uppercase text-center">
                        Erfolgreiche Projekte in <br></br>den letzten 12 Monaten
                    </p>
                    </div>
                </div>
            </div>
            </section>

            <section className="extraclass bg-white mt-[140px] lg:py-2 flex flex-col lg:flex-row justify-between items-center lg:w-[1320px] mx-auto font-matt space-y-8 lg:space-y-0 lg:mt-[300px] lg:mb-[300px] mb-[160px]">
            {/* Left Section: Heading */}
            <div className="heading lg:block hidden flex-1 text-center lg:text-left lg:w-[490px]">
                <h1 className="text-4xl lg:text-[62px] lg:leading-[80px] font-[700] leading-tight">
                Haben Sie <br />
                Fragen oder <br />
                eine <br />
                spannende <br/>
                Idee?
                </h1>
            </div>
            <div className="lg:hidden block flex-1 text-center">
                <h1 className="text-[28px] leading-[37px] font-[900] uppercase font-matt text-black">
                Haben Sie
                Fragen oder <br />
                eine 
                spannende
                Idee?
                </h1>
            </div>

            <div className="extraclass1 flex flex-col lg:flex-row lg:w-[830px] gap-8 lg:gap-16 items-center lg:items-center">
                {/* Center Section: Image */}
                <div className="lg:block hidden lg:flex justify-center lg:justify-start">
                <Image
                    src="/images/the-eksperts-fisniksalihutheeksperts.png"
                    alt="Fisnik Salihu"
                    width={200}
                    height={400}
                    className="object-cover"
                    quality={80} // Optimize image size
                    loading="lazy"

                />
                </div>
                <div className="lg:hidden block flex justify-center lg:justify-start">
               
                <Image
                    src="/images/the-eksperts-Rectangle 229.png"
                    alt="Fisnik Salihu"
                    width={300} // Adjust based on actual size
                    height={200}
                    quality={80}
                    priority={true} // LCP optimization
                    className="object-cover"
                    />
                
                </div>

                {/* Right Section: Contact Details */}
                <div className="heading1 font-matt flex-1 text-center lg:text-left lg:space-y-6">
                {/* Name and Title */}
                <h2 className="text-4xl lg:text-[78px] lg:leading-[80px] font-matt font-[300] mb-2 lg:mb-0">FISNIK SALIHU</h2>
                <p className=" text-black text-xl lg:text-[28px] lg:leading-[37px] font-matt font-[300] uppercase ml-1 mb-[24px] lg:mb-0">Co-Founder & strategy ekspert</p>

                {/* Email Section */}
                <div className="flex extraclass2 flex-col lg:flex-row items-center lg:space-x-10 lg:space-y-0 mb-[24px] lg:mb-0 ">
                    <p className="text-black text-lg lg:text-[20px] font-[300] lg:mt-[2px] lg:mr-[20px] ml-1">
                        Schreiben Sie mir
                    </p>
                    <a
                        href="mailto:fisnik.salihu@the-eksperts.com"
                        className="lg:text-black text-white lg:bg-transparent bg-[#0009FF] border-[2px] lg:border-black  text-[16px] lg:text-[20px] py-2 px-4 rounded-full hover:bg-[#0009FF] hover:text-white hover:border-[#0009FF]"
                    >
                        fisnik.salihu@the-eksperts.com
                    </a>
                    </div>

                    {/* Phone Section */}
                    <div className="flex extraclass2 flex-col lg:flex-row items-center lg:space-x-10 lg:space-y-0 space-y-0">
                    <p className="text-black text-lg lg:text-[20px] font-[300] lg:mt-[2px] lg:mr-[-28px] ml-1">
                        oder rufen Sie mich an
                    </p>
                    <a
                        href="tel:+41799213000"
                        className="lg:text-black text-white lg:bg-transparent bg-[#0009FF] border-[2px] lg:border-black text-[16px] lg:text-[20px] py-2 px-4 rounded-full hover:bg-[#0009FF] hover:text-white hover:border-[#0009FF]"
                    >
                        +41 79 921 30 00
                    </a>
                    </div>

                </div>
            </div>
            </section>

      </main>
    </>
  );
};

export default Home;
