import Head from 'next/head';
import Link from 'next/link';
import { useState } from "react";
import FlipCard1 from '../components/CardsAnimations/FlipCard1';
import FlipCard2 from '../components/CardsAnimations/FlipCard2';
import FlipCard3 from '../components/CardsAnimations/FlipCard3';
import FlipCard4 from '../components/CardsAnimations/FlipCard4';
import FlipCard5 from '../components/CardsAnimations/FlipCard5';
import FlipCard6 from '../components/CardsAnimations/FlipCard6';
import FlipCard7 from '../components/CardsAnimations/FlipCard7.jsx';
const Projekte = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    return (
    <>
      <Head>
        <title>Projekte - The Eksperts</title>
      </Head>
      <main className="max-w-[1280px] mx-auto lg:p-2 text-center">
        
        {/* Main Heading */}
        <div className="w-full max-w-[1280px] mx-auto text-center my-16 lg:mt-[170px] lg:mb-[145px]">
          <h1 className="text-6xl lg:text-[174px] lg:leading-[158px] font-matt font-[900] tracking-tight uppercase">
          Unsere Arbeit
          </h1>
          <p className="font-matt font-[300] sm:text-lg lg:text-[22px] lg:leading-[33px] mt-1 text-[#00000]">
          spricht für sich!
          </p>
        </div>
          

        <section className="md:block hidden lg:mb-[240px] mb-[160px]">
            <video
                className="w-full h-auto"
                loop
                muted
                autoPlay
                playsInline
                style={{ objectFit: "cover" }}
                controlsList="nodownload nofullscreen noremoteplayback" // Prevent download, fullscreen, and remote playback controls
                onMouseOver={(e) => e.target.controls = false} // Hide controls when hovered
                onMouseOut={(e) => e.target.controls = false} // Show controls when mouse leaves
            >
                <source src="/images/Projekte-theeksperts.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </section>
            <section className="md:hidden block lg:mb-[240px] mb-[160px]">
            <video
                className="w-full h-auto"
                loop
                muted
                autoPlay
                playsInline
                style={{ objectFit: "cover" }}
                controlsList="nodownload nofullscreen noremoteplayback" // Prevent download, fullscreen, and remote playback controls
                onMouseOver={(e) => e.target.controls = false} // Hide controls when hovered
                onMouseOut={(e) => e.target.controls = false} // Show controls when mouse leaves
            >
                <source src="/images/Projekte Header Mobile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </section>
            <section className='lg:mb-[300px] mb-[160px]'>
            <h2 className="font-matt text-black text-2xl lg:text-[28px] font-[900] leading-[37px] uppercase">
                    Gemeinsam auf der Reise: Abgeschlossene Erfolge und <br></br> laufende Entwicklungen
                </h2>
                <p className="font-matt text-black text-lg lg:text-[20px] font-[300] leading-[33px] mt-4">
                    Unsere Projekte sind das Ergebnis von Leidenschaft, Innovation und enger Zusammenarbeit. <br></br>
                    Jeder Meilenstein spiegelt unser Engagement wider, aussergewöhnliche Lösungen zu schaffen <br></br>
                    und die Erwartungen unserer Partner zu übertreffen.
                </p>
                <p className="font-matt text-black text-base lg:text-[20px] font-[300] leading-[33px] mt-6">
                    Lassen Sie sich inspirieren von den Erfolgsgeschichten, die wir gemeinsam mit unseren Kunden <br></br>
                    <strong className='font-[900]'>verwirklicht haben</strong> oder noch <strong className='font-[900]'>verwirklichen werden.</strong>
                </p>
            </section>
            
            <section className='md:block hidden lg:mb-[300px] mb-8'>
            <video
                className="w-full h-auto rounded-[20px]"
                loop
                muted
                autoPlay
                playsInline
                style={{ objectFit: "cover" }}
                controlsList="nodownload nofullscreen noremoteplayback" // Prevent download, fullscreen, and remote playback controls
                onMouseOver={(e) => e.target.controls = false} // Hide controls when hovered
                onMouseOut={(e) => e.target.controls = false} // Show controls when mouse leaves
            >
                <source src="/images/ProjekteFinal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </section> 
            <section className='md:hidden block mb-[160px] lg:mb-[300px]'>
            <video
                className="w-full h-auto rounded-[20px]"
                loop
                muted
                autoPlay
                playsInline
                style={{ objectFit: "cover" }}
                controlsList="nodownload nofullscreen noremoteplayback" // Prevent download, fullscreen, and remote playback controls
                onMouseOver={(e) => e.target.controls = false} // Hide controls when hovered
                onMouseOut={(e) => e.target.controls = false} // Show controls when mouse leaves
            >
                <source src="/images/Projekte Final story.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </section> 
            <section className='flex lg:flex-row flex-col lg:gap-[32px]'>
            <FlipCard1 />
            <FlipCard2 />
            </section>

            <section className='flex lg:flex-row flex-col lg:gap-[32px]'>
            <FlipCard3 />
            <FlipCard4 />
            </section>

            <section className='flex lg:flex-row flex-col lg:gap-[32px]'>
            <FlipCard5 />
            <FlipCard6 />
            </section>

            <section className='flex lg:flex-row flex-col lg:gap-[32px] mb-[160px] lg:mb-[300px]'>
            <FlipCard7 />
            <div className="flex flex-col w-[361] h-[557] md:w-[617px] md:h-[557px] justify-center items-center bg-[#0009FF] text-white p-6 rounded-[8px]">
      {/* Header */}
      <h2 className="text-white text-[16px] lg:text-[28px] font-[500] lg:font-[900] uppercase leading-[37px] text-center font-matt">
        SIE MÖCHTEN EIN PROJEKT STARTEN?
      </h2>
      
      {/* Form Fields */}
      <div className="flex flex-col space-y-4 lg:w-[512px] h-[350px] justify-center">
  {/* Unternehmen */}
  <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
    <label className="text-[#FFFF] text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[200px] text-left">
      Unternehmen
    </label>
    <input 
      type="text" 
      placeholder="Lorem Ipsum" 
      className="bg-white w-full md:w-[320px] md:h-[58px] text-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] text-left" 
    />
  </div>

  {/* Email */}
  <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
    <label className="text-[#FFFF] text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[200px] text-left">
      Email
    </label>
    <input 
      type="text" 
      placeholder="Lorem Ipsum" 
      className="bg-white w-full md:w-[405px] md:h-[58px] text-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] text-left" 
    />
  </div>

  {/* Welche Dienstleistung */}
  <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
    <label className="text-[#FFFF] text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[200px] text-left">
      Welche Dienstleistung
    </label>
    <input 
      type="text" 
      placeholder="Lorem Ipsum" 
      className="bg-white w-full md:w-[297px] md:h-[58px] text-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] text-left" 
    />
  </div>

  {/* Startdatum */}
  <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
    <label className="text-[#FFFF] text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[200px] text-left">
      Startdatum
    </label>
    <input 
      type="text" 
      placeholder="Lorem Ipsum" 
      className="bg-white w-full md:w-[350px] md:h-[58px] text-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] text-left" 
    />
  </div>
</div>

      
      {/* Button */}
      <div className="flex justify-center mt-6">
      <button className="bg-transparent text-white text-[18px] font-bold flex items-center justify-center w-[369px] h-[44px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="369" height="44" viewBox="0 0 369 44" fill="none">
            <path d="M1.5 42V17.7007L22.8814 2H366.876V42H1.5Z" stroke="white" strokeWidth="3"/>
          </svg>
          <span className="absolute font-[900] leading-[37px] text-[28px] font-matt">START PROJECT!</span>
        </button>
       
      </div>
    </div>
            </section>
         
      </main>
    </>
  );
};


export default Projekte;
