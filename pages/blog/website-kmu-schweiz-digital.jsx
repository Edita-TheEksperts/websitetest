import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";

const KMUWebsitePost = () => {
  return (
    <>
      <Head>
        <title>
          Website für KMU Schweiz: So stärken Sie Ihr kleines oder mittleres
          Unternehmen digital | the eksperts
        </title>
        <meta
          name="description"
          content="Digitale Sichtbarkeit für KMU: So hilft Ihnen eine Website, Ihr Unternehmen in der Schweiz zu stärken."
        />
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

          <h1 className="font-matt text-[30px] lg:text-[55px] leading-[1] font-semibold uppercase text-gray-900 tracking-tight">
          Website für KMU Schweiz: So stärken Sie Ihr kleines oder mittleres
          Unternehmen digital
            </h1>

            <h2 className="font-matt text-[25px] lg:text-[37px] leading-[1] font-normal text-gray-900 tracking-tight">
            Wie eine strategisch aufgebaute Website Ihr Schweizer KMU zu mehr
            Sichtbarkeit, Kunden und Effizienz verhilft.
            </h2>

              <h2 className="hidden lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]">
              Wie eine strategisch aufgebaute Website Ihr Schweizer KMU zu mehr
              Sichtbarkeit, Kunden und Effizienz verhilft.
            </h2>

            {/* TL;DR + LESENSWERT colons*/}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 mt-4">
              {/* TL;DR BOX*/}
              <div className="bg-[#0009FF] rounded-[8px] p-[16px] lg:w-full">
                <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                  <strong>TL;DR</strong>{" "}
                  <span className="font-300">(too long; didn't read)</span>
                </h2>
                <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                  Für Coiffeure und Friseure in der Schweiz ist eine
                  professionelle Website für Coiffeur / Friseur ein
                  Game-Changer. Erfahren Sie, welche Funktionen Ihre Website
                  haben muss, um Kunden zu überzeugen, wie Sie sich von der
                  Konkurrenz abheben und warum auch eine Barber Website Schweiz
                  oder eine Webseite für Kosmetikstudio von einer starken
                  Online-Präsenz profitiert.
                </p>
              </div>

              {/* LESENSWERT */}
              <aside className="bg-gradient-to-br from-[#F0F4FF] to-white border border-[#E0E7FF] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[20px] font-matt font-[800] text-[#0009FF] uppercase mb-4">
                  AUCH LESENSWERT
                </h3>
                <ul className="space-y-3 font-matt text-[16px] text-black font-[300] leading-snug">
                  <li>
                    <a
                      href="/blog/der-unterschatzte-boost"
                      className="hover:text-[#0009FF] hover:underline transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Der unterschätzte Boost
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/salesforce-berater-unterscheidung"
                      className="hover:text-[#0009FF] hover:underline transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Salesforce Berater Unterscheidung
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/agile-projektleitung"
                      className="hover:text-[#0009FF] hover:underline transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agile Projektleitung
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-10">
            <img
              src=  "/images/blog2-the eksperts.svg"
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
                Lesedauer: ca. 4 Minuten{" "}
              </p>
              <h2 className="text-[28px] font-matt font-[900] text-black mb-6 uppercase">
                Warum jedes Schweizer KMU eine starke Website braucht{" "}
              </h2>
              <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                Kleine und mittlere Unternehmen (KMU) bilden das Rückgrat der
                Schweizer Wirtschaft. Doch auch in diesem Sektor ist der
                Wettbewerb hart, und die Erwartungen der Kunden steigen. Eine
                professionelle Website ist längst keine Option mehr, sondern
                eine Notwendigkeit. Sie ist Ihre digitale Filiale, die 24/7
                geöffnet hat und potenzielle Kunden erreicht, die offline
                vielleicht nie auf Sie aufmerksam werden würden.
              </p>{" "}
            </div>
          </section>

          {/* Why Nearshoring with the Eksperts */}
          <section className="lg:w-[990px] space-y-[30px]">
            <h3 className="text-[28px] font-matt font-[900] text-black  uppercase">
              Eine strategisch aufgebaute KMU Website Schweiz ermöglicht es
              Ihnen:{" "}
            </h3>

            <div className="grid grid-cols-1 gap-2">
              {/* Phase 1: Briefing & Zieldefinition */}
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row-reverse rounded-[12px] gap-4">
                {/* Left Column: Title and Paragraph */}
                <div className="flex flex-col justify-center lg:w-[60%]">
                  <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
                    Sichtbarkeit zu erhöhen:
                  </h2>
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    Werden Sie in Suchmaschinen gefunden, wenn potenzielle
                    Kunden nach Ihren Produkten oder Dienstleistungen suchen.
                  </p>{" "}
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
                    src="/images/ai1.png" // Replace with actual image path
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
                    Vertrauen aufzubauen:
                  </h2>
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    Zeigen Sie Ihre Professionalität, Referenzen und Expertise.{" "}
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
                    src="/images/ai2.png" // Replace with actual image path
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
                    Kunden zu gewinnen:{" "}
                  </h2>
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    Konvertieren Sie Besucher in Leads und Leads in zahlende
                    Kunden.{" "}
                  </p>{" "}
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
                    src="/images/ai3.png" // Replace with actual image path
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
                    Effizienz zu steigern:{" "}
                  </h2>
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    Automatisieren Sie Prozesse wie Terminbuchungen oder
                    Informationsanfragen.{" "}
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
                    src="/images/ai4.png" // Replace with actual image path
                    alt="Briefing & Zieldefinition"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 ">
            <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
              Eine Website für KMU erstellen: Was zählt wirklich?{" "}
            </h2>
            <section className="mt-12 flex flex-col lg:flex-row gap-[30px]">
              {/* Text Section */}
              <div className="lg:w-[40%]">
                <img
                  src="/images/ai5.png" // Replace with actual image path
                  alt="Vorteile für Unternehmen"
                  className="w-full lg:h-[458px] object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-[50%] mb-8 lg:mb-0">
                {/* Image Section */}

                <ul className="list-disc ml-6 space-y-6 text-black font-[300] text-[16px] lg:text-[20px] lg:leading-[33px] font-matt">
                  <li>
                    <strong> Klarheit und Benutzerfreundlichkeit: </strong> Ihre
                    Kunden müssen schnell verstehen, was Sie anbieten und wie
                    sie mit Ihnen in Kontakt treten können.{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Mobile Optimierung:</strong> Die Mehrheit der Nutzer
                    surft heute mobil. Ihre Website muss auf Smartphones und
                    Tablets perfekt aussehen und funktionieren.
                    <Link
                      href="/blog/mobile-first-website-schweiz"
                      className="internal-link"
                    >
                      <br /> Mobile First Website Schweiz: Der Schlüssel zum
                      Erfolg im Zeitalter des Smartphones{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <strong>SEO-Freundlichkeit:</strong> Eine Website, die nicht
                    gefunden wird, ist nutzlos. Sorgen Sie dafür, dass Ihr
                    Webauftritt für Suchmaschinen optimiert ist. (Interne
                    Verlinkung zu
                    <Link
                      href="/blog/seo-website-erstellen-schweiz"
                      className="internal-link"
                    >
                      <br /> SEO-optimierte Website erstellen lassen: Ihr Weg zu
                      mehr Sichtbarkeit in der Schweiz
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <strong>Sicherheit und Wartung:</strong> Eine sichere und
                    regelmässig gewartete Website schützt Ihre Daten und die
                    Ihrer Kunden.{" "}
                  </li>
                </ul>
              </div>
            </section>
          </section>
          {/* Call to Action */}
          <section className="mt-12 flex flex-col lg:flex-row justify-left lg:items-center gap-4 lg:gap-8">
            <Link href="/kontakt" passHref legacyBehavior>
              <a
                className="flex justify-center items-center gap-2 py-3 px-8 text-white text-lg font-medium rounded-[60px] bg-[#0009FF] hover:bg-blue-700 transition duration-300"
                style={{ width: "299px", padding: "11px 0px" }}
              >
                Kontaktieren Sie Uns
              </a>
            </Link>

            <p className="text-[#000] text-[16px] lg:text-[18px] font-matt font-[300] lg:leading-[33px]">
              [Bildvorschlag: Eine Grafik, die typische Vorteile einer
              KMU-Website darstellt (z.B. "Mehr Kunden", "24/7 Präsenz",
              "Professionelles Image").]{" "}
            </p>
          </section>
        </section>

        <div className="mb-12 lg:w-[905px]">
          <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase mt-10">
            Die richtige digitale Lösung für KMU Schweiz finden
          </h2>

          <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mb-4">
            Es gibt unzählige Anbieter und Plattformen, um eine{" "}
            <strong>digitale Lösung für KMU Schweiz</strong> zu realisieren. Von
            einfachen Baukastensystemen bis hin zu massgeschneiderten
            Entwicklungen
            <Link
              href="/blog/website-selbst-oder-agentur"
              className="internal-link"
            >
              <br /> Website selbst erstellen oder Agentur beauftragen? Der
              grosse Vergleich für Ihr Schweizer Business
            </Link>
            . Für die meisten KMU ist eine professionelle{" "}
            <strong>KMU Webdesign Agentur</strong> die beste Wahl. Eine Agentur
            wie <strong>the eksperts</strong> versteht die spezifischen
            Anforderungen von KMU und bietet:{" "}
          </p>
          <br />
          <ul className="list-disc ml-6 text-black text-[16px] lg:text-[20px] font-[300] font-matt space-y-3">
            <li>
              <strong>Individuelle Beratung:</strong> Wir hören Ihnen zu und
              entwickeln eine Lösung, die exakt zu Ihrem Geschäftsmodell passt.
            </li>
            <li>
              <strong>Professionelles Design:</strong> Ein Design, das Ihre
              Marke widerspiegelt und Ihre Zielgruppe anspricht.
            </li>
            <li>
              <strong>Funktionale Umsetzung:</strong> Ob Online-Shop,
              Kontaktformular oder Terminbuchung – wir implementieren die
              Funktionen, die Sie wirklich brauchen.
            </li>
            <li>
              <strong>Nachhaltige Betreuung: </strong> Auch nach dem Launch sind
              wir für Sie da
            </li>
          </ul>
          <br />
          <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mb-4">
            <br /> Eine Investition in eine hochwertige Website ist eine
            Investition in die Zukunft Ihres Unternehmens. Sie verschafft Ihnen
            einen entscheidenden Wettbewerbsvorteil und öffnet Türen zu neuen
            Geschäftsmöglichkeiten.{" "}
          </p>
          <br />
          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center gap-2 text-[#0009FF] text-lg font-matt font-[900] hover:underline transition  mt-100 duration-300"
          >
            Jetzt kostenlose Beratung anfragen
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <div className="lg:w-full h-[298px] mt-6">
            <img
              src="/images/Rectangle 259.png"
              alt="Agile for digital projects"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
            Häufige Fragen von Schweizer KMU zur Website-Erstellung{" "}
          </h2>

          <ul className="list-disc space-y-2 ml-6 text-black font-[300] text-[16px] lg:text-[20px] font-matt">
            <li>
              <strong>
                Welche Inhalte sind für eine KMU-Website am wichtigsten?{" "}
              </strong>
              Neben Ihren Dienstleistungen und Produkten sind vor allem
              Kontaktinformationen, Referenzen/Testimonials und eine klare "Über
              uns"-Seite entscheidend.{" "}
            </li>
            <li>
              <strong>
                Ist eine Website auch für sehr kleine KMU sinnvoll?
              </strong>
              Ja, absolut! Selbst für Einzelunternehmen und Kleinstbetriebe
              bietet eine professionelle Online-Präsenz grosse Vorteile in Bezug
              auf Vertrauensbildung und Reichweite.{" "}
            </li>
            <li>
              <strong>Wie integriere ich Social Media? </strong>Ihre Website
              sollte nahtlos mit Ihren Social-Media-Kanälen verbunden sein, um
              eine kohärente Online-Präsenz zu schaffen.{" "}
            </li>
          </ul>
          <div className="mt-8 bg-[#0009FF] text-white p-6 rounded-lg text-center space-y-3">
            <p className="text-xl font-matt font-[700]">
              Lassen Sie uns über Ihre KMU Website sprechen!
            </p>
            <p className="text-lg font-matt font-[400]">
              Jetzt kostenlose Beratung anfragen
            </p>

            {/* Butoni me distancë sipër */}
            <div className="mt-8">
              <Link href="/kontakt" passHref legacyBehavior>
                <a className="bg-white text-[#0009FF] font-matt font-[900] text-lg px-6 py-3 rounded-[50px] hover:bg-gray-100 transition duration-300">
                  Beratung anfragen
                </a>
              </Link>
            </div>
          </div>

          <br />
        </div>
        {/* Related Posts */}

        <RelatedPostsCarousel />
      </main>
    </>
  );
};

export default KMUWebsitePost;
