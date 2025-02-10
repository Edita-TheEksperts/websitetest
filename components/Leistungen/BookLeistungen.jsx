import React from "react";

const features = [
  {
    id: 1,
    title: "IT und Software entwicklung",
    description: "Erfahrene Entwickler, Engineure und Architekten für Web, Mobile, Backend oder Frontend, Data Science und AI",
    image: "/images/Rectangle 225 (10).png", // Replace with your image path
  },
  {
    id: 2,
    title: "Design und Kreativarbeit",
    description: "Grafikdesigner, UX/UI-Spezialisten und mehr.",
    image: "/images/Rectangle 225 (11).png", // Replace with your image path
  },
  {
    id: 3,
    title: "Strategie und Beratung",
    description: "Experten für Prozessoptimierung, Projektmanagement und digitale Transformation.",
    image: "/images/Rectangle 225 (12).png", // Replace with your image path
  },
  {
    id: 4,
    title: "Support und Betrieb",
    description: "IT-Administratoren und Systemingenieure für reibungslosen Betrieb.",
    image: "/images/Rectangle 225 (13).png", // Replace with your image path
  },
];

export default function FeatureSection() {
  return (
    <div className="py-2 lg:px-4 max-w-[1280px] mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
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
                className="w-[332px] h-[180px] lg:h-[230px] lg:w-[300px]"
              />
            </div>

            {/* Text Section */}
            <div className="lg:ml-6 lg:w-2/3 text-left flex flex-col justify-start items-start h-full mt-6 lg:mt-0">
                <h3 className="text-black font-matt font-[900] text-[18px] lg:text-[28px] lg:leading-[37px] uppercase mb-2">
                    {feature.title}
                </h3>
                <p className="text-black font-matt text-[16px] font-[300] lg:leading-[30px] lg:w-[280px]">
                    {feature.description}
                </p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}
