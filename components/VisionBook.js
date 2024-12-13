export default function VisionSection() {
    const features = [
      {
        title: "Top-Qualifikation",
        description: "Unsere Eksperten verfügen über langjährige Erfahrung in verschiedenen Bereichen wie IT, Entwicklung, Design oder Beratung.",
        image: "/images/Rectangle 226 (6).png", // Replace with your image path
      },
      {
        title: "Flexibilität",
        description: "Buchen Sie unsere Eksperten stunden-, tage- oder projektweise – so, wie es Ihre Bedürfnisse erfordern.",
        image: "/images/Rectangle 226 (7).png", // Replace with your image path
      },
      {
        title: "Nahtlose Zusammenarbeit",
        description: "Unsere Spezialisten integrieren sich schnell und effektiv in Ihre bestehenden Teams und Strukturen.",
        image: "/images/Rectangle 226 (8).png", // Replace with your image path
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
                    <h3 className="text-black font-matt font-[900] text-[22px] leading-[37px] uppercase mb-2 lg:w-[280px]">
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
            <h2 className="text-black font-matt text-[24px] lg:text-[28px] lg:leading-[37px] font-[700] mb-4 uppercase">
            Sichern Sie sich jetzt die Unterstützung, die Sie brauchen
            </h2>
            <a
              href="#contact"
              className="font-matt inline-block text-[#0009FF] text-lg lg:text-[28px] lg:leading-[37px] font-[900] uppercase border-[3px] border-[#0009FF] px-5 py-1 hover:bg-[#0009FF] hover:text-white transition duration-300"
            >
              Kontaktieren uns
            </a>
          </div>
        </div>
      </div>
    );
  }
  