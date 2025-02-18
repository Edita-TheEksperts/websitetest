import Link from "next/link";

export default function VisionSection() {
    const features = [
      {
        title: "Top-Qualifikation",
        description: "Unsere Eksperten verfügen über langjährige Erfahrung in verschiedenen Bereichen wie IT, Entwicklung, Design oder Beratung.",
        image: "/images/Theeksperts123.png", // Replace with your image path
      },
      {
        title: "Flexibilität",
        description: "Buchen Sie unsere Eksperten stunden-, tage- oder projektweise – so, wie es Ihre Bedürfnisse erfordern.",
        image: "/images/Theeksperts1234.png", // Replace with your image path
      },
      {
        title: "Nahtlose Zusammenarbeit",
        description: "Unsere Spezialisten integrieren sich schnell und effektiv in Ihre bestehenden Teams und Strukturen.",
        image: "/images/Theeksperts12345.png", // Replace with your image path
      },
    ];
  
    return (
      <div className="bg-white py-4 lg:py-2">
        <div className="max-w-[1280px] mx-auto lg:px-0">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 lg:p-6 "
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[278px] object-cover lg:rounded-[8px] mb-4"
                />
             <div className="text-left">
                    <h3 className="text-black font-matt font-[900] text-[24px] leading-[37px] lg:text-[26px] lg:leading-[37px] uppercase mb-2 lg:w-[280px]">
                        {feature.title}
                    </h3>
                    <p className="text-black font-matt text-[16px] leading-[24px] lg:text-[20px] font-[300] lg:leading-[33px]">
                        {feature.description}
                    </p>
                    </div>
              </div>
            ))}
          </div>
  
          {/* Call-to-Action */}
          <div className="text-center">
          <Link href="/contact" className="block">
            <h2 className="text-black font-matt text-[19px] leading-[28px] lg:text-[28px] lg:leading-[37px] font-[700] mb-4 uppercase mt-[50px] lg:mt-0">
            Sichern Sie sich jetzt die Unterstützung, die Sie brauchen
            </h2>
            <a
              href="#contact"
              className="lg:block hidden font-matt lg:inline-block text-white lg:text-[#0009FF] lg:bg-transparent bg-[#0009FF] text-[24px] lg:text-[28px] lg:leading-[37px] font-[900] uppercase border-[3px] border-[#0009FF] py-1 px-6 lg:px-5 lg:py-1 hover:bg-[#0009FF] hover:text-white transition duration-300"
            >
              kontaktieren Sie uns für ein erstes Gespräch! 
            </a>
            <a
              href="#contact"
              className="lg:hidden block font-matt lg:inline-block text-white lg:text-[#0009FF] lg:bg-transparent bg-[#0009FF] text-[28px] lg:text-[28px] leading-[37px] font-[900] uppercase border-[3px] border-[#0009FF] py-1 px-2 lg:px-5 lg:py-1 hover:bg-[#0009FF] hover:text-white transition duration-300"
            >
              kontaktieren Sie uns<br></br> für ein erstes<br></br> Gespräch! 
            </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  