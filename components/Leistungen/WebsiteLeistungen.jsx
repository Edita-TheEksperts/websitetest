import React from "react";

const features = [
  {
    id: 1,
    title: "Design und Entwicklung",
    description: "Von der Idee bis zur Umsetzung – alles aus einer Hand.",
    image: "/images/Ideatheeksperts.png", // Replace with your image path
  },
  {
    id: 2,
    title: "E-Commerce-Websites",
    description: "Optimiert für Verkäufe und nahtlose Transaktionen.",
    image: "/images/ecommercetheeksperts.png", // Replace with your image path
  },
  {
    id: 3,
    title: "Content Management Systeme",
    description: "Einfach zu bedienen, damit Sie Ihre Inhalte selbst pflegen können.",
    image: "/images/contenttheeksperts.png", // Replace with your image path
  },
  {
    id: 4,
    title: "Wartung und Support",
    description: "Auch nach dem Launch sind wir für Sie da.",
    image: "/images/wartungtheeksperts.png", // Replace with your image path
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-white py-2 lg:px-4 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col lg:flex-row items-center lg:p-2 rounded-lg"
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
            <div className="lg:ml-6 lg:w-2/3 text-left flex flex-col justify-start items-start h-full mb-8 md:mb-0">
                <h3 className="text-black font-matt font-[900] text-[18px] lg:text-[28px] lg:leading-[37px] uppercase mb-2 mt-6 md:mt-0">
                    {feature.title}
                </h3>
                <p className="text-black font-matt text-[14px] lg:text-[20px] font-[300] lg:leading-[33px] lg:w-[230px] w-[290px]">
                    {feature.description}
                </p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}
