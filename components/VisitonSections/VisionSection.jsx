import Link from "next/link";
export default function VisionSection() {
    const features = [
      {
        title: "Individuelles Design",
        description: "Wir gestalten eine Website, die Ihre Marke perfekt repräsentiert.",
        image: "/images/Rectangle 226.png", // Replace with your image path
      },
      {
        title: "Responsives Layout",
        description: "Ihre Website sieht auf jedem Gerät – ob Desktop, Tablet oder Smartphone – grossartig aus.",
        image: "/images/Rectangle 226 (1).png", // Replace with your image path
      },
      {
        title: "SEO-Optimierung",
        description: "Wir sorgen dafür, dass Ihre Seite gefunden wird.",
        image: "/images/Rectangle 226 (2).png", // Replace with your image path
      },
    ];
  
    return (
      <div className="bg-white py-12 lg:py-2">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-0">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 "
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[278px] object-cover rounded-lg mb-4"
                />
             <div className="text-center lg:text-left">
                    <h3 className="text-black font-matt font-[900] text-[22px] leading-[37px] uppercase mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-black font-matt text-[20px] font-[300] leading-[33px]">
                        {feature.description}
                    </p>
                    </div>
              </div>
            ))}
          </div>
  
          {/* Call-to-Action */}
          <div className="text-center">
          <Link href="/contact" className="block">
            <h2 className="text-black font-matt text-[24px] lg:text-[28px] lg:leading-[37px] font-[700] mb-4 uppercase">
              Lassen Sie uns Ihre Vision Wirklichkeit werden lassen
            </h2>
            <a
              href="#contact"
              className="font-matt inline-block text-[#0009FF] text-lg lg:text-[28px] lg:leading-[37px] font-[900] uppercase border-[3px] border-[#0009FF] px-4 py-1 hover:bg-[#0009FF] hover:text-white transition duration-300"
            >
              Jetzt Kontakt aufnehmen!
            </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  