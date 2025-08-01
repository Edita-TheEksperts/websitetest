import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";

const BriefPost = () => {
  return (
    <>
      <Head>
        <title>Vom Briefing zum Launch | the eksperts</title>
        <meta name="description" content="Vom Briefing zum Launch." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png"
        />
      </Head>

      <main className="max-w-[1330px] mx-auto p-2 lg:p-8 mb-[100px]">
        {/* Header Section */}

        {/* Post Content Section */}
        <section className="mb-[16px] lg:mb-[40px] text-left">
          <div className="text-left ">
            <h1 className="font-matt text-[30px] lg:text-[80px] leading-[1] font-semibold uppercase text-gray-900 tracking-tight">
              Vom Briefing zum Launch:
            </h1>

            <h2 className="font-matt text-[25px] lg:text-[40px] leading-[1] font-normal text-gray-900 tracking-tight">
              So läuft ein agiles Webprojekt bei the eksperts ab
            </h2>

            <div className="mt-[15px] bg-[#0009FF] rounded-[8px] p-[16px] lg:w-[990px]">
              <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                <span className="font-900">
                  <strong>TL;DR</strong>
                </span>{" "}
                <span className="font-300">(too long; didn't read)</span>
              </h2>
              <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                Agile Prozesse ermöglichen schnelle Ergebnisse, transparente
                Kommunikation und iterative Verbesserung. Bei the eksperts
                durchläuft jedes Webprojekt klar strukturierte Phasen – vom
                ersten Kundenbriefing über Design, Entwicklung bis hin zum
                erfolgreichen Launch.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-10">
            <img
              src="/images/blogVom Briefing zum Launch-the eksperts.svg" // Replace with actual image path
              alt="Kosova"
              className="w-full lg:h-[500px] object-cover rounded-[12px]"
            />
          </div>

          {/* TL;DR */}
          <section className="mb-12 flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="max-w-[800px] flex-1 mb-8 lg:mb-0">
              <p
                className="text-[#0009FF] text-[20px] lg:text-[28px] uppercase font-matt font-[900] mb-[25px]"
                style={{ color: "#0009FF" }}
              >
                Lesedauer: ca. 4-5 Minuten{" "}
              </p>
              <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                Ein neues digitales Projekt startet selten mit Code – sondern
                mit einem Gespräch. Bei the eksperts glauben wir, dass starke
                Ergebnisse nur durch gute Zusammenarbeit entstehen. Darum setzen
                wir bei jedem Projekt – ob Website Entwicklung, App Projekt,
                Salesforce Integration oder CRM-Anpassung – auf agile Prozesse.{" "}
              </p>
            </div>

            {/* Right Content (LESEWERT Box) */}
            <div className="rounded-lg w-full lg:w-[280px] mt-8 lg:mt-[40px] lg:ml-auto">
              <h3 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
                LESENSWERT:
              </h3>
              <ul className="space-y-[12px] list-disc ml-6 text-black font-[300] text-[18px] font-matt">
                <li>
                  <Link
                    href="/blog/der-unterschatzte-boost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    Der unterschätzte Boost
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/briefing-launch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    Vom Briefing zum Launch
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/agile-projektleitung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    Agile Projektleitung
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Why Nearshoring with the Eksperts */}
          <section className="lg:w-[990px] space-y-[30px]">
            <div className="grid grid-cols-1 gap-2">
              {/* Phase 1: Briefing & Zieldefinition */}
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row-reverse rounded-[12px] gap-4">
                {/* Left Column: Title and Paragraph */}
                <div className="flex flex-col justify-center lg:w-[60%]">
                  <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
                    PHASE 1: BRIEFING & ZIELDEFINITION
                  </h2>
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    Gemeinsam mit dem Kunden klären wir: Was ist das Ziel? Wer
                    ist die Zielgruppe? Welche Funktionen sind nötig? Hier legen
                    wir das Fundament für das gesamte Projekt.
                  </p>
                </div>

                {/* Right Column: Image with Background */}
                <div
                  className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase1.png)",
                    backgroundBlendMode: "color, normal",
                  }}
                >
                  <img
                    src="/images/phase1.png" // Replace with actual image path
                    alt="Briefing & Zieldefinition"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {/* Phase 1: Briefing & Zieldefinition */}
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row rounded-[12px]  gap-4">
                {/* Left Column: Title and Paragraph */}
                <div className="flex flex-col justify-center lg:w-[60%]">
                  <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
                    Phase 2: Konzeption & Design
                  </h2>
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    Unsere Experten aus UX/UI Design, Graphic Design und
                    Webdesign erstellen klickbare Prototypen. Feedbackschleifen
                    sorgen dafür, dass alle Ideen visuell greifbar und iterativ
                    verbessert werden.{" "}
                  </p>
                </div>

                {/* Right Column: Image with Background */}
                <div
                  className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase2.png)",
                    backgroundBlendMode: "color, normal",
                  }}
                >
                  <img
                    src="/images/phase2.png" // Replace with actual image path
                    alt="Briefing & Zieldefinition"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {/* Phase 1: Briefing & Zieldefinition */}
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row-reverse rounded-[12px]  gap-4">
                {/* Left Column: Title and Paragraph */}
                <div className="flex flex-col justify-center lg:w-[60%]">
                  <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
                    Phase 3: Agile Umsetzung{" "}
                  </h2>
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    Mit kurzen Sprints und regelmäßigen Check-ins liefern wir
                    sichtbare Ergebnisse – zum Beispiel in der
                    Frontend-Entwicklung, Backend-Logik, Salesforce-Anbindung
                    oder AI-Integration.{" "}
                  </p>
                </div>

                {/* Right Column: Image with Background */}
                <div
                  className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase3.png)",
                    backgroundBlendMode: "color, normal",
                  }}
                >
                  <img
                    src="/images/phase3.png" // Replace with actual image path
                    alt="Briefing & Zieldefinition"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {/* Phase 1: Briefing & Zieldefinition */}
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row rounded-[12px]  gap-4">
                {/* Left Column: Title and Paragraph */}
                <div className="flex flex-col justify-center lg:w-[60%]">
                  <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
                    Phase 4: Testing, Go Live & Support{" "}
                  </h2>
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    Bevor eine Website oder App live geht, prüfen wir alle
                    Funktionen sorgfältig – und begleiten den Launch. Auch
                    danach stehen wir für Wartung, Erweiterungen und Optimierung
                    bereit.{" "}
                  </p>
                </div>

                {/* Right Column: Image with Background */}
                <div
                  className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase4.png)",
                    backgroundBlendMode: "color, normal",
                  }}
                >
                  <img
                    src="/images/phase4.png" // Replace with actual image path
                    alt="Briefing & Zieldefinition"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-12 flex flex-col lg:flex-row justify-left lg:items-center gap-4 lg:gap-8">
            <Link href="/kontakt" passHref legacyBehavior>
              <a
                className="flex justify-center items-center gap-2 py-3 px-8 text-white text-lg font-medium rounded-[60px] bg-[#0009FF] hover:bg-blue-700"
                style={{ width: "299px", padding: "11px 0px" }}
              >
                Kontaktieren Sie Uns
              </a>
            </Link>

            <p className="text-[#000] text-[16px] lg:text-[20px] font-matt font-[300] lg:leading-[33px]">
              Transparenz, Schnelligkeit, Kundennähe – das ist agile
              Projektleitung bei the eksperts{" "}
            </p>
          </section>
        </section>

        {/* Related Posts */}
        <RelatedPostsCarousel />
      </main>
    </>
  );
};

export default BriefPost;
