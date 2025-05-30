import Head from 'next/head';
import Link from 'next/link';
import { useState } from "react";
import VisionBook from '../../components/VisitonSections/VisionBook'
import BookLeistungen from '../../components/Leistungen/BookLeistungen'

const Bookyourekspert = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    return (
    <>
      <Head>
      <title>Remote IT Personal - flexibel und zielgerichtet | the eksperts</title>

      {/* Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta 
        name="description" 
        content="Direkter Zugang zu Experten für IT, Design & Beratung. Expertise auf Abruf – Jetzt buchen & bis zu 50% der Kosten sparen!" 
      />
      <meta 
        name="keywords" 
        content="Remote IT Personal, IT Beratung, Design Experten, IT Experten, Beratung auf Abruf, Flexibles IT Personal" 
      />
      <meta name="author" content="the eksperts" />

      {/* Open Graph (Facebook & LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta 
        property="og:title" 
        content="Remote IT Personal - flexibel und zielgerichtet | the eksperts" 
      />
      <meta 
        property="og:description" 
        content="Direkter Zugang zu Experten für IT, Design & Beratung. Expertise auf Abruf – Jetzt buchen & bis zu 50% der Kosten sparen!" 
      />
      <meta 
        property="og:image" 
        content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png" 
      />
      <meta property="og:url" content="https://www.the-eksperts.com/services/bookyourekspert" />
      <meta property="og:site_name" content="the eksperts" />
      <meta property="og:locale" content="de_DE" />

      {/* LinkedIn Metadata */}
      <meta property="linkedin:site" content="https://www.linkedin.com/company/the-eksperts/" />
      <meta property="linkedin:handle" content="@theeksperts" />
      <meta property="linkedin:cardType" content="summary_large_image" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.the-eksperts.com/services/bookyourekspert" />
    </Head>
      <main className="max-w-[1280px] mx-auto p-4 lg:p-2 text-center">
        
        {/* Main Heading */}
        <div className="w-full max-w-[1280px] mx-auto text-center mt-[100px] mb-[160px] lg:my-16 lg:mt-[170px] lg:mb-[300px]">
          <h1 className="lg:block hidden text-6xl lg:text-[174px] lg:leading-[158px] font-matt font-[900] tracking-tight mb-8 uppercase">
          Book your Ekspert
          </h1>
          <h1 className="lg:hidden block text-[70px] leading-[70px] lg:text-[174px] lg:leading-[158px] font-matt font-[900] tracking-tight mb-2 uppercase">
          Book your Ekspert
          </h1>
          <p className="font-matt font-[300] text-[16px] lg:text-[22px] lg:leading-[33px] lg:mt-4 text-gray-900">
          Expertise auf Abruf 
          </p>
        </div>
          

          <section className='lg:mb-[300px] mb-[160px]'>
          <h2 className='text-[24px] lg:text-[80px] lg:leading-[80px] font-matt font-[700] lg:mb-8 mb-1'>
          Warum Book Your Ekspert?
          </h2>
          <p className='text-[16px] leading-[24px] lg:text-[20px] lg:leading-[26px] font-[300] font-matt lg:mb-[10px]'>
          Unsere Eksperten sind nicht nur Fachkräfte, sondern echte Partner, die Ihre Projekte voranbringen. 
          </p>
          
          <VisionBook/>
          </section>
            
            <section className='lg:mb-[300px] mb-[160px]'>
          <h2 className='text-[40px] leading-[48px] lg:text-[80px] lg:leading-[80px] font-matt font-[700] mb-4 lg:mb-8'>
          Unsere Spezialgebiete
          </h2>
          <p className='text-[16px] lg:text-[20px] lg:leading-[26px] font-[300] font-matt lg:mb-[10px]'>
          Egal, ob Sie kurzfristige Unterstützung oder eine langfristige Lösung suchen – wir haben die richtige Ekspertise für Sie:
          </p>
          <BookLeistungen/>
          </section>

          <section className='lg:mb-[300px] mb-[160px]'>
          <h2 className='text-[40px] leading-[40px] lg:text-[80px] lg:leading-[80px] font-matt font-[700] mb-4 lg:mb-8'>
          So funktioniert es 
          </h2>
            <section className="container mx-auto py-2 lg:px-2 text-center">
              {/* Steps Container */}
              <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap">
                {/* Step 1 */}
                <div
                  className="flex flex-col justify-center items-start gap-4 p-6 rounded-[10px] text-left"
                  style={{
                    width: "100%",
                    maxWidth: "406px",
                    height: "389px",
                    background:
                      "linear-gradient(0deg, #0009FF 0%, #0009FF 100%), linear-gradient(137deg, #0009FF 9.47%, #000599 49%, #000 97.32%)",
                  }}
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="128" viewBox="0 0 91 128" fill="none">
                      <path
                        d="M0.000433032 42.666H42.6681V-0.00170898H26.5509C26.5509 14.6617 14.6639 26.5492 0 26.5492V42.666H0.000433032Z"
                        fill="#F1F1F1"
                      />
                      <path
                        d="M48.0018 128.002V-0.00170898H65.78C79.5263 -0.00170898 90.6695 11.1419 90.6695 24.8877V128.002H48.0018Z"
                        fill="#F1F1F1"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[24px] md:text-[28px] font-[900] leading-[37px] font-matt text-white uppercase mb-2">
                      BEDARFSANALYSE
                    </h3>
                    <p className="text-[18px] md:text-[20px] font-[300] leading-[30px] md:leading-[33px] font-matt text-white">
                      Teilen Sie uns mit, welche Unterstützung Sie benötigen.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className="flex flex-col justify-center items-start gap-4 p-6 rounded-[10px] text-left"
                  style={{
                    width: "100%",
                    maxWidth: "406px",
                    height: "389px",
                    background:
                      "linear-gradient(0deg, #0009FF 0%, #0009FF 100%), linear-gradient(137deg, #0009FF 9.47%, #000599 49%, #000 97.32%)",
                  }}
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="128" viewBox="0 0 113 128" fill="none">
                      <path
                        d="M0 42.666H16.2579C21.0079 27.6757 34.9211 17.4898 50.6457 17.4898L56.1887 -0.00170898H13.521L0 42.666Z"
                        fill="#F1F1F1"
                      />
                      <path
                        d="M64.0018 128.002H106.67L112.172 110.637C99.0295 110.637 89.6768 97.8625 93.6469 85.334H77.5219L64.0018 128.002Z"
                        fill="#F1F1F1"
                      />
                      <path
                        d="M59.3549 128.002H16.6872L61.5216 -0.00170898C82.3722 -0.00170898 96.9775 20.5891 90.0848 40.2675L59.3549 128.002Z"
                        fill="#F1F1F1"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[24px] md:text-[28px] font-[900] leading-[37px] font-matt text-white uppercase mb-2">
                      PASSENDER EKSPERTE
                    </h3>
                    <p className="text-[18px] md:text-[20px] font-[300] leading-[30px] md:leading-[33px] font-matt text-white">
                      Wir finden den perfekten Eksperten für Ihr Projekt.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className="flex flex-col justify-center items-start gap-4 p-6 rounded-[10px] text-left"
                  style={{
                    width: "100%",
                    maxWidth: "406px",
                    height: "389px",
                    background:
                      "linear-gradient(0deg, #0009FF 0%, #0009FF 100%), linear-gradient(137deg, #0009FF 9.47%, #000599 49%, #000 97.32%)",
                  }}
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="128" viewBox="0 0 113 128" fill="none">
                      <path
                        d="M42.6677 -0.00195312H0V42.6657H16.1172C16.1172 28.0023 28.0042 16.1148 42.6681 16.1148L42.6677 -0.00195312Z"
                        fill="#F1F1F1"
                      />
                      <path
                        d="M42.8133 42.6643H32.0004C32.0004 54.4468 22.4491 63.9982 10.6666 63.9982C22.4491 63.9982 32.0004 73.5495 32.0004 85.332H42.8133V42.6643Z"
                        fill="#F1F1F1"
                      />
                      <path
                        d="M0 85.3342V128.002H42.6677V111.885C28.0042 111.885 16.1168 99.9976 16.1168 85.3337L0 85.3342Z"
                        fill="#F1F1F1"
                      />
                      <path
                        d="M48.0016 128.002V-0.00195312H65.7798C79.5261 -0.00195312 90.6693 11.1416 90.6693 24.8875V103.112C90.6693 116.858 79.5257 128.001 65.7798 128.001H48.0016V128.002Z"
                        fill="#F1F1F1"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[24px] md:text-[28px] font-[900] leading-[37px] font-matt text-white uppercase mb-2">
                      DIREKTER START
                    </h3>
                    <p className="text-[18px] md:text-[20px] font-[300] leading-[30px] md:leading-[33px] font-matt text-white">
                      Unsere Fachkraft ist schnell einsatzbereit und unterstützt Sie zielgerichtet.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
          
           
            <section className="container mx-auto lg:py-12 lg:px-6 text-center lg:mb-[300px] mb-[160px]">
              <h2 className="text-[38px] leading-[48px] font-[700] lg:text-[76px] lg:leading-[80px] font-matt text-black mb-6 lg:mb-8">
              Warum warten? <br></br>Starten Sie noch heute!  
              </h2>
              <p className="lg:block hidden text-lg lg:text-[20px] lg:leading-[33px] font-matt font-[300] mb-8 lg:px-24">
              Unsere Eksperten stehen bereit, Ihre Projekte zu unterstützen. Kontaktieren Sie uns und erfahren Sie,<br></br> wie wir Ihnen helfen können, Ihre Ziele zu erreichen.   
              </p>
              <p className="lg:hidden block text-[16px] leading-[24px] lg:text-[20px] lg:leading-[33px] font-matt font-[300] mb-8 lg:px-24">
              Unsere Eksperten stehen bereit, Ihre Projekte zu unterstützen. Kontaktieren Sie uns und erfahren Sie, wie wir Ihnen helfen können, Ihre Ziele zu erreichen.   
              </p>
              <div className="mt-[40px] items-center justify-center flex lg:mt-[50px]">
                  <Link href="/kontakt" className="block">
              <button className="group relative font-matt flex items-center justify-center px-1 py-1 bg-transparent border-2 border-[#0009FF] text-[#0009FF] rounded-[10px] font-medium text-[20px] transition duration-100 ease-in-out overflow-hidden">
            {/* SVG Background */}
            <div className="w-14 h-14 bg-[#0009FF] rounded-[10px] flex items-center justify-center text-white transform scale-x-100 origin-left transition-all duration-500 ease-in-out group-hover:scale-x-100 relative z-20">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 1">
                            <path id="Vector" d="M22.2207 0.708819L22.2207 7.64062L15.2889 7.64062L15.2889 0.708818L22.2207 0.708819Z" fill="white" stroke="#0009FF"/>
                            <g id="Clip path group">
                            <mask id="mask0_781_149"  maskUnits="userSpaceOnUse" x="14" y="0" width="9" height="9">
                            <g id="clippath">
                            <path id="Vector_2" d="M22.2207 0.701006L22.2207 7.63281L15.2889 7.63281L15.2889 0.701006L22.2207 0.701006Z" fill="white" stroke="white"/>
                            </g>
                            </mask>
                            <g mask="url(#mask0_781_149)">
                            <g id="Group">
                            <g id="Vector_3">
                            <mask id="path-3-inside-1_781_149" fill="white">
                            <path d="M22.5657 0.201619L22.5657 8.13342L22.8712 8.13342L22.8712 0.201619L22.5657 0.201619ZM14.7895 0.357257L22.7213 0.357257L22.7213 0.0517435L14.7895 0.0517428L14.7895 0.357257ZM14.9451 8.13342L14.9451 0.201618L14.6396 0.201618L14.6396 8.13342L14.9451 8.13342ZM22.7213 7.97779L14.7895 7.97779L14.7895 8.2833L22.7213 8.2833L22.7213 7.97779ZM22.7213 0.201619L22.877 0.201619L22.877 0.0459795L22.7213 0.0459795L22.7213 0.201619ZM14.7895 0.201618L14.7895 0.0459788L14.6339 0.0459788L14.6339 0.201618L14.7895 0.201618ZM14.7895 8.13342L14.6339 8.13342L14.6339 8.28906L14.7895 8.28906L14.7895 8.13342ZM22.7213 8.13342L22.7213 8.28906L22.877 8.28906L22.877 8.13342L22.7213 8.13342Z"/>
                            </mask>
                            <path d="M22.5657 0.201619L22.5657 8.13342L22.8712 8.13342L22.8712 0.201619L22.5657 0.201619ZM14.7895 0.357257L22.7213 0.357257L22.7213 0.0517435L14.7895 0.0517428L14.7895 0.357257ZM14.9451 8.13342L14.9451 0.201618L14.6396 0.201618L14.6396 8.13342L14.9451 8.13342ZM22.7213 7.97779L14.7895 7.97779L14.7895 8.2833L22.7213 8.2833L22.7213 7.97779ZM22.7213 0.201619L22.877 0.201619L22.877 0.0459795L22.7213 0.0459795L22.7213 0.201619ZM14.7895 0.201618L14.7895 0.0459788L14.6339 0.0459788L14.6339 0.201618L14.7895 0.201618ZM14.7895 8.13342L14.6339 8.13342L14.6339 8.28906L14.7895 8.28906L14.7895 8.13342ZM22.7213 8.13342L22.7213 8.28906L22.877 8.28906L22.877 8.13342L22.7213 8.13342Z" fill="#FFFDFD"/>
                            <path d="M22.5657 0.201619L22.5657 -0.798381L21.5657 -0.798381L21.5657 0.201619L22.5657 0.201619ZM22.5657 8.13342L21.5657 8.13342L21.5657 9.13342L22.5657 9.13342L22.5657 8.13342ZM22.8712 8.13342L22.8712 9.13342L23.8712 9.13342L23.8712 8.13342L22.8712 8.13342ZM22.8712 0.201619L23.8712 0.201619L23.8712 -0.798381L22.8712 -0.798381L22.8712 0.201619ZM14.7895 0.357257L13.7895 0.357257L13.7895 1.35726L14.7895 1.35726L14.7895 0.357257ZM22.7213 0.357257L22.7213 1.35726L23.7213 1.35726L23.7213 0.357257L22.7213 0.357257ZM22.7213 0.0517435L23.7213 0.0517436L23.7213 -0.948256L22.7213 -0.948257L22.7213 0.0517435ZM14.7895 0.0517428L14.7895 -0.948257L13.7895 -0.948257L13.7895 0.0517427L14.7895 0.0517428ZM14.9451 8.13342L14.9451 9.13342L15.9451 9.13342L15.9451 8.13342L14.9451 8.13342ZM14.9451 0.201618L15.9451 0.201619L15.9451 -0.798381L14.9451 -0.798382L14.9451 0.201618ZM14.6396 0.201618L14.6396 -0.798382L13.6396 -0.798382L13.6396 0.201618L14.6396 0.201618ZM14.6396 8.13342L13.6396 8.13342L13.6396 9.13342L14.6396 9.13342L14.6396 8.13342ZM22.7213 7.97779L23.7213 7.97779L23.7213 6.97779L22.7213 6.97779L22.7213 7.97779ZM14.7895 7.97779L14.7895 6.97779L13.7895 6.97779L13.7895 7.97779L14.7895 7.97779ZM14.7895 8.2833L13.7895 8.2833L13.7895 9.2833L14.7895 9.2833L14.7895 8.2833ZM22.7213 8.2833L22.7213 9.2833L23.7213 9.2833L23.7213 8.2833L22.7213 8.2833ZM22.7213 0.201619L21.7213 0.201619L21.7213 1.20162L22.7213 1.20162L22.7213 0.201619ZM22.877 0.201619L22.877 1.20162L23.877 1.20162L23.877 0.201619L22.877 0.201619ZM22.877 0.0459795L23.877 0.0459796L23.877 -0.95402L22.877 -0.954021L22.877 0.0459795ZM22.7213 0.0459795L22.7213 -0.954021L21.7213 -0.954021L21.7213 0.0459794L22.7213 0.0459795ZM14.7895 0.201618L14.7895 1.20162L15.7895 1.20162L15.7895 0.201619L14.7895 0.201618ZM14.7895 0.0459788L15.7895 0.0459789L15.7895 -0.954021L14.7895 -0.954021L14.7895 0.0459788ZM14.6339 0.0459788L14.6339 -0.954021L13.6339 -0.954021L13.6339 0.0459787L14.6339 0.0459788ZM14.6339 0.201618L13.6339 0.201618L13.6339 1.20162L14.6339 1.20162L14.6339 0.201618ZM14.7895 8.13342L15.7895 8.13342L15.7895 7.13342L14.7895 7.13342L14.7895 8.13342ZM14.6339 8.13342L14.6339 7.13342L13.6339 7.13342L13.6339 8.13342L14.6339 8.13342ZM14.6339 8.28906L13.6339 8.28906L13.6339 9.28906L14.6339 9.28906L14.6339 8.28906ZM14.7895 8.28906L14.7895 9.28906L15.7895 9.28906L15.7895 8.28906L14.7895 8.28906ZM22.7213 8.13342L22.7213 7.13342L21.7213 7.13342L21.7213 8.13342L22.7213 8.13342ZM22.7213 8.28906L21.7213 8.28906L21.7213 9.28906L22.7213 9.28906L22.7213 8.28906ZM22.877 8.28906L22.877 9.28906L23.877 9.28906L23.877 8.28906L22.877 8.28906ZM22.877 8.13342L23.877 8.13342L23.877 7.13342L22.877 7.13342L22.877 8.13342ZM21.5657 0.201619L21.5657 8.13342L23.5657 8.13342L23.5657 0.201619L21.5657 0.201619ZM22.5657 9.13342L22.8712 9.13342L22.8712 7.13342L22.5657 7.13342L22.5657 9.13342ZM23.8712 8.13342L23.8712 0.201619L21.8712 0.201619L21.8712 8.13342L23.8712 8.13342ZM22.8712 -0.798381L22.5657 -0.798381L22.5657 1.20162L22.8712 1.20162L22.8712 -0.798381ZM14.7895 1.35726L22.7213 1.35726L22.7213 -0.642742L14.7895 -0.642743L14.7895 1.35726ZM23.7213 0.357257L23.7213 0.0517436L21.7213 0.0517434L21.7213 0.357257L23.7213 0.357257ZM22.7213 -0.948257L14.7895 -0.948257L14.7895 1.05174L22.7213 1.05174L22.7213 -0.948257ZM13.7895 0.0517427L13.7895 0.357257L15.7895 0.357257L15.7895 0.0517429L13.7895 0.0517427ZM15.9451 8.13342L15.9451 0.201619L13.9451 0.201618L13.9451 8.13342L15.9451 8.13342ZM14.9451 -0.798382L14.6396 -0.798382L14.6396 1.20162L14.9451 1.20162L14.9451 -0.798382ZM13.6396 0.201618L13.6396 8.13342L15.6396 8.13342L15.6396 0.201619L13.6396 0.201618ZM14.6396 9.13342L14.9451 9.13342L14.9451 7.13342L14.6396 7.13342L14.6396 9.13342ZM22.7213 6.97779L14.7895 6.97779L14.7895 8.97779L22.7213 8.97779L22.7213 6.97779ZM13.7895 7.97779L13.7895 8.2833L15.7895 8.2833L15.7895 7.97779L13.7895 7.97779ZM14.7895 9.2833L22.7213 9.2833L22.7213 7.2833L14.7895 7.2833L14.7895 9.2833ZM23.7213 8.2833L23.7213 7.97779L21.7213 7.97779L21.7213 8.2833L23.7213 8.2833ZM22.7213 1.20162L22.877 1.20162L22.877 -0.798381L22.7213 -0.798381L22.7213 1.20162ZM23.877 0.201619L23.877 0.0459796L21.877 0.0459794L21.877 0.201619L23.877 0.201619ZM22.877 -0.954021L22.7213 -0.954021L22.7213 1.04598L22.877 1.04598L22.877 -0.954021ZM21.7213 0.0459794L21.7213 0.201619L23.7213 0.201619L23.7213 0.0459796L21.7213 0.0459794ZM15.7895 0.201619L15.7895 0.0459789L13.7895 0.0459787L13.7895 0.201618L15.7895 0.201619ZM14.7895 -0.954021L14.6339 -0.954021L14.6339 1.04598L14.7895 1.04598L14.7895 -0.954021ZM13.6339 0.0459787L13.6339 0.201618L15.6339 0.201619L15.6339 0.0459789L13.6339 0.0459787ZM14.6339 1.20162L14.7895 1.20162L14.7895 -0.798382L14.6339 -0.798382L14.6339 1.20162ZM14.7895 7.13342L14.6339 7.13342L14.6339 9.13342L14.7895 9.13342L14.7895 7.13342ZM13.6339 8.13342L13.6339 8.28906L15.6339 8.28906L15.6339 8.13342L13.6339 8.13342ZM14.6339 9.28906L14.7895 9.28906L14.7895 7.28906L14.6339 7.28906L14.6339 9.28906ZM15.7895 8.28906L15.7895 8.13342L13.7895 8.13342L13.7895 8.28906L15.7895 8.28906ZM21.7213 8.13342L21.7213 8.28906L23.7213 8.28906L23.7213 8.13342L21.7213 8.13342ZM22.7213 9.28906L22.877 9.28906L22.877 7.28906L22.7213 7.28906L22.7213 9.28906ZM23.877 8.28906L23.877 8.13342L21.877 8.13342L21.877 8.28906L23.877 8.28906ZM22.877 7.13342L22.7213 7.13342L22.7213 9.13342L22.877 9.13342L22.877 7.13342Z" fill="#0009FF" mask="url(#path-3-inside-1_781_149)"/>
                            </g>
                            </g>
                            </g>
                            </g>
                            <path id="Vector_4" d="M1.10871 16.6725L8.01594 9.76525L12.8945 9.76525L12.8945 12.9775C12.8945 14.0717 12.458 15.1211 11.6857 15.8988C11.6855 15.8989 11.6854 15.8991 11.6852 15.8993L6.01035 21.5741L1.10871 16.6725Z" fill="white" stroke="#0009FF"/>
                            <g id="Clip path group_2">
                            <g id="Group_2">
                            <g id="Vector_5">
                            <mask id="path-6-inside-2_781_149" fill="white">
                            <path d="M6.11852 22.1636L0.509754 16.5549L0.290721 16.7739L5.89947 22.3827L6.11852 22.1636ZM11.929 16.1341L5.89947 22.1636L6.11852 22.3827L12.1481 16.3531L11.929 16.1341ZM13.2375 12.9694C13.2375 14.1569 12.7649 15.2925 11.929 16.1341L12.1481 16.3531C13.0473 15.4539 13.5488 14.2433 13.5488 12.9752L13.2433 12.9752L13.2375 12.9694ZM13.2375 9.25714L13.2375 12.9694L13.5431 12.9694L13.5431 9.25714L13.2375 9.25714ZM7.80173 9.41278L13.3874 9.41278L13.3874 9.10727L7.80173 9.10726L7.80173 9.41278ZM0.509754 16.7739L7.917 9.36666L7.69795 9.14762L0.290721 16.5491L0.509754 16.7681L0.509754 16.7739ZM6.00899 22.2731L5.89947 22.3827L6.00899 22.4922L6.11852 22.3827L6.00899 22.2731ZM13.3932 9.25714L13.5488 9.25714L13.5488 9.1015L13.3932 9.1015L13.3932 9.25714ZM7.80173 9.25714L7.80173 9.1015L7.73831 9.1015L7.6922 9.14762L7.80173 9.25714ZM0.400246 16.6644L0.290721 16.5549L0.181197 16.6644L0.290721 16.7739L0.400246 16.6644Z"/>
                            </mask>
                            <path d="M6.11852 22.1636L0.509754 16.5549L0.290721 16.7739L5.89947 22.3827L6.11852 22.1636ZM11.929 16.1341L5.89947 22.1636L6.11852 22.3827L12.1481 16.3531L11.929 16.1341ZM13.2375 12.9694C13.2375 14.1569 12.7649 15.2925 11.929 16.1341L12.1481 16.3531C13.0473 15.4539 13.5488 14.2433 13.5488 12.9752L13.2433 12.9752L13.2375 12.9694ZM13.2375 9.25714L13.2375 12.9694L13.5431 12.9694L13.5431 9.25714L13.2375 9.25714ZM7.80173 9.41278L13.3874 9.41278L13.3874 9.10727L7.80173 9.10726L7.80173 9.41278ZM0.509754 16.7739L7.917 9.36666L7.69795 9.14762L0.290721 16.5491L0.509754 16.7681L0.509754 16.7739ZM6.00899 22.2731L5.89947 22.3827L6.00899 22.4922L6.11852 22.3827L6.00899 22.2731ZM13.3932 9.25714L13.5488 9.25714L13.5488 9.1015L13.3932 9.1015L13.3932 9.25714ZM7.80173 9.25714L7.80173 9.1015L7.73831 9.1015L7.6922 9.14762L7.80173 9.25714ZM0.400246 16.6644L0.290721 16.5549L0.181197 16.6644L0.290721 16.7739L0.400246 16.6644Z" fill="#FFFDFD"/>
                            <path d="M12.1481 16.3531L11.7945 16.7067L12.5016 15.9996L12.1481 16.3531ZM12.5016 15.9996L12.2826 15.7805L11.5755 16.4876L11.7945 16.7067L12.5016 15.9996ZM11.685 16.5971L11.7945 16.7067L12.5016 15.9996L12.3921 15.89L11.685 16.5971ZM6.11852 22.1636L6.82562 22.8707L7.53273 22.1636L6.82562 21.4565L6.11852 22.1636ZM0.509754 16.5549L1.21686 15.8478L0.509729 15.1406L-0.197377 15.8478L0.509754 16.5549ZM5.89947 22.3827L5.19236 23.0898L5.19236 23.0898L5.89947 22.3827ZM11.929 16.1341L12.6361 16.8412L12.6386 16.8387L11.929 16.1341ZM5.89947 22.1636L5.19236 21.4565L4.48525 22.1636L5.19236 22.8707L5.89947 22.1636ZM6.11852 22.3827L6.82562 23.0898L6.82562 23.0898L6.11852 22.3827ZM12.1481 16.3531L11.441 15.646L11.441 15.646L12.1481 16.3531ZM13.5488 12.9752L14.5488 12.9752L14.5488 11.9752L13.5488 11.9752L13.5488 12.9752ZM13.2433 12.9752L12.5365 13.6826L12.8294 13.9752L13.2433 13.9752L13.2433 12.9752ZM13.2375 9.25714L13.2375 8.25714L12.2375 8.25714L12.2375 9.25714L13.2375 9.25714ZM13.5431 12.9694L13.5431 13.9694L14.5431 13.9694L14.5431 12.9694L13.5431 12.9694ZM13.5431 9.25714L14.5431 9.25714L14.5431 8.25714L13.5431 8.25714L13.5431 9.25714ZM7.80173 9.41278L6.80173 9.41278L6.80173 10.4128L7.80173 10.4128L7.80173 9.41278ZM13.3874 9.41278L13.3874 10.4128L14.3874 10.4128L14.3874 9.41278L13.3874 9.41278ZM13.3874 9.10727L14.3874 9.10727L14.3874 8.10727L13.3874 8.10727L13.3874 9.10727ZM7.80173 9.10726L7.80173 8.10726L6.80173 8.10726L6.80173 9.10726L7.80173 9.10726ZM0.509754 16.7739L-0.490246 16.7739L-0.490246 19.1881L1.21686 17.481L0.509754 16.7739ZM7.917 9.36666L8.62411 10.0738L9.33122 9.36666L8.62411 8.65955L7.917 9.36666ZM7.69795 9.14762L8.40506 8.4405L7.69822 7.73368L6.99112 8.44024L7.69795 9.14762ZM0.290721 16.5491L-0.41611 15.8417L-1.12374 16.5488L-0.416409 17.2562L0.290721 16.5491ZM0.509754 16.7681L1.50975 16.7681L1.50975 16.354L1.21688 16.0611L0.509754 16.7681ZM6.00899 22.2731L6.71609 21.566L6.00899 20.8589L5.30189 21.566L6.00899 22.2731ZM6.00899 22.4922L5.30189 23.1993L6.00899 23.9064L6.71609 23.1993L6.00899 22.4922ZM13.3932 9.25714L12.3932 9.25714L12.3932 10.2571L13.3932 10.2571L13.3932 9.25714ZM13.5488 9.25714L13.5488 10.2571L14.5488 10.2571L14.5488 9.25714L13.5488 9.25714ZM13.5488 9.1015L14.5488 9.1015L14.5488 8.1015L13.5488 8.1015L13.5488 9.1015ZM13.3932 9.1015L13.3932 8.1015L12.3932 8.1015L12.3932 9.1015L13.3932 9.1015ZM7.80173 9.25714L7.09463 9.96425L8.80173 11.6713L8.80173 9.25714L7.80173 9.25714ZM7.80173 9.1015L8.80173 9.1015L8.80173 8.1015L7.80173 8.1015L7.80173 9.1015ZM7.73831 9.1015L7.73831 8.1015L7.32404 8.1015L7.03114 8.39446L7.73831 9.1015ZM7.6922 9.14762L6.98503 8.44058L6.27805 9.14769L6.9851 9.85473L7.6922 9.14762ZM0.400246 16.6644L1.10735 17.3715L1.81447 16.6644L1.10735 15.9573L0.400246 16.6644ZM0.290721 16.5549L0.997823 15.8477L0.290722 15.1407L-0.416379 15.8477L0.290721 16.5549ZM0.181197 16.6644L-0.525905 15.9573L-1.23303 16.6644L-0.525907 17.3715L0.181197 16.6644ZM6.82562 21.4565L1.21686 15.8478L-0.197353 17.262L5.41141 22.8707L6.82562 21.4565ZM-0.197377 15.8478L-0.416409 16.0668L0.997852 17.481L1.21688 17.2619L-0.197377 15.8478ZM-0.416386 17.481L5.19236 23.0898L6.60657 21.6756L0.997829 16.0668L-0.416386 17.481ZM6.60657 23.0898L6.82562 22.8707L5.41141 21.4565L5.19236 21.6756L6.60657 23.0898ZM11.2219 15.427L5.19236 21.4565L6.60657 22.8707L12.6361 16.8412L11.2219 15.427ZM5.19236 22.8707L5.41141 23.0898L6.82562 21.6756L6.60657 21.4565L5.19236 22.8707ZM6.82562 23.0898L12.8552 17.0602L11.441 15.646L5.41141 21.6756L6.82562 23.0898ZM12.2375 12.9694C12.2375 13.8904 11.871 14.7734 11.2195 15.4294L12.6386 16.8387C13.6587 15.8116 14.2375 14.4234 14.2375 12.9694L12.2375 12.9694ZM12.8552 17.0602C13.9416 15.9738 14.5488 14.509 14.5488 12.9752L12.5488 12.9752C12.5488 13.9777 12.153 14.934 11.441 15.646L12.8552 17.0602ZM13.5488 11.9752L13.2433 11.9752L13.2433 13.9752L13.5488 13.9752L13.5488 11.9752ZM13.9501 12.2677L13.9443 12.262L12.5308 13.6769L12.5365 13.6826L13.9501 12.2677ZM12.2375 9.25714L12.2375 12.9694L14.2375 12.9694L14.2375 9.25714L12.2375 9.25714ZM13.2375 13.9694L13.5431 13.9694L13.5431 11.9694L13.2375 11.9694L13.2375 13.9694ZM14.5431 12.9694L14.5431 9.25714L12.5431 9.25714L12.5431 12.9694L14.5431 12.9694ZM13.5431 8.25714L13.2375 8.25714L13.2375 10.2571L13.5431 10.2571L13.5431 8.25714ZM7.80173 10.4128L13.3874 10.4128L13.3874 8.41278L7.80173 8.41278L7.80173 10.4128ZM14.3874 9.41278L14.3874 9.10727L12.3874 9.10727L12.3874 9.41278L14.3874 9.41278ZM13.3874 8.10727L7.80173 8.10726L7.80173 10.1073L13.3874 10.1073L13.3874 8.10727ZM6.80173 9.10726L6.80173 9.41278L8.80173 9.41278L8.80173 9.10727L6.80173 9.10726ZM1.21686 17.481L8.62411 10.0738L7.2099 8.65956L-0.197353 16.0668L1.21686 17.481ZM8.62411 8.65955L8.40506 8.4405L6.99085 9.85473L7.2099 10.0738L8.62411 8.65955ZM6.99112 8.44024L-0.41611 15.8417L0.997553 17.2565L8.40479 9.855L6.99112 8.44024ZM-0.416409 17.2562L-0.197377 17.4752L1.21688 16.0611L0.997852 15.842L-0.416409 17.2562ZM-0.490246 16.7681L-0.490246 16.7739L1.50975 16.7739L1.50975 16.7681L-0.490246 16.7681ZM5.30189 21.566L5.19236 21.6756L6.60657 23.0898L6.71609 22.9803L5.30189 21.566ZM5.19236 23.0898L5.30189 23.1993L6.71609 21.7851L6.60657 21.6756L5.19236 23.0898ZM6.71609 23.1993L6.82562 23.0898L5.41141 21.6756L5.30189 21.7851L6.71609 23.1993ZM6.82562 21.6756L6.71609 21.566L5.30189 22.9803L5.41141 23.0898L6.82562 21.6756ZM13.3932 10.2571L13.5488 10.2571L13.5488 8.25714L13.3932 8.25714L13.3932 10.2571ZM14.5488 9.25714L14.5488 9.1015L12.5488 9.1015L12.5488 9.25714L14.5488 9.25714ZM13.5488 8.1015L13.3932 8.1015L13.3932 10.1015L13.5488 10.1015L13.5488 8.1015ZM12.3932 9.1015L12.3932 9.25714L14.3932 9.25714L14.3932 9.1015L12.3932 9.1015ZM8.80173 9.25714L8.80173 9.1015L6.80173 9.1015L6.80173 9.25714L8.80173 9.25714ZM7.80173 8.1015L7.73831 8.1015L7.73831 10.1015L7.80173 10.1015L7.80173 8.1015ZM7.03114 8.39446L6.98503 8.44058L8.39938 9.85466L8.44548 9.80854L7.03114 8.39446ZM6.9851 9.85473L7.09463 9.96425L8.50883 8.55003L8.3993 8.4405L6.9851 9.85473ZM1.10735 15.9573L0.997823 15.8477L-0.416379 17.262L-0.306855 17.3715L1.10735 15.9573ZM-0.416379 15.8477L-0.525905 15.9573L0.888298 17.3715L0.997823 17.262L-0.416379 15.8477ZM-0.525907 17.3715L-0.416381 17.481L0.997824 16.0668L0.8883 15.9573L-0.525907 17.3715ZM0.997824 17.481L1.10735 17.3715L-0.306857 15.9573L-0.416381 16.0668L0.997824 17.481Z" fill="#0009FF" mask="url(#path-6-inside-2_781_149)"/>
                            </g>
                            </g>
                            </g>
                            <path id="Vector_6" d="M15.3533 21.8047L15.3533 9.78292L18.1564 9.78292C20.4342 9.78292 22.2852 11.6289 22.2852 13.9117L22.2852 21.8047L15.3533 21.8047Z" fill="white" stroke="#0009FF"/>
                            <path id="Vector_7" d="M0.884486 7.64062L0.884487 0.708818L9.0426 0.708819C11.176 0.708819 12.9063 2.43909 12.9063 4.57246L12.9063 7.64062L0.884486 7.64062Z" fill="white" stroke="#0009FF"/>
                            </g>
                            </svg>
            </div>
            {/* Button Text */}
            <span className="mx-4 font-matt lg:font-[24px] lg:leading-[33px] font-[300] relative z-20 group-hover:text-white">
              Kontakt aufnehmen
            </span>

            {/* Hover Background Effect */}
            <span className="absolute inset-1 bg-[#0009FF] transition-transform duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100 z-10 rounded-[10px]"></span>
          </button>
                    </Link>
              </div>
            </section>


            <section className="container mx-auto lg:py-4 lg:px-4 text-center lg:mb-[300px] mb-[160px]">
                <h2 className="text-[28px] font-[900] lg:text-[28px] lg:leading-[37px] font-matt text-black mb-6 uppercase ">
                Weitere Services?
                </h2>

                
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Graphic Design */}
                  <div className="p-2">
                  <Link href="/services/the-eksperts-graphicdesign" className="block">
                    <img
                      src="/images/the-eksperts-graphicdesign.png" // Replace with the actual image URL
                      alt="Graphic Design"
                      className="w-full h-auto mb-6"
                    />
                    <div>
                    <h3 className="text-[24px] font-matt font-[900] text-black mb-2 lg:text-[28px] lg:leading-[37px] ">GRAPHIC DESIGN</h3>
                    </div>
                    </Link>
                  </div>

                    {/* Website */}
                    <div className="p-2">
                   <Link href="/services/website" className="block">
                    <img
                      src="/images/the-eksperts-websitee.png" // Replace with the actual image URL
                      alt="Website"
                      className="w-full h-auto mb-6"
                    />
                    <div>
                    <h3 className="text-[24px] font-matt font-[900] text-black mb-2 lg:text-[28px] lg:leading-[37px]">WEBSITE</h3>
                    </div>
                    </Link>

                  </div>

                 {/* Custom Development */}
                 <div className="p-2">
                  <Link href="/services/customdevelopment" className="block">
                    <img
                      src="/images/the-eksperts-costdevelopment.png" // Replace with the actual image URL
                      alt="Custom Development"
                      className="w-full h-auto mb-6"
                    />
                    <div>
                      <h3 className="text-[24px] font-matt font-[900] text-black mb-2 lg:text-[28px] lg:leading-[37px]">CUSTOM DEVELOPMENT</h3>
                    </div>
                  </Link>
                </div>
                </div>
              </section>
      </main>
    </>
  );
};


export default Bookyourekspert;
