import Head from 'next/head';
import Link from 'next/link';

const BoostPost = () => {
  return (
    <>
      <Head>
        <title>Der unterschätzte Boost | the eksperts</title>
        <meta name="description" content="Learn how nearshoring with the eksperts can benefit your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png" />
      </Head>

      <main className="max-w-[1330px] mx-auto p-2 lg:p-8 mb-[100px]">
        {/* Header Section */}
         

        {/* Post Content Section */}
        <section className="mb-[16px] text-left">
  <div className="text-left ">
    <h2 className="lg:text-[80px] text-[40px] font-matt font-[700] text-black tracking-tight lg:leading-[100%] mb-2 lg:mb-0" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
      Der unterschätzte Boost:
    </h2>
    <h3 className="lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
Warum gutes Graphic Design mehr verkauft    </h3>
    <p className="text-[#0009FF] text-[20px] mt-4" style={{fontFamily: 'Matt_Trial', color: '#0009FF', fontSize: '20px'}}>
Lesedauer: ca. 2 Minuten    </p>
  </div>
</section>
        <section>
          <div className="mb-10">
            <img
              src="/images/kaizen3.png" // Replace with actual image path
              alt="Kosova"
              className="w-full lg:h-[500px] object-cover rounded-[12px]"
            />
          </div>

          {/* TL;DR */}
        <section className="mb-12 flex flex-col lg:flex-row">
  {/* Left Content */}
  <div className="max-w-[800px] flex-1 mb-8 lg:mb-0">
    <h2 className="text-[28px] font-matt font-[900] text-black mb-4">TL;DR</h2>
    <p className="text-[#5A585A] text-[18px] mb-[80px] font-matt">
Visuelle Gestaltung ist kein Nice-to-have – sie beeinflusst direkt, ob Nutzer kaufen, klicken oder weiterscrollen. Gutes Graphic Design stärkt Vertrauen, leitet den Blick und sorgt für Wiedererkennung. Bei the eksperts gehört Design zu jeder digitalen Strategie.    </p>
    <p className="text-[#5A585A] text-[18px] font-matt">
Ob Website, App oder Social Media Ad – Design verkauft. Studien zeigen: Menschen entscheiden in Millisekunden, ob sie einer Marke vertrauen. Und dieses Vertrauen basiert massgeblich auf dem visuellen Eindruck.    </p>
  </div>

  {/* Right Content (LESEWERT Box) */}
  <div className="rounded-lg w-full lg:w-[250px] mt-8 lg:mt-0 lg:ml-auto">
    <h3 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">LESENSWERT:</h3>
    <ul className="list-disc ml-6 text-black font-[300] text-[18px] font-matt">
      <li>Der unterschätzte Boost</li>
      <li>Vom Briefing zum Launch</li>
      <li>Agile Projektleitung</li>
    </ul>
  </div>
</section>


          {/* Why Nearshoring with the Eksperts */}
          <div className="mb-12">
  <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">WWarum gutes Design entscheidend ist:</h2>

          <ul className="list-disc space-y-2 ml-6 text-[#5A585A] text-[18px] font-matt">
   <li>Klarheit & Struktur: Nutzer finden schneller, was sie suchen.</li>
  <li>Emotionaler Zugang: Farben, Formen und Bildsprache schaffen Bindung.</li>
  <li>Professionalität: Wer visuell überzeugt, wirkt glaubwürdig.</li>
  <li>Markenidentität: Konsistentes Design stärkt Wiedererkennung.</li>
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

    <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">Vorteile für Unternehmen:</h2>
     <ul className="list-disc ml-6 space-y-6 text-black font-[300] text-[20px] leading-[33px] font-matt">
  <li>Custom Graphic Design für Websites, Apps, Präsentationen & Kampagnen</li>
  <li>Corporate Design & Rebranding für Startups & Unternehmen</li>
  <li>UX/UI Design mit Fokus auf Conversion & Nutzererlebnis</li>
    </ul>
  </div>

 
</section>
<section className="mt-[65px]">
  <p className="text-[#000] text-[20px] font-matt font-[300] leading-[33px]">
Design ist keine Dekoration. Es ist Strategie. Und genau das setzen wir bei the eksperts täglich um.  </p>
</section>

          {/* Call to Action */}
          <section className="mt-[65px] flex flex-col lg:flex-row justify-left lg:items-center gap-4 lg:gap-8">
  <Link href="/kontakt">
  <button className="flex justify-center items-center gap-2 py-3 px-8 text-white text-lg font-medium rounded-[60px] bg-[#0009FF] hover:bg-blue-700" style={{ width: '299px', padding: '11px 0px' }}>
Sprich mit uns 
  </button>
</Link>

  <p className="text-[#000] text-[20px] font-matt font-[300] leading-[33px]">
wir zeigen dir, wie mit Book Your Eksperts dein Business beschleunigt wird.  </p>
</section>

        </section>

        {/* Related Posts */}
  <section className="mt-[180px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
    {/* Post 1 */}
    <Link href="/blog/kosova">
      <div className="bg-white overflow-hidden flex flex-col rounded-[12px]">
        <img
          src="/images/kosovaa.png" // Replace with actual image path
          alt="Der unterschätzte Boost"
          className="w-full lg:h-[350px] object-cover rounded-[12px]"
        />
        <div className="py-4">
          <h4 className="text-[28px] font-matt font-[900] text-black mb-2 uppercase">Nearshoring mit the eksperts:</h4>
          <p className="text-[#5A585A] font-[16px]">Lesedauer: ca. 2 Minuten</p>
        </div>
      </div>
    </Link>

    {/* Post 2 */}
    <Link href="/blog/briefing-launch">
      <div className="bg-white overflow-hidden flex flex-col rounded-[12px]">
        <img
          src="/images/agile1.png" // Replace with actual image path
          alt="Agile Projektleitung"
          className="w-full lg:h-[350px] object-cover rounded-[12px]"
        />
        <div className="py-4">
          <h4 className="text-[28px] font-matt font-[900] text-black mb-2 uppercase">Vom Briefing zum Launch</h4>
          <p className="text-[#5A585A] font-[16px]">Lesedauer: ca. 2 Minuten</p>
        </div>
      </div>
    </Link>

    {/* Post 3 */}
    <Link href="/blog/agile-projektleitung">
      <div className="bg-white overflow-hidden flex flex-col rounded-[12px]">
        <img
          src="/images/agile2.png" // Replace with actual image path
          alt="Agile Projektleitung"
          className="w-full lg:h-[350px] object-cover rounded-[12px]"
        />
        <div className="py-4">
          <h4 className="text-[28px] font-matt font-[900] text-black mb-2 uppercase">Agile Projektleitung</h4>
          <p className="text-[#5A585A] font-[16px]">Lesedauer: ca. 2 Minuten</p>
        </div>
      </div>
    </Link>
  </div>
</section>


      </main>
    </>
  );
};

export default BoostPost;
