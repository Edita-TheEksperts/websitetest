import React, { useState, useEffect, useRef } from "react";

const SVGAnimation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const svgRef = useRef(null); // Reference to SVG

  const handleNext = () => {
    if (currentScreen === 4) {
      setIsModalOpen(false);
      setShowThankYou(true);
    } else {
      setCurrentScreen((prev) => prev + 1);
    }
  };

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Add 'animate' class when the section comes into view
          svgRef.current.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );
    const section = svgRef.current;
    observer.observe(section);

    return () => observer.disconnect(); // Clean up observer
  }, []);

  return (
    <section
      ref={svgRef} // Reference for IntersectionObserver
      className="relative font-matt flex flex-col items-center lg:items-start justify-center py-12 px-6 bg-white lg:min-w-[1280px] mx-auto max-h-[990px] md:py-2 md:px-8 lg:mb-[100px]"
    >
      {/* SVG Animation - Conditionally Rendered */}
      {!showThankYou && (
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 998 842"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <path
            d="M536.603 532.001C579.603 531.001 680.202 500.701 738.602 387.501C811.602 246.001 721.103 14.0006 536.603 22.5006C352.103 31.0006 68.603 264.5 114.603 525C160.603 785.5 494.103 542 249.103 439C140.723 393.436 -75.3987 492 71.6025 672C196.962 825.5 496.829 853.773 652.602 784C844.602 698 925.768 586.333 980.602 512"
            stroke="#0009FF"
            strokeWidth="43"
            className="svg-elem-1"
          />
          <style>
            {`
              .svg-elem-1 {
                stroke-dashoffset: 3448.249267578125px;
                stroke-dasharray: 3448.249267578125px;
                transition: stroke-dashoffset 8s ease-in-out;
              }

              .animate .svg-elem-1 {
                stroke-dashoffset: 0;
              }
            `}
          </style>
        </svg>
      )}

      {!showThankYou ? (
      <>
        {/* Title Section */}
        <div className="relative z-20 flex flex-col items-center lg:items-start text-black text-5xl md:text-5xl lg:text-[190px] leading-snug md:leading-[70px] lg:leading-[150px] font-bold space-y-2 lg:space-y-4 mb-8 lg:mb-12">
          <span className="font-matt">Nicht auf</span>
          <span className="font-matt">diesen</span>
          <span className="font-matt">Button</span>
          <span className="font-matt">klicken!</span>
        </div>
  
        {/* Button Section */}
        <div className="relative z-20 mt-6 md:absolute md:top-1/2 md:right-[0.5%] md:transform md:-translate-y-1/2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="font-matt md:w-[300px] md:h-[100px] px-8 sm:px-10 py-8 sm:py-5 text-2xl md:text-[70px] font-bold text-white bg-black rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
          >
           Button
          </button>
        </div>
      </>
    ) : (
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-3xl md:text-5xl lg:text-[120px] leading-snug md:leading-[70px] lg:leading-[120px] font-bold space-y-4 p-6 lg:p-12">
        <p>Vielen Dank!</p>
        <p>Wir melden uns so schnell</p>
        <p>wie möglich.</p>
      </div>
    )}
      {/* Funnel Modal */}
      {isModalOpen && (
            <div
            onClick={() => setIsModalOpen(false)} // Close modal on click outside
            className="p-4 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >          
            <div
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              className="bg-white rounded-[20px] p-8 w-full lg:max-w-[1280px] lg:max-h-[690px] relative"
            >
               <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 text-white bg-[#0009FF] hover:bg-gray-400 rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    &times;
                  </button>
                    {currentScreen === 1 && (
                    <div className="flex flex-col lg:flex-col items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6 md:mb-[100px]">
                      {/* Progress Bar */}
                      <div className="w-full flex flex-col items-center lg:items-center md:mt-[40px] md:mb-[60px]">
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">01</span>
                          <span className="md:text-[28px]">/</span>
                          <span className="text-lg md:text-[28px] font-semibold">04</span>
                        </div>
                        <div className="lg:w-[550px] w-full mb-[20px] bg-gray-300 rounded-full h-4 md:mb-[100px]">
                          <div
                            className="bg-[#0009FF] h-4 rounded-full"
                            style={{ width: '25%' }} 
                          ></div>
                        </div>
                      </div>

                       {/* Left Section */}
                       <div className="lg:w-[800px]">
                        <h2 className="text-xl font-extrabold mb-2 text-center uppercase md:text-[28px] md:leading-[37px] font-matt">
                          Wir nehmen uns die Zeit, Ihr Projekt und Ihre Anforderungen zu verstehen.
                        </h2>
                        <p className="text-gray-700 mb-4 text-center md:text-[20px] md:leading-[33px] font-matt">
                          Nach nur drei kurzen Fragen erhalten Sie eine persönliche Beratung sowie
                          ein massgeschneidertes Angebot – völlig kostenlos und unverbindlich.
                        </p>
                      </div>
                    </div>
                  )}

                    {currentScreen === 2 && (
                      <div className="flex flex-col items-center space-y-6">
                         {/* Progress Bar */}
                      <div className="w-full flex flex-col items-center lg:items-center md:mt-[40px] md:mb-[100px]">
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">02</span>
                          <span className="md:text-[28px]">/</span>
                          <span className="text-lg md:text-[28px] font-semibold">04</span>
                        </div>
                        <div className="lg:w-[550px] w-full mb-[20px] bg-gray-300 rounded-full h-4 md:mb-[5px]">
                          <div
                            className="bg-[#0009FF] h-4 rounded-full"
                            style={{ width: '50%' }} 
                          ></div>
                        </div>
                      </div>

                        {/* Main Content */}
                        <div className="text-center lg:w-[800px]">
                          <h3 className="text-xl font-extrabold text-center uppercase md:text-[28px] md:leading-[37px] font-matt mb-8">
                            Was möchten Sie mit unserer Unterstützung erreichen?
                          </h3>
                          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-[90px]" >
                            <div className="space-y-4">
                              <label className="flex items-center space-x-3">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                />
                                <span>Website erstellen oder optimieren</span>
                              </label>
                              <label className="flex items-center space-x-3">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                />
                                <span>Salesforce-Lösungen implementieren</span>
                              </label>
                              <label className="flex items-center space-x-3 ">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                />
                                <span>Individuelle Softwareentwicklung</span>
                              </label>
                            </div>

                            <div className="space-y-4">
                              <label className="flex items-center space-x-3">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                />
                                <span>Online-Shop aufbauen</span>
                              </label>
                              <label className="flex items-center space-x-3 ">
                                <input
                                  type="checkbox"
                                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                />
                                <span>IT-Architektur oder Netzwerk optimieren</span>
                              </label>
                              <label className="flex items-center space-x-3">
                                <span>Sonstiges</span>
                                <input
                                  type="text"
                                  className="w-full h-6 text-black border-2 border-gray-300 rounded"
                                />
                              </label>

                            </div>
                          </form>

                        </div>
                      </div>
                    )}

                        {currentScreen === 3 && (
                          <div className="flex flex-col items-center mt-8 ">
                             <div className="w-full flex flex-col items-center md:items-center md:mt-[40px] md:mb-[80px]">
                            <div className="flex items-center space-x-2 mb-4">
                              <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">03</span>
                              <span className="md:text-[28px]">/</span>
                              <span className="text-lg md:text-[28px] font-semibold">04</span>
                            </div>
                            <div className="md:w-[550px] w-full bg-gray-300 rounded-full h-4 mb-[20px] md:mb-[5px]">
                              <div
                                className="bg-[#0009FF] h-4 rounded-full"
                                style={{ width: '75%' }} 
                              ></div>
                            </div>
                          </div>
                            <h2 className="text-xl font-extrabold text-center uppercase md:text-[28px] md:leading-[37px] font-matt mb-8">Wann möchten Sie starten?</h2>
                            <form className="space-y-6 font-matt md:mb-[20px] ">
                              <div className="grid grid-rows-1 md:grid-rows-2 gap-6 mb-8 font-matt">
                                <label className="flex items-center space-x-3">
                                  <input
                                    type="checkbox"
                                    className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                  />
                                  <span>Sofort</span>
                                </label>
                                <label className="flex items-center space-x-3">
                                  <input
                                    type="checkbox"
                                    className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                  />
                                  <span>Innerhalb der nächsten 3 Monate</span>
                                </label>
                                <label className="flex items-center space-x-3">
                                  <input
                                    type="checkbox"
                                    className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                  />
                                  <span>In 3–6 Monaten</span>
                                </label>
                                <label className="flex items-center space-x-3">
                                  <input
                                    type="checkbox"
                                    className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                  />
                                  <span>Noch unklar</span>
                                </label>
                              </div>
                            </form>
                          </div>
                        )}
             
                        {currentScreen === 4 && (
                          <div className="flex flex-col items-center mt-8 font-matt">
                            {/* Progress Bar */}
                            <div className="w-full flex flex-col items-center md:mt-[40px] md:mb-[50px]">
                              <div className="flex items-center space-x-2 mb-4">
                                <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">04</span>
                                <span className="md:text-[28px]">/</span>
                                <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">04</span>
                              </div>
                              <div className="md:w-[550px] w-full mb-[20px] bg-gray-300 rounded-full h-4 md:mb-[5px]">
                                <div
                                  className="bg-[#0009FF] h-4 rounded-full"
                                  style={{ width: '100%' }} // Full width on the last screen
                                ></div>
                              </div>
                            </div>

                            {/* Main Content */}
                            <h2 className="text-xl font-extrabold text-center uppercase md:text-[28px] md:leading-[37px] font-matt mb-8">
                              Wie können wir Sie erreichen?
                            </h2>

                            <form className="lg:space-y-6 space-y-2 w-full max-w-4xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-6 gap-2 mb-4">
                            <div className="flex flex-col border border-blue-400 w-full">
                              <label className="hidden">Name</label>
                              <input
                                type="text"
                                placeholder="NAME"
                                className="w-full border p-5 text-center text-[19px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500" 
                              />
                            </div>
                            
                            <div className="flex flex-col border border-blue-400 w-full">
                                <label className="hidden">Unternehmen</label>
                                <input
                                  type="text"
                                  placeholder="UNTERNEHMEN"
                                  className="w-full border p-5 text-center text-[19px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                                />
                              </div>
                            </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-6 gap-2 mb-8">
                                <div className="flex flex-col border border-blue-400 w-full">
                                    <label className="hidden">E-Mail</label>
                                    <input
                                      type="email"
                                      placeholder="E-MAIL"
                                      className="w-full border p-5 text-center text-[19px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                                    />
                                  </div>
                                  <div className="flex flex-col border border-blue-400 w-full">
                                    <label className="hidden">Telefonnummer (optional)</label>
                                    <input
                                      type="tel"
                                      placeholder="TELEFONNUMMER (optional)"
                                      className="w-full border p-5 text-center text-[19px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col border border-blue-400 w-full">
                              <label className="hidden">Nachricht</label>
                              <textarea
                                placeholder="NACHRICHT („Gibt es noch etwas, das wir wissen sollten?“)"
                                className="w-full border p-4 text-center text-[19px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                              />
                            </div>

                            {/* Button */}
                            <div className="flex justify-center mt-8">
                              <button
                                onClick={handleNext}
                                className="px-6 py-4 bg-[#0009FF] text-white rounded-[30px] md:text-[28px] md:leading-[37px] font-extrabold hover:bg-blue-800"
                              >
                                SENDEN
                              </button>
                            </div>
                          </form>

                          </div>
                        )}
                        {currentScreen < 4 && (
                          <div className="flex justify-center mt-4">
                          <button
                            onClick={handleNext}
                            className="px-4 py-4 bg-[#0009FF] text-white rounded-[30px] md:text-[28px] md:leading-[37px] font-extrabold hover:bg-blue-800"
                          >
                            {currentScreen === 4 ? "SENDEN" : "WEITER"}
                          </button>
                        </div>
                        
                          )}
                        </div>
                      </div>
      )}
    </section>
  );
};

export default SVGAnimation;
