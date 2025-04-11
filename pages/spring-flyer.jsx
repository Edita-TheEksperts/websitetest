import React from "react";

export default function SpringFlyer() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-black flex flex-col items-center px-4"
      style={{ backgroundImage: "url('/images/city-background.png')" }}
    >
      {/* Header Section */}
      <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/blue-halftone-bg.png')" }}
>
<div className="svgbg-svg justify-center">
  <img src="/images/the-eksperts-svgbgfinal.svg" alt="SVG Text Graphic" className="w-full h-auto" />
</div>


</div>




      {/* Giveaway Title */}
      <div className="text-center ">
      <div className="svgbg-svg justify-center">
  <img src="/images/svgbg2.svg" alt="SVG Text Graphic" className="w-full h-auto" />
</div>
      </div>

      {/* Prize Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center px-[0px] py-0 gap-4 mt-6 lg:mt-10">
        {[
          {
            icon: "🥉",
            title: "Ein St. Galler Lunch für 10 Personen",
            subtitle: "Inhalt: St. Galler Bratwurst und Bürli (Anfragen zu Senf werden ignoriert)",
          },
          {
            icon: "🥇",
            title: "Ein individuelles Mini Projekt im Wert von CHF 3500",
            subtitle: "(z.B. Website Optimierung, Automatisierung, Prozess Digitalisierung,..)",
          },
          {
            icon: "🥈",
            title: "4 x FC St. Gallen Tickets",
            subtitle: "Für das Wunsch-Heimspiel",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-[330px] md:w-[220px] lg:w-[330px] bg-white  text-center rounded-[20px]"
          >
            <div className="text-[100px] lg:text-[200px] text-center mt-[]">{item.icon}</div>
            <p className="text-[22px] lg:text-[24px] leading-[30px] px-[27px] font-[400]">{item.title}</p>
            <p className="text-[16px] leading-[20px] px-[27px] font-[300] text-[#000000] mb-[40px] mt-[20px]">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="mt-[300px] bg-[#FFF] rounded-[30px] max-w-[1284px] text-center px-4 py-10">
  <h3 className=" text-[50px] leading-[55px] lg:text-[80px] lg:leading-[80px] font-bold text-black font-matt">
    Do Mitmachä
  </h3>
  <p className="text-[18px] leading-[22px] lg:text-[20px] lg:leading-[33px] font-light text-black mt-2 mb-10 font-matt">
    Die Teilnahme dauert nur 1 Minute!
  </p>

  <form className="flex flex-wrap justify-center gap-6">
    {/* Form Fields */}
    <div className="flex items-center border border-[#E7E7E7] rounded-[12px] px-4 py-4 w-[350px] sm:w-[420px] md:w-[480px] lg:w-[522px] justify-between">
    <div className="flex items-center gap-2 text-black font-[500]">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M12.5 15.1739C16.8386 15.1739 20.5 15.8789 20.5 18.599C20.5 21.32 16.8146 22 12.5 22C8.16237 22 4.5 21.295 4.5 18.575C4.5 15.8539 8.18538 15.1739 12.5 15.1739ZM12.5 2C15.4391 2 17.794 4.35402 17.794 7.29105C17.794 10.2281 15.4391 12.5831 12.5 12.5831C9.5619 12.5831 7.20601 10.2281 7.20601 7.29105C7.20601 4.35402 9.5619 2 12.5 2Z"
        fill="#626262"
      />
    </svg>
    <span>Vorname & Nachname</span>
  </div>
  </div>
    <div className="flex items-center border border-[#E7E7E7] rounded-[12px] px-4 py-4 w-[350px] sm:w-[420px] md:w-[480px] lg:w-[522px] justify-between">
      <div className="flex items-center gap-2 text-black font-[500]">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M17.4395 3C18.7805 3 20.0705 3.53 21.0195 4.481C21.9695 5.43 22.5005 6.71 22.5005 8.05V15.95C22.5005 18.74 20.2305 21 17.4395 21H7.56049C4.76949 21 2.50049 18.74 2.50049 15.95V8.05C2.50049 5.26 4.75949 3 7.56049 3H17.4395ZM18.5705 8.2C18.3605 8.189 18.1605 8.26 18.0095 8.4L13.5005 12C12.9205 12.481 12.0895 12.481 11.5005 12L7.00049 8.4C6.68949 8.17 6.25949 8.2 6.00049 8.47C5.73049 8.74 5.70049 9.17 5.92949 9.47L6.06049 9.6L10.6105 13.15C11.1705 13.59 11.8495 13.83 12.5605 13.83C13.2695 13.83 13.9605 13.59 14.5195 13.15L19.0305 9.54L19.1105 9.46C19.3495 9.17 19.3495 8.75 19.0995 8.46C18.9605 8.311 18.7695 8.22 18.5705 8.2Z" fill="#626262"/>
