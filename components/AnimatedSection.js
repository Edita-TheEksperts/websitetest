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

  const handleBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen((prev) => prev - 1);
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
      className="relative font-matt flex flex-col items-center lg:items-start justify-center py-12 px-6 bg-white lg:min-w-[1280px] mx-auto max-h-[990px] md:py-2 md:px-8 lg:mt-[300px]"
    >
      {/* SVG Animation - Conditionally Rendered */}
      {!showThankYou && (
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 998 842"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:block hidden absolute inset-0 w-full h-full pointer-events-none z-10"
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
        <div className="font-matt relative z-20 flex flex-col items-center lg:items-start text-black text-6xl lg:text-[160px] leading-snug md:leading-[80px] lg:leading-[145px] font-[700] space-y-2 lg:space-y-0 mb-8 lg:mb-12">
          <span className="font-matt">Nicht auf</span>
          <span className="font-matt">diesen</span>
          <span className="font-matt">Button</span>
          <span className="font-matt">klicken!</span>
        </div>
  
        {/* Button Section */}
        <div className="relative z-20 mt-4 lg:absolute lg:top-1/2 lg:right-[3%] md:transform md:-translate-y-1/2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="font-matt gradient-hover lg:w-[269px] lg:h-[80px] px-8 py-4 text-3xl lg:text-[60px] font-[400] text-white bg-black rounded-full"
          >
           Button
          </button>
        </div>
      </>
    ) : (
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-3xl md:text-5xl lg:text-[90px] leading-snug md:leading-[70px] lg:leading-[90px] font-[700] font-matt space-y-4 p-6 lg:p-12">
          <div className="flex items-center justify-center space-x-0">
            <p>Vielen Dank!</p>
            <video
              className="w-[50px] h-[50px] lg:w-auto lg:h-[110px]"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/images/Like.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Wir melden uns so schnell</p>
          <p>wie möglich.</p>
        </div>

    )}
      {/* Funnel Modal */}
      {isModalOpen && (
            <div
            onClick={() => setIsModalOpen(false)}
            className="lg:p-4 p-2 fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            >          
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[20px] p-8 w-full max-w-[90%] lg:max-w-[1280px] lg:max-h-[580px] relative"
            >
               <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 text-white bg-[#0009FF] hover:bg-gray-400 rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    &times;
                  </button>
                    {currentScreen === 1 && (
                    <div className="flex flex-col lg:flex-col items-center justify-between space-y-6 lg:space-y-0 lg:space-x-4 md:mb-[10px]">
                      {/* Progress Bar */}
                      <div className="flex items-center space-x-2 mb-2">
                          <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">01</span>
                          <span className="md:text-[28px]">/</span>
                          <span className="text-lg md:text-[28px] font-semibold">04</span>
                        </div>
                        <div className="lg:w-[550px] w-[350px] mb-[10px] sm:mb-[20px] lg:mb-[30px]">
                              <svg
                                width="100%" // Makes the SVG scale dynamically with its container
                                height="17"
                                viewBox="0 0 539 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF" />
                                <path d="M136 17V6.5L144.5 0H267V17H136Z" fill="#F1F1F1" />
                                <path d="M272 17V6.5L280.5 0H403V17H272Z" fill="#F1F1F1" />
                                <path d="M408 17V6.5L416.5 0H539V17H408Z" fill="#F1F1F1" />
                              </svg>
                            </div>

                      

                      {/* Video Section */}
                      <div className="w-full flex justify-center mb-8 relative group">
                        <video
                          className="w-full lg:w-[500px]"
                          autoPlay
                          muted
                          playsInline
                        >
                          <source src="/images/Part 1.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        {/* Invisible Overlay */}
                        <div className="absolute inset-0 bg-transparent group-hover:bg-transparent cursor-default"></div>
                      </div>


                      {/* Left Section */}
                      <div className="lg:w-[1200px]">
                        <h2 className="text-xl font-extrabold mb-2 text-center uppercase md:text-[28px] md:leading-[37px] font-matt">
                        Wir nehmen uns die Zeit, Ihr Projekt und Ihre Anforderungen zu verstehen.
                        </h2>
                        <p className="text-gray-700 mb-4 text-center md:text-[18px] md:leading-[33px] font-matt">
                        Nach nur drei kurzen Fragen erhalten Sie eine persönliche Beratung sowie ein massgeschneidertes Angebot – völlig kostenlos und unverbindlich.
                        </p>
                        <div className="flex justify-center mt-2">
                        <button
                                        onClick={handleNext}
                                        className="px-6 py-4 bg-[#0009FF] text-white rounded-[30px] md:text-[28px] md:leading-[37px] font-extrabold hover:bg-blue-800"
                                      >
                                        WEITER
                                      </button>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                    </div>
                      </div>
                    </div>
                  )}

                    {currentScreen === 2 && (
                      <div className="flex flex-col items-center space-y-6">
                         {/* Progress Bar */}
                      <div className="w-full flex flex-col items-center lg:items-center">
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">02</span>
                          <span className="md:text-[28px]">/</span>
                          <span className="text-lg md:text-[28px] font-semibold">04</span>
                        </div>
                        <div className="lg:w-[550px] w-[350px] mb-[10px] sm:mb-[20px] lg:mb-0">
                              <svg
                                width="100%" // Makes the SVG scale dynamically with its container
                                height="17"
                                viewBox="0 0 539 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                        <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
                        <path d="M136 17V6.5L144.5 0H267V17H136Z" fill="#0009FF"/>
                        <path d="M272 17V6.5L280.5 0H403V17H272Z" fill="#F1F1F1"/>
                        <path d="M408 17V6.5L416.5 0H539V17H408Z" fill="#F1F1F1"/>
                        </svg>

                        </div>
                      </div>

                        {/* Main Content */}
                        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-16">
                                {/* Video Section */}
                                <div className="w-full lg:w-1/2 flex justify-center">
                                  <video
                                    className="w-[150px] lg:w-[400px]"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                  >
                                    <source src="/images/Part 2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>

                                {/* Form Section */}
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                <h2 className="text-[16px] font-[900] text-center lg:text-left uppercase md:text-[22px] md:leading-[27px] font-matt mb-4">
                                Was möchten Sie mit unserer Unterstützung erreichen?
                                </h2>
                                  <form className="grid grid-cols-1 gap-4 mb-4 md:mb-[10px]">
                                      <label className="flex items-center space-x-3">
                                        <input
                                          type="checkbox"
                                          className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                        />
                                        <span className="lg:text-[18px] text-[14px] ">Website erstellen oder optimieren</span>
                                      </label>
                                      <label className="flex items-center space-x-3">
                                        <input
                                          type="checkbox"
                                          className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                        />
                                        <span className="lg:text-[18px] text-[14px] " >Salesforce-Lösungen implementieren</span>
                                      </label>
                                      <label className="flex items-center space-x-3">
                                        <input
                                          type="checkbox"
                                          className="w-5 h-5 text-[#0009FF] border-gray-300 rounded-lg focus:ring-[#0009FF]"
                                        />
                                        <span className="lg:text-[18px] text-[14px]  ">Individuelle Softwareentwicklung</span>
                                      </label>
                                      <label className="flex items-center space-x-3">
                                        <input
                                          type="checkbox"
                                          className="w-5 h-5 text-[#0009FF] border-gray-300 rounded-lg focus:ring-[#0009FF]"
                                        />
                                        <span className="lg:text-[18px] text-[14px] ">Online-Shop aufbauen</span>
                                      </label>
                                      <label className="flex items-center space-x-3">
                                        <input
                                          type="checkbox"
                                          className="w-5 h-5 text-[#0009FF] border-gray-300 rounded-lg focus:ring-[#0009FF]"
                                        />
                                        <span className="lg:text-[18px] text-[14px] ">IT-Architektur oder Netzwerk optimieren</span>
                                      </label>
                                      <label className="flex items-center space-x-3">
                                        <input
                                          type="text"
                                          className="w-full lg:w-[450px] h-8 text-black border-2 border-gray-300 focus:ring-[#0009FF] rounded-lg px-3"
                                          placeholder="Sonstiges (Freitextfeld)"
                                        />
                                      </label>  
                                      
                                  </form>
                                  <div className="flex lg:justify-start justify-center mt-2">
                                      <button
                                        onClick={handleNext}
                                        className="px-4 py-3 bg-[#0009FF] text-white rounded-[30px] md:text-[25px] md:leading-[37px] font-[900] hover:bg-blue-800"
                                      >
                                        NOCH EIN SCHRITT
                                      </button>
                                    </div>
                                    <button
                                        onClick={handleBack}
                                        className="mt-2 ml-2"
                                      >
                                        <svg width="79" height="33" viewBox="0 0 79 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M0.726643 16.4727L2.44922 14.7501L4.1718 16.4727L2.44922 18.1952L0.726643 16.4727Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M8.49113 12.1133L5.20939 15.395L4.55116 14.7368C3.96391 14.1495 3.96272 13.1965 4.55116 12.6081L6.76855 10.3907L8.49113 12.1133Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M8.58447 20.8853L6.8619 22.6079L4.56328 20.3093C4.02046 19.7665 4.02046 18.8859 4.56328 18.343L5.30273 17.6036L8.58447 20.8853Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M14.2299 24V23.06L23.1099 11.14H14.5299V10H24.7699V10.92L15.8699 22.84H24.9699V24H14.2299ZM27.7743 13.86V20.02C27.7743 20.9933 28.0343 21.76 28.5543 22.32C29.0743 22.8667 29.7743 23.14 30.6543 23.14C31.8543 23.14 33.1543 22.58 34.5543 21.46V13.86H35.7543V24H34.6343L34.5743 22.56C33.1609 23.6667 31.7809 24.22 30.4343 24.22C29.2743 24.22 28.3409 23.8533 27.6343 23.12C26.9276 22.3733 26.5743 21.36 26.5743 20.08V13.86H27.7743ZM38.9013 13.86H39.9613L40.0813 15.4C41.228 14.28 42.428 13.72 43.6813 13.72C43.9746 13.72 44.248 13.7467 44.5013 13.8V14.94C44.1946 14.8733 43.9013 14.84 43.6213 14.84C43.048 14.84 42.4546 14.9867 41.8413 15.28C41.2413 15.5733 40.6613 16.0133 40.1013 16.6V24H38.9013V13.86ZM47.5204 13.86V20.02C47.5204 20.9933 47.7804 21.76 48.3004 22.32C48.8204 22.8667 49.5204 23.14 50.4004 23.14C51.6004 23.14 52.9004 22.58 54.3004 21.46V13.86H55.5004V24H54.3804L54.3204 22.56C52.907 23.6667 51.527 24.22 50.1804 24.22C49.0204 24.22 48.087 23.8533 47.3804 23.12C46.6737 22.3733 46.3204 21.36 46.3204 20.08V13.86H47.5204ZM52.9804 11.74C52.7137 11.74 52.4937 11.66 52.3204 11.5C52.147 11.3267 52.0604 11.1133 52.0604 10.86C52.0604 10.6067 52.147 10.4 52.3204 10.24C52.4937 10.0667 52.7137 9.98 52.9804 9.98C53.2604 9.98 53.487 10.0667 53.6604 10.24C53.8337 10.4 53.9204 10.6067 53.9204 10.86C53.9204 11.1267 53.8337 11.34 53.6604 11.5C53.487 11.66 53.2604 11.74 52.9804 11.74ZM48.8604 11.74C48.5804 11.74 48.3537 11.66 48.1804 11.5C48.007 11.34 47.9204 11.1267 47.9204 10.86C47.9204 10.6067 48.007 10.4 48.1804 10.24C48.3537 10.0667 48.5804 9.98 48.8604 9.98C49.127 9.98 49.347 10.0667 49.5204 10.24C49.6937 10.4 49.7804 10.6067 49.7804 10.86C49.7804 11.1133 49.6937 11.3267 49.5204 11.5C49.347 11.66 49.127 11.74 48.8604 11.74ZM63.5074 24.22C62.4807 24.22 61.5474 24.0133 60.7074 23.6C59.8674 23.1733 59.2007 22.56 58.7074 21.76C58.2274 20.96 57.9874 20.0133 57.9874 18.92C57.9874 17.84 58.2274 16.9 58.7074 16.1C59.1874 15.3 59.8407 14.6933 60.6674 14.28C61.5074 13.8533 62.454 13.64 63.5074 13.64C64.1474 13.64 64.7474 13.7133 65.3074 13.86C65.8674 13.9933 66.4407 14.2133 67.0274 14.52L66.5674 15.58C66.0474 15.2867 65.5407 15.0733 65.0474 14.94C64.554 14.8067 64.034 14.74 63.4874 14.74C62.194 14.74 61.154 15.1133 60.3674 15.86C59.5807 16.6067 59.1874 17.6267 59.1874 18.92C59.1874 19.8 59.3807 20.56 59.7674 21.2C60.154 21.8267 60.674 22.3067 61.3274 22.64C61.994 22.96 62.734 23.12 63.5474 23.12C64.1474 23.12 64.694 23.0467 65.1874 22.9C65.6807 22.7533 66.1807 22.52 66.6874 22.2L67.2274 23.22C66.094 23.8867 64.854 24.22 63.5074 24.22ZM69.37 24V9.6H70.57V18.2H72.77L76.41 13.86H77.87L73.79 18.7L78.25 24H76.75L72.79 19.28H70.57V24H69.37Z" fill="#5A585A"/>
                                      </svg>
                                      </button>
                                </div>
                              </div>
                      </div>
                    )}

                        {currentScreen === 3 && (
                          <div className="flex flex-col items-center mt-8">
                          {/* Progress Bar Section */}
                          <div className="w-full flex flex-col items-center md:items-center md:mb-[60px]">
                            <div className="flex items-center space-x-2 mb-4">
                              <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">03</span>
                              <span className="md:text-[28px]">/</span>
                              <span className="text-lg md:text-[28px] font-semibold">04</span>
                            </div>
                            <div className="lg:w-[550px] w-[350px] mb-[10px] sm:mb-[20px] lg:mb-0">
                              <svg
                                width="100%" // Makes the SVG scale dynamically with its container
                                height="17"
                                viewBox="0 0 539 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                            <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
                            <path d="M136 17V6.5L144.5 0H267V17H136Z" fill="#0009FF"/>
                            <path d="M272 17V6.5L280.5 0H403V17H272Z" fill="#0009FF"/>
                            <path d="M408 17V6.5L416.5 0H539V17H408Z" fill="#F1F1F1"/>
                            </svg>
                            </div>
                          </div>
                        
                          {/* Content Section: Form on the left, Video on the right */}
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12
                           w-full max-w-[1280px] mx-auto">
                            {/* Text and Form Section */}
                            <div className="lg:w-1/2 lg:px-10">
                              <h2 className="text-xl font-extrabold text-center lg:text-left uppercase md:text-[25px] md:leading-[27px] font-matt mb-4">
                                Wann möchten Sie starten?
                              </h2>
                              <form className="space-y-4 font-matt md:mb-[10px]">
                                <div className="grid grid-rows-1 md:grid-rows-2 gap-4 mb-8 font-matt">
                                  <label className="flex items-center space-x-3">
                                    <input
                                      type="checkbox"
                                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                    />
                                    <span className="lg:text-[18px] text-[14px]">Sofort</span>
                                  </label>
                                  <label className="flex items-center space-x-3">
                                    <input
                                      type="checkbox"
                                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                    />
                                    <span className="lg:text-[18px] text-[14px]">Innerhalb der nächsten 3 Monate</span>
                                  </label>
                                  <label className="flex items-center space-x-3">
                                    <input
                                      type="checkbox"
                                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                    />
                                    <span className="lg:text-[18px] text-[14px]">In 3–6 Monaten</span>
                                  </label>
                                  <label className="flex items-center space-x-3">
                                    <input
                                      type="checkbox"
                                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                                    />
                                    <span className="lg:text-[18px] text-[14px]">Noch unklar</span>
                                  </label>
                                </div>
                                  {/* Button */}
                                  <div className="flex justify-start mt-2">
                                      <button
                                        onClick={handleNext}
                                        className="px-4 py-3 bg-[#0009FF] text-white rounded-[30px] md:text-[25px] md:leading-[37px] font-extrabold hover:bg-blue-800 uppercase"
                                      >
                                        Geschafft!
                                      </button>
                                    </div>
                                    <button
                                        onClick={handleBack}
                                        className="mt-2"
                                      >
                                        <svg width="79" height="33" viewBox="0 0 79 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M0.726643 16.4727L2.44922 14.7501L4.1718 16.4727L2.44922 18.1952L0.726643 16.4727Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M8.49113 12.1133L5.20939 15.395L4.55116 14.7368C3.96391 14.1495 3.96272 13.1965 4.55116 12.6081L6.76855 10.3907L8.49113 12.1133Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M8.58447 20.8853L6.8619 22.6079L4.56328 20.3093C4.02046 19.7665 4.02046 18.8859 4.56328 18.343L5.30273 17.6036L8.58447 20.8853Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M14.2299 24V23.06L23.1099 11.14H14.5299V10H24.7699V10.92L15.8699 22.84H24.9699V24H14.2299ZM27.7743 13.86V20.02C27.7743 20.9933 28.0343 21.76 28.5543 22.32C29.0743 22.8667 29.7743 23.14 30.6543 23.14C31.8543 23.14 33.1543 22.58 34.5543 21.46V13.86H35.7543V24H34.6343L34.5743 22.56C33.1609 23.6667 31.7809 24.22 30.4343 24.22C29.2743 24.22 28.3409 23.8533 27.6343 23.12C26.9276 22.3733 26.5743 21.36 26.5743 20.08V13.86H27.7743ZM38.9013 13.86H39.9613L40.0813 15.4C41.228 14.28 42.428 13.72 43.6813 13.72C43.9746 13.72 44.248 13.7467 44.5013 13.8V14.94C44.1946 14.8733 43.9013 14.84 43.6213 14.84C43.048 14.84 42.4546 14.9867 41.8413 15.28C41.2413 15.5733 40.6613 16.0133 40.1013 16.6V24H38.9013V13.86ZM47.5204 13.86V20.02C47.5204 20.9933 47.7804 21.76 48.3004 22.32C48.8204 22.8667 49.5204 23.14 50.4004 23.14C51.6004 23.14 52.9004 22.58 54.3004 21.46V13.86H55.5004V24H54.3804L54.3204 22.56C52.907 23.6667 51.527 24.22 50.1804 24.22C49.0204 24.22 48.087 23.8533 47.3804 23.12C46.6737 22.3733 46.3204 21.36 46.3204 20.08V13.86H47.5204ZM52.9804 11.74C52.7137 11.74 52.4937 11.66 52.3204 11.5C52.147 11.3267 52.0604 11.1133 52.0604 10.86C52.0604 10.6067 52.147 10.4 52.3204 10.24C52.4937 10.0667 52.7137 9.98 52.9804 9.98C53.2604 9.98 53.487 10.0667 53.6604 10.24C53.8337 10.4 53.9204 10.6067 53.9204 10.86C53.9204 11.1267 53.8337 11.34 53.6604 11.5C53.487 11.66 53.2604 11.74 52.9804 11.74ZM48.8604 11.74C48.5804 11.74 48.3537 11.66 48.1804 11.5C48.007 11.34 47.9204 11.1267 47.9204 10.86C47.9204 10.6067 48.007 10.4 48.1804 10.24C48.3537 10.0667 48.5804 9.98 48.8604 9.98C49.127 9.98 49.347 10.0667 49.5204 10.24C49.6937 10.4 49.7804 10.6067 49.7804 10.86C49.7804 11.1133 49.6937 11.3267 49.5204 11.5C49.347 11.66 49.127 11.74 48.8604 11.74ZM63.5074 24.22C62.4807 24.22 61.5474 24.0133 60.7074 23.6C59.8674 23.1733 59.2007 22.56 58.7074 21.76C58.2274 20.96 57.9874 20.0133 57.9874 18.92C57.9874 17.84 58.2274 16.9 58.7074 16.1C59.1874 15.3 59.8407 14.6933 60.6674 14.28C61.5074 13.8533 62.454 13.64 63.5074 13.64C64.1474 13.64 64.7474 13.7133 65.3074 13.86C65.8674 13.9933 66.4407 14.2133 67.0274 14.52L66.5674 15.58C66.0474 15.2867 65.5407 15.0733 65.0474 14.94C64.554 14.8067 64.034 14.74 63.4874 14.74C62.194 14.74 61.154 15.1133 60.3674 15.86C59.5807 16.6067 59.1874 17.6267 59.1874 18.92C59.1874 19.8 59.3807 20.56 59.7674 21.2C60.154 21.8267 60.674 22.3067 61.3274 22.64C61.994 22.96 62.734 23.12 63.5474 23.12C64.1474 23.12 64.694 23.0467 65.1874 22.9C65.6807 22.7533 66.1807 22.52 66.6874 22.2L67.2274 23.22C66.094 23.8867 64.854 24.22 63.5074 24.22ZM69.37 24V9.6H70.57V18.2H72.77L76.41 13.86H77.87L73.79 18.7L78.25 24H76.75L72.79 19.28H70.57V24H69.37Z" fill="#5A585A"/>
                                      </svg>
                                      </button>
                              </form>
                            </div>
                        
                            {/* Video Section */}
                            <div className="lg:w-1/2 flex justify-center">
                              <video
                                className="w-full lg:w-[500px]"
                                autoPlay
                                muted
                                loop
                                playsInline
                              >
                                <source src="/images/Now.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </div>
                        </div>
                        
                        )}
             
                        {currentScreen === 4 && (
                          <div className="flex flex-col items-center lg:mt-8 font-matt">
                            {/* Progress Bar */}
                            <div className="w-full flex flex-col items-center md:mb-[10px]">
                              <div className="flex items-center space-x-2 mb-4">
                                <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">04</span>
                                <span className="md:text-[28px]">/</span>
                                <span className="text-lg md:text-[28px] font-semibold text-[#0009FF]">04</span>
                              </div>
                              <div className="lg:w-[550px] w-[350px] mb-[10px] sm:mb-[20px] lg:mb-[30px]">
                              <svg
                                width="100%" // Makes the SVG scale dynamically with its container
                                height="17"
                                viewBox="0 0 539 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 17V6.5L8.5 0H131V17H0Z" fill="#0009FF"/>
                                <path d="M136 17V6.5L144.5 0H267V17H136Z" fill="#0009FF"/>
                                <path d="M272 17V6.5L280.5 0H403V17H272Z" fill="#0009FF"/>
                                <path d="M408 17V6.5L416.5 0H539V17H408Z" fill="#0009FF"/>
                                </svg>
                              </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-4 mt-4 mx-auto">
                                {/* Form Section */}
                                <div className="lg:w-1/2 lg:px-4">
                                  <h2 className="text-[14px] font-[900] text-center lg:text-left uppercase md:text-[22px] md:leading-[32px] font-matt mb-4">
                                    Wie können wir Sie erreichen?
                                  </h2>
                                  <form className="lg:space-y-4 space-y-2 w-full max-w-4xl">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 gap-2 mb-4">
                                      <div className="flex flex-col border border-blue-400 w-full">
                                        <label className="hidden">Name</label>
                                        <input
                                          type="text"
                                          placeholder="NAME"
                                          className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                                        />
                                      </div>
                                      <div className="flex flex-col border border-blue-400 w-full">
                                        <label className="hidden">Unternehmen</label>
                                        <input
                                          type="text"
                                          placeholder="UNTERNEHMEN"
                                          className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                                        />
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 gap-2 mb-8">
                                      <div className="flex flex-col border border-blue-400 w-full">
                                        <label className="hidden">E-Mail</label>
                                        <input
                                          type="email"
                                          placeholder="E-MAIL"
                                          className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                                        />
                                      </div>
                                      <div className="flex flex-col border border-blue-400 w-full">
                                        <label className="hidden">Telefonnummer (optional)</label>
                                        <input
                                          type="tel"
                                          placeholder="TELEFONNUMMER (optional)"
                                          className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col border border-blue-400 w-full">
                                      <label className="hidden">Nachricht</label>
                                      <textarea
                                        placeholder="NACHRICHT („Gibt es noch etwas, das wir wissen sollten?“)"
                                        className="w-full border p-2 text-center text-[14px] lg:text-[18px] placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
                                      />
                                    </div>
                                    {/* Button */}
                                    <div className="flex justify-start mt-2">
                                      <button
                                        onClick={handleNext}
                                        className="px-4 py-3 bg-[#0009FF] text-white rounded-[30px] md:text-[25px] md:leading-[37px] font-extrabold hover:bg-blue-800"
                                      >
                                        SENDEN
                                      </button>
                                    </div>
                                    <button
                                        onClick={handleBack}
                                        className="mt-2 ml-2"
                                      >
                                        <svg width="79" height="33" viewBox="0 0 79 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M0.726643 16.4727L2.44922 14.7501L4.1718 16.4727L2.44922 18.1952L0.726643 16.4727Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M8.49113 12.1133L5.20939 15.395L4.55116 14.7368C3.96391 14.1495 3.96272 13.1965 4.55116 12.6081L6.76855 10.3907L8.49113 12.1133Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M8.58447 20.8853L6.8619 22.6079L4.56328 20.3093C4.02046 19.7665 4.02046 18.8859 4.56328 18.343L5.30273 17.6036L8.58447 20.8853Z" fill="#5A585A" stroke="#5A585A"/>
                                      <path d="M14.2299 24V23.06L23.1099 11.14H14.5299V10H24.7699V10.92L15.8699 22.84H24.9699V24H14.2299ZM27.7743 13.86V20.02C27.7743 20.9933 28.0343 21.76 28.5543 22.32C29.0743 22.8667 29.7743 23.14 30.6543 23.14C31.8543 23.14 33.1543 22.58 34.5543 21.46V13.86H35.7543V24H34.6343L34.5743 22.56C33.1609 23.6667 31.7809 24.22 30.4343 24.22C29.2743 24.22 28.3409 23.8533 27.6343 23.12C26.9276 22.3733 26.5743 21.36 26.5743 20.08V13.86H27.7743ZM38.9013 13.86H39.9613L40.0813 15.4C41.228 14.28 42.428 13.72 43.6813 13.72C43.9746 13.72 44.248 13.7467 44.5013 13.8V14.94C44.1946 14.8733 43.9013 14.84 43.6213 14.84C43.048 14.84 42.4546 14.9867 41.8413 15.28C41.2413 15.5733 40.6613 16.0133 40.1013 16.6V24H38.9013V13.86ZM47.5204 13.86V20.02C47.5204 20.9933 47.7804 21.76 48.3004 22.32C48.8204 22.8667 49.5204 23.14 50.4004 23.14C51.6004 23.14 52.9004 22.58 54.3004 21.46V13.86H55.5004V24H54.3804L54.3204 22.56C52.907 23.6667 51.527 24.22 50.1804 24.22C49.0204 24.22 48.087 23.8533 47.3804 23.12C46.6737 22.3733 46.3204 21.36 46.3204 20.08V13.86H47.5204ZM52.9804 11.74C52.7137 11.74 52.4937 11.66 52.3204 11.5C52.147 11.3267 52.0604 11.1133 52.0604 10.86C52.0604 10.6067 52.147 10.4 52.3204 10.24C52.4937 10.0667 52.7137 9.98 52.9804 9.98C53.2604 9.98 53.487 10.0667 53.6604 10.24C53.8337 10.4 53.9204 10.6067 53.9204 10.86C53.9204 11.1267 53.8337 11.34 53.6604 11.5C53.487 11.66 53.2604 11.74 52.9804 11.74ZM48.8604 11.74C48.5804 11.74 48.3537 11.66 48.1804 11.5C48.007 11.34 47.9204 11.1267 47.9204 10.86C47.9204 10.6067 48.007 10.4 48.1804 10.24C48.3537 10.0667 48.5804 9.98 48.8604 9.98C49.127 9.98 49.347 10.0667 49.5204 10.24C49.6937 10.4 49.7804 10.6067 49.7804 10.86C49.7804 11.1133 49.6937 11.3267 49.5204 11.5C49.347 11.66 49.127 11.74 48.8604 11.74ZM63.5074 24.22C62.4807 24.22 61.5474 24.0133 60.7074 23.6C59.8674 23.1733 59.2007 22.56 58.7074 21.76C58.2274 20.96 57.9874 20.0133 57.9874 18.92C57.9874 17.84 58.2274 16.9 58.7074 16.1C59.1874 15.3 59.8407 14.6933 60.6674 14.28C61.5074 13.8533 62.454 13.64 63.5074 13.64C64.1474 13.64 64.7474 13.7133 65.3074 13.86C65.8674 13.9933 66.4407 14.2133 67.0274 14.52L66.5674 15.58C66.0474 15.2867 65.5407 15.0733 65.0474 14.94C64.554 14.8067 64.034 14.74 63.4874 14.74C62.194 14.74 61.154 15.1133 60.3674 15.86C59.5807 16.6067 59.1874 17.6267 59.1874 18.92C59.1874 19.8 59.3807 20.56 59.7674 21.2C60.154 21.8267 60.674 22.3067 61.3274 22.64C61.994 22.96 62.734 23.12 63.5474 23.12C64.1474 23.12 64.694 23.0467 65.1874 22.9C65.6807 22.7533 66.1807 22.52 66.6874 22.2L67.2274 23.22C66.094 23.8867 64.854 24.22 63.5074 24.22ZM69.37 24V9.6H70.57V18.2H72.77L76.41 13.86H77.87L73.79 18.7L78.25 24H76.75L72.79 19.28H70.57V24H69.37Z" fill="#5A585A"/>
                                      </svg>
                                      </button>
                                  </form>
                                </div>

                                {/* Video Section */}
                                <div className="lg:w-1/2 flex justify-center">
                                  <video
                                    className="w-full h-[100px] lg:w-[500px] lg:h-[380px]"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                  >
                                    <source src="/images/Part 3.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              </div>
                          </div>
                        )}
                      
                        </div>
                      </div>
      )}
    </section>
  );
};

export default SVGAnimation;
