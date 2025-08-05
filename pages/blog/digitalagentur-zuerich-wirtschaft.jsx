import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";

const DigitalagenturZürich = () => {
  return (
    <>
      <Head>
        <title>
          Digitalagentur Zürich: Ihr Wegbereiter im Zentrum der Schweizer
          Wirtschaft & Technologie | the eksperts
        </title>
        <meta
          name="description"
          content="Professionelles Webdesign in Luzern & Zürich: Nutzen Sie die regionale Stärke für Ihren digitalen Erfolg in der Zentralschweiz – individuell, sichtbar und überzeugend."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png"
        />
      </Head>

      <main className="max-w-[1330px] mx-auto mb-[100px] overflow-x-hidden">
        {/* Header Section */}
        <section className="mb-[16px] text-left px-4 lg:px-0">
          <div className="text-left">
            <h1 className="font-matt text-[26px] sm:text-[40px] lg:text-[50px]  leading-tight font-semibold uppercase text-gray-900 tracking-tight mb-6">
              Digitalagentur Zürich: Ihr Wegbereiter im Zentrum der Schweizer
              Wirtschaft & Technologie
            </h1>
            <h2 className="font-matt text-[25px] lg:text-[34px] leading-[1] font-normal text-gray-900 tracking-tight mb-0 lg:mb-4">
              Massgeschneiderte Online-Lösungen für Ihr Business in Zürich – von
              Webdesign bis App-Entwicklung
            </h2>
            {/* TL;DR + AUCH LESENSWERT */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-6">
              {/* TL;DR BOX */}
              <div className="bg-[#0009FF] rounded-[8px] p-[16px] w-full">
                <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                  <strong>TL;DR</strong>{" "}
                  <span className="font-300">(too long; didn't read)</span>
                </h2>
                <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                  Suchen Sie eine "Digitale Agentur Zürich" oder eine
                  professionelle Webagentur Zürich? Bei the eksperts, zentral
                  gelegen an der berühmten Löwenstrasse in Zürich, bieten wir
                  umfassende digitale Dienstleistungen. Erfahren Sie, wie wir
                  Ihr Business in der Wirtschafts- und Technologiemetropole
                  Schweiz optimal positionieren und entwickeln.
                </p>
              </div>

              {/* AUCH LESENSWERT */}
              <aside className="bg-gradient-to-br from-[#F0F4FF] to-white border border-[#E0E7FF] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[20px] font-matt font-[800] text-[#0009FF] uppercase mb-4">
                  AUCH LESENSWERT
                </h3>
                <ul className="space-y-3 font-matt text-[16px] text-black font-[300] leading-snug">
                  <li>
                    <Link
                      href="/blog/der-unterschatzte-boost"
                      className="hover:text-[#0009FF] hover:underline transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Der unterschätzte Boost
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/briefing-launch"
                      className="hover:text-[#0009FF] hover:underline transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vom Briefing zum Launch
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/agile-projektleitung"
                      className="hover:text-[#0009FF] hover:underline transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agile Projektleitung
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* Zürich Section */}
        <section className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 py-16 lg:py-24 px-4 lg:px-8 flex justify-center overflow-hidden">
          <div className="absolute left-0 top-[50%] -translate-y-1/2 z-0 opacity-30 blur-sm max-w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[300px] lg:w-[500px] max-w-full h-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradSvg)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="gradSvg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              <path d="M21 12a9 9 0 1 0 -9.968 8.948" />
              <path d="M3.6 9h16.8" />
              <path d="M3.6 15h6.4" />
              <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" />
              <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" />
            </svg>
          </div>

          <div className="relative z-10 max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-[40%] flex justify-center">
              <div className="w-[220px] h-[220px] rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-2xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#gradSvg)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 1 0 -9.968 8.948" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h6.4" />
                  <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" />
                  <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" />
                </svg>
              </div>
            </div>

            <div className="w-full lg:w-[60%] bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-8 lg:p-10 text-neutral-900">
              <h2 className="text-[26px] lg:text-[34px] font-bold leading-snug text-blue-900 mb-6">
                Zürich: Das Herz der Schweizer Wirtschaft und Innovation
              </h2>
              <div className="w-[60px] h-[4px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-full mb-6" />

              <p className="text-[16px] lg:text-[20px] font-[300]  lg:leading-[33px] font-matt mb-6">
                Zürich ist unbestreitbar das Zentrum der Schweizer Wirtschaft
                und Technologie. Die Stadt am Limmat ist ein pulsierender Hub
                für Finanz, Start-ups und etablierte Unternehmen, die nach
                innovativen digitalen Lösungen suchen. Um in diesem dynamischen
                und wettbewerbsintensiven Umfeld erfolgreich zu sein, ist eine
                erstklassige Online-Präsenz unerlässlich.
              </p>

              <p className="text-[16px] lg:text-[20px] font-[300]  lg:leading-[33px] font-matt">
                Eine professionelle Website Zürich, ein leistungsfähiger Online
                Shop Zürich oder eine massgeschneiderte App Entwicklung Zürich
                sind der Schlüssel, um Ihre Zielgruppe direkt zu erreichen und
                Ihre Marke wirkungsvoll zu präsentieren.
              </p>
            </div>
          </div>
        </section>
        {/* TL;DR bottom */}
        <section className="py-16 lg:py-24 px-4 lg:px-8">
          <p className="text-[#0009FF] text-[20px] lg:text-[28px] uppercase font-matt font-[900] mb-[25px]">
            Lesedauer: ca. 4 Minuten
          </p>
        </section>

        {/* the eksperts section */}
        <section className="bg-gradient-to-br from-[#f0f6ff] via-white to-[#e6eefc] py-16 lg:py-24 px-4 lg:px-8 flex justify-center">
          <div className="max-w-[1200px] w-full bg-white shadow-2xl rounded-3xl p-10 lg:p-16">
            {/* Header */}
            <div className="flex flex-col items-start mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center shadow-md text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icon-tabler-heart-handshake"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
                    <path d="M12.5 15.5l2 2" />
                    <path d="M15 13l2 2" />
                  </svg>
                </div>
                <h2 className="text-[28px] lg:text-[36px] font-bold text-blue-900 leading-snug">
                  the eksperts: Ihre digitale Heimat an der Löwenstrasse in
                  Zürich
                </h2>
              </div>
              <div className="w-[60px] h-[4px] bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-[16px] lg:text-[20px] font-[300] lg:leading-[33px] font-matt mb-6">
              Unser Büro befindet sich an einer der bekanntesten Adressen
              Zürichs, an der Löwenstrasse 29, nur fünf Gehminuten vom
              Hauptbahnhof entfernt und mit Blick auf den Fluss Sihl. Diese
              zentrale Lage ermöglicht uns, stets nah an den neuesten
              Entwicklungen zu sein und eine erstklassige Anbindung für unsere
              Kunden aus Zürich und der ganzen Schweiz zu bieten.
              <br /> <br /> Als Ihre führende Digitale Agentur Zürich sind wir
              Ihr Partner für eine breite Palette an Dienstleistungen:
            </p>
            {/* Content List */}
            <ul className="text-[16px] lg:text-[20px] font-[300]  text-neutral-800 font-matt tracking-tight space-y-6 list-disc pl-6">
              <li>
                <strong>
                  Strategisches Verständnis für den Zürcher Markt:{" "}
                </strong>
                Wir analysieren die spezifischen Bedürfnisse und Trends im
                Wirtschaftsraum Zürich. So entwickeln wir digitale Strategien,
                die exakt auf Ihre Ziele zugeschnitten sind.
              </li>
              <li>
                <strong>
                  Umfassende Digitale Dienstleistungen in Zürich:{" "}
                </strong>
                <ul className="list-disc pl-6 text-[16px] lg:text-[20px] font-matt space-y-4 mb-6 break-words whitespace-normal">
                  <li>
                    <strong>Webdesign Zürich:</strong> Von der Konzeption bis
                    zur Realisierung Ihrer modernen und ansprechenden Homepage
                    Zürich, die Ihre Marke perfekt widerspiegelt.
                    <Link
                      href="/blog/website-erstellen-schweiz-guide"
                      className="internal-link"
                    >
                      Der ultimative Guide: Website erstellen Schweiz
                    </Link>
                  </li>
                  <li>
                    <strong>Webagentur Zürich Expertise:</strong> Unsere
                    erfahrenen Webdesigner und Entwickler erstellen Websites,
                    die nicht nur optisch überzeugen, sondern auch funktional
                    brillieren.
                  </li>
                  <li>
                    <strong>Online Shop Zürich / Webshop Zürich:</strong> Aufbau
                    und Optimierung von E-Commerce-Plattformen, um Ihre Produkte
                    und Dienstleistungen im Zürcher Markt und darüber hinaus
                    erfolgreich zu verkaufen.
                  </li>
                  <li>
                    <strong>CRM-Lösungen Zürich:</strong> Implementierung und
                    Anpassung von Kundenbeziehungsmanagement-Systemen, um Ihre
                    internen Prozesse effizienter zu gestalten.
                  </li>
                  <li>
                    <strong>App Entwicklung Zürich:</strong> Von der Idee bis
                    zur Markteinführung Ihrer mobilen Anwendung für iOS und
                    Android, die Ihr Business innovativ erweitert.
                  </li>
                  <li>
                    <strong>Digital Marketing Zürich & SEO Zürich:</strong>{" "}
                    Steigern Sie Ihre Sichtbarkeit und Reichweite durch gezielte
                    Marketingkampagnen und Suchmaschinenoptimierung.
                    <Link
                      href="/blog/website-selbststaendige-schweiz"
                      className="internal-link"
                    >
                      Website für Selbständige: Ihr persönlicher
                      Online-Auftritt, der überzeugt
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Persönlicher Austausch:</strong> Ob bei uns im Büro mit
                Blick auf die Sihl, per Video-Call oder direkt bei Ihnen vor Ort
                – wir legen Wert auf eine enge und partnerschaftliche
                Zusammenarbeit.
              </li>
            </ul>
          </div>
        </section>

        {/* White note */}
        <section className="py-8 px-4 lg:px-8">
          <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
            <em>
              [Bildvorschlag: Ein stilvolles Foto des Büros an der Löwenstrasse
              in Zürich, möglicherweise mit Blick auf die Sihl, oder eine
              stilisierte Darstellung der Zürcher Skyline mit digitalen
              Netzwerklinien.]
            </em>
          </p>
        </section>

        {/* Future section */}
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-sky-900 py-16 lg:py-24 px-4 lg:px-8 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl p-10 lg:p-16 text-gray-900">
            <h2 className="text-[28px] lg:text-[36px] font-bold mb-6 text-blue-900">
              Ihre digitale Zukunft beginnt in Zürich
            </h2>
            <div className="w-[60px] h-[4px] bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 rounded-full mb-8" />
            <p className="text-[16px] font-[300]  lg:text-[20px] font-matt lg:leading-[33px] mb-6">
              Unser Fokus liegt darauf, digitale Lösungen zu schaffen, die nicht
              nur beeindrucken, sondern auch messbare Ergebnisse für Ihr
              Business in Zürich liefern:
            </p>
            <ul className="list-disc pl-6 text-[16px] font-[300]  lg:text-[20px] font-matt space-y-4 mb-6">
              <li>
                <strong className="text-blue-700">
                  Exzellentes Webdesign:
                </strong>{" "}
                Ein professionelles und ästhetisches Design, das Ihre Marke
                optimal repräsentiert und Vertrauen schafft.
                <Link
                  href="/blog/moderne-business-website-design-trends"
                  className="internal-link"
                >
                  Moderne Business-Website: Design-Trends, die Ihr Schweizer
                  Unternehmen 2025
                </Link>
              </li>
              <li>
                <strong className="text-blue-700">
                  Optimale Benutzererfahrung (UX):
                </strong>{" "}
                Intuitive Navigation und klare Call-to-Actions, die Besucher
                schnell zu den gewünschten Informationen oder zur
                Kontaktaufnahme führen.
                <Link
                  href="/blog/ux-ui-design-website-kundenbindung"
                  className="internal-link"
                >
                  UX/UI Design Website: Wie eine gute User Experience Ihre
                  Kunden bindet
                </Link>
              </li>
              <li>
                <strong className="text-blue-700">
                  Performance & Mobiloptimierung:
                </strong>{" "}
                Eine schnelle und auf allen Geräten perfekt funktionierende
                Website ist in Zürich unerlässlich.
                <Link
                  href="/blog/mobile-first-website-schweiz"
                  className="internal-link"
                >
                  Mobile First Website Schweiz: Der Schlüssel zum Erfolg im
                  Zeitalter des Smartphone
                </Link>
              </li>
            </ul>
            <div className="text-center mt-10">
              <a className="bg-blue-800 hover:bg-blue-700 text-white font-matt text-[14px] lg:text-[18px] px-6 py-3 rounded-full shadow-md transition duration-300 break-words whitespace-normal text-center block w-full sm:w-auto">
                Sprechen Sie mit den Eksperts in Zürich – Jetzt kostenlose
                Beratung für Ihr digitales Projekt anfordern!
              </a>
            </div>
          </div>
        </section>

        {/* Fazit */}
        <section className="w-full px-4 lg:px-8 py-16 lg:py-24 flex justify-center">
          <div className="max-w-[900px] w-full text-center">
            <div className="w-[60px] h-[4px] bg-[#0009FF] mx-auto mb-6 rounded-full"></div>
            <h2 className="text-[24px] lg:text-[32px] font-matt font-[800] text-black mb-6">
              Fazit: Mit the eksperts digital durchstarten in Zürich
            </h2>
            <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
              Für einen erfolgreichen Online-Auftritt im Kanton Zürich ist ein
              Partner entscheidend, der sowohl technisches Know-how als auch ein
              tiefes Verständnis für die dynamische Wirtschaftsmetropole
              mitbringt. Wir von the eksperts sind Ihre digitale Agentur Zürich,
              die Ihnen hilft, eine Präsenz zu schaffen, die Ihr Business
              nachhaltig stärkt und Sie an die Spitze der digitalen Entwicklung
              führt.
            </p>
            <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mt-6 text-center">
              <strong>
                Erfahren Sie mehr über unsere umfassenden Dienstleistungen für
                Ihr Unternehmen in Zürich auf
              </strong>
              <a
                href="https://the-eksperts.com/website-schweiz"
                className="text-blue-600 underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                the-eksperts.com/website-schweiz
              </a>
              .
            </p>
          </div>
        </section>

        {/* Related Posts */}
        <RelatedPostsCarousel />
      </main>
    </>
  );
};

export default DigitalagenturZürich;
