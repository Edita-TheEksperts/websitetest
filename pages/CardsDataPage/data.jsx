// pages/data.js

import React from 'react';

// The data you're exporting
export const projects = [
    {
        title: "Salesforce",
        title1:"Ihr Partner für individuelle und nachhaltige Salesforce Lösungen.",
        description: "Als offizieller Salesforce-Partner helfen wir Ihnen, das volle Potenzial von Salesforce zu nutzen. Ob Neuimplementierung, Optimierung oder massgeschneiderte Integrationen – wir stehen Ihnen zur Seite.",
        title2: "Kontaktieren Sie uns und starten Sie Ihre Salesforce-Reise!",
        src: "../images/Salesforce (1).png",
        link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
        color: 'radial-gradient(circle, #ffffff, #b3e5fc, #29b6f6)'
    },
    {
        title: "Website",
        title1:"Ihre digitale Visitenkarte– modern, effizient und einzigartig.",
        description: "Wir gestalten Websites, die gut aussehen und performen– ob Unternehmensseite, E-Commerce oder Portfolio. Individuelles Design: Massgeschneidert für Ihre Marke. Benutzerfreundlich: Intuitive Navigation und responsives Design. SEO & Performance: Optimiert für Suchmaschinen, mit schnellen Ladezeiten und sicherer Technologie.",
        title2: "Starten Sie jetzt Ihre digitale Transformation!",
        src: "./images/Website (1).png",
        link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
        color: 'radial-gradient(105.57% 105.57% at 50% 50%, #FFF 0%, #969AFF 100%)'
    },
    {
        title: "Custom Development",
        title1:"Individuelle Softwarelösungen für einzigartige Anforderungen.",
        description: "Keine Herausforderung ist zu gross. Wir entwickeln skalierbare und zukunftssichere Anwendungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind– von speziellen Modulen bis hin zu komplexen Systemen. Unsere Lösungen integrieren sich nahtlos in bestehende Systeme und nutzen modernste Technologien, um Ihrem Unternehmen einen Wettbewerbsvorteil zu verschaffen.",
        title2: "Entwickeln Sie Ihre massgeschneiderte Lösung – starten Sie jetzt!",
        src: "/images/Custom Development.png",
        link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
        color: 'conic-gradient(from 187deg at 16.05% 158.56%, #CFFF49 0deg, #E24125 180deg, #0009FF 360deg)'
    },
    {
        title: "Graphic Design",
        title1:"Visuelle Kommunikation, die Eindruck macht.",
        description: "Unser kreatives Team gestaltet Designs, die Ihre Botschaft klar transportieren und Ihre Marke im Gedächtnis bleiben lassen. Ob Logo, komplette Markenidentität, Print oder Digital - wir liefern durchdachte und frische Ideen, die Ihre Zielgruppe begeistern.",
        title2: "Zeigen Sie Ihre Marke von ihrer besten Seite.",
        src: "../images/Graphic Design.png",
        link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
        color: 'radial-gradient(105.57% 105.57% at 50% 50%, #D83200 0%, #0009FF 50%)'
    },
    {
      title: "Book your Ekspert",
      title1:"Ihre Expertise - flexibel und auf Abruf.",
      description: "Mit unserem Book Your Ekspert-Service bringen erfahrene Fachkräfte Ihre Projekte individuell und flexibel voran. Ob IT, Design, Entwicklung oder Beratung - buchen Sie unsere Eksperten genau dann, wenn Sie sie brauchen. Unsere Spezialistenintegrieren sich nahtlos in Ihr Team und Ihre Prozesse.",
      title2: "Warum warten, wenn Sie Unterstützung brauchen?",
      src: "../images/Book your ekspert 1.png",
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#0009FF"
    }
  ]

// The React component using the `projects` data
const DataPage = () => {
    return (
        <div>
            <h1>Our Projects</h1>
            {projects.map((project, index) => (
                <div key={index} style={{ backgroundColor: project.color, marginBottom: '20px' }}>
                    <h2>{project.title}</h2>
                    <h3>{project.title1}</h3>
                    <p>{project.description}</p>
                    <h4>{project.title2}</h4>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">See More</a>
                    <img src={project.src} alt={project.title} style={{ width: '100%', height: 'auto' }} />
                </div>
            ))}
        </div>
    );
};

export default DataPage; // Ensure the component is exported as default
