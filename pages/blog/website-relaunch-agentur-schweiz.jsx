import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";
import LesenswertBox from "../../components/LesenswertBox";


const WebsiteRelaunch = () => {
  return (
    <>
      <Head>
        <title>
          Website-Relaunch Agentur Schweiz: Frischer Wind für Ihre bestehende
          Online-Präsenz | the eksperts
        </title>
        <meta
          name="description"
          content="Verleihen Sie Ihrer bestehenden Website neuen Schwung mit einem professionellen Relaunch. Unsere Agentur in der Schweiz optimiert Design, Technik und SEO für mehr Erfolg im Netz."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png"
        />
      </Head>

      <main className="max-w-[1330px] mx-auto p-2 lg:p-8 mb-[100px]">
        {/* Header Section */}
        <section className="mb-[16px] text-left">
          <div className="text-left ">
            <h1 className="font-matt text-[30px] sm:text-[40px] lg:text-[53px] leading-tight font-semibold uppercase text-gray-900 tracking-tight mb-6">
              Website-Relaunch Agentur Schweiz: Frischer Wind für Ihre
              bestehende Online-Präsenz
            </h1>

            <h2 className="font-matt text-[25px] lg:text-[37px] leading-[1] font-normal text-gray-900 mb-5 tracking-tight">
              Wann es Zeit für einen Neustart ist und wie ein professioneller
              Relaunch Ihr Unternehmen digital stärkt.
            </h2>
            <h2 className="hidden lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]">
              Wann es Zeit für einen Neustart ist und wie ein professioneller
              Relaunch Ihr Unternehmen digital stärkt.
            </h2>
            {/* TL;DR + LESENSWERT columns */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-5 mb-5 items-stretch">
              {/* TL;DR BOX */}
              <div className="bg-[#0009FF] rounded-[8px] p-[16px] lg:w-full h-full flex flex-col">
                <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                  <strong>TL;DR</strong>{" "}
                  <span className="font-300">(too long; didn't read)</span>
                </h2>
                <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                  Ist es Zeit für einen Website-Relaunch Agentur Schweiz?
                  Erfahren Sie, wann ein Neustart Ihrer Online-Präsenz sinnvoll
                  ist, welche Vorteile ein professioneller Relaunch bietet und
                  wie eine erfahrene Website erstellen lassen Agentur Sie dabei
                  unterstützt, Ihre Marke zu aktualisieren und Ihre digitalen
                  Ziele neu zu definieren.
                </p>
              </div>

              {/* LESENSWERT */}
         <LesenswertBox currentSlug="website-relaunch-agentur-schweiz" />
            </div>
          </div>
        </section>
        {/* TL;DR */}
        <section className="mb-12 flex flex-col lg:flex-row mt-4">
          {/* Left Content */}
          <div className="max-w-[800px] flex-1 lg:mb-0">
            <p
              className="text-[#0009FF] text-[20px] lg:text-[28px] uppercase font-matt font-[900] mb-[25px]"
              style={{ color: "#0009FF" }}
            >
              Lesedauer: ca. 4 Minuten
            </p>
          </div>
        </section>
        <section className="bg-gradient-to-br from-white via-[#f4f8ff] to-[#e9f1fd] py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-matt font-bold text-blue-900 mb-6">
                Ist Ihre Website noch auf dem neuesten Stand?
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>
              <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] mb-6">
                Das Internet entwickelt sich rasant. Was gestern noch topmodern
                war, kann heute bereits veraltet wirken. Für viele Unternehmen
                in der Schweiz stellt sich irgendwann die Frage: Ist unsere
                Website noch zeitgemäss? Erfüllt sie noch unsere Geschäftsziele?
                Wenn Sie das Gefühl haben, dass Ihre Online-Präsenz stagniert
                oder sogar kontraproduktiv wirkt, könnte es Zeit für einen
                Website-Relaunch.
              </p>
              <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                Ein Relaunch ist mehr als nur ein neues Design. Es ist eine
                strategische Neuausrichtung Ihrer gesamten digitalen Präsenz, um
                aktuelle Standards zu erfüllen und neue Geschäftsziele zu
                erreichen.
              </p>
            </div>

            {/* Image */}
            <div data-aos="fade-left" className="w-full flex justify-center">
              <img
                src="/images/website-relaunch-hero.jpg"
                alt="Website Relaunch Illustration"
                className="w-full max-w-[500px] rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#f8faff] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-[28px] lg:text-[36px] font-matt font-bold text-blue-900 text-center mb-4">
              Anzeichen, dass ein Website-Relaunch notwendig ist
            </h2>
            <p className="ext-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
              Wann sollten Sie über eine Website-Relaunch Agentur Schweiz
              nachdenken?
            </p>
            <div className="w-[60px] h-[4px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12 rounded-full" />

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card */}
              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-semibold font-matt text-blue-800 mb-2">
                  Veraltetes Design
                </h3>
                <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                  Ihre Website sieht nicht mehr modern aus und spiegelt Ihr
                  aktuelles Branding nicht wider.
                  <Link
                    href="/blog/moderne-business-website-design-trends"
                    className="internal-link"
                  >
                    Moderne Business-Website: Design-Trends, die Ihr Schweizer
                    Unternehmen 2025 braucht{" "}
                  </Link>{" "}
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-semibold font-matt text-blue-800 mb-2">
                  Schlechte Usability (UX)
                </h3>
                <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                  Besucher finden sich nicht zurecht, Navigation unklar oder
                  Ladezeiten zu lang.
                  <Link
                    href="/blog/ux-ui-design-website-kundenbindung"
                    className="internal-link"
                  >
                    UX/UI Design Website: Wie eine gute User Experience Ihre
                    Kunden bindet{" "}
                  </Link>{" "}
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-semibold font-matt text-blue-800 mb-2">
                  Nicht mobilfreundlich
                </h3>
                <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                  Funktioniert auf Smartphones/Tablets nicht optimal. Google
                  straft dies ab.
                  <Link
                    href="/blog/mobile-first-website-schweiz"
                    className="internal-link"
                  >
                    Mobile First Website Schweiz: Der Schlüssel zum Erfolg im
                    Zeitalter des Smartphones{" "}
                  </Link>
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-semibold font-matt text-blue-800 mb-2">
                  Schlechte Performance (SEO)
                </h3>
                <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                  Ihre Website wird nicht gefunden oder verliert Rankings.
                  <Link
                    href="/blog/seo-website-erstellen-schweiz"
                    className="internal-link"
                  >
                    SEO-optimierte Website erstellen lassen: Ihr Weg zu mehr
                    Sichtbarkeit in der Schweiz{" "}
                  </Link>
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-semibold font-matt text-blue-800 mb-2">
                  Fehlende Funktionalitäten
                </h3>
                <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                  Benötigen Sie neue Features wie Online-Shop oder
                  Terminbuchung? Dann ist Ihre Website nicht mehr ausreichend.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-semibold font-matt text-blue-800 mb-2">
                  Komplizierte Wartung
                </h3>
                <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                  Das Aktualisieren von Inhalten ist umständlich oder erfordert
                  Programmierkenntnisse.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-matt font-semibold text-blue-800 mb-2">
                  Sicherheitslücken
                </h3>
                <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                  Ihre Website ist anfällig für Hackerangriffe oder Malware –
                  ein echtes Risiko.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
                <h3 className="text-lg  font-matt font-semibold text-blue-800 mb-2">
                  Markenneuausrichtung
                </h3>
                <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                  Ihre Strategie, Ihr Logo oder Ihre Kernbotschaft haben sich
                  verändert – Ihre Website muss folgen.
                </p>
              </div>
            </div>
          </div>
        </section>
        <p className="text-black font-[300] text-[17px] lg:text-[17px] font-matt">
          <em>
            [Bildvorschlag: Eine Illustration einer selbständigen Person (z.B.
            ein Freelancer mit Laptop und Ideenblase) vor einer stilisierten
            Website.]
          </em>{" "}
        </p>

        <section className="relative bg-gradient-to-tr from-blue-50 via-white to-cyan-50 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-matt font-extrabold text-blue-900 mb-4">
              Die Vorteile eines professionellen Website-Relaunchs
            </h2>
            <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
              Ein gut geplanter Relaunch durch eine erfahrene Website erstellen
              lassen Agentur bringt zahlreiche Vorteile mit sich:{" "}
            </p>
            <div className="w-16 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6 font-matt">
            {[
              {
                title: "Verbessertes Markenimage",
                text: "Eine moderne Website stärkt Ihre Glaubwürdigkeit und Professionalität. ",
                icon: "⭐",
              },
              {
                title: "Höhere Conversion Rates",
                text: (
                  <>
                    Eine optimierte Nutzerführung und klare Call-to-Actions
                    führen zu mehr Anfragen und Verkäufen{" "}
                    <Link
                      href="/blog/landing-page-erstellen-schweiz"
                      className="internal-link"
                    >
                      Landing Page erstellen Schweiz: So generieren Sie mehr
                      Leads und Verkäufe{" "}
                    </Link>
                  </>
                ),
                icon: "🚀",
              },
              {
                title: "Bessere Sichtbarkeit",
                text: "Ein SEO-optimierter Relaunch verbessert Ihre Position in den Suchmaschinen und generiert mehr organischen Traffic.",
                icon: "📈",
              },
              {
                title: "Optimierte Performance",
                text: "Schnellere Ladezeiten und eine technische Basis auf dem neuesten Stand. ",
                icon: "⚙️",
              },
              {
                title: "Zukunftssicherheit",
                text: " Ihre Website ist für zukünftige Entwicklungen und Erweiterungen gerüstet. ",
                icon: "🔮",
              },
              {
                title: "Einfachere Verwaltung",
                text: (
                  <>
                    Oft wird im Rahmen eines Relaunchs auf ein moderneres CMS
                    wie WordPress{" "}
                    <Link
                      href="/blog/wordpress-website-schweiz"
                      className="internal-link"
                    >
                      WordPress Website Schweiz: Warum die meistgenutzte
                      Plattform auch für Sie die Richtige sein könnte{" "}
                    </Link>
                    umgestellt, was die Pflege erleichtert.{" "}
                  </>
                ),
                icon: "🧩",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Relaunch-Prozess */}
          <div className="max-w-6xl mx-auto mt-20">
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Der Relaunch-Prozess mit the eksperts
            </h3>
            <div className="bg-white/90 p-6 rounded-2xl shadow-3xl">
              <ol className="list-decimal list-inside space-y-4 font-matt [&>li>strong]:font-matt">
                <li className="text-[18px] lg:text-[18px] text-black font-matt font-[300] leading-[1.8]">
                  <strong>Analyse & Strategie:</strong> Zielgruppenanalyse,
                  Ziele & Audits. Wir analysieren Ihre aktuelle Website, Ihre
                  Ziele und Ihre Zielgruppe. Wireframes & Design nach
                  Markenidentität.
                </li>
                <li className="text-[18px] lg:text-[18px] text-black font-matt font-[300] leading-[1.8]">
                  <strong>Konzept & Design:</strong> Entwicklung eines neuen
                  Website-Konzepts, Wireframes und Designs, die Ihre Marke
                  widerspiegeln.
                </li>
                <li className="text-[18px] lg:text-[18px] text-black font-matt font-[300] leading-[1.8]">
                  <strong>Technische Umsetzung:</strong> Programmierung der
                  neuen Website, Migration von Inhalten und Datenbanken.
                </li>
                <li className="text-[18px] lg:text-[18px] text-black font-matt font-[300] leading-[1.8]">
                  <strong>SEO-Migration:</strong> Sicherstellung, dass
                  bestehende Rankings nicht verloren gehen und die neue Website
                  von Anfang an gut gefunden wird.
                </li>
                <li className="text-[18px] lg:text-[18px] text-black font-matt font-[300] leading-[1.8]">
                  <strong>Testphase:</strong> Gründliche Tests auf allen Geräten
                  und Browsern.
                </li>
                <li className="text-[18px] lg:text-[18px] text-black font-matt font-[300] leading-[1.8]">
                  <strong>Launch & Monitoring:</strong> Go-Live und
                  kontinuierliche Überwachung der Performance.
                </li>
              </ol>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/kontakt"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-md transition duration-300"
            >
              Jetzt kostenlose Beratung für Ihren Relaunch anfordern
            </a>
          </div>
        </section>

        <section className="w-full px-4 py-[60px] flex justify-center">
          <div className="max-w-[900px] w-full text-center">
            <div className="w-[60px] h-[4px] bg-[#0009FF] mx-auto mb-6 rounded-full"></div>

            <h2 className="text-[24px] lg:text-[32px] font-matt font-[800] text-black mb-6">
              Fazit: Investieren Sie in die Zukunft Ihrer Online-Präsenz
            </h2>

            <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
              Ein Website-Relaunch ist eine strategische Investition, die sich
              langfristig auszahlt. Er ermöglicht es Ihnen, Ihre digitale
              Präsenz zu modernisieren, Ihre Ziele effektiver zu erreichen und
              im Wettbewerb bestehen zu können. Vertrauen Sie auf eine erfahrene
              Agentur, die Sie sicher durch diesen Prozess führt.
            </p>
            <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mt-6 text-center">
              <strong>Erfahren Sie auf</strong>
              <a
                href="https://the-eksperts.com/website-schweiz"
                className="text-blue-600 underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                the-eksperts.com/website-schweiz
              </a>
              ,{" "}
              <strong>
                wie the eksperts Ihren Website-Relaunch zum Erfolg führt
              </strong>
            </p>
          </div>
        </section>
        {/* Related Posts */}

        <RelatedPostsCarousel />
      </main>
    </>
  );
};

export default WebsiteRelaunch;
