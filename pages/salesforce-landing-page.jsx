import Link from "next/link";
import { useState, useRef, useEffect} from "react";
import ContactFormStartup from "../components/ContactFormStartup"

import PartnersSlider from "../components/SliderLandingPage/SliderLandingPage";
const reviews = [
    {
      name: "Tobias Krusi",
      text: "For me, The Eksperts embodies the perfect team of digital thought leaders. I can only recommend their cooperation. They impress with their outstanding skills, their comprehensive understanding and their tireless pursuit of the best. For me, The Eksperts are the ideal partner when it comes to overcoming digital challenges, optimizing processes and increasing efficiency using software and tools. From the development of a web shop to the transformation of CRM systems to specialized knowledge in Salesforce. I can say with full confidence that The Eksperts bring invaluable value to any company looking for world-class digital solutions.",
      color: "#FF0000",
    },
    {
      name: "Shkelzen Luri",
      text: "My experience with The Eksperts was very positive. Your team is professional, fast and finds tailor-made solutions for complex digital challenges. I was particularly impressed by their customer-oriented approach and their innovative strength. Clear recommendation for anyone looking for a reliable partner in the digital world.",
      color: "#07314C",
    },
    {
      name: "Dario",
      text: "The Eksperts are an outstanding agency—reliable, fast, and highly creative. Their solutions are not only efficient but also innovative, always tailored to our needs. A true partner for success!",
      color: "#FFBF00",
    },
    {
      name: "Arlind Shala",
      text: "I would like to express my complete satisfaction with the services of the eksperts. From the start the team was extremely professional and reliable. Communication was always clear and polite, which made the entire process very pleasant.",
      color: "#0009FF",
    },
    {
      name: "Mert HMC",
      text: "The Eksperts offers excellent service and in-depth expertise in the area of ​​web services. The solutions are reliable, efficient and perfectly tailored to individual needs. Absolutely recommended!",
      color: "#5D95FF",
    },
   
    {
      name: "Eco Bautec & Design AG",
      text: "We are absolutely thrilled with the eksperts! The online shop and our website were implemented exactly according to our ideas, and the collaboration was always uncomplicated and very professional - a great team!",
      color: "#007934",
    },
  ];

  const features = [
    {
      img: "/images/the-eksperts-Frame 143.png", // Replace with actual image path
      title: "24-Stunden-Bearbeitung",
      description: "Sofortiger Mehrwert für Ihre Website.",
    },
    {
      img: "/images/the-eksperts-Frame 143 (1).png", // Replace with actual image path
      title: "Ekspert-Fixes inklusive",
      description: "Nicht nur ein Bericht – wir liefern auch die Lösungen.",
    },
    {
      img: "/images/the-eksperts-Frame 143 (2).png", // Replace with actual image path
      title: "Garantierte 100/100 Punkte",
      description: "Performance-, SEO- und Barrierefreiheits-Benchmarks.",
    },
  ];
  const features1 = [
    "Instant Analysis",
    "Performance Boost",
    "SEO & Ranking",
    "Accessibility Compliance",
    "Device Compatibility",
    "Performance Tuning",
    "SEO Boost",
    "Security Check",
  ];
  const SalesforceLandingPage = () => {
    const [formData, setFormData] = useState({
        vorname: '',
        nachname: '',
        unternehmen: '',
        email: '',
        position: '',
      });
      
      const [errors, setErrors] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
      
      useEffect(() => {
        setErrors({});
      }, [formData]);
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const newErrors = {};
        if (!formData.vorname) newErrors.vorname = 'Bitte Auswählen';
        if (!formData.nachname) newErrors.nachname = 'Bitte Auswählen';
        if (!formData.unternehmen) newErrors.unternehmen = 'Bitte Auswählen';
        if (!formData.email) newErrors.email = 'Bitte Auswählen';
        if (!formData.position) newErrors.position = 'Bitte Auswählen';
      
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
      
        try {
          const response = await fetch('/api/sendMailStartup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
      
          const data = await response.json();
          if (response.ok) {
            setIsSubmitted(true);
            setFormData({ vorname: '', nachname: '', unternehmen: '', email: '', position: '' });
          } else {
            alert('Error: ' + data.message);
          }
        } catch (error) {
          console.error('Failed to send email:', error);
        }
      };

  const contactRef = useRef(null);

  const scrollToContactForm = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <div className="px-4">
      <main className="bg-white flex flex-col justify-center items-center">
        <section className="lg:mt-[20px] mt-[60px] lg:px-4 max-w-[1310px] mx-auto gap-6 lg:gap-[90px] flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left ">
            <h1 className="text-black font-[400] text-[40px] lg:text-[69px] lg:leading-[72px]  leading-[48px] [letter-spacing:-1.74px] mt-[16px] lg:block hidden ">
            Wie viel Potenzial<br></br> bleibt in Ihrer<br></br> Salesforce-Lösung<br></br>ungenutzt?
            </h1>
            <h1 className="text-black font-[400] text-[40px] leading-[48px] mt-[16px] lg:hidden block">
            Wie viel Potenzial<br></br> bleibt in Ihrer Salesforce-Lösung ungenutzt?
            </h1>
            <p className="text-[#171717] text-[16px] leading-[25px] lg:text-[16px] lg:leading-[26px] mt-[16px] font-[300] lg:block hidden ">
            Entdecken Sie mit unserem Experten-Health-Check &<br></br> Optimierungsleitfaden, wo Ihr Salesforce-Setup verbessert werden kann. Identifizieren Sie Ineffizienzen, Sicherheitslücken und Leistungsprobleme, damit Ihr CRM effizient arbeitet – statt Sie auszubremsen.
            </p>
            <p className="text-[#171717] text-[16px] leading-[25px] lg:text-[20px] lg:leading-[28px] mt-[16px] font-[300] lg:hidden block">
            Entdecken Sie mit unserem Experten-Health-Check & Optimierungsleitfaden, wo Ihr Salesforce-Setup verbessert werden kann. Identifizieren Sie Ineffizienzen, Sicherheitslücken und Leistungsprobleme, damit Ihr CRM effizient arbeitet – statt Sie auszubremsen.
            </p>
            <button onClick={scrollToContactForm} className="mt-[16px] flex px-[8px] py-[14px] justify-center items-center gap-[8px] rounded-[12px] bg-[#152DFF] text-white font-matt text-[14px]  lg:text-[20px] font-medium lg:leading-[28px]">
            Jetzt kostenlose Salesforce Health-Checkliste herunterladen
      </button>
        
          </div>


  {/* Right Image */}
  <div className="flex justify-center mt-8 lg:mt-2">
    <img src="/images/the-eksperts-salesforce-hero-section.png" alt="Rocket Boost Website" className="w-full max-w-[850px]" />
  </div>
</section>

<section className="mt-[20px] mb-[160px] lg:mb-[300px]">
  <PartnersSlider/>
</section>
<section className="flex flex-col items-center text-center mb-[160px] lg:mb-[300px] mx-auto max-w-[1280px]">
      {/* Top Button */}
      <p className="p-2 text-[16px] font-[300]  text-white bg-[#0009FF] rounded-[12px]">
        Was erwartet Sie?
      </p>

      {/* Heading */}
      <h2 className="mt-4 text-[40px] leading-[48px] font-[700] text-black">
        Eine Website für Startups & KMU – erstellt von the eksperts
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-black text-[22px] leading-[33px] font-[300]">
        Ihre Website ist mehr als nur eine digitale Präsenz – sie ist Ihr erster Eindruck, 
        Ihr Verkaufsmotor und Ihre Plattform für Wachstum. Wir spezialisieren uns auf schnelle, 
        funktionale und zukunftssichere Websites, damit Sie sich voll und ganz auf Ihr Unternehmen konzentrieren können.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-2 mt-8 lg:mt-[60px] md:grid-cols-2 lg:grid-cols-5">
        {[
          {
            icon: "/images/design.svg",
            title: "Individuelles Design + kostenloses Logo",
            description: "Eine Website, die Ihre Marke perfekt widerspiegelt – inklusive kostenlosem Logo."
          },
          {
            icon: "/images/speed.svg",
            title: "Blitzschnelle Ladezeiten",
            description: "Perfekt abgestimmt auf höchste Performance und ein erstklassiges Nutzererlebnis."
          },
          {
            icon: "/images/mobile.svg",
            title: "Mobile-First Design",
            description: "Perfekte Darstellung auf allen Geräten – ohne Kompromisse."
          },
          {
            icon: "/images/cms.svg",
            title: "Einfach zu bedienendes CMS",
            description: "Aktualisieren Sie Ihre Inhalte mühelos und ohne technische Vorkenntnisse."
          },
          {
            icon: "/images/seo.svg",
            title: "SEO-Ready",
            description: "Gebaut, um bei Google gefunden zu werden und neue Kunden zu gewinnen."
          }
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-left text-left px-6 py-8  rounded-[10px] border-[2px] border-black">
            <img src={feature.icon} alt={feature.title} className="w-[80px] h-[80px]" />
            <h3 className="mt-2 text-[20px] font-[900] leading-[28px] text-black">{feature.title}</h3>
            <p className="mt-2 text-black text-[16px] leading-[24px] font-[300]">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button onClick={scrollToContactForm}  className="mt-8 lg:mt-[60px] lg:px-[80px] px-[14px] py-[14px] text-[20px] leading-[28px] font-[500] text-white bg-[#152DFF] rounded-[12px]">
        Mehr über unseren Prozess erfahren
      </button>
    </section>

    <h2 ref={contactRef} id="contact-section" className="text-[40px] mb-[40px] leading-[48px] font-[700] text-center">
          Laden Sie den kostenlosen Leitfaden für <br></br> perfektes Webdesign herunter
        </h2>
    <section className="custom-1026 flex flex-col items-center lg:gap-[40px] justify-center  lg:flex-row mb-[160px] lg:mb-[300px] mx-auto max-w-[1280px] lg:px-[20px]">
      {/* Left Side - Video */}
    
      <div className="w-full lg:w-1/2 mb-[40px] lg:mb-0 flex justify-center lg:max-w-[588px] lg:h-[571px] lg:flex lg:flex-col lg:justify-center lg:items-start flex-shrink-0">
      <video
  className="w-full custom-1020 max-w-md lg:min-w-[588px] lg:min-h-[618px] rounded-[12px] object-cover "
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/images/the-eksperts-startup.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

</div>


      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 lg:min-w-[522px]">
       

        <form className="space-y-[15px]" onSubmit={handleSubmit}>
          {[
            { label: "Vorname", name: "vorname", placeholder: "Ihre Vorname", required: true },
            { label: "Nachname", name: "nachname", placeholder: "Ihre Name", required: true }, 
            { label: "Unternehmen", name: "unternehmen", placeholder: "Ihre Unternehmen", required: true },
            { label: "Email", name: "email", placeholder: "Email", required: true },
            { label: "Position", name: "position", placeholder: "Position", required: true }
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-[20px] font-[500] text-black leading-normal">
                {field.label}{field.required && <span className="text-red-500">*</span>}
              </label>
              <input
           type="text"
           name={field.name}
           value={formData[field.name] || ""}
           onChange={handleInputChange}
           placeholder={field.placeholder}
           required={field.required}
                className="mt-1 w-full border text-[20px] font-[400] placeholder:text-black text-black rounded-[12px] p-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Download Button */}
          <button
            type="submit"
            className="w-full px-6 py-[14px] text-white bg-[#152DFF] rounded-lg font-[700] text-[20px] leading-[28px]"
          >
            Jetzt kostenlos herunterladen
          </button>
        </form>
      </div>
    </section>

    <section className="flex flex-col items-center mb-[160px] lg:mb-[300px] lg:flex-row max-w-[1280px] mx-auto">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <h2 className="text-[48px] font-bold text-black font-matt mb-[10px] lg:mb-[35px] lg:mt-4  leading-[56px] text-center lg:text-left">
  Häufige Website-Fehler<br></br> bei Startups / KMU, die Wachstum verhindern
</h2>

        <img
          src="/images/the-eksperts-rectangle.png" // Replace with your actual image path
          alt="Website Issues"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Issues List */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-[10px]">
     

        <div className="mt-6 space-y-4">
          {[
            {
              icon: "/images/old-design.svg",
              title: "Veraltetes Design",
              description: "Ein schlechter erster Eindruck vertreibt potenzielle Kunden."
            },
            {
              icon: "/images/slow-speed.svg",
              title: "Langsame Ladezeiten",
              description: "Langsame Websites verlieren Besucher und Umsatz."
            },
            {
              icon: "/images/mi-mobile.svg",
              title: "Keine Mobile Optimierung",
              description: "Über 50 % der Nutzer surfen mobil – ohne Optimierung verlieren Sie Kunden."
            },
            {
              icon: "/images/scale.svg",
              title: "Keine Skalierbarkeit",
              description: "Eine unflexible Website wächst nicht mit deinem Unternehmen."
            },
            {
              icon: "/images/diy.svg",
              title: "DIY-Fehler",
              description: "Generische Vorlagen spiegeln deine Marke nicht wider."
            }
          ].map((issue, index) => (
            <div key={index} className="flex items-center p-4 lg:px-[24px] lg:py-[18px]  bg-[#F2F2F2] rounded-[12px]">
              <img src={issue.icon} alt={issue.title} className="w-[60px] h-[60px] mr-3 lg:mr-[24px]" />
              <div>
                <h3 className="text-[24px] leading-[37px] font-[700] font-matt">{issue.title}</h3>
                <p className="text-black text-[18px] leading-[22px] font-[300]">{issue.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Box */}
        <div className="mt-6 p-4 lg:px-[24px] lg:py-[18px] border border-black rounded-[12px] flex items-center">
          <img src="/images/solution.svg" alt="Solution" className="w-[60px] h-[60px] mr-3 lg:mr-[24px]" />
          <div>
            <h3 className="text-[24px] leading-[37px] font-[700] font-matt">Die Lösung</h3>
            <p className="text-black text-[18px] leading-[22px] font-[300]">
              Wir erstellen moderne, schnelle und skalierbare Websites, damit du dich auf das Wesentliche konzentrieren kannst: 
              das Wachstum deines Unternehmens.
            </p>
          </div>
        </div>
      </div>
    </section>
      <ContactFormStartup/>

    <section className="relative flex flex-col max-w-[1280px] justify-between items-center lg:h-[950px] w-full overflow-hidden">
  {/* Background SVG Line */}
  <svg xmlns="http://www.w3.org/2000/svg" width="981" height="834"  viewBox="0 0 981 837"
    fill="none"
    className="lg:block hidden absolute left-[70px] top-[0px] z-10">
  <path d="M6.99958 105.383L11.9685 105.94L6.99958 105.383ZM236 255.384L237.198 260.238L236 255.384ZM925.499 247.383L928.643 243.495L925.499 247.383ZM711.499 514.384L711.358 519.382L711.499 514.384ZM169 498.384L166.244 494.211L169 498.384ZM514.927 790.82C516.211 788.375 515.269 785.352 512.824 784.069L472.978 763.157C470.532 761.874 467.51 762.816 466.227 765.261C464.943 767.706 465.885 770.729 468.331 772.012L503.749 790.6L485.161 826.019C483.878 828.464 484.82 831.486 487.265 832.77C489.71 834.053 492.733 833.111 494.016 830.666L514.927 790.82ZM204.772 15.0635C202.047 14.6223 199.479 16.4745 199.038 19.2005C198.597 21.9265 200.449 24.4939 203.175 24.935L204.772 15.0635ZM184.103 21.7165C186.823 22.1898 189.412 20.368 189.886 17.6474C190.359 14.9269 188.537 12.3378 185.816 11.8645L184.103 21.7165ZM166.83 8.53576C164.11 8.06097 161.519 9.88133 161.045 12.6016C160.57 15.3219 162.39 17.9121 165.11 18.3868L166.83 8.53576ZM146.175 15.1896C148.901 15.6268 151.466 13.7708 151.903 11.0442C152.34 8.31765 150.485 5.75289 147.758 5.3157L146.175 15.1896ZM128.532 2.52392C125.793 2.17806 123.291 4.11863 122.946 6.85831C122.6 9.59799 124.54 12.0993 127.28 12.4452L128.532 2.52392ZM108.381 10.5986C111.137 10.7731 113.512 8.6805 113.687 5.92459C113.861 3.16869 111.769 0.793123 109.013 0.618618L108.381 10.5986ZM89.2279 0.335503C86.4691 0.455832 84.3302 2.78983 84.4505 5.54863C84.5708 8.30743 86.9048 10.4463 89.6636 10.326L89.2279 0.335503ZM71.4238 12.6048C74.1191 12.0039 75.8169 9.33181 75.216 6.63656C74.615 3.94131 71.943 2.24351 69.2477 2.84442L71.4238 12.6048ZM49.938 9.75651C47.4896 11.0336 46.5401 14.0537 47.8172 16.502C49.0942 18.9504 52.1143 19.8999 54.5627 18.6228L49.938 9.75651ZM40.3301 29.0766C42.2825 27.1237 42.2821 23.9579 40.3293 22.0055C38.3764 20.0531 35.2106 20.0535 33.2582 22.0063L40.3301 29.0766ZM20.846 38.3309C19.4569 40.7175 20.2656 43.7783 22.6522 45.1674C25.0389 46.5564 28.0997 45.7478 29.4887 43.3611L20.846 38.3309ZM21.8358 59.9999C22.7766 57.4037 21.4347 54.5363 18.8385 53.5955C16.2423 52.6546 13.3749 53.9966 12.4341 56.5928L21.8358 59.9999ZM6.87773 75.651C6.25553 78.3414 7.93214 81.0268 10.6225 81.649C13.313 82.2712 15.9984 80.5946 16.6206 77.9042L6.87773 75.651ZM13.1815 96.4679C13.5778 93.7351 11.6838 91.1984 8.95093 90.802C6.2181 90.4057 3.68139 92.2998 3.28503 95.0326L13.1815 96.4679ZM1.07408 114.593C0.844477 117.345 2.88917 119.762 5.64103 119.992C8.39289 120.221 10.8098 118.176 11.0395 115.425L1.07408 114.593ZM10.0639 134.315C10.1127 131.554 7.91406 129.276 5.15307 129.227C2.39208 129.178 0.114296 131.377 0.0655036 134.138L10.0639 134.315ZM0.482946 153.72C0.657351 156.475 3.03284 158.568 5.78875 158.394C8.54466 158.219 10.6374 155.844 10.463 153.088L0.482946 153.72ZM12.5611 171.724C12.1074 169 9.53142 167.16 6.80753 167.614C4.08364 168.068 2.24331 170.644 2.69704 173.367L12.5611 171.724ZM7.16473 192.728C7.963 195.371 10.7531 196.867 13.3967 196.069C16.0402 195.271 17.5361 192.481 16.7378 189.837L7.16473 192.728ZM23.3969 207.003C22.1898 204.519 19.1979 203.484 16.7143 204.691C14.2306 205.898 13.1958 208.89 14.4029 211.374L23.3969 207.003ZM24.8437 228.61C26.4946 230.823 29.6274 231.279 31.841 229.628C34.0546 227.977 34.5107 224.845 32.8598 222.631L24.8437 228.61ZM45.1519 236.033C43.0875 234.199 39.9272 234.386 38.0931 236.45C36.2591 238.514 36.4457 241.675 38.5101 243.509L45.1519 236.033ZM54.8519 255.347C57.2339 256.744 60.2973 255.946 61.6944 253.564C63.0915 251.182 62.2931 248.119 59.9112 246.722L54.8519 255.347ZM76.5105 254.59C73.9263 253.616 71.0423 254.922 70.069 257.506C69.0957 260.091 70.4016 262.975 72.9859 263.948L76.5105 254.59ZM92.0783 269.611C94.7722 270.218 97.4479 268.526 98.0545 265.832C98.6612 263.138 96.969 260.462 94.2751 259.855L92.0783 269.611ZM112.684 262.906C109.94 262.599 107.466 264.575 107.16 267.319C106.853 270.064 108.829 272.537 111.573 272.844L112.684 262.906ZM131.195 274.138C133.956 274.203 136.247 272.018 136.312 269.258C136.377 266.497 134.192 264.206 131.432 264.141L131.195 274.138ZM150.369 263.896C147.611 264.026 145.48 266.367 145.609 269.125C145.739 271.884 148.08 274.014 150.839 273.885L150.369 263.896ZM170.241 272.396C172.988 272.109 174.981 269.649 174.693 266.903C174.406 264.156 171.946 262.163 169.2 262.451L170.241 272.396ZM188.075 260.003C185.346 260.422 183.472 262.974 183.891 265.703C184.309 268.433 186.861 270.306 189.59 269.888L188.075 260.003ZM208.74 266.546C211.451 266.018 213.22 263.393 212.692 260.682C212.164 257.972 209.539 256.202 206.829 256.73L208.74 266.546ZM225.443 252.764C222.752 253.385 221.074 256.069 221.694 258.76C222.315 261.451 224.999 263.129 227.69 262.509L225.443 252.764ZM246.709 257.905C249.392 257.251 251.037 254.546 250.384 251.863C249.73 249.18 247.025 247.535 244.342 248.189L246.709 257.905ZM263.458 243.596C260.771 244.232 259.109 246.927 259.746 249.614C260.382 252.301 263.076 253.963 265.764 253.326L263.458 243.596ZM284.843 248.872C287.534 248.253 289.214 245.57 288.595 242.879C287.976 240.187 285.293 238.508 282.602 239.127L284.843 248.872ZM301.778 234.783C299.083 235.384 297.385 238.056 297.986 240.751C298.587 243.447 301.26 245.144 303.955 244.543L301.778 234.783ZM323.092 240.345C325.792 239.762 327.508 237.102 326.925 234.403C326.343 231.703 323.683 229.987 320.983 230.57L323.092 240.345ZM340.209 226.492C337.506 227.056 335.771 229.704 336.334 232.407C336.897 235.111 339.545 236.845 342.249 236.282L340.209 226.492ZM361.449 232.355C364.156 231.811 365.911 229.176 365.367 226.468C364.824 223.761 362.189 222.007 359.481 222.55L361.449 232.355ZM378.781 218.752C376.07 219.275 374.296 221.897 374.819 224.608C375.341 227.319 377.963 229.094 380.675 228.571L378.781 218.752ZM399.918 224.938C402.633 224.436 404.428 221.828 403.926 219.113C403.425 216.397 400.817 214.603 398.101 215.104L399.918 224.938ZM417.441 211.613C414.721 212.093 412.905 214.686 413.384 217.405C413.864 220.125 416.457 221.941 419.176 221.462L417.441 211.613ZM438.495 218.141C441.219 217.685 443.057 215.108 442.601 212.384C442.145 209.661 439.567 207.823 436.844 208.279L438.495 218.141ZM456.266 205.115C453.539 205.547 451.678 208.108 452.109 210.835C452.541 213.563 455.102 215.424 457.83 214.992L456.266 205.115ZM477.175 212.023C479.906 211.617 481.791 209.073 481.385 206.342C480.979 203.61 478.436 201.725 475.704 202.131L477.175 212.023ZM495.153 199.337C492.418 199.716 490.508 202.241 490.887 204.976C491.266 207.711 493.791 209.622 496.526 209.242L495.153 199.337ZM515.955 206.652C518.694 206.301 520.63 203.796 520.28 201.057C519.929 198.318 517.424 196.382 514.685 196.733L515.955 206.652ZM534.235 194.339C531.492 194.659 529.528 197.142 529.848 199.885C530.169 202.628 532.652 204.592 535.395 204.271L534.235 194.339ZM554.841 202.114C557.587 201.826 559.58 199.366 559.292 196.62C559.003 193.873 556.543 191.881 553.797 192.169L554.841 202.114ZM573.37 190.237C570.62 190.49 568.597 192.925 568.851 195.675C569.105 198.425 571.54 200.448 574.29 200.194L573.37 190.237ZM593.762 198.525C596.515 198.308 598.571 195.9 598.353 193.147C598.136 190.394 595.728 188.339 592.976 188.556L593.762 198.525ZM612.651 187.143C609.895 187.321 607.805 189.699 607.983 192.455C608.161 195.21 610.539 197.3 613.295 197.123L612.651 187.143ZM632.828 196.012C635.586 195.877 637.712 193.532 637.577 190.774C637.442 188.016 635.097 185.889 632.339 186.024L632.828 196.012ZM652.036 185.223C649.276 185.312 647.111 187.621 647.2 190.381C647.288 193.141 649.598 195.307 652.358 195.218L652.036 185.223ZM671.881 194.765C674.642 194.727 676.849 192.457 676.811 189.696C676.773 186.935 674.503 184.728 671.742 184.766L671.881 194.765ZM691.453 184.685C688.692 184.669 686.44 186.894 686.423 189.655C686.407 192.416 688.632 194.669 691.393 194.685L691.453 184.685ZM710.887 195.014C713.648 195.091 715.948 192.917 716.026 190.156C716.103 187.396 713.928 185.095 711.168 185.018L710.887 195.014ZM730.88 185.807C728.123 185.663 725.77 187.781 725.625 190.538C725.481 193.296 727.599 195.649 730.356 195.794L730.88 185.807ZM749.797 197.074C752.55 197.294 754.96 195.241 755.18 192.488C755.399 189.736 753.346 187.326 750.593 187.106L749.797 197.074ZM770.289 188.977C767.544 188.673 765.073 190.651 764.768 193.396C764.464 196.14 766.443 198.612 769.188 198.916L770.289 188.977ZM788.478 201.386C791.21 201.785 793.749 199.893 794.148 197.161C794.547 194.429 792.656 191.89 789.924 191.491L788.478 201.386ZM809.479 194.738C806.765 194.23 804.153 196.019 803.645 198.733C803.137 201.448 804.926 204.06 807.641 204.567L809.479 194.738ZM826.643 208.565C829.331 209.197 832.023 207.531 832.655 204.842C833.287 202.154 831.62 199.463 828.932 198.831L826.643 208.565ZM848.197 203.897C845.546 203.121 842.769 204.641 841.993 207.291C841.217 209.941 842.737 212.718 845.387 213.494L848.197 203.897ZM863.757 219.491C866.352 220.433 869.22 219.092 870.162 216.497C871.104 213.901 869.764 211.033 867.168 210.091L863.757 219.491ZM885.697 217.592C883.179 216.457 880.218 217.579 879.084 220.096C877.95 222.614 879.071 225.575 881.589 226.709L885.697 217.592ZM898.666 235.313C901.072 236.668 904.121 235.816 905.476 233.41C906.831 231.003 905.979 227.954 903.572 226.6L898.666 235.313ZM920.623 237.404C918.375 235.8 915.252 236.322 913.648 238.57C912.044 240.818 912.566 243.94 914.814 245.544L920.623 237.404ZM929.355 257.44C931.349 259.35 934.514 259.282 936.424 257.288C938.334 255.293 938.266 252.128 936.272 250.218L929.355 257.44ZM949.756 265.328C948.079 263.135 944.94 262.716 942.747 264.394C940.554 266.072 940.136 269.21 941.813 271.403L949.756 265.328ZM952.134 287.1C953.487 289.507 956.535 290.362 958.942 289.009C961.35 287.656 962.204 284.608 960.852 282.2L952.134 287.1ZM969.527 300.405C968.508 297.839 965.601 296.585 963.034 297.604C960.468 298.624 959.214 301.53 960.233 304.097L969.527 300.405ZM966.02 322.029C966.693 324.707 969.41 326.332 972.088 325.659C974.766 324.986 976.392 322.269 975.719 319.591L966.02 322.029ZM979.322 339.429C979.012 336.685 976.536 334.713 973.792 335.023C971.048 335.333 969.075 337.809 969.386 340.553L979.322 339.429ZM970.215 359.333C970.145 362.094 972.326 364.388 975.087 364.458C977.847 364.528 980.142 362.347 980.211 359.586L970.215 359.333ZM978.263 379.699C978.726 376.977 976.896 374.394 974.173 373.931C971.451 373.467 968.868 375.298 968.405 378.02L978.263 379.699ZM963.9 396.231C963.04 398.855 964.469 401.68 967.093 402.54C969.717 403.4 972.542 401.971 973.402 399.347L963.9 396.231ZM965.69 418.026C966.931 415.56 965.938 412.554 963.471 411.312C961.004 410.071 957.998 411.065 956.757 413.531L965.69 418.026ZM947.103 429.637C945.514 431.895 946.058 435.014 948.316 436.603C950.575 438.191 953.694 437.648 955.283 435.389L947.103 429.637ZM942.573 451.013C944.458 448.995 944.35 445.831 942.332 443.946C940.314 442.061 937.15 442.169 935.265 444.187L942.573 451.013ZM921.481 457.146C919.354 458.908 919.058 462.06 920.82 464.186C922.582 466.313 925.734 466.608 927.86 464.847L921.481 457.146ZM911.76 476.688C914.072 475.178 914.722 472.079 913.212 469.767C911.702 467.455 908.603 466.805 906.291 468.315L911.76 476.688ZM889.901 477.862C887.45 479.133 886.494 482.151 887.765 484.603C889.037 487.054 892.055 488.01 894.506 486.738L889.901 477.862ZM876.416 495.12C878.969 494.067 880.185 491.144 879.132 488.592C878.079 486.039 875.156 484.823 872.603 485.876L876.416 495.12ZM854.651 492.475C852.026 493.331 850.591 496.153 851.447 498.779C852.303 501.404 855.125 502.839 857.751 501.983L854.651 492.475ZM838.706 507.487C841.382 506.806 843 504.085 842.32 501.409C841.639 498.732 838.918 497.114 836.242 497.795L838.706 507.487ZM817.514 501.971C814.802 502.495 813.03 505.118 813.554 507.829C814.079 510.541 816.702 512.313 819.413 511.789L817.514 501.971ZM799.952 515.032C802.686 514.646 804.59 512.117 804.204 509.382C803.818 506.648 801.289 504.744 798.554 505.13L799.952 515.032ZM779.41 507.385C776.661 507.647 774.645 510.089 774.908 512.837C775.17 515.586 777.611 517.602 780.36 517.34L779.41 507.385ZM760.645 518.815C763.402 518.663 765.514 516.305 765.363 513.548C765.211 510.79 762.853 508.678 760.095 508.83L760.645 518.815ZM740.713 509.54C737.952 509.592 735.756 511.873 735.808 514.634C735.86 517.395 738.141 519.591 740.902 519.538L740.713 509.54ZM721.39 519.59C724.151 519.626 726.419 517.417 726.455 514.656C726.491 511.895 724.282 509.627 721.521 509.591L721.39 519.59ZM701.757 509.062C698.998 508.96 696.678 511.114 696.575 513.873C696.473 516.633 698.627 518.953 701.386 519.055L701.757 509.062ZM681.603 518.152C684.36 518.301 686.716 516.187 686.866 513.43C687.015 510.672 684.901 508.316 682.143 508.167L681.603 518.152ZM662.554 506.944C659.799 506.749 657.408 508.825 657.214 511.579C657.019 514.334 659.095 516.724 661.849 516.919L662.554 506.944ZM642.111 515.366C644.862 515.605 647.286 513.567 647.524 510.816C647.762 508.065 645.725 505.642 642.974 505.404L642.111 515.366ZM623.378 503.556C620.631 503.277 618.177 505.277 617.897 508.024C617.618 510.771 619.618 513.225 622.365 513.505L623.378 503.556ZM602.662 511.355C605.405 511.674 607.887 509.709 608.206 506.966C608.525 504.223 606.559 501.741 603.816 501.422L602.662 511.355ZM584.287 499.02C581.548 498.665 579.041 500.597 578.686 503.335C578.331 506.074 580.263 508.582 583.002 508.937L584.287 499.02ZM563.383 506.272C566.117 506.66 568.648 504.758 569.035 502.024C569.423 499.29 567.521 496.759 564.787 496.371L563.383 506.272ZM545.313 493.503C542.583 493.086 540.033 494.961 539.616 497.691C539.2 500.421 541.075 502.972 543.805 503.388L545.313 493.503ZM524.265 500.314C526.991 500.755 529.558 498.903 529.999 496.177C530.44 493.451 528.588 490.884 525.862 490.443L524.265 500.314ZM506.427 487.225C503.704 486.765 501.124 488.599 500.664 491.322C500.203 494.045 502.038 496.625 504.76 497.085L506.427 487.225ZM485.287 493.741C488.007 494.214 490.597 492.393 491.07 489.672C491.544 486.952 489.722 484.363 487.002 483.889L485.287 493.741ZM467.578 480.479C464.859 479.999 462.265 481.814 461.785 484.534C461.305 487.253 463.12 489.847 465.84 490.327L467.578 480.479ZM446.414 486.897C449.133 487.375 451.726 485.559 452.205 482.839C452.684 480.12 450.867 477.527 448.148 477.048L446.414 486.897ZM428.699 473.657C425.978 473.188 423.392 475.015 422.924 477.736C422.456 480.458 424.282 483.043 427.004 483.512L428.699 473.657ZM407.604 480.244C410.329 480.691 412.9 478.844 413.347 476.119C413.794 473.394 411.948 470.823 409.223 470.376L407.604 480.244ZM389.65 467.282C386.919 466.869 384.371 468.747 383.958 471.478C383.545 474.208 385.424 476.756 388.154 477.169L389.65 467.282ZM368.684 474.393C371.422 474.757 373.936 472.832 374.3 470.095C374.664 467.358 372.739 464.844 370.002 464.48L368.684 474.393ZM350.287 462.092C347.542 461.795 345.075 463.78 344.778 466.525C344.482 469.271 346.466 471.737 349.212 472.034L350.287 462.092ZM329.747 470.23C332.501 470.439 334.902 468.376 335.111 465.623C335.32 462.869 333.257 460.468 330.503 460.259L329.747 470.23ZM310.589 459.143C307.829 459.047 305.514 461.207 305.418 463.966C305.322 466.726 307.482 469.041 310.242 469.137L310.589 459.143ZM290.755 468.942C293.516 468.897 295.717 466.621 295.671 463.86C295.625 461.099 293.35 458.898 290.589 458.944L290.755 468.942ZM270.598 459.882C267.845 460.1 265.791 462.509 266.009 465.261C266.227 468.014 268.636 470.069 271.389 469.851L270.598 459.882ZM252.141 472.082C254.869 471.659 256.739 469.104 256.316 466.375C255.893 463.647 253.338 461.777 250.609 462.2L252.141 472.082ZM230.849 466.119C228.166 466.775 226.523 469.48 227.178 472.163C227.833 474.845 230.539 476.489 233.221 475.834L230.849 466.119ZM214.759 481.271C217.367 480.364 218.747 477.515 217.84 474.906C216.934 472.298 214.084 470.918 211.476 471.825L214.759 481.271ZM192.724 479.408C190.219 480.571 189.131 483.544 190.294 486.048C191.456 488.553 194.429 489.641 196.934 488.479L192.724 479.408ZM179.942 497.43C182.318 496.023 183.103 492.956 181.695 490.58C180.288 488.204 177.221 487.419 174.845 488.827L179.942 497.43ZM157.661 500.4C155.489 502.106 155.11 505.249 156.816 507.421C158.521 509.593 161.664 509.971 163.836 508.266L157.661 500.4ZM149.486 521.516C151.362 519.49 151.239 516.326 149.213 514.451C147.186 512.575 144.022 512.698 142.147 514.725L149.486 521.516ZM129.041 531.216C127.486 533.498 128.075 536.609 130.357 538.164C132.64 539.719 135.75 539.129 137.305 536.847L129.041 531.216ZM127.402 553.807C128.63 551.333 127.62 548.333 125.147 547.105C122.673 545.877 119.673 546.887 118.445 549.36L127.402 553.807ZM110.35 568.699C109.446 571.308 110.828 574.157 113.437 575.061C116.046 575.965 118.895 574.583 119.799 571.973L110.35 568.699ZM114.469 590.978C115.057 588.28 113.346 585.616 110.648 585.029C107.949 584.441 105.286 586.152 104.698 588.85L114.469 590.978ZM101.425 609.497C101.148 612.244 103.15 614.697 105.897 614.974C108.645 615.252 111.097 613.25 111.375 610.502L101.425 609.497ZM110.481 630.266C110.453 627.505 108.192 625.289 105.431 625.316C102.67 625.344 100.454 627.605 100.481 630.366L110.481 630.266ZM101.838 651.205C102.169 653.946 104.66 655.9 107.401 655.569C110.143 655.239 112.097 652.748 111.766 650.006L101.838 651.205ZM115.222 669.477C114.588 666.789 111.896 665.124 109.208 665.759C106.52 666.393 104.856 669.085 105.49 671.773L115.222 669.477ZM111.443 691.813C112.381 694.411 115.247 695.756 117.844 694.818C120.442 693.88 121.787 691.015 120.849 688.417L111.443 691.813ZM128.638 706.552C127.398 704.085 124.392 703.09 121.925 704.33C119.458 705.57 118.462 708.575 119.702 711.042L128.638 706.552ZM130.244 729.151C131.78 731.446 134.885 732.062 137.18 730.527C139.476 728.992 140.092 725.887 138.557 723.591L130.244 729.151ZM150.517 739.223C148.701 737.142 145.543 736.926 143.462 738.741C141.381 740.557 141.165 743.715 142.981 745.796L150.517 739.223ZM157.76 760.671C159.83 762.499 162.99 762.304 164.818 760.234C166.646 758.165 166.451 755.005 164.381 753.177L157.76 760.671ZM179.956 765.233C177.668 763.687 174.56 764.288 173.014 766.576C171.467 768.864 172.069 771.972 174.357 773.518L179.956 765.233ZM192.406 784.124C194.869 785.373 197.878 784.388 199.126 781.925C200.375 779.462 199.39 776.453 196.927 775.205L192.406 784.124ZM215.032 783.06C212.439 782.111 209.567 783.443 208.617 786.036C207.668 788.629 209 791.501 211.593 792.451L215.032 783.06ZM231.676 798.71C234.339 799.441 237.091 797.875 237.822 795.213C238.554 792.55 236.988 789.798 234.325 789.067L231.676 798.71ZM254.266 793.99C251.569 793.397 248.901 795.102 248.308 797.799C247.715 800.496 249.421 803.163 252.118 803.756L254.266 793.99ZM272.768 807.768C275.49 808.23 278.071 806.396 278.532 803.674C278.994 800.951 277.16 798.37 274.438 797.909L272.768 807.768ZM294.798 800.873C292.057 800.537 289.563 802.487 289.228 805.228C288.892 807.969 290.842 810.463 293.583 810.798L294.798 800.873ZM314.471 812.892C317.224 813.109 319.631 811.053 319.848 808.3C320.064 805.547 318.008 803.14 315.255 802.923L314.471 812.892ZM335.836 804.113C333.076 804.009 330.756 806.163 330.652 808.922C330.549 811.682 332.702 814.003 335.462 814.106L335.836 804.113ZM356.452 814.479C359.214 814.475 361.449 812.234 361.445 809.472C361.441 806.711 359.199 804.475 356.438 804.479L356.452 814.479ZM377.028 804.065C374.269 804.171 372.118 806.494 372.224 809.254C372.33 812.013 374.653 814.164 377.413 814.058L377.028 804.065ZM398.351 812.877C401.104 812.672 403.171 810.274 402.967 807.521C402.763 804.767 400.365 802.7 397.611 802.904L398.351 812.877ZM418.158 801.023C415.412 801.322 413.429 803.789 413.728 806.535C414.027 809.28 416.495 811.263 419.24 810.964L418.158 801.023ZM440.023 808.345C442.756 807.953 444.655 805.42 444.263 802.686C443.872 799.953 441.338 798.054 438.605 798.446L440.023 808.345ZM459.028 795.165C456.31 795.649 454.499 798.246 454.984 800.965C455.468 803.683 458.065 805.494 460.784 805.009L459.028 795.165ZM481.346 800.966C484.046 800.384 485.762 797.724 485.18 795.024C484.598 792.325 481.938 790.609 479.238 791.191L481.346 800.966ZM499.231 786.45C496.559 787.148 494.959 789.88 495.657 792.552C496.355 795.223 499.087 796.823 501.759 796.125L499.231 786.45ZM214.252 16.5532C211.069 16.069 207.909 15.571 204.772 15.0635L203.175 24.935C206.338 25.447 209.53 25.95 212.748 26.4395L214.252 16.5532ZM185.816 11.8645C179.342 10.7382 173.068 9.62449 166.83 8.53576L165.11 18.3868C171.272 19.4622 177.663 20.5964 184.103 21.7165L185.816 11.8645ZM147.758 5.3157C141.192 4.2629 134.777 3.31224 128.532 2.52392L127.28 12.4452C133.382 13.2155 139.681 14.1484 146.175 15.1896L147.758 5.3157ZM109.013 0.618618C102.189 0.186548 95.584 0.0582724 89.2279 0.335503L89.6636 10.326C95.5911 10.0675 101.832 10.1839 108.381 10.5986L109.013 0.618618ZM69.2477 2.84442C62.4307 4.36429 55.9725 6.60886 49.938 9.75651L54.5627 18.6228C59.7239 15.9307 65.3414 13.9609 71.4238 12.6048L69.2477 2.84442ZM33.2582 22.0063C28.6571 26.6084 24.517 32.0236 20.846 38.3309L29.4887 43.3611C32.7637 37.7342 36.3889 33.0186 40.3301 29.0766L33.2582 22.0063ZM12.4341 56.5928C10.3266 62.4081 8.47395 68.749 6.87773 75.651L16.6206 77.9042C18.1376 71.3445 19.8812 65.3935 21.8358 59.9999L12.4341 56.5928ZM3.28503 95.0326C2.82572 98.1994 2.4075 101.463 2.03067 104.827L11.9685 105.94C12.3339 102.679 12.7385 99.5224 13.1815 96.4679L3.28503 95.0326ZM2.03067 104.827C1.66081 108.128 1.3419 111.383 1.07408 114.593L11.0395 115.425C11.2992 112.312 11.6088 109.15 11.9685 105.94L2.03067 104.827ZM0.0655036 134.138C-0.0538926 140.894 0.0844226 147.422 0.482946 153.72L10.463 153.088C10.0827 147.079 9.94895 140.821 10.0639 134.315L0.0655036 134.138ZM2.69704 173.367C3.82462 180.137 5.31198 186.592 7.16473 192.728L16.7378 189.837C15.0179 184.142 13.624 178.105 12.5611 171.724L2.69704 173.367ZM14.4029 211.374C17.4054 217.552 20.8842 223.301 24.8437 228.61L32.8598 222.631C29.2925 217.848 26.1369 212.64 23.3969 207.003L14.4029 211.374ZM38.5101 243.509C43.4895 247.933 48.9393 251.879 54.8519 255.347L59.9112 246.722C54.5445 243.574 49.6274 240.009 45.1519 236.033L38.5101 243.509ZM72.9859 263.948C79.0004 266.213 85.3663 268.1 92.0783 269.611L94.2751 259.855C87.9805 258.438 82.0609 256.68 76.5105 254.59L72.9859 263.948ZM111.573 272.844C117.86 273.546 124.401 273.977 131.195 274.138L131.432 264.141C124.908 263.986 118.659 263.573 112.684 262.906L111.573 272.844ZM150.839 273.885C157.115 273.59 163.583 273.093 170.241 272.396L169.2 262.451C162.72 263.129 156.443 263.61 150.369 263.896L150.839 273.885ZM189.59 269.888C195.822 268.932 202.205 267.818 208.74 266.546L206.829 256.73C200.418 257.979 194.167 259.069 188.075 260.003L189.59 269.888ZM227.69 262.509C230.827 261.785 233.997 261.028 237.198 260.238L234.801 250.529C231.648 251.308 228.529 252.053 225.443 252.764L227.69 262.509ZM237.198 260.238C240.366 259.455 243.537 258.678 246.709 257.905L244.342 248.189C241.16 248.964 237.979 249.744 234.801 250.529L237.198 260.238ZM265.764 253.326C272.119 251.821 278.479 250.336 284.843 248.872L282.602 239.127C276.216 240.595 269.834 242.085 263.458 243.596L265.764 253.326ZM303.955 244.543C310.334 243.121 316.714 241.721 323.092 240.345L320.983 230.57C314.582 231.951 308.18 233.356 301.778 234.783L303.955 244.543ZM342.249 236.282C348.654 234.948 355.055 233.638 361.449 232.355L359.481 222.55C353.062 223.839 346.637 225.153 340.209 226.492L342.249 236.282ZM380.675 228.571C387.099 227.332 393.514 226.121 399.918 224.938L398.101 215.104C391.671 216.292 385.231 217.508 378.781 218.752L380.675 228.571ZM419.176 221.462C425.631 220.324 432.071 219.217 438.495 218.141L436.844 208.279C430.391 209.359 423.923 210.471 417.441 211.613L419.176 221.462ZM457.83 214.992C464.299 213.968 470.748 212.978 477.175 212.023L475.704 202.131C469.246 203.091 462.766 204.086 456.266 205.115L457.83 214.992ZM496.526 209.242C503.029 208.341 509.507 207.477 515.955 206.652L514.685 196.733C508.202 197.562 501.69 198.431 495.153 199.337L496.526 209.242ZM535.395 204.271C541.911 203.51 548.394 202.791 554.841 202.114L553.797 192.169C547.31 192.85 540.789 193.573 534.235 194.339L535.395 204.271ZM574.29 200.194C580.823 199.591 587.315 199.034 593.762 198.525L592.976 188.556C586.483 189.068 579.946 189.629 573.37 190.237L574.29 200.194ZM613.295 197.123C619.858 196.699 626.37 196.329 632.828 196.012L632.339 186.024C625.828 186.343 619.264 186.717 612.651 187.143L613.295 197.123ZM652.358 195.218C658.93 195.006 665.439 194.855 671.881 194.765L671.742 184.766C665.237 184.857 658.667 185.009 652.036 185.223L652.358 195.218ZM691.393 194.685C697.97 194.725 704.469 194.834 710.887 195.014L711.168 185.018C704.674 184.836 698.101 184.726 691.453 184.685L691.393 194.685ZM730.356 195.794C736.934 196.139 743.416 196.565 749.797 197.074L750.593 187.106C744.118 186.589 737.545 186.157 730.88 185.807L730.356 195.794ZM769.188 198.916C775.74 199.642 782.172 200.464 788.478 201.386L789.924 191.491C783.498 190.552 776.951 189.715 770.289 188.977L769.188 198.916ZM807.641 204.567C814.132 205.781 820.469 207.113 826.643 208.565L828.932 198.831C822.601 197.342 816.113 195.979 809.479 194.738L807.641 204.567ZM845.387 213.494C851.716 215.347 857.842 217.345 863.757 219.491L867.168 210.091C861.043 207.868 854.716 205.805 848.197 203.897L845.387 213.494ZM881.589 226.709C887.551 229.395 893.247 232.262 898.666 235.313L903.572 226.6C897.877 223.393 891.913 220.392 885.697 217.592L881.589 226.709ZM914.814 245.544C917.412 247.399 919.927 249.307 922.356 251.272L928.643 243.495C926.054 241.402 923.379 239.372 920.623 237.404L914.814 245.544ZM922.356 251.272C924.754 253.211 927.089 255.27 929.355 257.44L936.272 250.218C933.81 247.859 931.265 245.615 928.643 243.495L922.356 251.272ZM941.813 271.403C945.571 276.316 949.025 281.569 952.134 287.1L960.852 282.2C957.518 276.27 953.806 270.623 949.756 265.328L941.813 271.403ZM960.233 304.097C962.537 309.896 964.478 315.893 966.02 322.029L975.719 319.591C974.069 313.026 971.992 306.611 969.527 300.405L960.233 304.097ZM969.386 340.553C970.087 346.754 970.374 353.032 970.215 359.333L980.211 359.586C980.383 352.814 980.074 346.076 979.322 339.429L969.386 340.553ZM968.405 378.02C967.364 384.131 965.872 390.216 963.9 396.231L973.402 399.347C975.532 392.852 977.141 386.286 978.263 379.699L968.405 378.02ZM956.757 413.531C954 419.01 950.791 424.392 947.103 429.637L955.283 435.389C959.253 429.743 962.714 423.941 965.69 418.026L956.757 413.531ZM935.265 444.187C931.092 448.654 926.505 452.984 921.481 457.146L927.86 464.847C933.205 460.418 938.104 455.797 942.573 451.013L935.265 444.187ZM906.291 468.315C901.182 471.652 895.723 474.841 889.901 477.862L894.506 486.738C900.615 483.569 906.362 480.213 911.76 476.688L906.291 468.315ZM872.603 485.876C866.91 488.224 860.929 490.428 854.651 492.475L857.751 501.983C864.261 499.86 870.48 497.569 876.416 495.12L872.603 485.876ZM836.242 497.795C830.236 499.322 823.996 500.717 817.514 501.971L819.413 511.789C826.078 510.499 832.507 509.062 838.706 507.487L836.242 497.795ZM798.554 505.13C792.37 506.003 785.99 506.757 779.41 507.385L780.36 517.34C787.085 516.698 793.614 515.927 799.952 515.032L798.554 505.13ZM760.095 508.83C753.802 509.176 747.342 509.414 740.713 509.54L740.902 519.538C747.648 519.41 754.228 519.168 760.645 518.815L760.095 508.83ZM721.521 509.591C718.266 509.548 714.972 509.48 711.641 509.386L711.358 519.382C714.739 519.478 718.083 519.547 721.39 519.59L721.521 509.591ZM711.641 509.386C708.331 509.292 705.036 509.184 701.757 509.062L701.386 519.055C704.694 519.178 708.018 519.287 711.358 519.382L711.641 509.386ZM682.143 508.167C675.548 507.81 669.019 507.401 662.554 506.944L661.849 516.919C668.368 517.379 674.952 517.792 681.603 518.152L682.143 508.167ZM642.974 505.404C636.374 504.832 629.843 504.215 623.378 503.556L622.365 513.505C628.878 514.168 635.46 514.79 642.111 515.366L642.974 505.404ZM603.816 501.422C597.236 500.657 590.727 499.854 584.287 499.02L583.002 508.937C589.483 509.777 596.036 510.585 602.662 511.355L603.816 501.422ZM564.787 496.371C558.223 495.441 551.732 494.482 545.313 493.503L543.805 503.388C550.256 504.372 556.781 505.336 563.383 506.272L564.787 496.371ZM525.862 490.443C519.308 489.382 512.83 488.307 506.427 487.225L504.76 497.085C511.183 498.171 517.684 499.25 524.265 500.314L525.862 490.443ZM487.002 483.889C480.448 482.748 473.975 481.609 467.578 480.479L465.84 490.327C472.239 491.457 478.722 492.598 485.287 493.741L487.002 483.889ZM448.148 477.048C441.583 475.892 435.101 474.758 428.699 473.657L427.004 483.512C433.387 484.61 439.856 485.742 446.414 486.897L448.148 477.048ZM409.223 470.376C402.613 469.292 396.089 468.256 389.65 467.282L388.154 477.169C394.545 478.136 401.027 479.165 407.604 480.244L409.223 470.376ZM370.002 464.48C363.342 463.594 356.771 462.793 350.287 462.092L349.212 472.034C355.605 472.725 362.094 473.517 368.684 474.393L370.002 464.48ZM330.503 460.259C323.774 459.749 317.137 459.37 310.589 459.143L310.242 469.137C316.64 469.359 323.14 469.729 329.747 470.23L330.503 460.259ZM290.589 458.944C283.833 459.056 277.171 459.361 270.598 459.882L271.389 469.851C277.737 469.347 284.19 469.051 290.755 468.942L290.589 458.944ZM250.609 462.2C243.931 463.235 237.345 464.533 230.849 466.119L233.221 475.834C239.425 474.319 245.729 473.076 252.141 472.082L250.609 462.2ZM211.476 471.825C205.138 474.027 198.889 476.546 192.724 479.408L196.934 488.479C202.791 485.76 208.73 483.366 214.759 481.271L211.476 471.825ZM174.845 488.827C171.959 490.536 169.092 492.33 166.244 494.211L171.755 502.556C174.468 500.764 177.197 499.057 179.942 497.43L174.845 488.827ZM166.244 494.211C163.287 496.165 160.425 498.23 157.661 500.4L163.836 508.266C166.388 506.263 169.028 504.357 171.755 502.556L166.244 494.211ZM142.147 514.725C137.375 519.881 133.005 525.399 129.041 531.216L137.305 536.847C141 531.424 145.063 526.297 149.486 521.516L142.147 514.725ZM118.445 549.36C115.351 555.593 112.651 562.058 110.35 568.699L119.799 571.973C121.965 565.721 124.502 559.648 127.402 553.807L118.445 549.36ZM104.698 588.85C103.222 595.63 102.129 602.529 101.425 609.497L111.375 610.502C112.041 603.907 113.075 597.382 114.469 590.978L104.698 588.85ZM100.481 630.366C100.551 637.308 101.001 644.271 101.838 651.205L111.766 650.006C110.973 643.439 110.546 636.843 110.481 630.266L100.481 630.366ZM105.49 671.773C107.087 678.542 109.069 685.238 111.443 691.813L120.849 688.417C118.608 682.209 116.733 675.881 115.222 669.477L105.49 671.773ZM119.702 711.042C122.826 717.258 126.338 723.31 130.244 729.151L138.557 723.591C134.885 718.102 131.58 712.408 128.638 706.552L119.702 711.042ZM142.981 745.796C147.531 751.012 152.456 755.985 157.76 760.671L164.381 753.177C159.406 748.782 154.786 744.117 150.517 739.223L142.981 745.796ZM174.357 773.518C180.038 777.357 186.053 780.904 192.406 784.124L196.927 775.205C190.946 772.172 185.29 768.837 179.956 765.233L174.357 773.518ZM211.593 792.451C214.839 793.639 218.156 794.75 221.546 795.78L224.454 786.212C221.241 785.236 218.1 784.184 215.032 783.06L211.593 792.451ZM221.546 795.78C224.922 796.806 228.299 797.782 231.676 798.71L234.325 789.067C231.033 788.162 227.742 787.211 224.454 786.212L221.546 795.78ZM252.118 803.756C259.024 805.275 265.913 806.607 272.768 807.768L274.438 797.909C267.737 796.774 261.007 795.473 254.266 793.99L252.118 803.756ZM293.583 810.798C300.607 811.658 307.576 812.35 314.471 812.892L315.255 802.923C308.498 802.392 301.673 801.714 294.798 800.873L293.583 810.798ZM335.462 814.106C342.57 814.372 349.575 814.49 356.452 814.479L356.438 804.479C349.684 804.489 342.809 804.374 335.836 804.113L335.462 814.106ZM377.413 814.058C384.578 813.782 391.567 813.38 398.351 812.877L397.611 802.904C390.94 803.399 384.069 803.794 377.028 804.065L377.413 814.058ZM419.24 810.964C426.491 810.175 433.434 809.289 440.023 808.345L438.605 798.446C432.122 799.374 425.292 800.246 418.158 801.023L419.24 810.964ZM460.784 805.009C468.371 803.657 475.258 802.279 481.346 800.966L479.238 791.191C473.26 792.48 466.49 793.834 459.028 795.165L460.784 805.009ZM501.759 796.125C505.041 795.268 507.582 794.559 509.31 794.062C510.174 793.814 510.835 793.618 511.284 793.484C511.509 793.416 511.681 793.364 511.798 793.328C511.857 793.31 511.902 793.296 511.934 793.286C511.95 793.282 511.962 793.278 511.971 793.275C511.976 793.274 511.979 793.272 511.982 793.272C511.983 793.271 511.985 793.271 511.986 793.27C511.986 793.27 511.986 793.27 511.987 793.27C511.987 793.27 511.987 793.27 511.987 793.27C511.988 793.27 511.988 793.27 510.5 788.496C509.012 783.723 509.013 783.723 509.013 783.723C509.013 783.723 509.013 783.722 509.013 783.722C509.013 783.722 509.013 783.722 509.013 783.722C509.013 783.722 509.013 783.722 509.013 783.722C509.012 783.723 509.011 783.723 509.008 783.724C509.004 783.725 508.996 783.728 508.984 783.731C508.961 783.739 508.924 783.75 508.874 783.765C508.774 783.796 508.619 783.843 508.412 783.905C507.998 784.029 507.374 784.214 506.547 784.452C504.893 784.927 502.431 785.614 499.231 786.45L501.759 796.125Z" fill="#151515" fill-opacity="0.3"/>
</svg>
  {/* Steps Container */}

  <div className="relative z-10 flex flex-col items-center">
  <div>
    <h1 className="header2 text-[40px] lg:text-[80px] lg:leading-[80px] font-[700] font-matt lg:ml-2 lg:mt-[-8px] text-center">So helfen wir Ihnen</h1>
    <p className="par2 text-center text-[20px] leading-[33px] font-[300] mb-8 lg:mb-0">Unser einfacher 4-Schritte-Prozess zur Website-Erstellung</p>
  </div>
 
    {/* Step 1 */}
    <div className="bg-[#F1F1F1] shadow-lg text-left rounded-[16px] px-[24px] py-[14px] w-[357px] lg:mr-[610px] lg:mt-[70px] mb-6 lg:mb-0">
      <h3 className="text-[32px] leading-[48px] font-[700] mb-2">Schritt 1:</h3>
      <div className="flex flex-col space-y-2">
        <p className="text-[24px] leading-[32px] font-[400] font-matt">Erstgespräch –</p>
      <p className="text-[16px] leading-[24px]  font-[300]">Wir lernen Ihre Unternehmensziele, Marke und Zielgruppe kennen.</p>
   
</div>
    </div>

    {/* Step 2 */}
    <div className="bg-[#F1F1F1] shadow-lg text-left  rounded-[16px] px-[24px] custom-1020 lg:w-[400px] w-80 py-[14px] lg:ml-[690px] lg:mt-[-170px] mb-6 lg:mb-0">
    <h3 className="text-[32px] leading-[48px] font-[700] mb-2">Schritt 2:</h3>
      <div className="flex flex-col space-y-2">
        <p className="text-[24px] leading-[32px] font-[400] font-matt">Individuelles Design & Entwicklung –</p>
      <p className="text-[16px] leading-[24px]  font-[300]">Wir erstellen eine maßgeschneiderte Website nach Ihren Anforderungen.</p>
   </div>
    </div>

    {/* Step 3 */}
    <div className="icon1 bg-[#F1F1F1] text-left  shadow-lg rounded-[16px] custom-1020 lg:w-[400px] px-[24px] py-[14px] w-80 lg:ml-[600px] lg:mt-[90px] mb-6 lg:mb-0">
    <h3 className="text-[32px] leading-[48px] font-[700] mb-2">Schritt 3:</h3>
      <div className="flex flex-col space-y-2">
        <p className="text-[24px] leading-[32px] font-[400] font-matt">Überprüfung & Anpassung –</p>
      <p className="text-[16px] leading-[24px]  font-[300]">Wir optimieren das Design, bis alles perfekt ist.</p>
   </div>
    </div>

    {/* Step 4 */}
    <div className="icon2 bg-[#F1F1F1] text-left shadow-lg rounded-[16px] px-[24px] custom-1020 lg:w-[420px] py-[14px] w-[340px] lg:mr-[800px] lg:mt-[-100px] mb-6 lg:mb-0">
    <h3 className="text-[32px] leading-[48px] font-[700] mb-2">Schritt 4:</h3>
      <div className="flex flex-col space-y-2">
        <p className="text-[24px] leading-[32px] font-[400] font-matt">Live-Schaltung & Support  –</p>
      <p className="text-[16px] leading-[24px]  font-[300]">Ihre Website geht online – bereit für Wachstum.</p>
   </div>
   </div>
    <div className="flex flex-row">
    <button onClick={scrollToContactForm} className="btnfix lg:ml-[270px] lg:mt-[80px] custom-1060 group relative font-matt flex items-center justify-center px-1 py-1 bg-transparent border-2 border-[#0009FF] text-[#0009FF] rounded-[10px] font-medium text-[20px] transition duration-100 ease-in-out overflow-hidden">
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
            <span className="mx-2  text-left font-matt text-[16px] leading-[17px] font-[300] lg:text-left relative z-20 group-hover:text-white">
              Kostenloses 15-Minuten-Erstgespräch
            </span>

            {/* Hover Background Effect */}
            <span className="absolute inset-1 bg-[#0009FF] transition-transform duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100 z-10 rounded-[10px]"></span>
          </button>
          </div>
  </div>
</section>


      <section className="lg:mt-[300px] mt-[160px] px-4 lg:px-6 max-w-[1280px] mx-auto">
  {/* Title and Subtitle Row */}
  <div className="flex flex-col lg:flex-row items-center justify-between mb-[32px] lg:mb-[80px]">
    <h2 className="text-black mb-4 lg:mb-0 lg:ml-4 ml-0 font-bold text-[40px] leading-[48px] text-center lg:text-left">
    Kennzahlen
    </h2>
    <p className="text-[#000] font-[300] lg:mr-[300px] text-[24px] lg:text-[32px] lg:leading-[40px] text-center lg:text-left">
    Wir helfen Startups, leistungsstarke<br></br> Websites zu launchen
    </p>
  </div>

  {/* Metrics Row */}
  <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 text-center">
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-black font-[700] text-[80px] leading-[80px]">95%</h3>
      <p className="text-[#000] text-[20px] lg:text-[24px] tracking-tight lg:leading-[32px] font-[300]">Kundenzufriedenheit</p>
    </div>

    <div className="flex flex-col items-center gap-2">
      <h3 className="text-black font-[700] text-[80px] leading-[80px]">2x</h3>
      <p className="text-[#000] text-[20px] lg:text-[24px]  lg:leading-[32px] font-[300]">Schnellere Website-Performance</p>
    </div>

    <div className="flex flex-col items-center gap-2">
      <h3 className="text-black font-[700] text-[80px] leading-[80px]">30%</h3>
      <p className="text-[#000] text-[20px] lg:text-[24px] tracking-tight lg:leading-[32px] font-[300]"> Mehr Leads durch optimierte Websites</p>
    </div>

    <div className="flex flex-col items-center gap-2">
      <h3 className="text-black font-[700] text-[80px] leading-[80px]">100%</h3>
      <p className="text-[#000] text-[20px] lg:text-[24px] lg:leading-[32px] font-[300]">Individuell auf die Bedürfnisse von Startups und KMU</p>
    </div>
  </div>
</section>



      <section className="lg:mt-[300px] mt-[160px] px-4 lg:px-8">
      <h2 class="text-black text-center mb-[40px] lg:text-[40px] font-bold lg:leading-[80px] text-[32px] leading-[48px] md:text-[32px] md:leading-[40px] ">
  Kein Eigenlob – sondern ehrliches Feedback:
</h2>
        
      <div className="flex lg:flex-row flex-col items-center justify-center gap-[58px] self-stretch">
      <div>
      <img 
      src="/images/the-eksperts-googlerec.png" 
      alt="Google Reviews 5 Stars" 
      width={261} 
      height={108} 
      className="object-contain"
    />
    </div>
  <div className="flex items-center">
    <h2 className="text-[128px] font-[300] leading-3  text-[#FFBF00]">5.0</h2>
  </div>
  <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
  <h2 className="lg:text-[32px] text-[20px] lg:leading-[40px] font-[300] text-[#000]">
  Was unsere Kunden sagen:
  </h2>
  <p className="mt-2 text-[#000] text-[16px] lg:text-[20px] lg:leading-[28px] font-[300]">
  Wir sind stolz darauf, das Vertrauen und die Anerkennung unserer<br></br> geschätzten Kunden gewonnen zu haben. Hier sind einige Stimmen zu<br></br> ihrer Erfahrung mit uns.
  </p>
</div>

</div>
<div className="lg:block hidden lg:mt-[50px] lg:grid md:grid-cols-2 gap-10 mt-8 max-w-[1280px]">
  {reviews.map((review, index) => (
    <div
      key={index}
      className="lg:block hidden bg-white p-6 rounded-[10px] flex flex-col gap-2 border-l-8 shadow-custom"
      style={{
        boxShadow: "5px 5px 28.8px 0px rgba(0, 0, 0, 0.10)",
        borderColor: review.color,
        height: index === 1 ? '240px' : index === 3 || index === 5 ? '210px' : 'auto', // Height for 2nd, 4th, and 6th divs
        marginTop: index === 3 ? '-100px' : index === 5 ? '-50px' : '0', // Adjust marginTop for spacing between 4th and 6th divs
      }}
    >  
      
      <div className="flex items-center gap-3">
        {/* Color Circle */}
        <div
          className="w-12 h-12 rounded-full flex-shrink-0"
          style={{ backgroundColor: review.color }}
        ></div>

        {/* Name & Stars */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="text-yellow-500 text-lg">★★★★★</div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700">{review.text}</p>
    </div>
  ))}
</div>
<div className="lg:hidden block lg:mt-[50px] grid md:grid-cols-2 gap-10 mt-8 max-w-[1280px]">
  {reviews.map((review, index) => (
    <div
      key={index}
      className=" bg-white p-6 rounded-[10px] flex flex-col gap-2 border-l-8 shadow-custom"
      style={{
        boxShadow: "5px 5px 28.8px 0px rgba(0, 0, 0, 0.10)",
        borderColor: review.color,
       
      }}
    >  
      
      <div className="flex items-center gap-3">
        {/* Color Circle */}
        <div
          className="w-12 h-12 rounded-full flex-shrink-0"
          style={{ backgroundColor: review.color }}
        ></div>

        {/* Name & Stars */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="text-yellow-500 text-lg">★★★★★</div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700">{review.text}</p>
    </div>
  ))}
</div>


    </section>
      <section className="lg:mt-[300px] mt-[160px] px-4 flex flex-col justify-center items-center gap-2 text-center text-black ">
            {/* Header */}
            <h1 className="lg:block hidden font-matt lg:text-[80px] text-[45px] leading-[50px] font-bold md:leading-[80px]">
            Bereit für den perfekten <br></br> Online-Auftritt Ihrer Firma?
            </h1>
            <h1 className="lg:hidden block font-matt lg:text-[80px] text-[45px] leading-[50px] font-bold lg:leading-[80px]">
            Bereit für den perfekten Online-Auftritt Ihrer Firma?
            </h1>
            
            {/* Body Text */}
            <p className="lg:block hidden font-matt text-[16px] lg:text-[20px] font-light leading-[28px] lg:leading-[33px]">
            Lassen Sie sich nicht von einer langsamen, veralteten oder generischen Website ausbremsen. Wir erstellen<br></br> eine moderne, maßgeschneiderte Website, die Ihr Unternehmen ins Rampenlicht rückt, Kunden gewinnt und<br></br> problemlos mit Ihrem Wachstum skaliert.
                </p>
            <p className="lg:hidden block font-matt text-[16px] lg:text-[20px] font-light leading-[28px] lg:leading-[33px]">
            Lassen Sie sich nicht von einer langsamen, veralteten oder generischen Website ausbremsen. Wir erstellen eine moderne, maßgeschneiderte Website, die Ihr Unternehmen ins Rampenlicht rückt, Kunden gewinnt und problemlos mit Ihrem Wachstum skaliert.             </p>
            {/* Button */}
            <div className="md:mt-[86px] mt-[40px]">
          <button
        onClick={scrollToContactForm}

          className="group relative font-matt flex items-center justify-center px-1 py-1  bg-transparent border-2 border-[#0009FF] text-[#0009FF] rounded-[10px] font-medium text-[20px] transition duration-100 ease-in-out overflow-hidden">
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
            <span className="mx-4 font-matt text-[20px] leading-[20px] font-[300] relative z-20 group-hover:text-white">
              Jetzt kostenloses Angebot einholen
            </span>

            {/* Hover Background Effect */}
            <span className="absolute inset-1 bg-[#0009FF] transition-transform duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100 z-10 rounded-[10px]"></span>
          </button>
            </div>
            </section>

            <section className="max-w-[1280px] lg:mt-[300px] mt-[160px] px-5 lg:px-0 flex justify-center items-center lg:mb-[-15px] mb-[-65px]  md:mb-[-45px]">
                <div className="logotheeksperts flex justify-center items-center w-full lg:w-[1216px] h-[174px]">
                    <img 
                    src="/images/the-eksperts-Group 13.png" 
                    alt="Logo Long 2" 
                    className="h-auto object-contain"
                    />
                </div>
            </section>


      </main>
    </div>
  );
};

export default SalesforceLandingPage;
