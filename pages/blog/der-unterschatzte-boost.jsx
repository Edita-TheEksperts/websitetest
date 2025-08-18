import Head from "next/head";
import Link from "next/link";
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";
import LesenswertBox from "../../components/LesenswertBox";

const BoostPost = () => {
  return (
    <>
      <Head>
        <title>Der unterschätzte Boost | the eksperts</title>
        <meta
          name="description"
          content="Learn how nearshoring with the eksperts can benefit your business."
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
            <h1 className="font-matt text-[36px] sm:text-[40px] lg:text-[50px]  leading-tight font-semibold uppercase text-gray-900 tracking-tight mb-6">
              Der unterschätzte Boost:
            </h1>

            <h2 className="font-matt text-[25px] lg:text-[34px] leading-[1] font-normal text-gray-900 tracking-tight mb-0 lg:mb-4">
              Warum gutes Graphic Design mehr verkauft
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-6 mb-6 items-stretch">
              {/* TL;DR Box */}
              <div className="bg-[#0009FF] rounded-[8px] p-[16px] lg:w-full h-full ">
                <h2 className="text-[28px] font-matt text-white mb-4 uppercase">
                  <span className="font-900">
                    <strong>TL;DR</strong>
                  </span>{" "}
                  <span className="font-300">(too long; didn't read)</span>
                </h2>
                <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
                  Visuelle Gestaltung ist kein Nice-to-have – sie beeinflusst
                  direkt, ob Nutzer kaufen, klicken oder weiterscrollen. Gutes
                  Graphic Design stärkt Vertrauen, leitet den Blick und sorgt
                  für Wiedererkennung. Bei the eksperts gehört Design zu jeder
                  digitalen Strategie.
                </p>
              </div>

              {/* LESENSWERT Box */}
              <LesenswertBox currentSlug="der-unterschatzte-boost" />
            </div>
          </div>
        </section>
        <section>
          <div className="mb-10">
            <img
              src="/images/blogDer unterschätzte Boost-the eksperts.svg"
              alt="blogDer unterschätzte Boost-the ekspert"
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
                Lesedauer: ca. 2 Minuten{" "}
              </p>
              <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
                Ob Website, App oder Social Media Ad – Design verkauft. Studien
                zeigen: Menschen entscheiden in Millisekunden, ob sie einer
                Marke vertrauen. Und dieses Vertrauen basiert massgeblich auf
                dem visuellen Eindruck.{" "}
              </p>
            </div>
          </section>
          <div className="mb-12">
            <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
              Warum gutes Design entscheidend ist:
            </h2>

            <ul className="list-disc space-y-2 ml-6 text-black font-[300] text-[16px] lg:text-[20px] font-matt">
              <li>
                Klarheit & Struktur: Nutzer finden schneller, was sie suchen.
              </li>
              <li>
                Emotionaler Zugang: Farben, Formen und Bildsprache schaffen
                Bindung.
              </li>
              <li>
                Professionalität: Wer visuell überzeugt, wirkt glaubwürdig.
              </li>
              <li>
                Markenidentität: Konsistentes Design stärkt Wiedererkennung.
              </li>
            </ul>
          </div>

          {/* Benefits for Businesses */}
          <section className="mb-12 flex flex-col lg:flex-row gap-[60px]">
            {/* Text Section */}
            <div className="lg:w-[60%]">
              <img
                src="/images/rename.png" // Replace with actual image path
                alt="Vorteile für Unternehmen"
                className="w-full lg:h-[436px] object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-[40%] mb-8 lg:mb-0">
              {/* Image Section */}

              <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
                Vorteile für Unternehmen:
              </h2>
              <ul className="list-disc ml-6 space-y-6 text-black font-[300] text-[16px] lg:text-[20px] lg:leading-[33px] font-matt">
                <li>
                  Custom Graphic Design für Websites, Apps, Präsentationen &
                  Kampagnen
                </li>
                <li>
                  Corporate Design & Rebranding für Startups & Unternehmen
                </li>
                <li>UX/UI Design mit Fokus auf Conversion & Nutzererlebnis</li>
              </ul>
            </div>
          </section>
          <section className="mt-12">
            <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt  lg:leading-[33px]">
              Design ist keine Dekoration. Es ist Strategie. Und genau das
              setzen wir bei the eksperts täglich um.{" "}
            </p>
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

            <p className="text-[#000] text-[16px] lg:text-[20px] font-matt font-[300] lg:leading-[33px]">
              wir zeigen dir, wie mit Book Your Eksperts dein Business
              beschleunigt wird.{" "}
            </p>
          </section>
        </section>

        {/* Related Posts */}

        <RelatedPostsCarousel />
      </main>
    </>
  );
};

export default BoostPost;
