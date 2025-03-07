import Link from "next/link";
const LandingPageFooter = () => {
    return (
        <footer className="bg-[#F1F1F1] w-full mx-auto px-2 lg:px-0">
        <div className="max-w-[1310px] flex-shrink-0 py-2 px-4 mx-auto h-[164px] flex items-center">
          <div className="flex md:flex-row flex-col justify-between md:items-center  items-start w-full">
            <div className="text-[#000] text-right font-[400] font-montserrat text-[15px] font-matt leading-[24px] tracking-[-0.225px]">
              {/* Left Text Section */}
              <p>© the eksperts, 2025.</p>
            </div>
            <div className="flex space-x-[24px] mt-10 md:mt-0">
              {/* Right Navigation Section */}
              <p className="text-[15px] font-matt leading-[24px]">
                  <a href="mailto:info@the-eksperts.com" class="hover:text-gray-600">info@the-eksperts.com</a>
              </p>
              <p className="text-[15px] font-matt leading-[24px]">
                  <a href="tel:+41799213000" class="hover:text-gray-600">+41 79 921 30 00</a>
              </p>
            </div>
            <div className="flex space-x-[24px] mt-10 md:mt-0">
              {/* Right Navigation Section */}
              <Link
                href="/impressum"
                className="text-[#000] text-[15px] font-[400] leading-[24px] font-matt tracking-[-0.225px]"
              >
                Impressum
              </Link>
              <Link
                href="/disclaimer"
                className="text-[#000] text-[15px] font-[400] leading-[24px] font-matt tracking-[-0.225px]"
              >
                Disclaimer
              </Link>
              <Link
                href="/datenschutz"
                className="text-[#000] text-[15px] font-[400] leading-[24px] font-matt tracking-[-0.225px]"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
    );
  };
  
  export default LandingPageFooter;
  