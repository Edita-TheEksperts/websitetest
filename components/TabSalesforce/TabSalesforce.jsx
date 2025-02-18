import { useState } from "react";

export default function SalesforceSection() {
  const [active, setActive] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Offizieller Salesforce-Partner",
      image: "/images/Article.png",
    },
    {
      id: 2,
      title: "Erfahrung und Ekspertise",
      image: "/images/Article (1).png",
    },
    {
      id: 3,
      title: "Umfassendes Know-How",
      image: "/images/Article21.png",
    },
  ];

  return (
    <div className="p-4 md:p-2 lg:p-2 mt-14 rounded-lg max-w-[1280px] mx-auto">
      {/* Tab Buttons & Content */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:justify-start">
        {tabs.map((tab) => (
          <div key={tab.id} className="w-full">
            {/* Tab Button */}
            <button
              onClick={() => setActive(tab.id)}
              className={`flex items-center px-4 py-3 lg:px-6 lg:py-4 transition-all duration-300 font-matt uppercase text-[16px] md:text-[20px] lg:text-[28px] font-[900] lg:leading-[37px] rounded-t-[20px] w-full text-left ${
                active === tab.id
                  ? "bg-[#F1F1F1] text-black"
                  : active === tab.id + 1 || active === tab.id - 1
                  ? "bg-[#D9D9D9] text-[#5A585A]"
                  : "bg-[#989898] text-[#5A585A]"
              }`}
              style={{
                maxWidth: "427px",
                height: "100%",
                maxHeight: "127px",
                padding: "17px 30px",
              }}
            >
              {tab.title}
            </button>

            {/* Image for Active Tab (Only on Mobile) */}
            <div className={`lg:hidden transition-opacity duration-500 ${active === tab.id ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
              <img
                src={tab.image}
                alt={tab.title}
                className="w-full rounded-b-[20px] lg:mt-2"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Image Display */}
      <div className="hidden lg:block w-full">
        <img
          src={tabs.find((tab) => tab.id === active)?.image}
          alt={tabs.find((tab) => tab.id === active)?.title}
          className="w-full rounded-b-[20px]"
        />
      </div>
    </div>
  );
}
