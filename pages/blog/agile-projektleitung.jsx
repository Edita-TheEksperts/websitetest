import Head from 'next/head';
import Link from 'next/link';

const AgilePost = () => {
  return (
    <>
      <Head>
        <title>Agile Projektleitung | the eksperts</title>
        <meta name="description" content="Learn how nearshoring with the eksperts can benefit your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png" />
      </Head>

      <main className="max-w-[1330px] mx-auto p-2 lg:p-8 mb-[100px]">
        {/* Header Section */}
        <section className="mb-[16px] text-left">
          <div className="text-left ">
            <h2 className="lg:text-[80px] text-[40px] font-matt font-[700] text-black tracking-tight lg:leading-[100%] mb-2 lg:mb-0">
              Agile Projektleitung
            </h2>
            <h3 className="hidden lg:text-[40px] text-[25px] font-matt font-[400] lg:leading-[48px]">
              So profitieren Unternehmen von digitalen Teams aus dem DACH-Raum und dem Balkan mit Book Your Eksperts
            </h3>
            <p className="text-[#0009FF] text-[20px] mt-4">
              Lesedauer: ca. 3 Minuten
            </p>
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
            <div className="max-w-[800px] flex-1 mb-8 lg:mb-0">
              <h2 className="text-[28px] font-matt font-[900] text-black mb-4">TL;DR</h2>
              <p className="text-black font-[300] text-[16px] lg:text-[20px] mb-[20px] font-matt">
                Agile Projektleitung ermöglicht es Teams, effizienter, flexibler und kundenorientierter zu arbeiten – besonders in Bereichen wie Website Entwicklung, App Entwicklung, CRM-Lösungen oder Salesforce-Implementierungen. Bei the eksperts setzen wir auf agile Methoden, um digitale Projekte wie Webdesign, AI-gestützte Tools, oder Graphic Design iterativ, transparent und mit klarer Priorisierung umzusetzen. Dieser Blog erklärt, wie agiles Projektmanagement funktioniert und warum es der Schlüssel für moderne Agenturen und Kunden ist.
              </p>
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
      <a href="/blog/briefing-launch" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
        Vom Briefing zum Launch
      </a>
    </li>
      <li>
      <a href="/blog/nearshoring-mit-the-eksperts" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
        Nearshoring mit the eksperts
      </a>
    </li>

              </ul>
            </div>
          </section>

          {/* Benefits for Businesses */}
          <section className="lg:w-[905px] mb-12 flex flex-col lg:flex-row gap-[20px]">
            {/* Text Section */}
            <div className="lg:w-[30%]">
              <img 
                src="/images/recagile.png" // Replace with actual image path
                alt="Vorteile für Unternehmen"
                className="w-full lg:h-[480px] object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-[70%] mb-8 lg:mb-0">
              <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">Was ist Agile Projektleitung?</h2>
              <p className="list-disc space-y-6 text-black font-[300] text-[16px] lg:text-[20px] lg:leading-[33px] font-matt">
                Agile Projektleitung ist ein dynamischer, flexibler Ansatz im Projektmanagement, der ursprünglich aus der Softwareentwicklung stammt – heute aber in nahezu allen digitalen Bereichen eingesetzt wird, wie z. B. in der Website Entwicklung, App Entwicklung oder beim UX/UI Webdesign.<br/><br/>
                Anstatt langfristige Pläne bis ins kleinste Detail im Voraus zu erstellen, fokussiert sich agiles Arbeiten auf kontinuierliche Verbesserung, direkte Kommunikation und schnelle Auslieferung von funktionierenden Teillösungen. Besonders für Agenturen wie the eksperts, die mit Kunden aus verschiedenen Branchen arbeiten – von Startups bis zu Enterprise-Kunden – ist das ein entscheidender Wettbewerbsvorteil.
              </p>
            </div>
          </section>

          {/* Why Agile is Important */}
          <div className="mb-12 lg:w-[905px]">
            <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">Warum ist Agile für digitale Projekte so wichtig?</h2>
            <p className="text-black text-[16px] lg:text-[20px] font-[300] font-matt">
              Digitale Produkte wie Websites, mobile Apps, CRM-Systeme, AI-Integrationen oder Salesforce-Anwendungen erfordern heute Flexibilität und kurze Reaktionszeiten. Anforderungen ändern sich schnell, technische Innovationen noch schneller. Agile Methoden wie Scrum oder Kanban helfen Teams, schnell zu iterieren und gleichzeitig den Fokus auf den Kundennutzen zu behalten.<br/><br/>
              Bei the eksperts haben wir in zahlreichen Projekten erlebt, dass agile Prozesse die Zusammenarbeit zwischen Entwicklern, Designern, Projektleitern und Kunden massiv verbessern – sei es in einem komplexen Salesforce CRM Setup, bei einem intuitiven Webdesign, oder bei der Integration von AI-basierten Tools.
            </p>
            <div className="lg:w-full h-[298px] mt-6">
              <img
                src="/images/Rectangle 259.png" // Replace with actual image path
                alt="Agile for digital projects"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
<section className="bg-[#0009FF] mt-[50px] lg:w-[915px] p-2 lg:p-[40px] rounded-lg">
  <div className="max-w-[900px] mx-auto">
    <h2 className="text-[#FFF] text-[20px] lg:text-[28px] font-matt font-[900] text-uppercase mb-6">
      AGILE PRINCIPIEN IN DER PRAXIS BEI THE EKSPERTS
    </h2>
    <p className="text-[#FFF] text-[16px] lg:text-[20px] font-[300] font-matt mb-1">
      Wir bei the eksperts kombinieren agile Prinzipien mit tiefem technischem Know-how in Bereichen wie:
    </p>

    <ul className="text-[#FFF] list-disc ml-6 text-[16px] lg:text-[20px] font-[300] font-matt mb-8">
      <li>Website Entwicklung mit WordPress oder Headless CMS</li>
      <li>App Entwicklung für iOS, Android und Cross-Platform</li>
      <li>CRM Beratung und Implementierung (z.B. Salesforce, HubSpot)</li>
      <li>Graphic Design und UX/UI Optimierung</li>
      <li>AI-basierte Lösungen zur Prozessautomatisierung</li>
      <li>Systemintegration und API-Schnittstellenentwicklung</li>
    </ul>

    <div className="flex justify-center">
      <img
        src="/images/Rectangle 259 (1).png" // Replace with actual image path
        alt="Agile Prinzipien"
        className="w-full lg:w-[840px] h-[350px] object-cover rounded-lg mb-8"
      />
    </div>
      <p className="text-[#FFF] text-[16px] lg:text-[20px] font-[300] font-matt italic">
      Durch regelmäßige Sprints, Daily Standups und eine enge Zusammenarbeit mit unseren Kunden sichern wir maximale Transparenz und zielgerichtete Ergebnisse.
    </p>

  </div>
</section>

          {/* Fazit Section */}
          <section className="lg:w-[905px] mb-12 mt-[50px] flex flex-col lg:flex-row-reverse gap-[20px]">
            {/* Text Section */}
            <div className="lg:w-[40%]">
              <img 
                src="/images/theekspertsagileblog.png" // Replace with actual image path
                alt="Vorteile für Unternehmen"
                className="w-full lg:h-[470px] object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-[60%] mb-8 lg:mb-0">
              <h2 className="text-[28px] font-matt font-[900] text-black mb-4 uppercase">Fazit: Agile ist mehr als nur ein Buzzword</h2>
              <p className="list-disc space-y-6 text-black font-[300] text-[16px] lg:text-[20px] lg:leading-[33px] font-matt">
                Agile Projektleitung ist kein Trend, sondern ein Fundament erfolgreicher digitaler Zusammenarbeit. Für uns bei the eksperts ist es nicht nur Methode, sondern Haltung: offen, kundenorientiert, und bereit für Veränderung.<br/><br/>
                Wenn du auf der Suche nach einer Agentur bist, die deine digitale Vision in einem agilen Prozess zum Leben bringt – sei es in Form einer Website, einer App, einem CRM-System oder einem AI-Tool – dann bist du bei the eksperts genau richtig.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-[65px] flex flex-col lg:flex-row justify-left lg:items-center gap-4 lg:gap-8">
            <Link href="/kontakt">
              <button className="flex justify-center items-center gap-2 py-3 px-8 text-white text-lg font-medium rounded-[60px] bg-[#0009FF] hover:bg-blue-700" style={{ width: '299px', padding: '11px 0px' }}>
                Kontaktiere uns
              </button>
            </Link>
            <p className="text-[#000] text-[16px] lg:text-[20px] font-matt font-[300] lg:leading-[33px]">
              und lass uns gemeinsam dein Projekt agil starten.
            </p>
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
          <h4 className="text-[28px] font-matt font-[900] text-black mb-2 uppercase">Nearshoring mit the eksperts:</h4>
          <p className="text-[#5A585A] font-[16px]">Lesedauer: ca. 5 Minuten</p>
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
          <p className="text-[#5A585A] font-[16px]">Lesedauer: ca. 4-5 Minuten</p>
        </div>
      </div>
    </Link>


            {/* Post 3 */}
            <Link href="/blog/der-unterschatzte-boost">
      <div className="bg-white overflow-hidden flex flex-col rounded-[12px]">
        <img
          src="/images/boost1.png" // Replace with actual image path
          alt="Der unterschätzte Boost"
          className="w-full lg:h-[350px] object-cover rounded-[12px]"
        />
        <div className="py-4">
          <h4 className="text-[28px] font-matt font-[900] text-black mb-2 uppercase">Der unterschätzte Boost</h4>
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

export default AgilePost;
