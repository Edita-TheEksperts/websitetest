import Head from 'next/head';
import Link from 'next/link';
import RelatedPostsCarousel from "../../components/RelatedPostsCarousel";

const AIPost = () => {
  return (
    <>
      <Head>
        <title>AI-Projektmanagement | the eksperts</title>
        <meta name="description" content="AI-Projektmanagement: Tools und Frameworks, die du kennen solltest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png" />
      </Head>

      <main className="max-w-[1330px] mx-auto p-2 lg:p-8 mb-[100px]">
        {/* Header Section */}


        {/* Post Content Section */}
        <section className="mb-[16px] lg:mb-[40px] text-left">
  <div className="text-left ">
    <h2 className="lg:text-[80px] text-[30px] font-matt font-[700] text-black tracking-tight lg:leading-[100%] mb-2 lg:mb-0" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
      AI-Projektmanagement:
    </h2>
    <h3 className="lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]" style={{fontFamily: 'Matt_Trial', color: '#000'}}>
Tools und Frameworks, die du kennen solltest   </h3>
 <div className='mt-[15px] bg-[#0009FF] rounded-[8px] p-[16px] lg:w-[990px]'>
<h2 className="text-[28px] font-matt text-white mb-4 uppercase">
  <span className="font-900"><strong>TL;DR</strong></span>{' '}
  <span className="font-300">(too long; didn't read)</span>
</h2>
    <p className="text-white font-[300] text-[16px] lg:text-[20px] font-matt">
AI-Projektmanager:innen laufen Gefahr, den Anschluss zu verlieren, wenn sie sich nicht in Bereichen wie Datenkompetenz, Ethik und agile Methoden weiterbilden. Die meisten KI-Projekte scheitern nicht an der Technik, sondern an fehlendem Know-how. Lerne, wie du vertrauenswürdige KI entwickelst – mit den fünf Prinzipien Ethik, Verantwortung, Transparenz, Governance und Erklärbarkeit – und baue starke Teams auf. Frameworks allein genügen nicht.</p> 
   </div>

  </div>
</section>
        <section>
          <div className="mb-10">
            <img
              src="/images/aiprojekt.png" // Replace with actual image path
              alt="Kosova"
              className="w-full lg:h-[500px] object-cover rounded-[12px]"
            />
          </div>

          {/* TL;DR */}
        <section className="mb-12 flex flex-col lg:flex-row">
  {/* Left Content */}
  <div className="max-w-[800px] flex-1 mb-8 lg:mb-0">
   
        <p className="text-[#0009FF] text-[20px] lg:text-[28px] uppercase font-matt font-[900] mb-[25px]" style={{color: '#0009FF'}}>
Lesedauer: ca. 6 Minuten    </p>
<h2 className='text-[28px] font-matt font-[900] text-black mb-6 uppercase'>Wie Projektmanager:innen relevant bleiben und erfolgreiche KI-Projekte umsetzen können</h2>
    <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Projektmanager: innen im Bereich Künstliche Intelligenz stehen vor neuen Herausforderungen. Während viel über KI als Jobkiller gesprochen wird, liegt das eigentliche Risiko weniger in plötzlichem Ersatz – sondern im Rückstand bei neuen Kompetenzen. Die Realität ist: Viele KI-Projekte scheitern. Und das nicht wegen technischer Grenzen, sondern weil es an Wissen über Daten, Ethik und Change Management fehlt.   </p>
  </div>

  {/* Right Content (LESEWERT Box) */}
  <div className="rounded-lg w-full lg:w-[280px] mt-8 lg:mt-[55px] lg:ml-auto">
    <h3 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">LESENSWERT:</h3>
    <ul className="space-y-[12px] list-disc ml-6 text-black font-[300] text-[18px] font-matt">
  <li>
    <Link href="/blog/der-unterschatzte-boost" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
      Der unterschätzte Boost
    </Link>
  </li>
  <li>
    <Link href="/blog/briefing-launch" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
      Vom Briefing zum Launch
    </Link>
  </li>
  <li>
    <Link href="/blog/agile-projektleitung" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
      Agile Projektleitung
    </Link>
  </li>
</ul>
  </div>
</section>


          {/* Why Nearshoring with the Eksperts */}
       <section className="lg:w-[990px] space-y-[30px]">
            <h3 className="text-[28px] font-matt font-[900] text-black  uppercase">Du musst dich anpassen:</h3>

  <div className="grid grid-cols-1 gap-2">
    {/* Phase 1: Briefing & Zieldefinition */}
    <div className="bg-white overflow-hidden flex flex-col lg:flex-row-reverse rounded-[12px] gap-4">
      {/* Left Column: Title and Paragraph */}
      <div className="flex flex-col justify-center lg:w-[60%]">
        <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
          Datenkompetenz & Awareness
        </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Verstehe, wie Daten beschafft, gelabelt, bereinigt werden; bewerte Datenqualität und erkenne Verzerrungen (Bias).        </p>
      </div>
      
      {/* Right Column: Image with Background */}
      <div className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center" style={{ background: 'linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase1.png)', backgroundBlendMode: 'color, normal' }}>
        <img
          src="/images/ai1.png" // Replace with actual image path
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
          Vertrauenswürdige KI-Praktiken
        </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Erkenne ethische Risiken, achte auf Fairness und Rechenschaftspflicht, und integriere ethische Reviews in den Projektzyklus.</p>      </div>
      
      {/* Right Column: Image with Background */}
      <div className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center" style={{ background: 'linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase2.png)', backgroundBlendMode: 'color, normal' }}>
        <img
          src="/images/ai2.png" // Replace with actual image path
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
Agiles, iteratives Arbeiten bei KI-Projekten       </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
 Steuere sich entwickelnde Anforderungen und priorisiere Iterationen auf Basis neuer Erkenntnisse.      </p>
      </div>
      
      {/* Right Column: Image with Background */}
      <div className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center" style={{ background: 'linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase3.png)', backgroundBlendMode: 'color, normal' }}>
        <img
          src="/images/ai3.png" // Replace with actual image path
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
Verständnis für KI-Technologien und ihre Lebenszyklen     </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
 Von der Problemdefinition über Datensammlung und -aufbereitung bis hin zu Modelltraining und Evaluation.</p>
      </div>
      
      {/* Right Column: Image with Background */}
      <div className="lg:w-[50%] h-[240px] bg-cover bg-center rounded-[12px] flex justify-center items-center" style={{ background: 'linear-gradient(0deg, #0009FF 0%, #0009FF 100%), url(/images/phase4.png)', backgroundBlendMode: 'color, normal' }}>
        <img
          src="/images/ai4.png" // Replace with actual image path
          alt="Briefing & Zieldefinition"
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
    </div>
  </div>
</section>

<section className='mt-12 '>
  <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">
Was bedeutet „Trustworthy AI“ konkret?    </h2>
        <p className="text-black font-[300] text-[16px] lg:text-[20px] font-matt">
Ein Prinzipien-Set mit fünf Schlüsselkomponenten: Ethik, Verantwortung, Transparenz, Governance und Erklärbarkeit.</p>
   <section className="mt-12 flex flex-col lg:flex-row gap-[30px]">
  {/* Text Section */}
    <div className="lg:w-[40%]">
    <img 
      src="/images/ai5.png" // Replace with actual image path
      alt="Vorteile für Unternehmen"
      className="w-full lg:h-[478px] object-cover rounded-lg"
    />
  </div>
  <div className="lg:w-[60%] mb-8 lg:mb-0">
     {/* Image Section */}

    <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">Ein tieferer Blick:</h2>
     <ul className="list-disc ml-6 space-y-6 text-black font-[300] text-[16px] lg:text-[20px] lg:leading-[33px] font-matt">
  <li>Ethische KI bedeutet, dass Systeme mit menschlichen Werten wie Fairness, Inklusion und Schadensvermeidung im Einklang stehen.</li>
  <li>Verantwortungsvolle KI sorgt für Kontrolle, Verantwortlichkeit und angemessene Nutzung – mit Bedacht statt nur Geschwindigkeit.</li>
  <li>Transparente KI zeigt auf, wie ein System funktioniert, welche Daten genutzt werden und wie Entscheidungen entstehen.</li>
  <li>Governed AI bringt Struktur in Form von Richtlinien, Audits und Risikomanagement – für Standards und Nachvollziehbarkeit.</li>
  <li>Erklärbare KI adressiert das „Black Box“-Problem und schafft Einblick in Entscheidungsprozesse, selbst bei komplexen Modellen.</li>
    </ul>
  </div>

 
</section>
</section>


          {/* Call to Action */}
          <section className="mt-12 flex flex-col lg:flex-row justify-left lg:items-center gap-4 lg:gap-8">
          <Link href="/kontakt" passHref legacyBehavior>
  <a className="flex justify-center items-center gap-2 py-3 px-8 text-white text-lg font-medium rounded-[60px] bg-[#0009FF] hover:bg-blue-700" style={{ width: '299px', padding: '11px 0px' }}>
    Kontaktiere uns
  </a>
</Link>


            <p className="text-[#000] text-[16px] lg:text-[20px] font-matt font-[300] lg:leading-[33px]">
Transparenz, Schnelligkeit, Kundennähe – das ist agile Projektleitung bei the eksperts </p>
</section>

        </section>

        {/* Related Posts */}
<RelatedPostsCarousel/>

      </main>
    </>
  );
};

export default AIPost;
