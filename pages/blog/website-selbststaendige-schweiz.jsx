import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";
import LesenswertBox from "../../components/LesenswertBox";


const WebsiteSelbstaendige = () => {
  return (
    <>
      <Head>
        <title>
          Website für Selbständige: Ihr persönlicher Online-Auftritt, der
          überzeugt | the eksperts
        </title>
        <meta
          name="description"
          content="Ihre Website als Selbständiger ist mehr als nur eine Visitenkarte – sie ist Ihr überzeugender Auftritt im Netz. Wir erstellen individuelle, suchmaschinenfreundliche Websites, die Kunden gewinnen."
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
              Website für Selbständige: Ihr persönlicher Online-Auftritt, der
              überzeugt
            </h1>

            <h2 className="font-matt text-[25px] lg:text-[37px] leading-[1] font-normal text-gray-900 tracking-tight">
              Wie Freelancer, Coaches und Berater mit einer massgeschneiderten
              Website Kunden gewinnen und ihre Marke stärken
            </h2>
            <h2 className="hidden lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]">
              Wie Freelancer, Coaches und Berater mit einer massgeschneiderten
              Website Kunden gewinnen und ihre Marke stärken. Online-Erfolg ist
            </h2>
            {/* TL;DR + LESENSWERT colons*/}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-5 mb-5 items-stretch">
              {/* TL;DR BOX*/}
              <div className="bg-[#0009FF] rounded-[8px] p-[16px] lg:w-full h-full flex flex-col">
                <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                  <strong>TL;DR</strong>{" "}
                  <span className="font-300">(too long; didn't read)</span>
                </h2>
                <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                  Eine Website für Selbständige ist Ihre digitale Visitenkarte
                  und Ihr stärkstes Marketingtool. Erfahren Sie, wie ein
                  überzeugender Online-Auftritt für Freelancer oder eine
                  effektive Personal Branding Website aufgebaut sein sollte, um
                  Ihre Expertise zu präsentieren und neue Aufträge in der
                  Schweiz zu generieren.
                </p>
              </div>

              {/* LESENSWERT */}
           <LesenswertBox currentSlug="website-selbststaendige-schweiz" />
            </div>
          </div>
        </section>
        {/* TL;DR */}
        <section className="mb-12 flex flex-col lg:flex-row mt-4">
          {/* Left Content */}
          <div className="max-w-[800px] flex-1 lg:mb-0">
            <p
              className="text-[#0009FF] text-[20px] lg:text-[28px] uppercase font-matt font-[900] mb-[5px]"
              style={{ color: "#0009FF" }}
            >
              Lesedauer: ca. 4 Minuten
            </p>
          </div>
        </section>
        <section className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 py-28 px-4 flex justify-center overflow-hidden">
          <div className="absolute left-0 top-[50%] -translate-y-1/2 z-0 opacity-20 blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="500"
              height="500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#031672"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M21 11v-3c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-6m0 0l3 3m-3 -3l3 -3" />
              <path d="M3 13.013v3c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586h6m0 0l-3 -3m3 3l-3 3" />
              <path d="M16 16.502c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414z" />
              <path d="M4 4.502c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414z" />
              <path d="M21 21.499c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
              <path d="M9 9.499c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
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
                  stroke="#031672"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 11v-3c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-6m0 0l3 3m-3 -3l3 -3" />
                  <path d="M3 13.013v3c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586h6m0 0l-3 -3m3 3l-3 3" />
                  <path d="M16 16.502c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414z" />
                  <path d="M4 4.502c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414z" />
                  <path d="M21 21.499c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
                  <path d="M9 9.499c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
                </svg>
              </div>
            </div>
            <div className="w-full lg:w-[60%] bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-8 lg:p-10 text-neutral-900">
              <h2 className="text-[26px] lg:text-[34px] font-bold leading-snug text-blue-900 mb-6">
                Selbständig sein heisst, sichtbar sein
              </h2>
              <div className="w-[60px] h-[4px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-full mb-6" />
              <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] mb-6">
                Als Selbständiger, Freelancer, Coach oder Berater sind Sie Ihr
                eigenes Produkt. Ihr Erfolg hängt massgeblich davon ab, wie gut
                Sie sich präsentieren und potenzielle Kunden von Ihrer Expertise
                überzeugen können. In der heutigen Zeit ist eine professionelle
                Website für Selbständige daher kein Luxus, sondern eine absolute
                Notwendigkeit.
              </p>
              <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                Sie ist Ihr digitaler Schaukasten, der 24/7 arbeitet, um Ihre
                Dienstleistungen vorzustellen, Vertrauen aufzubauen und neue
                Aufträge an Land zu ziehen.
              </p>
            </div>
          </div>
        </section>

        <section>
          <section className="bg-gradient-to-br from-[#f0f6ff] via-white to-[#e6eefc] py-12 px-4 flex justify-center">
            <div className="max-w-[1200px] w-full bg-white shadow-2xl rounded-3xl p-10 lg:p-16">
              {/* Header */}
              <div className="flex flex-col items-start mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
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
                        className="icon icon-tabler icon-tabler-browser-check"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6h16" />
                        <path d="M8 6v.01" />
                        <path d="M12 6v.01" />
                        <path d="M16 6v.01" />
                        <path d="M4 6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10.5" />
                        <path d="M20 21l2 -2l-2 -2" />
                        <path d="M17 19h5" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-[28px] lg:text-[36px] font-bold text-blue-900 leading-snug">
                    Wesentliche Elemente für Ihren Online-Auftritt als
                    Selbständiger
                  </h2>
                </div>
                <div className="w-[60px] h-[4px] bg-blue-500 rounded-full"></div>
              </div>

              <ul className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]space-y-6 list-disc pl-6">
                <li>
                  <strong>Klare Positionierung:</strong> Was bieten Sie an? Für
                  wen? Und was macht Sie einzigartig? Ihre Website muss diese
                  Fragen sofort beantworten.
                </li>
                <li>
                  <strong>Portfolio/Referenzen:</strong> Zeigen Sie, was Sie
                  können! Case Studies, Projekte, Kundenstimmen oder Logos von
                  Partnern sind entscheidend, um Ihre Kompetenz zu belegen.
                </li>
                <li>
                  <strong>Leistungsübersicht:</strong> Eine klare und prägnante
                  Beschreibung Ihrer Dienstleistungen. Konzentrieren Sie sich
                  auf den Nutzen für den Kunden.
                </li>
                <li>
                  <strong>Über mich/Personal Branding:</strong> Zeigen Sie Ihre
                  Persönlichkeit und Expertise. Eine gute "Über mich"-Seite ist
                  das Herzstück einer <strong>Personal Branding Website</strong>
                  . Erzählen Sie Ihre Geschichte, Ihre Philosophie und was Sie
                  antreibt.
                </li>
                <li>
                  <strong>Kontaktmöglichkeiten:</strong> Leicht auffindbare
                  Kontaktformulare, E-Mail-Adressen und Telefonnummern.
                </li>
                <li>
                  <strong>Blog/Fachartikel:</strong>Teilen Sie Ihr Wissen! Ein
                  Blog hilft Ihnen, sich als Experte zu positionieren und über
                  SEO
                  <Link
                    href="/blog/seo-website-erstellen-schweiz"
                    className="internal-link"
                  >
                    <br /> SEO-optimierte Website erstellen lassen: Ihr Weg zu
                    mehr Sichtbarkeit in der Schweiz{" "}
                  </Link>
                  neue Besucher anzuziehen.
                </li>
                <li>
                  <strong>Call-to-Actions (CTAs):</strong> Was sollen Ihre
                  Besucher tun? "Jetzt Projekt anfragen", "Kostenlose
                  Erstberatung buchen", "Portfolio herunterladen"
                </li>
                <li>
                  <strong>Mobile Optimierung:</strong> Die meisten Ihrer
                  potenziellen Kunden werden Ihre Website mobil besuchen.
                  <Link
                    href="/blog/mobile-first-website-schweiz"
                    className="internal-link"
                  >
                    <br />
                    Mobile First Website Schweiz: Der Schlüssel zum Erfolg im
                    Zeitalter des Smartphones{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <p className="text-black font-[300] text-[17px] lg:text-[17px] font-matt">
            <em>
              [Bildvorschlag: Eine Illustration einer selbständigen Person (z.B.
              ein Freelancer mit Laptop und Ideenblase) vor einer stilisierten
              Website.]
            </em>{" "}
          </p>

          <section className="w-full bg-[#F8FAFC] py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-[28px] lg:text-[36px] font-matt font-[900] text-blue-900 text-center mb-6">
                Onepager oder Multi-Page? Die Wahl der Struktur
              </h2>
              <div className="w-[60px] h-[4px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-10 rounded-full" />

              <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]max-w-3xl mx-auto mb-12 ">
                Für viele Selbständige ist ein{" "}
                <Link
                  href="/blog/onepager-freelancer-schweiz"
                  className="internal-link"
                >
                  <br /> Onepager für Freelancer und Selbständige:
                  Minimalistisch und doch wirkungsvoll{" "}
                </Link>
                eine ausgezeichnete Wahl. Er ist schlank, fokussiert und führt
                den Besucher intuitiv durch die wichtigsten Informationen. Wenn
                Sie jedoch ein sehr umfangreiches Dienstleistungsangebot oder
                viele Inhalte haben, kann eine Multi-Page-Website sinnvoll sein.
                Die Wahl hängt davon ab, wie komplex Ihr Angebot ist und wie
                viel Information Sie bereitstellen möchten. Unabhängig von der
                Struktur sollte die Benutzerfreundlichkeit (UX) immer im
                Vordergrund stehen.
                <Link
                  href="/blog/ux-ui-design-website-kundenbindung"
                  className="internal-link"
                >
                  <br /> UX/UI Design Website: Wie eine gute User Experience
                  Ihre Kunden bindet{" "}
                </Link>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Onepager Card */}
                <div className="bg-white border-t-4 border-blue-500 shadow-md rounded-xl p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">
                    Onepager
                  </h3>
                  <ul className="list-disc list-inside text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] space-y-2 font-matt">
                    <li>Ideal für klare, schlanke Angebote</li>
                    <li>Schneller Überblick für Besucher</li>
                    <li>Höhere Conversion-Rate bei gezielten CTAs</li>
                  </ul>
                </div>

                {/* Multi-Page Card */}
                <div className="bg-white border-t-4 border-green-500 shadow-md rounded-xl p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-green-700 mb-3">
                    Multi-Page
                  </h3>
                  <ul className="list-disc list-inside text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8] space-y-2 font-matt">
                    <li>Sinnvoll bei komplexem Angebot</li>
                    <li>Strukturierte Navigation & mehr Inhalte</li>
                    <li>Besser für SEO bei breitem Themenfeld</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="relative bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#e0f2fe] py-24 px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Side: Text */}
              <div className="space-y-6">
                <h2 className="text-[30px] lg:text-[38px] font-bold text-blue-900 leading-snug">
                  Ihre professionelle Website für Selbständige in der Schweiz
                  mit <span className="text-blue-600">the eksperts</span>
                </h2>
                <div className="w-[60px] h-[4px] bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />

                <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                  Wir bei the eksperts verstehen die besonderen Bedürfnisse von
                  Selbständigen und Freelancern in der Schweiz. Wir helfen
                  Ihnen, eine Website für Selbständige zu erstellen, die:
                </p>

                <ul className="list-none space-y-3 text-[16px] text-neutral-800 font-matt">
                  <li className=" text-[16px] lg:text-[16px] text-black font-matt font-[300] leading-[1.8] flex items-start gap-3">
                    <svg
                      className="mt-1"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ihre einzigartige Marke widerspiegelt.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                    <svg
                      className="mt-1"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ihre Dienstleistungen klar kommuniziert.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                    <svg
                      className="mt-1"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      Potenzielle Kunden überzeugt und zu Anfragen führt.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                    <svg
                      className="mt-1"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      Technisch einwandfrei und suchmaschinenfreundlich ist.
                    </span>
                  </li>
                </ul>

                <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
                  Egal ob Sie eine einfache Portfolio-Seite, eine umfassende
                  Personal Branding Website oder eine spezialisierte Landing
                  Page für Berater{" "}
                  <Link
                    href="/blog/landing-page-erstellen-schweiz"
                    className="internal-link"
                  >
                    <br /> Landing Page erstellen Schweiz: So generieren Sie
                    mehr Leads und Verkäufe{" "}
                  </Link>
                  benötigen – wir sind Ihr Partner, um Ihren Online-Auftritt zum
                  Erfolg zu führen.
                </p>

                <a
                  href="/kontakt"
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-md transition duration-300"
                >
                  Starten Sie Ihre digitale Erfolgsgeschichte – Jetzt planen!
                </a>
              </div>

              {/* Right Side: Illustration or Icon */}
              <div className="flex justify-center">
                <div className="w-[300px] h-[300px] rounded-full bg-white/30 backdrop-blur-lg border border-white/30 shadow-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
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
              </div>
            </div>
          </section>
        </section>
        <section className="w-full px-4 py-[60px] flex justify-center">
          <div className="max-w-[900px] w-full text-center">
            <div className="w-[60px] h-[4px] bg-[#0009FF] mx-auto mb-6 rounded-full"></div>

            <h2 className="text-[24px] lg:text-[32px] font-matt font-[800] text-black mb-6">
              Fazit: Investieren Sie in Ihre digitale Visitenkarte
            </h2>

            <p className="text-[16px] lg:text-[20px] text-black font-matt font-[300] leading-[1.8]">
              Als Selbständiger ist Ihre Website Ihr wichtigstes
              Marketinginstrument. Eine professionell gestaltete und optimierte
              Website ist der Schlüssel, um neue Kunden zu gewinnen, sich als
              Experte zu positionieren und Ihr Geschäft nachhaltig wachsen zu
              lassen.
            </p>
            <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt mt-6 text-center">
              <strong>
                Erfahren Sie mehr über massgeschneiderte Website-Lösungen für
                Selbständige in der Schweiz auf
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

export default WebsiteSelbstaendige;
