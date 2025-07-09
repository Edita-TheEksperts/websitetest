import React from "react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="lg:py-[80px] py-8 px-4 max-w-[1280px] flex flex-col lg:px-0 bg-white p-4 mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:gap-8 gap-16">
        <img
          src="/images/the-eksperts-404.png"
          alt="Thank You"
          className="w-[380px] lg:w-[800px]"
        />
        <div className="text-center flex flex-col items-center lg:items-start lg:text-left lg:w-[600px]">
          <h1 className="text-[64px] font-[900] text-black font-matt">
            Vielen Dank!
          </h1>
          <p className="mt-[32px] text-black text-[24px] w-[400px] font-light leading-[33px] font-matt">
Ihre Nachricht wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden.          </p>
          <Link href="/">
            <button className="mt-[40px] group relative font-matt flex items-center justify-center px-1 py-1 bg-transparent border-2 border-[#0009FF] text-[#0009FF] rounded-[10px] font-medium text-[20px] transition duration-100 ease-in-out overflow-hidden">
              <div className="w-14 h-14 bg-[#0009FF] rounded-[10px] flex items-center justify-center text-white z-20">
                {/* You can reuse the same SVG here */}
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12L22 12" stroke="white" strokeWidth="2"/>
                  <path d="M12 2L22 12L12 22" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="mx-4 z-20 group-hover:text-white">Besuchen Sie uns!</span>
              <span className="absolute inset-1 bg-[#0009FF] transition-transform duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100 z-10 rounded-[10px]"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
