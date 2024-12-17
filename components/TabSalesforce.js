import { useState } from "react";

export default function SalesforceSection() {
  const [active, setActive] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Offizieller Salesforce-Partner",
      description:
        "Durch unsere enge Zusammenarbeit mit Salesforce liefern wir maßgeschneiderte Lösungen, die Ihren Erfolg fördern. ",
      image: "/images/vector.png", // Replace with your image path
    },
    {
      id: 2,
      title: "Erfahrung und Expertise",
      image: "/images/SALESFORCE.svg", 
    },
    {
      id: 3,
      title: "Umfassendes Know-How",
      description:
        "Als offizieller Partner bieten wir die modernsten Technologien für Ihre Anforderungen.",
      image: "/images/salesforce 3.svg", 
    },
  ];

  return (
    <div className="bg-white p-4 md:p-2 lg:p-2 mt-14 rounded-lg max-w-[1280px] mx-auto">
      {/* Tab Buttons */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center px-4 py-3 lg:px-6 lg:py-4 transition-all duration-300 font-matt uppercase text-sm md:text-lg lg:text-[28px] font-[900] lg:leading-[37px] rounded-t-[20px] ${
              active === tab.id
                ? "bg-[#F1F1F1] text-black"
                : active === tab.id + 1 || active === tab.id - 1
                ? "bg-[#D9D9D9] text-[#5A585A]"
                : "bg-[#989898] text-[#5A585A]"
            }`}
            style={{
              width: "100%",
              maxWidth: "427px",
              height: "100%",
              maxHeight: "127px",
              padding: "17px 30px",
              justifyContent: "flex-start", // Align content to the left
              textAlign: "left", // Align text to the left
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-8 lg:px-24 lg:py-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-black text-sm md:text-base lg:text-[28px] lg:leading-[37px] font-[400] leading-relaxed uppercase font-matt">
            {tabs.find((tab) => tab.id === active)?.description}
          </p>
        </div>

        {/* Image Content */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <img
            src={tabs.find((tab) => tab.id === active)?.image}
            alt={tabs.find((tab) => tab.id === active)?.title}
            className="max-w-[150px] md:max-w-[200px] lg:max-w-[300px] mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
