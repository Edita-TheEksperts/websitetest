import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";

const ModerneBusinessWebsite = () => {
  return (
    <>
      <Head>
        <title>
          Moderne Business-Website: Design-Trends, die Ihr Schweizer Unternehmen
          2025 braucht | the eksperts
        </title>
        <meta
          name="description"
          content="Entdecken Sie die wichtigsten Design-Trends für 2025 und erfahren Sie, 
          warum eine moderne Business-Website für Ihr Schweizer Unternehmen entscheidend ist."
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
            <h2 className="lg:text-[50px] text-[40px] font-matt font-[700] text-black tracking-tight lg:leading-[100%] mb-2 lg:mb-0">
              Moderne Business-Website: Design-Trends, die Ihr Schweizer
              Unternehmen 2025 braucht
            </h2>
            <h3
              className="lg:block hidden lg:text-[35px] text-[20px] font-matt font-[400] lg:leading-[48px]"
              style={{ fontFamily: "Matt_Trial", color: "#000" }}
            >
              Wie minimalistisches Design, Responsiveness und eine überzeugende
              User Experience Ihre Online-Präsenz stärken.
            </h3>
            <h3 className="hidden lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]">
              Wie minimalistisches Design, Responsiveness und eine überzeugende
              User Experience Ihre Online-Präsenz stärken.
            </h3>

            {/* TL;DR + LESENSWERT colons*/}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
              {/* TL;DR BOX*/}
              <div className="bg-[#0009FF] rounded-[8px] p-[16px] lg:w-full mt-5">
                <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                  <strong>TL;DR</strong>{" "}
                  <span className="font-300">(too long; didn't read)</span>
                </h2>
                <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                  Eine moderne Business-Website ist mehr als nur schön
                  anzusehen. Erfahren Sie, welche Design-Trends wie
                  minimalistische Website, responsive Webdesign Schweiz und
                  Mobile First Website Schweiz sowie ein exzellentes UX/UI
                  Design Website entscheidend sind, um Ihr Schweizer Unternehmen
                  im digitalen Raum erfolgreich zu positionieren und nachhaltig
                  zu wachsen.{" "}
                </p>
              </div>

              {/* LESENSWERT */}
              <aside className="bg-gradient-to-br from-[#F0F4FF] to-white border border-[#E0E7FF] p-6 rounded-2xl shadow-sm mt-8">
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
              src="/images/agile-blog-theeksperts1.png" // Replace with actual image path
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
                Lesedauer: ca. 3 Minuten
              </p>
            </div>
          </section>

          <section className="flex justify-center mb-20 px-4">
            <div className="max-w-[1100px] w-full flex flex-col lg:flex-row gap-[40px]">
              {/* Image */}
              <div className="lg:w-[50%]">
                <img
                  src="/images/recagile.png"
                  alt="Vorteile für Unternehmen"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>

              {/* Text Content */}
              <div className="lg:w-[50%] bg-gradient-to-br from-white via-[#F8F9FF] to-white p-8 rounded-[20px] shadow-md flex flex-col justify-center">
                <h2 className="text-[30px] font-matt font-[900] text-black mb-4 leading-snug">
                  Das Aushängeschild Ihres Erfolgs: Ihre moderne
                  Business-Website
                </h2>
                <div className="w-[60px] h-[4px] bg-neutral-300 rounded-full mb-6 transition-all duration-300 group-hover:w-[90px]"></div>
                <p className="text-black font-[300] text-[16px] lg:text-[20px] leading-[1.8] font-matt">
                  In einer schnelllebigen digitalen Welt ist Ihre Website oft
                  der erste Eindruck, den potenzielle Kunden von Ihrem
                  Unternehmen bekommen. Ein veralteter oder unübersichtlicher
                  Auftritt kann schnell zur Vertrauensfalle werden. Eine moderne
                  Business-Website hingegen vermittelt Kompetenz, Innovation und
                  Professionalität.
                </p>
                <p className="text-black font-[300] text-[16px] lg:text-[20px] leading-[1.8] font-matt mt-4">
                  Doch was macht eine Website "modern"? Es sind nicht nur
                  visuelle Aspekte, sondern vor allem auch Funktionalität,
                  Benutzerfreundlichkeit und technische Exzellenz, die Hand in
                  Hand gehen müssen.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full mb-20 flex flex-col items-center">
            <div className="w-full max-w-[1200px] bg-gradient-to-br from-white via-[#F8F9FF] to-white p-8 lg:p-[80px] rounded-[20px] shadow-xl">
              <h2 className="text-[30px] lg:text-[42px] font-matt font-[900] text-center text-black uppercase mb-12 leading-tight">
                Die wichtigsten Design-Trends für 2025{" "}
                <br className="hidden lg:block" /> und darüber hinaus
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[60px] gap-y-[70px] text-black text-[16px] lg:text-[20px] font-[300] font-matt">
                {[
                  {
                    title: "Minimalistische Website",
                    points: [
                      "Weniger ist mehr: Ein klarer, aufgeräumter Look, der sich auf das Wesentliche konzentriert. Dies reduziert Ablenkungen und führt den Blick des Nutzers direkt zum wichtigsten Inhalt.",
                      "Fokus auf den Inhalt: Texte und Bilder kommen besser zur Geltung.",
                      "Schnellere Ladezeiten: Weniger visuelles Durcheinander bedeutet oft auch eine bessere Performance.",
                    ],
                  },
                  {
                    title: "Mobile First Website Schweiz",
                    points: [
                      <>
                        Priorität für mobile Nutzer: Angesichts der Tatsache,
                        dass ein Grossteil des Web-Traffics über mobile Geräte
                        erfolgt, wird das Design zunächst für Smartphones
                        entwickelt und dann für grössere Bildschirme skaliert.
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
                  {
                    title: "Exzellentes UX/UI Design Website",
                    points: [
                      "User Experience (UX): Wie fühlt sich die Nutzung Ihrer Website an? Ist sie intuitiv, effizient und angenehm? Eine gute UX sorgt dafür, dass Besucher bleiben und zu Kunden werden.",
                      <>
                        User Interface (UI): Wie sieht Ihre Website aus und wie
                        interagieren Nutzer mit ihr? Die Gestaltung von Buttons,
                        Menüs und Formularen spielt eine grosse Rolle für die
                        Benutzerfreundlichkeit.
                        <Link
                          href="/blog/ux-ui-design-website-kundenbindung"
                          className="internal-link"
                        >
                          UX/UI Design Website: Wie eine gute User Experience
                          Ihre Kunden bindet
                        </Link>
                      </>,
                    ],
                  },
                  {
                    title: "Responsive Webdesign Schweiz",
                    points: [
                      <>
                        Geräteübergreifende Darstellung: Ihre Website muss auf
                        allen Bildschirmgrössen – vom grossen Desktop-Monitor
                        bis zum kleinen Smartphone – perfekt aussehen und
                        funktionieren.
                        <Link
                          href="/blog/responsive-webdesign-schweiz"
                          className="internal-link"
                        >
                          Responsive Webdesign Schweiz: Warum Ihre Website auf
                          jedem Gerät perfekt aussehen muss
                        </Link>
                      </>,
                    ],
                  },
                  {
                    title: "Barrierefreiheit:",
                    points: [
                      "Eine moderne Website ist für alle zugänglich, auch für Menschen mit Beeinträchtigungen. Dies ist nicht nur ethisch korrekt, sondern auch ein wichtiger Aspekt für die Reichweite.",
                    ],
                  },
                  {
                    title: "Hochwertige visuelle Inhalte:",
                    points: [
                      "Professionelle Fotos, Videos und Illustrationen sind entscheidend, um Emotionen zu wecken und Ihre Botschaft wirkungsvoll zu vermitteln.",
                    ],
                  },
                  {
                    title:
                      "Interaktive Elemente & Animationen (subtil eingesetzt)",
                    points: [
                      "Leichte Animationen oder Mikrointeraktionen können die Nutzerbindung erhöhen und die Website dynamischer wirken lassen, ohne zu überladen.",
                    ],
                  },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h3 className="text-[22px] font-[800] text-black mb-3 relative">
                      {item.title}
                      <span className="absolute bottom-[-8px] left-0 h-[3px] w-[60px] bg-[#0009FF] transition-all duration-300 group-hover:w-[80px]"></span>
                    </h3>
                    <ul className="list-disc ml-6 space-y-2">
                      {item.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <p className="text-black font-[300] text-[17px] lg:text-[17px] font-matt">
            <em>
              [Bildvorschlag: Eine moderne, ansprechende Website-Ansicht eines
              Coiffeursalons mit einem prominenten "Jetzt Termin
              buchen"-Button.]{" "}
            </em>{" "}
          </p>

          <section className="bg-[#0009FF] mt-[80px] w-full max-w-[915px] mx-auto p-2 lg:p-[40px] rounded-lg">
            <div className="max-w-[900px] mx-auto">
              <h2 className="text-[#FFF] text-[20px] lg:text-[28px] font-matt font-[900] text-uppercase mb-6 text-center">
                Ihr Website Konzept erstellen mit the eksperts{" "}
              </h2>
              <p className="text-[#FFF] text-[16px] lg:text-[20px] font-[300] font-matt mb-1">
                Die Entwicklung einer modernen Business-Website beginnt mit
                einem durchdachten Website Konzept erstellen. Bei the eksperts
                analysieren wir Ihre Ziele, Ihre Zielgruppe und Ihre Branche, um
                eine digitale Strategie zu entwickeln, die Ihre Marke optimal
                präsentiert und Ihre Geschäftsziele unterstützt. Wir integrieren
                die neuesten Design-Trends und technischen Standards, um Ihnen
                eine Website zu liefern, die nicht nur heute, sondern auch in
                Zukunft erfolgreich ist.{" "}
              </p>
              <div className="flex justify-center">
                <img
                  src="/images/Rectangle 259 (1).png" // Replace with actual image path
                  alt="Agile Prinzipien"
                  className="w-full lg:w-[840px] h-[350px] object-cover rounded-lg mb-8"
                />
              </div>
            </div>
          </section>
          <div className="flex justify-center mt-8">
            <a
              href="#contact"
              className="bg-white text-[#0009FF] hover:bg-[#e5e5ff] font-matt font-[700] text-[16px] lg:text-[18px] px-6 py-3 rounded-full transition duration-300"
            >
              Lassen Sie uns gemeinsam Ihr modernes Website-Konzept erstellen –
              Jetzt Beratung anfragen!
            </a>
          </div>
        </section>
        <div className="mb-12 w-full max-w-[905px] mx-auto text-center">
          <h2 className="text-[28px] font-matt font-[900] text-black mb-4 mt-20 uppercase">
            Fazit: Investition in die Zukunft
          </h2>

          <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mb-8">
            Eine moderne Website ist eine Investition in die digitale Zukunft
            Ihres Unternehmens. Sie verbessert nicht nur Ihr Image, sondern auch
            Ihre Sichtbarkeit, Ihre Kundenbindung und letztendlich Ihren Umsatz.
            Bleiben Sie am Puls der Zeit und stellen Sie sicher, dass Ihre
            Online-Präsenz genauso dynamisch und innovativ ist wie Ihr Geschäft.
          </p>

          <div className="w-full bg-[#F5F5F5] rounded-[12px] p-6 mb-8">
            <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mt-6 text-center">
              <strong>
                Erfahren Sie mehr über unsere Website-Dienstleistungen auf{" "}
                <br />
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
        </div>
        {/* Related Posts */}
        <RelatedPostsCarousel />
      </main>
    </>
  );
};

export default ModerneBusinessWebsite;
