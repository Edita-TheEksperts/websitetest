import { useEffect, useState } from 'react';
import '../styles/global.css'; 
import Head from 'next/head';

export default function Contact() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    topics: [],
    phone: "",
    datenschutz: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    topic: "",
    datenschutz: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error when user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handle checkbox changes (topics)
  const handleTopicChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      topics: checked
        ? [...prev.topics, value]
        : prev.topics.filter((topic) => topic !== value),
    }));

    if (checked) {
      setErrors({ ...errors, topic: "" });
    }
  };

  // Handle Datenschutzerklärung checkbox
  const handleDatenschutzChange = (e) => {
    setFormData({ ...formData, datenschutz: e.target.checked });

    if (e.target.checked) {
      setErrors({ ...errors, datenschutz: "" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {
      firstName: formData.firstName.trim() === "" ? "Bitte Auswählen." : "",
      lastName: formData.lastName.trim() === "" ? "Bitte Auswählen." : "",
      email: formData.email.trim() === "" ? "Bitte Auswählen." : "",
      message: formData.message.trim() === "" ? "Bitte Auswählen." : "",
      topic: formData.topics.length === 0 ? "Bitte wählen Sie mindestens ein Thema aus." : "",
      datenschutz: !formData.datenschutz ? "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu." : "",
    };

    setErrors(newErrors);

    // Stop submission if there are errors
    if (Object.values(newErrors).some((error) => error !== "")) return;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          topics: [],
          phone: "",
          datenschutz: false,
        });
        setErrors({}); // Clear errors
      } else {
        throw new Error("Es gab ein Problem beim Senden Ihrer Nachricht.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.");
    }
  };
        
        const faqs = [
          {
            question: 'Warum sollte ich mich für the eksperts entscheiden und nicht für andere Anbieter?',
            answer: `Viele Unternehmen – von klein bis gross – vertrauen uns bereits. Wir wissen, dass auch andere Anbieter gute Arbeit leisten, und wünschen unserer Konkurrenz alles Gute.
            Was wir jedoch anders und vor allem besser machen: Hinter jeder Technologie steht immer ein Mensch, der diese bedient, wartet oder verwaltet. Unser Ansatz beginnt genau dort – bei der Person. Wir nehmen uns die Zeit, die Menschen hinter den Projekten zu verstehen, ihre Herausforderungen zu erkennen und gemeinsam Lösungen zu entwickeln, die nicht nur funktionieren, sondern auch nachhaltig sind.`,
          },
          {
            question: 'Wie kann ich ein Projekt mit the eksperts starten?',
            answer: `
              Jedes Projekt beginnt mit einem ersten Gespräch. Dieses können Sie ganz einfach über unsere Website starten: <br />
              • Buchen Sie direkt einen Termin über <a href="https://calendly.com/fisnik-salihu-the-eksperts/30min" target="_blank" class="text-blue-500 hover:underline"> Calendly</a><br />
              • Schreiben Sie uns an <a href="mailto:info@the-eksperts.com" class="text-blue-500 hover:underline">info@the-eksperts.com</a><br />
              • Nutzen Sie unser <a href="/kontakt" class="text-blue-500 hover:underline">Kontaktformular</a><br />
              Unser Ansatz: Ein Projekt beginnt stets mit dem Verstehen und endet mit dem Erklären. Dazwischen arbeiten wir mit vollem Einsatz daran, die bestmögliche Lösung für Ihr Anliegen zu entwickeln und umzusetzen.
            `,
          },
          {
            question: 'Auf welche Branchen/Unternehmen ist the eksperts spezialisiert?',
            answer: `Wir setzen unseren Fokus auf die Menschen, nicht auf bestimmte Branchen oder Unternehmensgrössen.
            Ein Blick auf unsere Homepage zeigt unsere zufriedenen Kunden – aus verschiedensten Branchen und unterschiedlichsten Grössenordnungen. Was all diese Unternehmen verbindet, sind grossartige Menschen, mit denen wir gerne zusammenarbeiten. Unser Ziel ist es, Lösungen zu schaffen, die zu den individuellen Bedürfnissen jedes Kunden passen.`,
          },
          {
            question: 'Wie stellt the eksperts die Qualität und den Erfolg von Projekten sicher?',
            answer: `<div>
              <p style="font-size: 1em; margin-bottom: 5px;">
                Qualität und Erfolg stehen bei uns an erster Stelle.
              </p>
              <p style="font-size: 1em; margin-bottom: 5px;  font-weight: bold;">
                Wir stellen dies sicher, indem wir:
              </p>
              <ul style="list-style-type: square; padding-left: 20px; margin-bottom: 20px;">
                <li>Einen klaren und transparenten Plan für jedes Projekt erstellen.</li>
                <li>Eng mit unseren Kunden zusammenarbeiten, um ihre Bedürfnisse genau zu verstehen.</li>
                <li>Regelmäßige Feedbackschleifen einbauen, um sicherzustellen, dass das Projekt auf Kurs bleibt.</li>
                <li>Am Ende des Projekts sicherstellen, dass der Kunde die Lösung versteht und sie nahtlos in den Alltag integrieren kann.</li>
              </ul>
              <p style="font-size: 1em;">
                <strong>Unsere Philosophie: </strong> Qualität entsteht durch Kommunikation, Innovation und Engagement – und genau das bringen wir in jedes Projekt ein.
              </p>
            </div>
            `,
          },
          {
            question: 'Welche Informationen oder Voraussetzungen muss ich als Kunde mitbringen, um ein Projekt zu starten?',
            answer: `Das Wichtigste ist der Wille zur Veränderung – auch wenn der Weg oder die Lösung noch nicht ganz klar ist. Wir helfen genau in diesen Situationen und entwickeln gemeinsam eine Strategie, die zu Ihren Zielen passt.
            Falls Sie bereits konkrete Anforderungen haben, freuen wir uns, diese mit Ihnen zu prüfen. Wir hinterfragen und challengen die Anforderungen, um sicherzustellen, dass sie technisch umsetzbar und zielführend sind. Sobald alles abgestimmt ist, planen wir den Umsetzungsprozess – stets gemeinsam.
            Unsere wichtigste Voraussetzung: Das Wollen.
            Unser erster Wert ist „Liebe“ – und das gilt für uns genauso wie für unsere Kunden:
            Tu es mit Liebe oder lass es sein.`,
          },
        ];
        

        const toggleFaq = (index) => {
          setFaqOpen((prev) => (prev === index ? null : index));
        };

    return (
      <>
  <Head>
      <title>Kontakt | the eksperts</title>

      {/* Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta 
        name="description" 
        content="Lassen Sie uns gemeinsam über Ihr Projekt sprechen. Hier finden Sie auch die FAQ-Sektion. Wir freuen uns auf Ihre Nachricht!" 
      />
      <meta 
        name="keywords" 
        content="kontakt, IT-Beratung, digitale Transformation, Experten, Projektanfrage, Kontaktformular, FAQ, Beratung" 
      />
      <meta name="author" content="the eksperts" />

      {/* Open Graph (Facebook & LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta 
        property="og:title" 
        content="Kontakt | the eksperts" 
      />
      <meta 
        property="og:description" 
        content="Lassen Sie uns gemeinsam über Ihr Projekt sprechen. Hier finden Sie auch die FAQ-Sektion. Wir freuen uns auf Ihre Nachricht!" 
      />
      <meta 
        property="og:image" 
        content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png" 
      />
      <meta property="og:url" content="https://www.the-eksperts.com/kontakt" />
      <meta property="og:site_name" content="the eksperts" />
      <meta property="og:locale" content="de_DE" />

      {/* LinkedIn Metadata */}
      <meta property="linkedin:site" content="https://www.linkedin.com/company/the-eksperts/" />
      <meta property="linkedin:handle" content="@theeksperts" />
      <meta property="linkedin:cardType" content="summary_large_image" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.the-eksperts.com/kontakt" />


    </Head>
      <div className="bg-white min-h-screen p-4 lg:mt-[50px] text-gray-900 font-matt">
        {/* Contact Form Section */}
              <div className="font-matt flex flex-col lg:flex-row items-top justify-between max-w-[1280px] mx-auto space-y-10 lg:space-y-0 lg:space-x-16">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 space-y-10">
            <h1 className=" text-[45px] lg:text-[80px] lg:block hidden font-[900] text-center lg:text-left lg:font-normal lg:leading-[85px] leading-tight text-black">
              Wir freuen uns auf Ihre Nachricht
            </h1>
            <h1 className="lg:hidden block text-[45px] lg:text-[80px] uppercase font-[900] text-center leading-tight text-black !mt-[100px] !mb-[160px]">
              Wir freuen uns auf Ihre Nachricht
            </h1>
           
            <div className="lg:bg-[#FAFAFA] p-4 rounded-[20px] space-y-4 lg:block hidden">
              <div className="flex items-center space-x-4 ">
                <img
                  src="/images/the-eksperts-FisnikSalihu-theeksperts.png"
                  alt="Fisnik Salihu"
                  className="rounded-full w-20 h-20 object-cover border-2 border-[#0009FF] "
                />
                <h2 className="font-semibold text-xl">
                   Hi, Ich bin Fisnik!
                  Lassen Sie uns gemeinsam
                  über Ihr Projekt sprechen.
                </h2>
              </div>
              <p className=" text-gray-600">
                "Ich stehe dafür, dass unsere Lösungen nicht nur heute funktionieren,
                sondern auch Ihre Zukunft sichern."
              </p>
              <div className="flex flex-row items-start text-center space-x-2">
                {/* Email Link */}
                <a
                  href="mailto:fisnik.salihu@the-eksperts.com"
                  className="text-[#0009FF] hover:underline"
                >
                  Email an Fisnik
                </a>
                
                {/* Separator Text */}
                <p className=" text-gray-600">oder ein</p>
                
                {/* Calendly Link */}
                <a
                  href="https://calendly.com/fisnik-salihu-the-eksperts/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0009FF] hover:underline"
                >
                  Gespräch vereinbaren.
                </a>
              </div>
              </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 lg:bg-[#FAFAFA] px-2 lg:py-4 rounded-[20px] space-y-6">
          {isSubmitted ? (
            <p className="text-black text-center lg:text-right text-[45px] lg:text-[60px] lg:px-4 font-[500] lg:leading-[85px] leading-tight mt-6 flex justify-center items-center w-full">
            Vielen Dank! <br />
            Wir melden uns so schnell <br />
            wie möglich.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name and Unternehmen */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
            <div className="w-full">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-[10px] p-3 focus:border-blue-500 focus:ring-0`}
                placeholder="Ihr Name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}

            </div>
            <div className="w-full">
              <label className="block text-sm font-semibold mb-1">Unternehmen</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-[10px] p-3 focus:border-blue-500 focus:ring-0`}
                placeholder="Ihr Unternehmen"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* E-Mail */}
          <div>
            <label className="block text-sm font-semibold mb-1">E-Mail Adresse</label>
            <input
              type="email"
              name="email"
              value={formData.email}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-[10px] p-3 focus:border-blue-500 focus:ring-0`}
                  placeholder="Ihre E-Mail Adresse"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Betreff oder Thema */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Betreff oder Thema</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="topic"
                  value="Neues Projekt"
                  onChange={handleTopicChange}
                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                />
                <span>Neues Projekt</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="topic"
                  value="Problembehebung"
                  onChange={handleTopicChange}
                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                />
                <span>Problembehebung</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="topic"
                  value="Ressourcen-Erweiterung"
                  onChange={handleTopicChange}
                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                />
                <span>Ressourcen-Erweiterung</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="topic"
                  value="Allgemeine Anfrage"
                  onChange={handleTopicChange}
                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                />
                <span>Allgemeine Anfrage</span>
              </label>
            </div>
            {errors.topic && <p className="text-red-500 text-sm mt-2">{errors.topic}</p>}

          </div>

          {/* Nachricht */}
          <div>
            <label className="block text-sm font-semibold mb-1">Nachricht</label>
            <textarea
              name="message"
              value={formData.message}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-[10px] p-3 focus:border-blue-500 focus:ring-0`}
                  placeholder="z.B. Wir brauchen eine digitale Plattform"
                  rows="4"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Telefonnummer */}
          <div>
            <label className="block text-sm font-semibold mb-1">Telefonnummer</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Ihre Telefonnummer"
              className="w-full border border-gray-300 rounded-[20px] p-4 focus:ring-[#0009FF] focus:border-[#0009FF]"
            />
          </div>

          {/* Datenschutz */}
          <div>
            {errors.datenschutz && <p className="text-red-500 text-sm mb-2">{errors.datenschutz}</p>}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="datenschutz"
                name="datenschutz"
                onChange={handleDatenschutzChange}
                className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
              />
              <label htmlFor="datenschutz" className="text-sm text-gray-700">
                Ich stimme der Verarbeitung meiner Daten gemäss der Datenschutzerklärung zu.
              </label>
            </div>
          </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-[20px] bg-[#0009FF] text-white font-semibold tracking-wide hover:bg-blue-700 transition"
            >
              Senden
            </button>
          </form>
                )}

        </div>
        <div className="lg:bg-[#FAFAFA] p-2 rounded-[20px] space-y-4 lg:hidden block !mt-[160px]">
              <div className="flex items-center space-x-4 ">
                <img
                  src="/images/the-eksperts-FisnikSalihu-theeksperts.png"
                  alt="Fisnik Salihu"
                  className="rounded-full w-20 h-20 object-cover border-2 border-[#0009FF] "
                />
                <h2 className="font-semibold text-xl">
                   Hi, Ich bin Fisnik!
                  Lassen Sie uns gemeinsam
                  über Ihr Projekt sprechen.
                </h2>
              </div>
              <p className=" text-gray-600">
                "Ich stehe dafür, dass unsere Lösungen nicht nur heute funktionieren,
                sondern auch Ihre Zukunft sichern."
              </p>
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Email Link */}
                <a
                  href="mailto:fisnik.salihu@the-eksperts.com"
                  className="text-white text-[20px] leading-[33px] px-[99px] py-3 rounded-full bg-[#0009FF] hover:underline"
                >
                  Email an Fisnik
                </a>
                
                {/* Separator Text */}
                <p className=" text-black text-[20px] leading-[33px] font-300">oder ein</p>
                
                {/* Calendly Link */}
                <a
                  href="https://calendly.com/fisnik-salihu-the-eksperts/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[20px] leading-[33px] px-16 py-3 rounded-full bg-[#0009FF] hover:underline"
                >
                  Gespräch vereinbaren.
                </a>
              </div>
              </div>
      </div>
      


          <div className="max-w-[1280px] mx-auto mt-[160px] lg:mt-[300px]">
            <h2 className="font-matt text-center lg:text-left text-[24px] lg:text-3xl font-[900] lg:font-bold mb-10">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="lg:border-b lg:border-gray-300 p-4 lg:pb-4 bg-[#F1F1F1] lg:bg-transparent rounded-lg">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="font-matt w-full text-left text-[24px] lg:text-lg font-[400] lg:font-semibold focus:outline-none flex justify-between items-center"
                  >
                    {faq.question}
                    <span>{faqOpen === index ? '-' : '+'}</span>
                  </button>
                  {faqOpen === index && (
                    <div
                      className="mt-2 text-gray-600 font-matt"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className=" lg:mt-[300px] font-matt mt-[160px] mb-[160px] lg:mb-[300px]">
            <h2 className="font-matt text-[40px] md:text-4xl font-bold text-center text-gray-800 mb-10 lg:block hidden">
              Kaffee? Hier finden Sie uns!
            </h2>
            <h2 className="font-matt text-[35px] md:text-4xl font-bold text-center text-black mb-4 lg:hidden block">
              Kaffee? <br></br>Hier finden Sie uns!
            </h2>
            
            <div className="font-matt max-w-[1280px] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* Switzerland Section */}
              <a
                      href="https://www.google.com/maps?q=Sonnengartenstrasse+6,+9000+St.+Gallen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
              <div className="font-matt flex flex-col items-center  space-y-4 transition-all duration-300 p-4 rounded-[20px] group">
                {/* Image */}
                <div
                  className="font-matt  w-[290px] h-[250px]"
                  style={{
                    backgroundImage: `url('/images/the-eksperts-Switzerland.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="font-matt  lg:text-center group-hover:text-blue-600 transition-all duration-300">
                  <h3 className="font-matt font-semibold text-lg sm:text-xl">
                      Schweiz
                  </h3>
                  <p className="text-sm md:text-base">Sonnengartenstrasse 6</p>
                  <p className="text-sm md:text-base">9000 St. Gallen</p>
                </div>
              </div>
              </a>
                <a
                        href="https://www.google.com/maps?q=23+Ganimete+T%C3%ABrbeshi,+10000+Prishtin%C3%AB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
              <div className="font-matt flex flex-col items-center space-y-4 transition-all duration-300 p-6 rounded-[20px] group">
                  <div
                    className="font-matt w-[290px] h-[250px]"
                    style={{
                      backgroundImage: `url('/images/the-eksperts-Kosovo.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="font-matt lg:text-center group-hover:text-blue-600 transition-all duration-300">
                    <h3 className="font-matt font-semibold text-lg sm:text-xl">
                        Kosovë
                    </h3>
                    <p className="text-sm md:text-base">23 Ganimete Tërbeshi</p>
                    <p className="text-sm md:text-base">10000 Prishtinë</p>
                  </div>
                  </div>
                  </a>

              {/* Kosovo Section */}
              <a
                      href="mailto:info@the-eksperts.com"
                      className="hover:underline"
                    >
              <div className="font-matt flex flex-col items-center  space-y-4 transition-all duration-300 p-6 rounded-[20px]  group">
                {/* Image */}
                <div
                  className="font-matt w-[290px] h-[250px]"
                  style={{
                    backgroundImage: `url('/images/the-eksperts-digital.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                {/* Text */}
                <div className="font-matt lg:text-center group-hover:text-blue-600 transition-all duration-300">
                  <h3 className="font-matt font-semibold text-lg sm:text-xl">
                   
                      Weltweit
                    
                  </h3>
                  <p className="text-sm md:text-base">info@the-eksperts.com</p>
                  <p className="text-sm md:text-base">Digital</p>
                </div>
              </div>
              </a>
            </div>
          </div>
    </div>
    </>
  );
}
