import { useState } from "react";

export default function SalesforceSection() {
  const [active, setActive] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Offizieller Salesforce-Partner",
      image: "/images/Article.png", // Image for tab 1
    },
    {
      id: 2,
      title: "Erfahrung und Expertise",
      image: "/images/Article (1).png", // Image for tab 2
    },
    {
      id: 3,
      title: "Umfassendes Know-How",
      image: "/images/Article21.png", // Image for tab 3
    },
  ];

  return (
    <div className="p-4 md:p-2 lg:p-2 mt-14 rounded-lg max-w-[1280px] mx-auto">
      {/* Tab Buttons */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center px-4 py-3 lg:px-6 lg:py-4 transition-all duration-300 font-matt uppercase text-sm md:text-[40px] lg:text-[28px] font-[900] lg:leading-[37px] rounded-t-[20px] ${
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
      <div className="flex flex-col lg:flex-row items-center">
        {/* Image Content */}
        <div className="flex-shrink-0 w-full">
          <img
            src={tabs.find((tab) => tab.id === active)?.image}
            alt={tabs.find((tab) => tab.id === active)?.title}
            className="rounded-b-[20px] w-full max-h-[340px] max-w-none mx-auto lg:mx-0" // Full width image for all tabs
          />
        </div>
      </div>
    </div>
  );
}
