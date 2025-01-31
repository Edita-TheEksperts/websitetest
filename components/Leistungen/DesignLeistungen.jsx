import React from "react";

const features = [
  {
    id: 1,
    title: "Logo - und Marken entwicklung",
    description: "Der erste Eindruck zählt – wir machen ihn unvergesslich.",
    image: "/images/Rectangle 225 (5).png", // Replace with your image path
  },
  {
    id: 2,
    title: "Grafikdesign für digitale Medien",
    description: "Perfekt abgestimmt auf Social Media, Websites und digitale Kampagnen.",
    image: "/images/Rectangle 225 (6).png", // Replace with your image path
  },
  {
    id: 3,
    title: "Printdesign",
    description: "Hochwertige Gestaltung für Flyer, Broschüren, Plakate und mehr.",
    image: "/images/Rectangle 225 (7).png", // Replace with your image path
  },
  {
    id: 4,
    title: "Individuelle Illustrationen",
    description: "Einzigartige Kunstwerke, die Ihre Marke visuell aufwerten.",
    image: "/images/Rectangle 225 (8).png", // Replace with your image path
  },
];

export default function FeatureSection() {
  return (
    <div className="py-2 px-4 lg:px-4 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col lg:flex-row items-center p-2 rounded-lg"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 ">
              <img
                src={feature.image}
                alt={feature.title}
                className="max-w-full h-auto lg:h-[230px] lg:w-[300px]"
              />
            </div>

            {/* Text Section */}
            <div className="ml-6 w-2/3 text-left flex flex-col justify-start items-start h-full">
                <h3 className="text-black font-matt font-[900] text-[22px] lg:text-[28px] lg:leading-[37px] uppercase mb-2">
                    {feature.title}
                </h3>
                <p className="text-black font-matt text-[20px] font-[300] lg:leading-[33px] lg:w-[280px]">
                    {feature.description}
                </p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}
