import React from "react";

const features = [
  {
    id: 1,
    title: "Logo - und Marken entwicklung",
    description: "Der erste Eindruck zählt – wir machen ihn unvergesslich.",
    image: "/images/the-eksperts-Rectangle 225 (5).png", // Replace with your image path
  },
  {
    id: 2,
    title: "Grafikdesign für digitale Medien",
    description: "Perfekt abgestimmt auf Social Media, Websites und digitale Kampagnen.",
    image: "/images/the-eksperts-Rectangle 225 (6).png", // Replace with your image path
  },
  {
    id: 3,
    title: "Printdesign",
    description: "Hochwertige Gestaltung für Flyer, Broschüren, Plakate und mehr.",
    image: "/images/the-eksperts-Rectangle 225 (7).png", // Replace with your image path
  },
  {
    id: 4,
    title: "Individuelle Illustrationen",
    description: "Einzigartige Kunstwerke, die Ihre Marke visuell aufwerten.",
    image: "/images/the-eksperts-Rectangle 225 (8).png", // Replace with your image path
  },
];

export default function FeatureSection() {
  return (
    <div className="py-2 lg:px-4 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#EEE] lg:bg-transparent flex flex-col lg:flex-row items-center p-4 lg:p-2 rounded-[20px]"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 ">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[340px] h-[180px] lg:h-[220px] lg:w-[220px]"
              />
            </div>

            {/* Text Section */}
            <div className="lg:ml-6 lg:w-2/3 text-left flex flex-col justify-start items-start h-full">
                <h3 className="text-black font-matt font-[900] text-[20px] lg:text-[26px] lg:leading-[37px] uppercase mb-2 mt-[24px] lg:mt-0">
                    {feature.title}
                </h3>
                <p className="text-black font-matt text-[16px] lg:text-[18px] font-[300] lg:leading-[33px] lg:w-[230px]">
                    {feature.description}
                </p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}
