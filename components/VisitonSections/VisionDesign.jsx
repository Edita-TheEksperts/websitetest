import Link from "next/link";

export default function VisionSection() {
    const features = [
      {
        title: "Corporate Identity",
        description: "Wir setzen auf modernste Technologien, um beste Performance zu gewährleisten.",
        image: "/images/Rectangle 226 (6).png", // Replace with your image path
      },
      {
        title: "Print & Digital",
        description: "Egal ob Flyer, Broschüren oder Social-Media-Grafiken – wir liefern Designs für jeden Kanal.",
        image: "/images/Rectangle 226 (7).png", // Replace with your image path
      },
      {
        title: "Individuelle Designs",
        description: "Jede Lösung wird speziell auf Ihre Bedürfnisse und Ziele abgestimmt.",
        image: "/images/Rectangle 226 (8).png", // Replace with your image path
      },
    ];
  
    return (
      <div className="bg-white lg:py-2">
        <div className="max-w-[1280px] mx-auto lg:px-0">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mb-6 mb-[65px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center lg:p-6 mt-[35px] lg:mt-0"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[278px] object-cover rounded-lg mb-4"
                />
             <div className="text-left">
                    <h3 className="text-black font-matt font-[900] text-[24px] lg:text-[22px] lg:leading-[37px] uppercase lg:mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-black font-matt text-[16px] lg:text-[20px] font-[300] lg:leading-[33px]">
                        {feature.description}
                    </p>
                    </div>
              </div>
            ))}
          </div>
  
          {/* Call-to-Action */}
          <div className="text-center">
          <Link href="/contact" className="block">

            <h2 className="text-black font-matt text-[20px] lg:text-[28px] lg:leading-[37px] font-[700] mb-4 uppercase">
            lassen Sie uns Ihre Marke gemeinsam neu definieren
            </h2>
            <a
              href="#contact"
              className="font-matt inline-block text-white lg:text-[#0009FF] bg-[#0009FF] lg:bg-transparent text-[24px] lg:text-[28px] lg:leading-[37px] font-[900] uppercase border-[3px] border-[#0009FF] px-6 lg:px-5 py-1 hover:bg-[#0009FF] hover:text-white transition duration-300"
            >
              Kontaktieren uns
            </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
