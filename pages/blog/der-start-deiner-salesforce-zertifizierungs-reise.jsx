import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";

const CertificationPost = () => {
  return (
    <>
      <Head>
        <title>
          Der Start deiner Salesforce-(Zertifizierung's)-Reise | the eksperts
        </title>
        <meta
          name="description"
          content="Der Start deiner Salesforce-(Zertifizierung's)-Reise."
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
            <h1 className="font-matt text-[26px] sm:text-[40px] lg:text-[50px]  leading-tight font-semibold uppercase text-gray-900 tracking-tight mb-6">
              Der Start deiner Salesforce-(Zertifizierung's)-Reise:
            </h1>

            <h2 className="font-matt text-[25px] lg:text-[34px] leading-[1] font-normal text-gray-900 tracking-tight mb-0 lg:mb-4">
              Wo du mit Salesforce-Zertifizierungen beginnen solltest – ein
              praxisnaher Weg!
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-6 mb-6">
              {/* TL;DR Box */}
              <div className="bg-[#0009FF] rounded-[8px] p-[16px] lg:w-full">
                <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                  <span className="font-900">
                    <strong>TL;DR</strong>
                  </span>{" "}
                  <span className="font-300">(too long; didn't read)</span>
                </h2>
                <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                  Starte deine Salesforce-Zertifizierungsreise mit der
                  Salesforce Associate-Prüfung – einsteigerfreundlich und beim
                  ersten Versuch kostenlos. Mach dann weiter mit dem
                  Administrator, um dir eine starke Basis zu schaffen. Wenn dich
                  No-Code-Apps interessieren, kommt Platform App Builder als
                  nächstes. Danach wählst du deinen Fokus: Consultant, Developer
                  oder Analyst. Fang einfach an, folge deinen Interessen und
                  wachse Schritt für Schritt.
                </p>
              </div>

              {/* LESENSWERT Box */}
              <aside className="bg-gradient-to-br from-[#F0F4FF] to-white border border-[#E0E7FF] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[20px] font-matt font-[800] text-[#0009FF] uppercase mb-4">
                  LESENSWERT
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
              src="/images/Salesforce-Journe.png" // Replace with actual image path
              alt="Salesforve-Journe"
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
                Lesedauer: ca. 4 Minuten
              </p>
              <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                Wenn du gerade in das Salesforce-Ökosystem einsteigst, steht
                eine Zertifizierung vermutlich auf deiner To-do-Liste. Aber bei
                so vielen Möglichkeiten stellt sich die Frage: Wo fängt man an?
                Und wie geht es weiter?{" "}
              </p>
            </div>
          </section>
          <div className="mb-12 lg:w-[950px]">
            <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
              WHier ist, was für mich funktioniert hat:
            </h2>

            <p className=" text-black font-[300] text-[16px] lg:text-[20px] font-matt">
              Der beste Einstiegspunkt? Salesforce Associate. Diese
              Zertifizierung führt dich in die Kernfunktionen der Plattform ein,
              bleibt dabei einsteigerfreundlich – und das Beste: Der erste
              Versuch ist kostenlos. Das nimmt dir den finanziellen Druck und
              gibt dir einen echten Motivationsschub für den weiteren Weg. Wenn
              du das geschafft hast, nimm dir Zeit für die Vorbereitung auf die
              Salesforce Administrator-Zertifizierung. Diese geht tiefer: Du
              lernst, wie du die Plattform verwaltest, Prozesse automatisierst
              und Salesforce im Alltag wirklich effektiv einsetzt. Sie ist dein
              tägliches Brot.
            </p>
          </div>

          {/* Benefits for Businesses */}
          <section className="mb-12 flex flex-col lg:flex-row gap-[57px]">
            {/* Text Section */}
            <div className="lg:w-[60%]">
              <img
                src="/images/sentilink111.png" // Replace with actual image path
                alt="Vorteile für Unternehmen"
                className="w-full lg:h-[646px] object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-[40%] mb-8 lg:mb-0">
              {/* Image Section */}
              <p className=" text-black font-[300] text-[16px] mb-4 lg:text-[20px] font-matt">
                Danach? Wenn dich das App-Bauen ohne Code reizt, ist die
                Platform App Builder-Zertifizierung ein logischer nächster
                Schritt. Sie schlägt die Brücke zwischen Admin und Developer,
                mit Fokus auf deklarative (Point-and-Click) Tools.
              </p>
              <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
                Und nun hast du eine solide Basis, um deinen Weg weiterzudenken:
              </h2>
              <ul className="list-disc ml-6 space-y-6 text-black font-[300] text-[16px] lg:text-[20px] lg:leading-[33px] font-matt">
                <li>
                  Du liebst Problemlösungen und Kund:innenkontakt? → Schau dir
                  die Consultant-Zertifizierungen an.
                </li>
                <li>
                  Du möchtest programmieren und individuelle Lösungen bauen? →
                  Dann passt der Developer-Track zu dir.
                </li>
                <li>
                  Du interessierst dich mehr für Geschäftsprozesse und Analyse?
                  → Starte in Richtung Business Analyst.
                </li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-12 flex flex-col lg:flex-row justify-left lg:items-center gap-4 lg:gap-8">
            <Link href="/kontakt" passHref legacyBehavior>
              <a
                className="flex justify-center items-center gap-2 py-3 px-8 text-white text-lg font-medium rounded-[60px] bg-[#0009FF] hover:bg-blue-700"
                style={{ width: "299px", padding: "11px 0px" }}
              >
                Sprich mit uns
              </a>
            </Link>

            <p className="text-[#000] text-[18px] lg:text-[18px] font-matt font-[300] lg:leading-[30px]">
              Der Weg ist offen. Folge deiner Neugier, baue deine Skills Schritt
              für Schritt aus – und genieße die Reise.{" "}
            </p>
          </section>
        </section>

        {/* Related Posts */}
        <RelatedPostsCarousel />
      </main>
    </>
  );
};

export default CertificationPost;
