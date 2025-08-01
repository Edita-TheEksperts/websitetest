import Head from 'next/head';
import Link from 'next/link';
import RelatedPostsCarousel from "@/components/RelatedPostsCarousel";

const ConsultantPost = () => {
  return (
    <>
      <Head>
        <title>Was unterscheidet dich von anderen Salesforce Consultants? | the eksperts</title>
        <meta name="description" content="Was unterscheidet Sie von anderen Salesforce-Beratern?" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png" />
      </Head>

      <main className="max-w-[1330px] mx-auto p-2 lg:p-8 mb-[100px]">
        {/* Header Section */}
        

        {/* Post Content Section */}
        <section className="mb-[16px]  lg:mb-[40px] text-left">
  <div className="text-left ">
    <h2 className="lg:text-[80px] text-[40px] font-matt font-[700] text-black tracking-tight lg:leading-[100%] mb-2 lg:mb-0" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
      Was unterscheidet dich von anderen Salesforce Consultants?
    </h2>
    <h3 className="lg:block hidden lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
      Reicht technisches Wissen allein, um besser zu sein?
    </h3>
    <h3 className="lg:hidden block lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
      Reicht technisches Wissen allein, um besser zu sein?
    </h3>
    <div className='mt-[15px] bg-[#0009FF] rounded-[8px] p-[16px] lg:w-[990px]'>
<h2 className="text-[28px] font-matt text-white mb-4 uppercase">
  <span className="font-900"><strong>TL;DR</strong></span>{' '}
  <span className="font-300">(too long; didn't read)</span>
</h2>
    <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
Ein grossartiger Salesforce Consultant zu sein, bedeutet mehr als nur technisches Know-how – es geht ums Zuhören, das Verstehen von Kundenbedürfnissen und um effektive Kommunikation. Die besten Lösungen entstehen durch die Kombination aus technischer Expertise und menschlicher Verbindung.   </p>
    </div>
  
  </div>
</section>
        <section>
          <div className="mb-10">
            <img
              src="/images/blog6hero2.png" // Replace with actual image path
              alt="Kosova"
              className="w-full lg:h-[500px] object-cover rounded-[12px]"
            />
          </div>

          {/* TL;DR */}
        <section className="mb-12 flex flex-col lg:flex-row">
  {/* Left Content */}
  <div className="max-w-[800px] flex-1 mb-8 lg:mb-0">
    <p className="text-[#0009FF] text-[20px] lg:text-[28px] uppercase font-matt font-[900] mb-[25px]" style={{color: '#0009FF'}}>
      Lesedauer: ca. 3 Minuten
    </p>
    <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Als Salesforce Consultant ist fundiertes technisches Wissen und ein tiefes Verständnis des Salesforce-Ökosystems unerlässlich. Du musst wissen, wie du die Plattform effizient für deine Kund:innen einsetzt. Doch die richtige Lösung zu liefern, geht über reine Fachkenntnis hinaus – es beginnt mit Zuhören.  </p>
  </div>

  {/* Right Content (LESEWERT Box) */}
  <div className="rounded-lg w-full lg:w-[280px] mt-8 lg:mt-[40px] lg:ml-auto">
    <h3 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">LESENSWERT:</h3>
    <ul className="space-y-[12px] list-disc ml-6 text-black font-[300] text-[18px] font-matt">
      <li>
      <a href="/blogder-start-deiner-salesforce-zertifizierungs-reise" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
        Salesforce Zertifizierung
      </a>
    </li>
    <li>
      <a href="/blog/briefing-launch" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
        Vom Briefing zum Launch
      </a>
    </li>
    <li>
      <a href="/blog/agile-projektleitung" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
        Agile Projektleitung
      </a>
    </li>
    </ul>
  </div>
</section>


          {/* Why Nearshoring with the Eksperts */}
          <div className="mb-12 lg:w-[950px]">
  <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">Fragen, Zuhören, Lösen: Der Schlüssel zur Salesforce-Beratung</h2>

          <p className=" text-black font-[300] text-[16px] lg:text-[20px] font-matt">
    Um echten Mehrwert zu schaffen, musst du die Schmerzpunkte deiner Kund:innen wirklich verstehen. Es geht nicht nur darum, Berichte zu erstellen, Dashboards aufzubauen oder Prozesse zu automatisieren. Es geht um Verbindung. Deshalb lege ich in meiner täglichen Arbeit genauso viel Wert darauf, die Kunst des richtigen Fragens zu beherrschen, sinnvolle Zeit mit meinen Kund:innen zu verbringen und sicherzustellen, dass jede Interaktion einen echten Nutzen bringt.
  </p>
          </div>

          {/* Benefits for Businesses */}
        <section className="mb-12 flex flex-col lg:flex-row gap-[60px]">
  {/* Text Section */}
    <div className="lg:w-[60%]">
    <img 
      src="/images/sentilinkboost.png" // Replace with actual image path
      alt="Vorteile für Unternehmen"
      className="w-full lg:h-[470px] object-cover rounded-lg"
    />
  </div>
  <div className="lg:w-[40%] mb-8 lg:mb-0">
     {/* Image Section */}

    <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">Die Beherrschung von Salesforce beginnt mit der Kommunikation</h2>
     <p className=" text-black font-[300] text-[16px] lg:text-[20px] lg:leading-[33px] font-matt">
Egal, ob du neu in der Salesforce-Welt bist oder bereits erfahren im Umgang mit technischen Herausforderungen – hier ist etwas, das in deinem Toolkit nicht fehlen darf: Kommunikation. Wenn du bisher noch nicht bewusst darin investiert hast, dann ist jetzt der richtige Zeitpunkt. Denn die wirkungsvollsten Lösungen entstehen nicht nur durch Code und Klicks – sondern durch ein tiefes Verständnis für die Menschen, für die du baust.    </p>
  </div>

 
</section>

          {/* Call to Action */}
          <section className="mt-12 flex flex-col lg:flex-row justify-left lg:items-center gap-4 lg:gap-8">
  <Link href="/kontakt" passHref legacyBehavior>
    <a
      className="flex justify-center items-center gap-2 py-3 px-8 text-white text-lg font-medium rounded-[60px] bg-[#0009FF] hover:bg-blue-700"
      style={{ width: '299px', padding: '11px 0px' }}
    >
      Kontaktieren Sie uns
    </a>
  </Link>

            <p className="text-[#000] text-[18px] lg:text-[20px] font-matt font-[300] lg:leading-[33px]">
wir zeigen dir, wie mit Book Your Eksperts dein Business beschleunigt wird.  </p>
</section>

        </section>

        {/* Related Posts */}

<RelatedPostsCarousel/>
      </main>
    </>
  );
};

export default ConsultantPost;