</svg>
    <span>Unternehmen</span>
  </div>
    </div>
    <div className="flex items-center border border-[#E7E7E7] rounded-[12px] px-4 py-4  w-[350px] sm:w-[420px] md:w-[480px] lg:w-[522px] justify-between">
      <div className="flex items-center gap-2 text-black font-[500]">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M17.4395 3C18.7805 3 20.0705 3.53 21.0195 4.481C21.9695 5.43 22.5005 6.71 22.5005 8.05V15.95C22.5005 18.74 20.2305 21 17.4395 21H7.56049C4.76949 21 2.50049 18.74 2.50049 15.95V8.05C2.50049 5.26 4.75949 3 7.56049 3H17.4395ZM18.5705 8.2C18.3605 8.189 18.1605 8.26 18.0095 8.4L13.5005 12C12.9205 12.481 12.0895 12.481 11.5005 12L7.00049 8.4C6.68949 8.17 6.25949 8.2 6.00049 8.47C5.73049 8.74 5.70049 9.17 5.92949 9.47L6.06049 9.6L10.6105 13.15C11.1705 13.59 11.8495 13.83 12.5605 13.83C13.2695 13.83 13.9605 13.59 14.5195 13.15L19.0305 9.54L19.1105 9.46C19.3495 9.17 19.3495 8.75 19.0995 8.46C18.9605 8.311 18.7695 8.22 18.5705 8.2Z" fill="#626262"/>
</svg>
    <span>E-Mail</span>
  </div>
    </div>
    <div className="flex items-center border border-[#E7E7E7] rounded-[12px] px-4 py-4 w-[350px] sm:w-[420px] md:w-[480px] lg:w-[522px] justify-between">
      <div className="flex items-center gap-2 text-black font-[500]">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M17.4395 3C18.7805 3 20.0705 3.53 21.0195 4.481C21.9695 5.43 22.5005 6.71 22.5005 8.05V15.95C22.5005 18.74 20.2305 21 17.4395 21H7.56049C4.76949 21 2.50049 18.74 2.50049 15.95V8.05C2.50049 5.26 4.75949 3 7.56049 3H17.4395ZM18.5705 8.2C18.3605 8.189 18.1605 8.26 18.0095 8.4L13.5005 12C12.9205 12.481 12.0895 12.481 11.5005 12L7.00049 8.4C6.68949 8.17 6.25949 8.2 6.00049 8.47C5.73049 8.74 5.70049 9.17 5.92949 9.47L6.06049 9.6L10.6105 13.15C11.1705 13.59 11.8495 13.83 12.5605 13.83C13.2695 13.83 13.9605 13.59 14.5195 13.15L19.0305 9.54L19.1105 9.46C19.3495 9.17 19.3495 8.75 19.0995 8.46C18.9605 8.311 18.7695 8.22 18.5705 8.2Z" fill="#626262"/>
</svg>
    <span>Telefon</span>
  </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-[350px] sm:w-[420px] md:w-[480px] lg:w-[522px] bg-[#152DFF] text-white text-[20px] leading-[28px] font-[700] rounded-[12px] py-[14px]  mt-4"
    >
      Absenden
    </button>
  </form>
</div>


      {/* Bonus Info */}
      <div className="mt-[300px] inline-flex p-10 items-center rounded-[30px] border border-black bg-white">
  <p className="text-[#1E1E1E] font-[300] text-[24px] leading-[30px] lg:text-[32px] lg:leading-[40px] font-matt text-center lg:text-left">
    Bonus für alle Teilnehmer: <br />
    Gratis Kaffii im the eksperts office beim Rotenplatz: <br />
    Sonnengartenstrasse 6, 9000 St. Gallen
  </p>
</div>

      {/* Footer */}
      <section className="max-w-[1280px] lg:mt-[300px] mt-[160px] px-5 lg:px-0 flex justify-center items-center lg:mb-[-15px] mb-[-65px]  md:mb-[-45px]">
                <div className="logotheeksperts flex justify-center items-center w-full lg:w-[1216px] h-[174px]">
                    <img 
                    src="/images/the-eksperts-Group 13.png" 
                    alt="Logo Long 2" 
                    className="h-auto object-contain"
                    />
                </div>
            </section>
    </div>
  );
}
