import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";

const WebagenturundDigitalagentur = () => {
  return (
    <>
      <Head>
        <title>
          Webagentur und Digitalagentur St. Gallen: Ihr digitaler Partner im
          Herzen der Ostschweiz | the eksperts
        </title>
        <meta
          name="description"
          content="Webdesign in Bern vom Experten-Team: Wir erstellen moderne, responsive Websites für Ihren erfolgreichen Online-Auftritt."
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
        <section className="mb-[16px]  lg:mb-[40px] text-left">
          <div className="text-left ">
            <h1 className="font-matt text-[30px] lg:text-[57px] leading-[1] font-semibold uppercase text-gray-900 tracking-tight">
              Webagentur und Digitalagentur St. Gallen: Ihr digitaler Partner im
              Herzen der Ostschweiz
            </h1>

            <h2 className="font-matt text-[25px] lg:text-[38px] leading-[1] font-normal text-gray-900 tracking-tight">
              Lokale Expertise und umfassende digitale Lösungen – direkt aus
              unserem Office am Rotenplatz
            </h2>
            <h2 className="hidden lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]">
              Lokale Expertise und umfassende digitale Lösungen – direkt aus
              unserem Office am Rotenplatz.
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
                  Suchen Sie nach "Webdesign St. Gallen" oder einer digitalen
                  Agentur in der Ostschweiz? Bei the eksperts, zentral gelegen
                  am Rotenplatz in St. Gallen, bieten wir massgeschneiderte
                  Lösungen für Ihre Homepage, Webshop, App-Entwicklung oder CRM
                  in der Ostschweiz und vieles mehr. Entdecken Sie unser
                  gemütliches Büro im historischen Gebäude und wie wir Ihr
                  Business digital voranbringen.
                </p>
              </div>

              {/* LESENSWERT */}
              <aside className="bg-gradient-to-br from-[#F0F4FF] to-white border border-[#E0E7FF] p-6 rounded-2xl shadow-sm mt-4">
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
        <section>
          <div className="mb-10">
            <img
              src="/images/blog7-the-eksperts.svg"
              alt="Kosova"
              className="w-full lg:h-[500px] object-cover rounded-[12px]"
            />
          </div>

          {/* TL;DR */}
          <section className="mb-12 flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="max-w-[800px] flex-1 mb-8 lg:mb-0">
              <p
                className="text-[#0009FF] text-[20px] lg:text-[28px] uppercase font-matt font-[900] mb-[5px]"
                style={{ color: "#0009FF" }}
              >
                Lesedauer: ca. 4 Minuten
              </p>
            </div>
          </section>

          <div className="mb-12 lg:w-[950px]">
            <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
              St. Gallen: Ein digitaler Hotspot in der Ostschweiz
            </h2>

            <p className=" text-black font-[300] text-[16px] lg:text-[20px] font-matt">
              Der Kanton St. Gallen ist ein lebendiger Wirtschafts- und
              Bildungsstandort in der Ostschweiz, geprägt von einer dynamischen
              Mischung aus Tradition, Innovation und Tourismus. Um in diesem
              Umfeld hervorzustechen, ist eine herausragende Online-Präsenz
              unerlässlich. Potenzielle Kunden in St. Gallen und der gesamten
              Ostschweiz suchen aktiv nach zuverlässigen Partnern für ihre
              digitale Transformation.
              <br /> <br />
              Ein durchdachtes Webdesign in <strong> St. Gallen </strong>ist der
              Schlüssel, um Ihre Zielgruppe direkt zu erreichen und Ihre Marke
              professionell zu präsentieren.
            </p>
          </div>

          <section className="bg-[#f8f9fa] py-16 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto text-black font-matt text-[16px] lg:text-[18px] space-y-10">
              <div className="text-center">
                <h2 className="text-[28px] lg:text-[32px] font-[900] uppercase">
                  the eksperts: Ihr Zuhause für digitale Exzellenz in St. Gallen
                </h2>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 lg:p-10 space-y-6">
                <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                  Unser Office befindet sich im Herzen von St. Gallen, am
                  Rotenplatz an der Sonnengartenstrasse 6. In diesem
                  historischen Gebäude, das 1907 erbaut wurde, finden Sie uns im
                  5. Stock. Dort wartet nicht nur unser gemütliches Büro auf
                  Sie, sondern auch ein leckerer süditalienischer Kaffee –
                  perfekt für ein entspanntes Erstgespräch über Ihr Projekt.
                </p>

                <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                  Als Ihre digitale Agentur St. Gallen bieten wir Ihnen:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    <strong>Regionales Marktverständnis:</strong> Wir
                    analysieren die spezifischen Gegebenheiten des St. Galler
                    Marktes und der gesamten Ostschweiz. So entwickeln wir eine
                    Strategie, die Ihre lokale Zielgruppe effektiv anspricht und
                    Ihre Alleinstellungsmerkmale hervorhebt.
                  </p>

                  <img
                    src="/images/regionales-marktverstaendnis.jpg"
                    alt="Bildvorschlag: Ein stilvolles Foto des historischen Gebäudes am Rotenplatz in St. Gallen, möglicherweise mit einem Andeutung des The Eksperts-Logos am Fenster oder einem digitalen Overlay"
                    className="w-full h-auto rounded-md object-cover"
                  />
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    <strong>Umfassende Digitale Dienstleistungen:</strong> Über
                    klassisches Webdesign St. Gallen hinaus sind wir Ihr Partner
                    für ein breites Spektrum an digitalen Lösungen:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    <li>
                      {" "}
                      <strong>
                        Webshop / Online Shop erstellen St. Gallen:
                      </strong>{" "}
                      Von der Konzeption bis zum Launch Ihres erfolgreichen
                      E-Commerce-Auftritts in der Ostschweiz.
                    </li>
                    <li>
                      <strong>CRM-Systeme St. Gallen:</strong> Implementierung
                      und Anpassung von Kundenbeziehungsmanagement-Software zur
                      Optimierung Ihrer Prozesse.
                    </li>
                    <li>
                      <strong>App Entwicklung St. Gallen:</strong>{" "}
                      Massgeschneiderte mobile Anwendungen für iOS und Android,
                      die Ihr Business digital erweitern.
                    </li>
                    <li>
                      <strong>
                        Suchmaschinenoptimierung (SEO) Ostschweiz:{" "}
                      </strong>
                      Steigern Sie Ihre Sichtbarkeit bei Google für relevante
                      Keywords.
                      <Link
                        href="/blog/seo-website-erstellen-schweiz"
                        className="internal-link"
                      >
                        <br />
                        SEO-optimierte Website erstellen lassen: Ihr Weg zu mehr
                        Sichtbarkeit in der Schweiz
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <strong>Digital Marketing St. Gallen:</strong> Von Social
                      Media über Content Marketing bis hin zu Performance
                      Marketing Kampagnen.
                    </li>
                    <li>
                      <strong>Professionelle Websites und Homepages:</strong>{" "}
                      Eine ansprechende und funktionale Homepage erstellen
                      lassen St. Gallen, die Vertrauen schafft und konvertiert.
                      <Link
                        href="/blog/website-erstellen-schweiz-guide"
                        className="internal-link"
                      >
                        <br />
                        Der ultimative Guide: Website erstellen Schweiz – Ihr
                        Sprungbrett zum Online-Erfolg
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 space-y-3 md:col-span-2">
                  <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                    <strong>Persönliche Betreuung:</strong> Wir legen Wert auf
                    direkten Austausch. Egal, ob Sie uns in unserem Büro am
                    Rotenplatz besuchen oder wir uns digital verbinden – wir
                    sind für Sie da.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <p className="text-black font-[300] text-[17px] lg:text-[17px] font-matt mt-9">
          <em>
            [Bildvorschlag: Eine Person, die konzentriert vor einem Bildschirm
            sitzt und eine Website mit einem Baukastensystem erstellt.]{" "}
          </em>{" "}
        </p>

        <section className="bg-gradient-to-br from-[#F0F4FF] to-white rounded-[16px] shadow-md p-8 lg:p-12 mb-12 mt-10">
          <h2 className="text-[28px] lg:text-[36px] font-matt font-[900] text-black mb-6 uppercase text-center">
            Ihr Weg zu digitalem Erfolg in der Ostschweiz
          </h2>

          <div className="w-full mb-10">
            <img
              src="/images/rotenplatz-building.jpg"
              alt='Bildvorschlag: Ein stilvolles Foto des historischen Gebäudes am Rotenplatz in St. Gallen, möglicherweise mit einem Andeutung des "the eksperts"-Logos am Fenster oder einem digitalen Overlay.'
              className="w-full max-h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ul className="list-disc ml-6 space-y-4 text-black font-[300] text-[16px] lg:text-[18px] lg:leading-[30px] font-matt">
                <li>
                  <strong>Modernes Webdesign:</strong> Ein ansprechendes und
                  professionelles Design, das Ihr Unternehmen optimal
                  repräsentiert und Vertrauen schafft.
                  <span className="text-[#0009FF]">
                    <Link
                      href="/blog/moderne-business-website-design-trends"
                      className="internal-link"
                    >
                      <br /> Moderne Business-Website: Design-Trends, die Ihr
                      Schweizer Unternehmen 2025 braucht
                    </Link>
                  </span>
                </li>
                <li>
                  <strong>Optimale Benutzererfahrung (UX): </strong>Eine
                  intuitive Navigation und klare Call-to-Actions, die es
                  Besuchern leicht machen, mit Ihnen in Kontakt zu treten oder
                  Ihr Angebot zu nutzen.
                  <span className="text-[#0009FF]">
                    <Link
                      href="/blog/ux-ui-design-website-kundenbindung"
                      className="internal-link"
                    >
                      <br />
                      UX/UI Design Website: Wie eine gute User Experience Ihre
                      Kunden bindet
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <ul className="list-disc ml-6 space-y-4 text-black font-[300] text-[16px] lg:text-[18px] lg:leading-[30px] font-matt">
                <li>
                  <strong>Performance & Mobiloptimierung:</strong> Eine schnelle
                  und auf allen Geräten perfekt funktionierende Website ist in
                  St. Gallen und der gesamten Ostschweiz unerlässlich.
                  <span className="text-[#0009FF]">
                    <Link
                      href="/blog/mobile-first-website-schweiz"
                      className="internal-link"
                    >
                      <br /> Mobile First Website Schweiz: Der Schlüssel zum
                      Erfolg im Zeitalter des Smartphones
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/kontakt" passHref legacyBehavior>
              <a className="bg-[#0009FF] text-white rounded-full px-8 py-4 text-[16px] lg:text-[18px] font-medium shadow-lg hover:bg-blue-700 transition inline-block">
                Starten Sie Ihr digitales Projekt in St. Gallen – Jetzt
                kostenlose Beratung bei einer Tasse Kaffee vereinbaren!
              </a>
            </Link>
          </div>
        </section>

        <section className="w-full px-4 py-[60px] flex justify-center">
          <div className="max-w-[900px] w-full text-center">
            <div className="w-[60px] h-[4px] bg-[#0009FF] mx-auto mb-6 rounded-full"></div>

            <h2 className="text-[24px] lg:text-[32px] font-matt font-[800] text-black mb-6">
              Fazit: Ihre Digitale Zukunft beginnt in St. Gallen mit the
              eksperts
            </h2>

            <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
              Für einen erfolgreichen Online-Auftritt in der Ostschweiz ist ein
              Partner entscheidend, der sowohl technisches Know-how als auch
              lokales Marktverständnis mitbringt. Wir von The Eksperts sind Ihr
              Begleiter, um eine digitale Präsenz zu schaffen, die Ihr Business
              in St. Gallen und darüber hinaus nachhaltig stärkt. Besuchen Sie
              uns am Rotenplatz – wir freuen uns auf Sie!
            </p>
            <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mt-6 text-center">
              <strong>
                Erfahren Sie mehr über unsere umfassenden Dienstleistungen für
                Webdesign, Webshops und Digital Marketing in St. Gallen auf
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

export default WebagenturundDigitalagentur;
