import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";

const LandingPageLeadsCH = () => {
  return (
    <>
      <Head>
        <title>
          Landing Page erstellen Schweiz: So generieren Sie mehr Leads und
          Verkäufe | the eksperts
        </title>
        <meta
          name="description"
          content="Mit der richtigen Landing Page steigern Sie Ihre Conversions in der Schweiz. So gewinnen Sie mehr Kunden und erhöhen Ihren Umsatz nachhaltig."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png"
        />
      </Head>

      <main className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[100px]">
        {/* Header Section */}
        <section className="mb-[16px] text-left">
          <div className="text-left ">
            <h1 className="font-matt text-[26px] sm:text-[40px] lg:text-[50px]  leading-tight font-semibold uppercase text-gray-900 tracking-tight mb-6">
              Landing Page erstellen Schweiz: So generieren Sie mehr Leads und
              Verkäufe
            </h1>

            <h2 className="font-matt text-[22px] lg:text-[34px] leading-[1] font-normal text-gray-900 tracking-tight mb-0 lg:mb-4">
              Der ultimative Leitfaden für effektive Zielseiten – von der
              Struktur bis zur Conversion-Optimierung.
            </h2>
            <h2 className="hidden lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]">
              Der ultimative Leitfaden für effektive Zielseiten – von der
              Struktur bis zur Conversion-Optimierung.
            </h2>
            {/* TL;DR + LESENSWERT colons*/}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
              {/* TL;DR BOX*/}
              <div className="bg-[#0009FF] rounded-[8px] p-[16px] lg:w-full mt-5">
                <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                  <strong>TL;DR</strong>{" "}
                  <span className="font-300">(too long; didn't read)</span>
                </h2>
                <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                  Eine Landing Page erstellen Schweiz ist der Schlüssel, um
                  spezifische Marketingziele zu erreichen und Leads oder
                  Verkäufe zu generieren. Erfahren Sie, wie eine effektive
                  Landing Page aufgebaut ist, wie funktioniert eine Landing
                  Page, und warum auch ein Onepager erstellen Schweiz in
                  bestimmten Fällen als Landing Page dienen kann, um Ihre
                  Conversion-Rate zu maximieren.
                </p>
              </div>

              {/* LESENSWERT */}
              <aside className="bg-gradient-to-br from-[#F0F4FF] to-white border border-[#E0E7FF] p-6 rounded-2xl mt-5 shadow-sm">
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
                      href="/blog/briefing-launch"
                      className="hover:text-[#0009FF] hover:underline transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vom Briefing zum Launch
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

        {/* Post Content Section */}
        <section>
          <div className="mb-10">
            <img
              src="/images/blog13-the eksperts.svg"
              alt="Agile Projektleitung"
              className="w-full lg:h-[500px] object-cover rounded-[12px]"
            />
          </div>

          {/* TL;DR */}
          <section className="mb-12 flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="max-w-[800px] flex-1 lg:mb-0">
              <p
                className="text-[#0009FF] text-[20px] lg:text-[28px] uppercase font-matt font-[900] mb-[25px]"
                style={{ color: "#0009FF" }}
              >
                Lesedauer: ca. 5 Minuten
              </p>
            </div>
          </section>

          <section className="flex justify-center mb-24 px-4">
            <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="w-full bg-white/80 backdrop-blur-md border-l-4 border-blue-500 rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-xl font-bold">
                    ?
                  </div>
                  <h2 className="text-[28px] lg:text-[34px] font-bold text-neutral-900 leading-snug font-matt">
                    Was ist eine Landing Page und warum ist sie so wichtig?
                  </h2>
                </div>

                <div className="w-[60px] h-[4px] bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-400 rounded-full mb-6" />

                <p className=" mb-4 text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                  Im Gegensatz zu einer vollständigen Website, die verschiedene
                  Informationen und Navigationspunkte bietet, hat eine Landing
                  Page (Zielseite) nur ein einziges, klares Ziel: den Besucher
                  zu einer spezifischen Aktion zu bewegen. Das kann ein Kauf,
                  eine Anmeldung für einen Newsletter, der Download eines
                  E-Books oder eine Kontaktanfrage sein.
                </p>

                <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] mb-4 ">
                  <strong className="text-black">
                    Wenn Sie eine Landing Page erstellen Schweiz,
                  </strong>{" "}
                  ist es entscheidend, dass sie hochgradig fokussiert ist. Jedes
                  Element auf der Seite sollte darauf abzielen, den Besucher zu
                  dieser einen gewünschten Aktion zu leiten. Sie ist der Kern
                  vieler Marketingkampagnen, sei es über bezahlte Anzeigen
                  (SEA), E-Mail-Marketing oder Social Media.
                </p>

                <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                  Doch was macht eine Website "modern"? Es sind nicht nur
                  visuelle Aspekte, sondern vor allem auch Funktionalität,
                  Benutzerfreundlichkeit und technische Exzellenz, die Hand in
                  Hand gehen müssen.
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full relative group">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/recagile.png"
                    alt="Landing Page Vorteile"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/10 to-white/0 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </section>

          <section className="w-full mb-20 flex flex-col items-center">
            <div className="w-full max-w-[1200px] bg-gradient-to-br from-white via-[#F8F9FF] to-white p-8 lg:p-[80px] rounded-[20px] shadow-xl">
              <h2 className="text-[30px] lg:text-[42px] font-matt font-[900] text-center text-black uppercase mb-12 leading-tight">
                Wie funktioniert eine Landing Page? Die Anatomie des Erfolgs
                <br className="hidden lg:block" /> und darüber hinaus
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[60px] gap-y-[70px] text-black text-[16px] lg:text-[20px] font-[300] font-matt">
                {[
                  {
                    title: "Starker Titel und Subtitel:",
                    points: [
                      "Sie müssen die Aufmerksamkeit sofort fesseln und das Hauptversprechen der Seite klar kommunizieren.",
                    ],
                  },
                  {
                    title: "Klarer Call-to-Action (CTA): ",
                    points: [
                      "Der prominenteste Teil der Seite. Ein Button mit einer klaren Handlungsaufforderung (z.B. Jetzt kaufen, Gratis-E-Book herunterladen, Termin vereinbaren). Der CTA sollte sich visuell abheben.",
                    ],
                  },
                  {
                    title: "Überzeugende Vorteile:",
                    points: [
                      "Statt nur Produkteigenschaften aufzuzählen, konzentrieren Sie sich auf die Vorteile für den Kunden. Was löst Ihr Angebot für sein Problem?",
                    ],
                  },
                  {
                    title: "Vertrauensbildende Elemente: ",
                    points: [
                      "Kundenstimmen, Logos von Partnern, Zertifikate, Gütesiegel – alles, was Glaubwürdigkeit schafft.",
                    ],
                  },
                  {
                    title: "Aussagekräftige Bilder/Videos: ",
                    points: [
                      "Visuelle Elemente, die das Angebot unterstützen und ansprechend sind.",
                    ],
                  },
                  {
                    title: "Minimalistische Navigation (oder keine): ",
                    points: [
                      "Ablenkungen minimieren! Eine gute Landing Page hat oft keine oder eine stark reduzierte Navigation, um den Fokus auf den CTA zu lenken.",
                    ],
                  },
                  {
                    title: "Formular (falls nötig): ",
                    points: [
                      "Wenn Sie Leads sammeln, ist ein übersichtliches und kurzes Formular entscheidend. Fragen Sie nur die nötigsten Informationen ab.",
                    ],
                  },
                  {
                    title: "Mobile Optimierung: ",
                    points: [
                      <>
                        Ein absolutes Muss, da viele Nutzer über mobile Anzeigen
                        auf Landing Pages gelangen.{" "}
                        <Link
                          href="/blog/mobile-first-website-schweiz"
                          className="internal-link"
                        >
                          Mobile First Website Schweiz: Der Schlüssel zum Erfolg
                          im Zeitalter des Smartphones
                        </Link>
                      </>,
                    ],
                  },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h3 className="text-[22px] font-[800] text-black mb-3 relative">
                      {item.title}
                      <span className="absolute bottom-[-8px] left-0 h-[3px] w-[60px] bg-[#0009FF] transition-all duration-300 group-hover:w-[80px]"></span>
                    </h3>
                    {item.paragraph ? (
                      <p>{item.paragraph}</p>
                    ) : (
                      <ul className="list-disc ml-6 space-y-2">
                        {item.points.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <p className="text-black font-[300] text-[17px] lg:text-[17px] font-matt">
            <em>
              [Bildvorschlag: Eine schematische Darstellung einer Landing Page
              mit Pfeilen, die den Blick zum CTA leiten.]
            </em>{" "}
          </p>

          <section className="bg-[#F7F9FC] py-24 px-4 flex justify-center">
            <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Side: Onepager Info */}
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-[30px] lg:text-[36px] font-extrabold text-neutral-900 leading-snug mb-4">
                    Wann ist ein Onepager eine Landing Page?
                  </h2>
                  <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] mb-6">
                    <strong>Ein Onepager erstellen Schweiz</strong> kann in
                    bestimmten Fällen als Landing Page fungieren. Ein Onepager
                    ist eine Website, die alle Inhalte auf einer einzigen,
                    langen Seite darstellt, die man durch Scrollen erkundet. Er
                    ist ideal, wenn Sie ein klares, begrenztes Angebot haben
                    oder wenn Sie als Freelancer Ihre Leistungen übersichtlich
                    präsentieren möchten.
                    <Link
                      href="/blog/onepager-freelancer-schweiz"
                      className="internal-link"
                    >
                      <br /> Onepager für Freelancer und Selbständige:
                      Minimalistisch und doch wirkungsvoll
                    </Link>
                    <br />
                    <br />
                    Wenn ein Onepager speziell dafür konzipiert ist, Besucher zu
                    einer einzigen Aktion zu bewegen (z. B. Portfolio ansehen
                    und Kontakt aufnehmen), dann erfüllt er die Funktion einer
                    Landing Page. Er ist jedoch nicht immer die beste Wahl für
                    komplexe Angebote oder Kampagnen mit spezifischen
                    Botschaften.
                  </p>
                </div>
                <a
                  href="/blog/onepager-freelancer-schweiz"
                  className="inline-block text-blue-600 font-semibold hover:underline mt-4"
                >
                  → Mehr zu Onepager vs Landing Page <br />
                  <Link
                    href="/blog/onepager-freelancer-schweiz"
                    className="text-white text-decoration: underline font-bold"
                  >
                    <br />
                    Onepager für Freelancer und Selbständige: Minimalistisch und
                    doch wirkungsvoll
                  </Link>
                </a>
              </div>

              {/* Right Side: Conversion Optimization */}
              <div className="bg-gradient-to-br from-white via-[#F0F2FF] to-white rounded-3xl p-10 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[26px] lg:text-[30px] font-extrabold text-neutral-900 leading-snug mb-4">
                    Conversion-Optimierung: Das A und O Ihrer Landing Page
                  </h3>
                  <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] mb-6">
                    Eine Landing Page zu erstellen ist der erste Schritt – aber
                    der zweite, entscheidende ist die{" "}
                    <strong>Optimierung</strong>. Durch kontinuierliche
                    A/B-Tests können Sie Elemente gezielt verbessern:
                  </p>

                  <ul className="space-y-3 text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] pl-5">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-blue-500">✓</span> Titel und
                      Texte
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-blue-500">✓</span>{" "}
                      CTA-Formulierung und -Farbe
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-blue-500">✓</span> Bilder und
                      Videos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-blue-500">✓</span> Platzierung
                      von Elementen
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-blue-500">✓</span>{" "}
                      Formularlänge
                    </li>
                  </ul>
                </div>

                <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] mt-6">
                  Das Ziel ist es, die Conversion Rate kontinuierlich zu
                  verbessern – also den Prozentsatz der Besucher, die die
                  gewünschte Aktion ausführen. Eine SEO-optimierte Website
                  erstellen lassen{" "}
                  <Link
                    href="/blog/seo-website-erstellen-schweiz"
                    className="internal-link"
                  >
                    <br />
                    SEO-optimierte Website erstellen lassen: Ihr Weg zu mehr
                    Sichtbarkeit in der Schweiz
                  </Link>{" "}
                  <br />
                  ist wichtig für die Sichtbarkeit, aber eine
                  conversion-optimierte Landing Page ist entscheidend für den
                  Geschäftserfolg.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#eef1f8] via-white to-[#f5f8ff] py-24 px-4 flex justify-center">
            <div className="max-w-[1300px] w-full flex flex-col lg:flex-row items-center gap-12">
              {/* Left Side: Image with Layered Effect */}
              <div className="relative lg:w-1/2 w-full">
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/images/landingpage-hero.png"
                    alt="Landing Page Design von the eksperts"
                    className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-purple-100 to-white z-0 rounded-3xl blur-2xl opacity-60" />
              </div>

              {/* Right Side: Text Content */}
              <div className="lg:w-1/2 w-full relative z-10">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Ihre Experten für Landing Pages
                </span>

                <h2 className="text-[32px] lg:text-[40px] font-extrabold text-neutral-900 leading-snug mb-6">
                  Ihre effektive Landing Page <br className="hidden lg:block" />{" "}
                  mit <span className="text-blue-600">the eksperts</span>
                </h2>

                <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] mb-6">
                  Wir von <strong>the eksperts</strong> sind spezialisiert auf
                  das <strong>Landing Page erstellen Schweiz</strong>, die nicht
                  nur gut aussehen, sondern auch <em>messbare Ergebnisse</em>{" "}
                  liefern. Wir analysieren Ihre Marketingziele, Zielgruppen und
                  entwickeln Seiten, die optimal auf Ihre Kampagnen abgestimmt
                  sind – für maximale Conversions.
                </p>

                <a
                  href="/kontakt"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-[16px] font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300"
                >
                  Jetzt unverbindliches Angebot einholen
                </a>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full px-4 py-[60px] flex justify-center">
          <div className="max-w-[900px] w-full text-center">
            <div className="w-[60px] h-[4px] bg-[#0009FF] mx-auto mb-6 rounded-full"></div>

            <h2 className="text-[24px] lg:text-[32px] font-matt font-[800] text-black mb-6">
              Fazit: Der direkte Weg zum Kunden
            </h2>

            <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
              ine professionell erstellte und optimierte Landing Page ist ein
              mächtiges Werkzeug in Ihrem digitalen Marketing-Mix. Sie
              ermöglicht es Ihnen, präzise auf die Bedürfnisse Ihrer Zielgruppe
              einzugehen und diese direkt zur gewünschten Aktion zu führen.
            </p>
            <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mt-6 text-center">
              <strong>
                Erfahren Sie mehr über unsere Expertise im Landing Page Design
                und der Conversion-Optimierung auf <br />
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

export default LandingPageLeadsCH;
