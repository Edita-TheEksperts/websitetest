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
  const [formData, setFormData] = useState({
    unternehmen: "",
    email: "",
    dienstleistung: "",
    startdatum: new Date().toISOString().split("T")[0],
});

const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
        const response = await fetch("/api/sendMail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            setMessage("Email sent successfully!");
            setFormData({
                unternehmen: "",
                email: "",
                dienstleistung: "",
                startdatum: "",
            });
        } else {
            setMessage(`Error: ${result.message}`);
        }
    } catch (error) {
        setMessage("Something went wrong!");
    }

    setLoading(false);
};
    return (
    <>
      <Head>
        <title>Projekte - the eksperts</title>
      </Head>
      <main className="max-w-[1280px] mx-auto lg:p-2 text-center">
        
        {/* Main Heading */}
        <div className="w-full max-w-[1280px] mx-auto text-center mt-[100px] lg:mt-[170px] mb-[160px] lg:mb-[145px]">
          <h1 className="text-[90px] leading-[90px] lg:text-[174px] lg:leading-[158px] font-matt font-[900] tracking-tight uppercase">
          Unsere Arbeit
          </h1>
          <p className="font-matt font-[300] text-[22px] leading-[33px] mt-1 text-[#00000]">
          spricht für sich!
          </p>
        </div>
          

        <section className="lg:block hidden lg:mb-[240px] mb-[160px]">
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
            <section className="lg:hidden block lg:mb-[240px] mb-[160px]">
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
            
            <section className='lg:block hidden lg:mb-[300px] mb-8'>
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
            <section className='lg:hidden block mb-[160px] lg:mb-[300px]'>
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

            <section className='hidden flex lg:flex-row flex-col lg:gap-[32px]'>
            <FlipCard5 />
            <FlipCard6 />
            </section>

            <section className='flex lg:flex-row flex-col lg:gap-[32px] mb-[160px] lg:mb-[300px]'>
            <FlipCard5 />
            <div className="flipcard flex flex-col max-w-[390px] h-[557px] md:max-w-[740px] md:h-[557px] justify-center items-center bg-[#0009FF] text-white p-8 lg:p-6 rounded-[8px]">
      {/* Header */}
      <h2 className="text-white text-[16px] lg:mb-[32px] lg:text-[28px] font-[500] lg:font-[900] uppercase leading-[37px] text-center font-matt mb-6">
        SIE MÖCHTEN EIN PROJEKT STARTEN?
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 lg:space-y-6 lg:w-[512px] h-[350px] justify-center">
      {/* Unternehmen */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
        <label className="text-[#FFFF] w-[300px] ml-[20px] md:ml-0 lg:ml-0 text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[200px] text-left">
        Firmenname
        </label>
        <input 
          type="text" 
          name="unternehmen"
          value={formData.unternehmen}
          onChange={handleChange}
          placeholder="Firmenname" 
          className="bg-white w-[300px] ml-[20px] md:ml-0 lg:ml-0 md:w-[300px] md:h-[58px] text-gray-500 placeholder-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] text-left" 
        />
      </div>

      {/* Email */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
        <label className="text-[#FFFF] w-[300px] ml-[20px] md:ml-0 lg:ml-0 text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[115px] lg:w-[200px] text-left">
          Email
        </label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ihre Email" 
          className="bg-white w-[300px] ml-[20px] md:ml-0 lg:ml-0 md:w-[300px] md:h-[58px] text-gray-500 placeholder-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] text-left" 
          required
          onInvalid={(e) => e.target.setCustomValidity("Bitte Auswählen.")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>

      {/* Welche Dienstleistung */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
  <label className="text-[#FFFF] w-[300px] ml-[20px] md:ml-0 lg:ml-0 text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[220px] lg:w-[200px] text-left">
    Welche Dienstleistung
  </label>
  <select
    name="dienstleistung"
    value={formData.dienstleistung}
    onChange={handleChange}
    required
    onInvalid={(e) => e.target.setCustomValidity("Bitte Auswählen.")}
    onInput={(e) => e.target.setCustomValidity("")}
    className="bg-white w-[300px] ml-[20px] md:ml-10 lg:ml-0 md:w-[300px] md:h-[58px] text-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] text-left"
  >
    <option value="" disabled selected hidden>Dienstleistung</option> {/* Placeholder - Hidden after selecting */}
    <option value="SalesForce">Salesforce</option>
    <option value="Website">Website</option>
    <option value="Custom Development">Custom Development</option>
    <option value="Graphic Design">Graphic Design</option>
    <option value="Book your Ekspert">Book your Ekspert</option>
  </select>
</div>


<div className="flex flex-col md:flex-row md:items-center md:gap-[20px] w-full">
  <label className="text-[#FFFF] w-[300px] ml-[20px] md:ml-0 lg:ml-0 text-[14px] lg:text-[20px] font-[300] leading-[33px] font-matt md:w-[170px] lg:w-[200px] text-left">
    Startdatum
  </label>
  <input
    type="date"
    name="startdatum"
    value={formData.startdatum || ""} // Ensures input is empty initially
    min={new Date().toISOString().split("T")[0]} 
    onChange={handleChange}
    onKeyDown={(e) => e.preventDefault()} // Prevents manual typing
    className="bg-white w-[300px] ml-[20px] md:ml-0 lg:ml-0 md:w-[315px] md:h-[58px] text-gray-500 text-[16px] lg:text-[24px] px-4 py-2 rounded-[8px] font-[500] leading-[20px] text-left cursor-pointer"
    required
  />
</div>


      {/* Button */}
      <div className="flex justify-center">
    {/* Show Button Only If Not Submitting */}
    {!loading && !message && (
        <button 
            type="submit" 
            className="mt-2 bg-transparent text-white text-[18px] font-bold flex items-center justify-center w-[330px] md:w-[369px] h-[44px]"
            disabled={loading}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="369" height="44" viewBox="0 0 369 44" fill="none">
                <path d="M1.5 42V17.7007L22.8814 2H366.876V42H1.5Z" stroke="white" strokeWidth="3"/>
            </svg>
            <span className="absolute font-[900] leading-[37px] text-[28px] font-matt">
                START PROJECT!
            </span>
        </button>
    )}

    {/* Show Message After Submission */}
    {message && (
        <p className="text-white text-center text-[18px] font-bold mt-4">
            {message}
        </p>
    )}
</div>
    </form>

    </div>
            </section>
         
      </main>
    </>
  );
};


export default Projekte;
