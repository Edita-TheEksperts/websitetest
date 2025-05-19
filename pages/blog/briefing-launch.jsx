import Head from 'next/head';
import Link from 'next/link';

const BriefPost = () => {
  return (
    <>
      <Head>
        <title>Vom Briefing zum Launch | the eksperts</title>
        <meta name="description" content="Vom Briefing zum Launch." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png" />
      </Head>

      <main className="max-w-[1330px] mx-auto p-2 lg:p-8 mb-[100px]">
        {/* Header Section */}


        {/* Post Content Section */}
        <section className="mb-[16px] text-left">
  <div className="text-left ">
    <h2 className="lg:text-[80px] text-[40px] font-matt font-[700] text-black tracking-tight lg:leading-[100%] mb-2 lg:mb-0" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
      Vom Briefing zum Launch:
    </h2>
    <h3 className="lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
So läuft ein agiles Webprojekt bei the eksperts ab    </h3>
    <p className="text-[#0009FF] text-[20px] mt-4" style={{fontFamily: 'Matt_Trial', color: '#0009FF', fontSize: '20px'}}>
Lesedauer: ca. 4-5 Minuten    </p>
  </div>
</section>
        <section>
          <div className="mb-10">
            <img
              src="/images/brief.png" // Replace with actual image path
              alt="Kosova"
              className="w-full lg:h-[500px] object-cover rounded-[12px]"
            />
          </div>

          {/* TL;DR */}
        <section className="mb-12 flex flex-col lg:flex-row">
  {/* Left Content */}
  <div className="max-w-[800px] flex-1 mb-8 lg:mb-0">
    <h2 className="text-[28px] font-matt font-[900] text-black mb-4">TL;DR</h2>
    <p className="text-black font-[300] text-[16px] lg:text-[20px] mb-[80px] font-matt">
Agile Prozesse ermöglichen schnelle Ergebnisse, transparente Kommunikation und iterative Verbesserung. Bei the eksperts durchläuft jedes Webprojekt klar strukturierte Phasen – vom ersten Kundenbriefing über Design, Entwicklung bis hin zum erfolgreichen Launch.    </p>
    <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Ein neues digitales Projekt startet selten mit Code – sondern mit einem Gespräch. Bei the eksperts glauben wir, dass starke Ergebnisse nur durch gute Zusammenarbeit entstehen. Darum setzen wir bei jedem Projekt – ob Website Entwicklung, App Projekt, Salesforce Integration oder CRM-Anpassung – auf agile Prozesse.    </p>
  </div>

  {/* Right Content (LESEWERT Box) */}
  <div className="rounded-lg w-full lg:w-[280px] mt-8 lg:mt-0 lg:ml-auto">
    <h3 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">LESENSWERT:</h3>
    <ul className="list-disc ml-6 text-black font-[300] text-[18px] font-matt">
      <li>
      <a href="/blog/der-unterschatzte-boost" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
        Der unterschätzte Boost
      </a>
    </li>
    <li>
      <a href="/blog/nearshoring-mit-the-eksperts" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
        Nearshoring mit the eksperts
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
       <section className="lg:w-[990px] space-y-[30px]">
  <div className="grid grid-cols-1 gap-2">
    {/* Phase 1: Briefing & Zieldefinition */}
    <div className="bg-white overflow-hidden flex flex-col lg:flex-row-reverse rounded-[12px] gap-4">
      {/* Left Column: Title and Paragraph */}
      <div className="flex flex-col justify-center lg:w-[60%]">
        <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
          PHASE 1: BRIEFING & ZIELDEFINITION
        </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
          Gemeinsam mit dem Kunden klären wir: Was ist das Ziel? Wer ist die Zielgruppe? Welche Funktionen sind nötig? Hier legen wir das Fundament für das gesamte Projekt.
        </p>
      </div>
      
      {/* Right Column: Image with Background */}
      <div className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center" style={{ background: 'linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase1.png)', backgroundBlendMode: 'color, normal' }}>
        <img
          src="/images/phase1.png" // Replace with actual image path
          alt="Briefing & Zieldefinition"
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
    </div>
  </div>

    <div className="grid grid-cols-1 gap-2">
    {/* Phase 1: Briefing & Zieldefinition */}
    <div className="bg-white overflow-hidden flex flex-col lg:flex-row rounded-[12px]  gap-4">
      {/* Left Column: Title and Paragraph */}
      <div className="flex flex-col justify-center lg:w-[60%]">
        <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
          Phase 2: Konzeption & Design
        </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Unsere Experten aus UX/UI Design, Graphic Design und Webdesign erstellen klickbare Prototypen. Feedbackschleifen sorgen dafür, dass alle Ideen visuell greifbar und iterativ verbessert werden.        </p>
      </div>
      
      {/* Right Column: Image with Background */}
      <div className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center" style={{ background: 'linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase2.png)', backgroundBlendMode: 'color, normal' }}>
        <img
          src="/images/phase2.png" // Replace with actual image path
          alt="Briefing & Zieldefinition"
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
    </div>
  </div>

    <div className="grid grid-cols-1 gap-2">
    {/* Phase 1: Briefing & Zieldefinition */}
    <div className="bg-white overflow-hidden flex flex-col lg:flex-row-reverse rounded-[12px]  gap-4">
      {/* Left Column: Title and Paragraph */}
      <div className="flex flex-col justify-center lg:w-[60%]">
        <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
Phase 3: Agile Umsetzung        </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Mit kurzen Sprints und regelmäßigen Check-ins liefern wir sichtbare Ergebnisse – zum Beispiel in der Frontend-Entwicklung, Backend-Logik, Salesforce-Anbindung oder AI-Integration.        </p>
      </div>
      
      {/* Right Column: Image with Background */}
      <div className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center" style={{ background: 'linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase3.png)', backgroundBlendMode: 'color, normal' }}>
        <img
          src="/images/phase3.png" // Replace with actual image path
          alt="Briefing & Zieldefinition"
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
    </div>
  </div>

    <div className="grid grid-cols-1 gap-2">
    {/* Phase 1: Briefing & Zieldefinition */}
    <div className="bg-white overflow-hidden flex flex-col lg:flex-row rounded-[12px]  gap-4">
      {/* Left Column: Title and Paragraph */}
      <div className="flex flex-col justify-center lg:w-[60%]">
        <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
Phase 4: Testing, Go Live & Support        </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Bevor eine Website oder App live geht, prüfen wir alle Funktionen sorgfältig – und begleiten den Launch. Auch danach stehen wir für Wartung, Erweiterungen und Optimierung bereit.        </p>
      </div>
      
      {/* Right Column: Image with Background */}
      <div className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center" style={{ background: 'linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase4.png)', backgroundBlendMode: 'color, normal' }}>
        <img
          src="/images/phase4.png" // Replace with actual image path
          alt="Briefing & Zieldefinition"
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
    </div>
  </div>
</section>




          {/* Call to Action */}
          <section className="mt-[65px] flex flex-col lg:flex-row justify-left lg:items-center gap-4 lg:gap-8">
  <Link href="/kontakt">
  <button className="flex justify-center items-center gap-2 py-3 px-8 text-white text-lg font-medium rounded-[60px] bg-[#0009FF] hover:bg-blue-700" style={{ width: '299px', padding: '11px 0px' }}>
Kontaktieren Sie Uns  </button>
</Link>

            <p className="text-[#000] text-[16px] lg:text-[20px] font-matt font-[300] lg:leading-[33px]">
Transparenz, Schnelligkeit, Kundennähe – das ist agile Projektleitung bei the eksperts  </p>
</section>

        </section>

        {/* Related Posts */}
  <section className="mt-[180px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
    {/* Post 1 */}
    <Link href="/blog/nearshoring-mit-the-eksperts">
      <div className="bg-white overflow-hidden flex flex-col rounded-[12px]">
        <img
          src="/images/kosovaa.png" // Replace with actual image path
          alt="Der unterschätzte Boost"
          className="w-full lg:h-[350px] object-cover rounded-[12px]"
        />
        <div className="py-4">
          <h4 className="text-[28px] font-matt font-[900] text-black mb-2 uppercase">Nearshoring mit the eksperts</h4>
          <p className="text-[#5A585A] font-[16px]">Lesedauer: ca. 5 Minuten</p>
        </div>
      </div>
    </Link>

    {/* Post 2 */}
    <Link href="/blog/der-unterschatzte-boost">
      <div className="bg-white overflow-hidden flex flex-col rounded-[12px]">
        <img
          src="/images/kaisen4.png" // Replace with actual image path
          alt="Agile Projektleitung"
          className="w-full lg:h-[350px] object-cover rounded-[12px]"
        />
        <div className="py-4">
          <h4 className="text-[28px] font-matt font-[900] text-black mb-2 uppercase">Der unterschätzte Boost</h4>
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
          <p className="text-[#5A585A] font-[16px]">Lesedauer: ca. 3 Minuten</p>
        </div>
      </div>
    </Link>
  </div>
</section>


      </main>
    </>
  );
};

export default BriefPost;
