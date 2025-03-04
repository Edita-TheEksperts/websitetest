import React from "react";

const features = [
  {
    id: 1,
    title: "Individuelle Software entwicklung",
    description: "Für Ihre spezifischen Geschäftsanforderungen.",
    image: "/images/the-eksperts-Rectangle 225.png", // Replace with your image path
  },
  {
    id: 2,
    title: "System integration",
    description: "Nahtlose Verbindungen zwischen verschiedenen Plattformen und Systemen.",
    image: "/images/the-eksperts-Rectangle 225 (1).png", // Replace with your image path
  },
  {
    id: 3,
    title: "Web- und App-Entwicklung",
    description: "Moderne, benutzerfreundliche Anwendungen für Web und Mobile.",
    image: "/images/the-eksperts-Rectangle 225 (3).png", // Replace with your image path
  },
  {
    id: 4,
    title: "Automatisierung und Optimierung",
    description: "Effizientere Prozesse durch massgeschneiderte Lösungen.",
    image: "/images/the-eksperts-Rectangle 225 (4).png", // Replace with your image path
  },
];

export default function FeatureSection() {
  return (
    <div className="py-2 lg:px-0 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#EEE] rounded-[20px] p-6 flex flex-col lg:flex-row items-center lg:p-2 lg:rounded-lg lg:bg-transparent"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 ">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[332px] h-[180px] lg:h-[220px] lg:w-[220px]"
              />
            </div>

            {/* Text Section */}
            <div className="lg:ml-2 lg:w-2/3 text-left flex flex-col justify-start items-start h-full mt-[24px] lg:mt-0">
                <h3 className="text-black font-matt font-[900] text-[20px] lg:text-[26px] lg:leading-[37px] uppercase mb-2">
                    {feature.title}
                </h3>
                <p className="text-black font-matt text-[16px] font-[300] lg:leading-[33px] lg:w-[230px]">
                    {feature.description}
                </p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}
