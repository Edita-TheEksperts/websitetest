// pages/data.js

import React from 'react';

// The data you're exporting
export const projects = [
    {
        title: "Salesforce",
        title1: "Ihr Partner für individuelle und nachhaltige Salesforce Lösungen.",
        description: "Als offizieller Salesforce-Partner helfen wir Ihnen, das volle Potenzial von Salesforce zu nutzen. Ob Neuimplementierung, Optimierung oder massgeschneiderte Integrationen – wir stehen Ihnen zur Seite.",
        title2: "Kontaktieren Sie uns und starten Sie Ihre Salesforce-Reise!",
        src: "/images/the-eksperts-book.png",
        link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
        color: 'radial-gradient(circle, #ffffff, #b3e5fc, #29b6f6)'
    },
    {
        title: "Website",
        title1: "Ihre digitale Visitenkarte– modern, effizient und einzigartig.",
        description: "Wir gestalten Websites, die gut aussehen und performen– ob Unternehmensseite, E-Commerce oder Portfolio. Individuelles Design: Massgeschneiderte für Ihre Marke. Benutzerfreundlich: Intuitive Navigation und responsives Design. SEO & Performance: Optimiert für Suchmaschinen, mit schnellen Ladezeiten und sicherer Technologie.",
        title2: "Starten Sie jetzt Ihre digitale Transformation!",
        src: "/images/the-eksperts-book.png",
        link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
        color: 'radial-gradient(105.57% 105.57% at 50% 50%, #FFF 0%, #969AFF 100%)'
    },
    // Add the rest of the projects here...
];

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
