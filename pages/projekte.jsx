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
                <source src="/images/Projekte-theeksperts.webm" type="video/mp4" />
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
                <source src="/images/Projekte Header Mobile.webm" type="video/mp4" />
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
            </section>
            
            <section className='lg:block hidden lg:mb-[300px] mb-8'>
            <video
                className="w-full h-auto rounded-[20px]"
                loop
                muted
                autoPlay
                playsInline
                loading="lazy"
                style={{ objectFit: "cover" }}
                controlsList="nodownload nofullscreen noremoteplayback" // Prevent download, fullscreen, and remote playback controls
                onMouseOver={(e) => e.target.controls = false} // Hide controls when hovered
                onMouseOut={(e) => e.target.controls = false} // Show controls when mouse leaves
            >
                <source src="/images/Projekte Final.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </section> 
            <section className='lg:hidden block mb-[160px] lg:mb-[300px]'>
            <video
                className="w-full h-auto rounded-[20px]"
                loop
                loading="lazy"
                muted
                autoPlay
                playsInline
                style={{ objectFit: "cover" }}
                controlsList="nodownload nofullscreen noremoteplayback" // Prevent download, fullscreen, and remote playback controls
                onMouseOver={(e) => e.target.controls = false} // Hide controls when hovered
                onMouseOut={(e) => e.target.controls = false} // Show controls when mouse leaves
            >
                <source src="/images/Projekte Final story.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </section> 
                <p className="font-matt text-black text-base leading-[27px] lg:text-[28px] font-[300] lg:leading-[37px] lg:mb-[32px] mb-[20px]">
                    Lassen Sie sich inspirieren von <strong className='font-[900]'>einigen</strong> Erfolgsgeschichten, die wir gemeinsam mit unseren Kunden 
                    <strong className='font-[900]'> verwirklicht</strong> haben oder <strong className='font-[900]'>noch verwirklichen werden.</strong>
                </p>
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
            <FlipCard7/>
           
            </section>
         
      </main>
    </>
  );
};


export default Projekte;
