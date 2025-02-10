import Link from "next/link";

export default function VisionSection() {
    const features = [
      {
        title: "Individuelle Entwicklung",
        description: "Jede Lösung wird auf Ihre spezifischen Bedürfnisse abgestimmt.",
        image: "/images/Rectangle 226 (3).png", // Replace with your image path
      },
      {
        title: "Modernste Technologien",
        description: "Wir nutzen innovative Tools und Technologien, um leistungsstarke Software zu schaffen.",
        image: "/images/Rectangle 226 (4).png", // Replace with your image path
      },
      {
        title: "Nahtlose Integration",
        description: "Unsere Lösungen lassen sich problemlos in bestehende Systeme einfügen, um maximale Effizienz zu gewährleisten.",
        image: "/images/Rectangle 226 (5).png", // Replace with your image path
      },
    ];
  
    return (
      <div className="bg-white py-4 lg:py-2 ">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-0">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center lg:p-6 mt-[32px] lg:mt-0"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[278px] object-cover rounded-lg mb-4"
                />
             <div className="text-left">
                    <h3 className="text-black font-matt font-[900] text-[22px] leading-[37px] uppercase mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-black font-matt text-[16px] lg:text-[20px] font-[300] leading-[24px] lg:leading-[33px]">
                        {feature.description}
                    </p>
                    </div>
              </div>
            ))}
          </div>
  
          {/* Call-to-Action */}
          <div className="text-center">
          <Link href="/contact" className="block">

            <h2 className="text-black font-matt text-[20px] lg:text-[28px] lg:leading-[37px] font-[700] mb-4 uppercase mt-[50px] lg:mt-0">
            Erzählen Sie uns von Ihrer Herausforderung – wir entwickeln die passende
            </h2>
            <a
              href="#contact"
              className="font-matt inline-block text-white lg:text-[#0009FF] bg-[#0009FF] lg:bg-transparent text-[24px] lg:text-[28px] lg:leading-[37px] font-[900] uppercase border-[3px] border-[#0009FF] px-5 py-1 hover:bg-[#0009FF] hover:text-white transition duration-300"
            >
              Lösung für Sie!
            </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  