import Head from 'next/head';
import Link from 'next/link';
import { useState } from "react";

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
      <main className="max-w-[1280px] mx-auto p-4 lg:p-2 text-center">
        
        {/* Main Heading */}
        <div className="w-full max-w-[1280px] mx-auto text-center my-16 lg:mt-[170px] lg:mb-[145px]">
          <h1 className="text-6xl lg:text-[174px] lg:leading-[158px] font-matt font-[900] tracking-tight mb-8 uppercase">
          Unsere Arbeit
          </h1>
          <p className="font-matt font-[300] sm:text-lg lg:text-[22px] lg:leading-[33px] mt-4 text-gray-900">
          spricht für sich!
          </p>
        </div>
          

        <section className="lg:mb-[240px] mb-8">
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

            <section className='lg:mb-[300px] mb-8'>
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
            
            <section className='lg:mb-[300px] mb-8'>
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
                <source src="/images/Projekte2-theeksperts.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </section>

            
            <section className='lg:mb-[300px] mb-8'>
                <h2 className='text-2xl lg:text-[28px] lg:leading-[37px] font-matt font-[900] mb-8 uppercase'>
                Modernes Webdesign und Entwicklung mit laufendem <br></br> Support
                </h2>
                <p className='text-lg lg:text-[20px] lg:leading-[33px] font-[300] font-matt lg:mb-[20px] mb-4'>
                Für unseren Kunden [Musterfirma AG] haben wir innerhalb von nur zwei Monaten eine neue,<br></br> moderne Website realisiert. Das Projekt umfasste ein ansprechendes Webdesign, das perfekt auf <br></br>die Markenidentität des Unternehmens abgestimmt wurde. Die technische Umsetzung erfolgte <br></br> durch ein massgeschneidertes Webdevelopment, das eine benutzerfreundliche Navigation und <br></br> optimale Ladezeiten sicherstellt.
                </p>
                <p className='text-lg lg:text-[20px] lg:leading-[33px] font-[300] font-matt lg:mb-[20px] mb-4'>

                Zusätzlich haben wir ein Support-Paket integriert, das sicherstellt, dass die Website jederzeit auf<br></br> dem neuesten Stand bleibt und bei Bedarf schnell Anpassungen vorgenommen werden können.<br></br> Das Ergebnis ist eine leistungsstarke und optisch ansprechende Website, die die Online-Präsenz<br></br> unseres Kunden nachhaltig stärkt.</p>
                <p className='text-lg lg:text-[20px] lg:leading-[33px] font-[300] font-matt '>
                Dieses Projekt zeigt, wie Design, Technologie und kontinuierliche Betreuung zu einem<br></br> erfolgreichen Ergebnis führen.         
                </p>
            </section>

            <section className='lg:mb-[300px] mb-8'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {/* Left Column (Image) */}
                <div className="relative">
                <img
                    src="/images/New Card Projekte.png"
                    alt="Example Company"
                    className="w-full h-auto lg:ml-[30px] lg:w-[517px] lg:h-[457px] object-cover rounded-[20px] lg:mt-2"
                />
                
                </div>

                {/* Right Column (Text) */}
                <div className="flex flex-col justify-center lg:justify-start lg:mr-[30px]">
                <h2 className="text-black text-2xl lg:text-[28px] font-[900] leading-[37px] text-center lg:text-left uppercase">
                    Modernes Webdesign und <br></br> Entwicklung mit laufendem Support
                </h2>
                <p className="text-black text-lg lg:text-[20px] font-[300] leading-[33px] mt-4 text-center lg:text-left">
                    Für unseren Kunden [Musterfirma AG] haben wir innerhalb von nur zwei Monaten eine neue, moderne Website
                    realisiert. Das Projekt umfasste ein ansprechendes Webdesign, das perfekt auf die Markenidentität des
                    Unternehmens abgestimmt wurde. Die technische Umsetzung erfolgte durch ein massgeschneidertes Webdevelopment,
                    das eine benutzerfreundliche Navigation und optimale Ladezeiten sicherstellt.
                </p>
                <p className="text-black text-lg lg:text-[20px] font-[300] leading-[33px] mt-4 text-center lg:text-left">
                    Zusätzlich haben wir ein Support-Paket integriert, das sicherstellt, dass die Website jederzeit auf dem
                    neuesten Stand bleibt und bei Bedarf schnell Anpassungen vorgenommen werden können. Das Ergebnis ist eine
                    leistungsstarke und optisch ansprechende Website, die die Online-Präsenz unseres Kunden nachhaltig stärkt.
                </p>
                <p className="text-black text-lg lg:text-[20px] font-[300] leading-[33px] mt-4 text-center lg:text-left">
                    Dieses Projekt zeigt, wie Design, Technologie und kontinuierliche Betreuung zu einem erfolgreichen Ergebnis führen.
                </p>
                </div>
            </div>
            </section>

            <section className='lg:mb-[300px] mb-8'>
                {/* Container for images and form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Image 1 */}
                    <div
                    className="flex items-center justify-center w-[617px] h-[557px]"
                    style={{ backgroundImage: "url('/images/New Card Projekte.png')" }}
                    >
                    </div>
                    
                    {/* Image 2 */}
                    <div
                    className="flex items-center justify-center w-[617px] h-[557px] "
                    style={{ backgroundImage: "url('/images/New Card Projekte.png')" }}
                    >
                    </div>
                    
                    {/* Image 3 */}
                    <div
                    className="flex items-center justify-center w-[617px] h-[557px]"
                    style={{ backgroundImage: "url('/images/Mobiliar Projekte.png')" }}
                    >
                    </div>

                    {/* Contact Form */}
                    <div className="flex justify-center items-center w-[621px] h-[557px] bg-[#0009FF] rounded-lg">
                    <form className="w-full max-w-lg p-4 text-center">
                    <h3 className="text-white text-[28px] font-matt font-extrabold leading-[37px] uppercase mb-10">
                        YOU WANT TO START A PROJEKT?
                    </h3>

                    <div className="flex items-center justify-between w-[370px] h-[58px] p-2 rounded-lg mb-4 mt-4">
                        <label className="text-white font-matt text-[20px] font-light">
                            Services
                        </label>
                        <select className="w-[400px] p-2 lg:ml-[40px] rounded-lg text-black text-[20px] font-light">
                            <option>Salesforce</option>
                            <option>Service 2</option>
                            <option>Service 3</option>
                        </select>
                        </div>

                    {/* Service dropdown */}
                    <div className="flex items-center justify-between w-[370px] h-[58px] p-2 rounded-lg mb-4 mt-4">
                        <label className="text-white font-matt text-[20px] font-light">
                            Services
                        </label>
                        <select className="w-[400px] p-2 lg:ml-[40px] rounded-lg text-black text-[20px] font-light">
                            <option>Salesforce</option>
                            <option>Service 2</option>
                            <option>Service 3</option>
                        </select>
                        </div>

                        <div className="flex items-center justify-between w-[370px] h-[58px] p-2 rounded-lg mb-4 mt-4">
                        <label className="text-white font-matt text-[20px] font-light">
                            Services
                        </label>
                        <select className="w-[400px] p-2 lg:ml-[40px] rounded-lg text-black text-[20px] font-light">
                            <option>Salesforce</option>
                            <option>Service 2</option>
                            <option>Service 3</option>
                        </select>
                        </div>

                        <div className="flex items-center justify-between w-[370px] h-[58px] p-2 rounded-lg mt-4">
                        <label className="text-white font-matt font-[300] text-[20px] ">
                            Kontakt
                        </label>
                        <select className="w-[400px] p-2 lg:ml-[40px] rounded-lg text-black text-[20px] font-light">
                            <option>Salesforce</option>
                            <option>Service 2</option>
                            <option>Service 3</option>
                        </select>
                        </div>
                          
                          <button className='mt-10'>
                        <svg width="369" height="44" viewBox="0 0 369 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 42V17.7007L22.8814 2H366.876V42H1.5Z" stroke="white" stroke-width="3"/>
                            <path d="M40.8082 12.8737H49.2362C50.8789 12.8737 52.3069 13.1724 53.5202 13.7697C54.7522 14.3484 55.6949 15.1884 56.3482 16.2897C57.0202 17.3724 57.3562 18.6417 57.3562 20.0977C57.3562 21.5537 57.0202 22.823 56.3482 23.9057C55.6949 24.9884 54.7522 25.8284 53.5202 26.4257C52.3069 27.0044 50.8789 27.2937 49.2362 27.2937H47.3322V32.4737H40.8082V12.8737ZM48.8442 22.1417C49.4415 22.1417 49.8989 21.983 50.2162 21.6657C50.5522 21.3484 50.7202 20.891 50.7202 20.2937C50.7202 19.715 50.5522 19.267 50.2162 18.9497C49.8989 18.6324 49.4415 18.4737 48.8442 18.4737H47.3322V22.1417H48.8442ZM59.1285 32.4737V12.8737H67.7525C69.2645 12.8737 70.6085 13.1817 71.7845 13.7977C72.9792 14.395 73.9032 15.2444 74.5565 16.3457C75.2285 17.4284 75.5645 18.6604 75.5645 20.0417C75.5645 21.199 75.3312 22.2537 74.8645 23.2057C74.4165 24.139 73.7818 24.9137 72.9605 25.5297L76.7405 32.4737H69.2645L66.7165 27.0417H65.6525V32.4737H59.1285ZM67.1365 22.1417C67.7525 22.1417 68.2285 21.983 68.5645 21.6657C68.9005 21.3484 69.0685 20.891 69.0685 20.2937C69.0685 19.715 68.9005 19.267 68.5645 18.9497C68.2285 18.6324 67.7525 18.4737 67.1365 18.4737H65.6525V22.1417H67.1365ZM88.105 32.8937C85.9023 32.8937 83.989 32.483 82.365 31.6617C80.741 30.8217 79.4903 29.6364 78.613 28.1057C77.7357 26.5564 77.297 24.7457 77.297 22.6737C77.297 20.6017 77.7357 18.8004 78.613 17.2697C79.4903 15.7204 80.741 14.535 82.365 13.7137C83.989 12.8737 85.9023 12.4537 88.105 12.4537C90.289 12.4537 92.193 12.8737 93.817 13.7137C95.441 14.535 96.6917 15.7204 97.569 17.2697C98.4464 18.8004 98.885 20.6017 98.885 22.6737C98.885 24.7457 98.4464 26.5564 97.569 28.1057C96.6917 29.6364 95.441 30.8217 93.817 31.6617C92.193 32.483 90.289 32.8937 88.105 32.8937ZM88.105 26.9017C89.4117 26.9017 90.4197 26.5377 91.129 25.8097C91.8383 25.0817 92.193 24.0364 92.193 22.6737C92.193 21.311 91.8383 20.2657 91.129 19.5377C90.4197 18.8097 89.4117 18.4457 88.105 18.4457C86.7797 18.4457 85.753 18.8097 85.025 19.5377C84.3157 20.2657 83.961 21.311 83.961 22.6737C83.961 24.0364 84.3157 25.0817 85.025 25.8097C85.753 26.5377 86.7797 26.9017 88.105 26.9017ZM103.206 32.6977C102.31 32.6977 101.227 32.595 99.9578 32.3897V26.2857C100.387 26.3977 100.826 26.5004 101.274 26.5937C101.74 26.6684 102.142 26.7057 102.478 26.7057C104.4 26.7057 105.362 25.8004 105.362 23.9897V12.8737H111.886V24.1857C111.886 26.911 111.13 29.011 109.618 30.4857C108.124 31.9604 105.987 32.6977 103.206 32.6977ZM114.5 32.4737V12.8737H128.584V18.3337H120.94V20.2377H127.772V25.0257H120.94V26.9577H128.892V32.4737H114.5ZM142.125 32.4737L138.737 25.5577H137.785V32.4737H131.261V12.8737H137.785V19.8457H138.653L142.013 12.8737H149.377L144.169 22.2817L149.853 32.4737H142.125ZM154.982 32.4737V18.5857H149.942V12.8737H166.546V18.5857H161.506V32.4737H154.982ZM181.203 32.8937C178.31 32.8937 175.435 32.3617 172.579 31.2977L174.735 25.4457C175.986 26.0244 177.181 26.463 178.319 26.7617C179.458 27.0604 180.447 27.2097 181.287 27.2097C181.829 27.2097 182.221 27.1537 182.463 27.0417C182.706 26.911 182.827 26.715 182.827 26.4537C182.827 26.1924 182.687 26.0057 182.407 25.8937C182.127 25.763 181.67 25.623 181.035 25.4737C178.627 24.9697 176.798 24.2044 175.547 23.1777C174.315 22.1324 173.699 20.6577 173.699 18.7537C173.699 16.7377 174.39 15.1884 175.771 14.1057C177.171 13.0044 179.141 12.4537 181.679 12.4537C183.023 12.4537 184.274 12.547 185.431 12.7337C186.607 12.9017 187.858 13.1817 189.183 13.5737L187.363 19.4817C185.161 18.5484 183.229 18.0817 181.567 18.0817C180.765 18.0817 180.363 18.2964 180.363 18.7257C180.363 18.9684 180.541 19.1737 180.895 19.3417C181.269 19.491 181.875 19.6497 182.715 19.8177C185.011 20.3217 186.719 21.0777 187.839 22.0857C188.978 23.075 189.547 24.4844 189.547 26.3137C189.547 28.423 188.819 30.047 187.363 31.1857C185.907 32.3244 183.854 32.8937 181.203 32.8937ZM195.56 32.4737V18.5857H190.52V12.8737H207.124V18.5857H202.084V32.4737H195.56ZM205.462 32.4737L213.218 12.8737H220.134L227.834 32.4737H220.722L219.91 30.0377H213.386L212.63 32.4737H205.462ZM218.23 24.6337L216.662 19.2297L215.066 24.6337H218.23ZM229.043 32.4737V12.8737H237.667C239.179 12.8737 240.523 13.1817 241.699 13.7977C242.893 14.395 243.817 15.2444 244.471 16.3457C245.143 17.4284 245.479 18.6604 245.479 20.0417C245.479 21.199 245.245 22.2537 244.779 23.2057C244.331 24.139 243.696 24.9137 242.875 25.5297L246.655 32.4737H239.179L236.631 27.0417H235.567V32.4737H229.043ZM237.051 22.1417C237.667 22.1417 238.143 21.983 238.479 21.6657C238.815 21.3484 238.983 20.891 238.983 20.2937C238.983 19.715 238.815 19.267 238.479 18.9497C238.143 18.6324 237.667 18.4737 237.051 18.4737H235.567V22.1417H237.051ZM251.752 32.4737V18.5857H246.712V12.8737H263.316V18.5857H258.276V32.4737H251.752ZM265.164 32.4737V12.8737H279.248V18.3337H271.604V20.2377H278.436V25.0257H271.604V26.9577H279.556V32.4737H265.164ZM281.925 32.4737V12.8737H288.057L294.245 21.9457L294.077 18.1097V12.8737H300.293V32.4737H294.273L287.945 23.5697L288.141 27.8257V32.4737H281.925ZM303.425 25.8937L302.809 12.8737H310.229L309.641 25.8937H303.425ZM306.505 32.7257C305.404 32.7257 304.527 32.455 303.873 31.9137C303.22 31.3537 302.893 30.5977 302.893 29.6457C302.893 28.6937 303.22 27.947 303.873 27.4057C304.527 26.8457 305.404 26.5657 306.505 26.5657C307.607 26.5657 308.484 26.8457 309.137 27.4057C309.791 27.947 310.117 28.6937 310.117 29.6457C310.117 30.5977 309.791 31.3537 309.137 31.9137C308.484 32.455 307.607 32.7257 306.505 32.7257Z" fill="white"/>
                            </svg>
                            </button>
                    </form>
                </div>
                </div>
            </section>

         
      </main>
    </>
  );
};


export default Projekte;
