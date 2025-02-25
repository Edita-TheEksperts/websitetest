import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const LandingPageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const router = useRouter(); // Initialize the router
  let menuTimeout;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(menuTimeout); 
    setIsServicesMenuOpen(true);
  };

  const handleMouseLeave = () => {
    menuTimeout = setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 200);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to determine if the link is active
  const isActive = (path) => {
    return router.pathname === path ? 'font-[700] font-matt text-[#0009FF]' : '';
  };

  return (
    <header
      className="bg-white sticky top-0 z-[60] px-4 py-4 text-[17px] font-normal font-matt"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/web-analysis" className='hidden lg:block'>
          <svg  xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 488.1 68.2"
            width="130"
            height="20">
          <g>
            <g id="Layer_1">
              <g>
                <g>
                  <rect x="432.8" y="35.4" width="19.8" height="19.8"/>
                  <path d="M452.7,0v32.5h-8.3c-6.4,0-11.6-5.2-11.6-11.6V0h19.8Z"/>
                  <path d="M488.1,35.4v19.8h-21.6c-6,0-10.9-4.9-10.9-10.9v-8.9h32.5Z"/>
                  <path d="M488,14l-18.5,18.5h-14v-9.3c0-3.1,1.2-6,3.4-8.2L474,0l14,14Z"/>
                </g>
                <g>
                  <path d="M12.1,23v22.8c0,1.9.4,3.2,1.2,3.8.8.6,2.2.9,4.2.9s2.8,0,4.7-.2v5c-2,.1-3.7.2-5.2.2-2.8,0-4.8-.3-6.3-.8-1.4-.5-2.5-1.4-3.2-2.8-.7-1.3-1-3.3-1-5.9v-23.2H0v-4.2h6.5v-9.5h5.4l.2,9.5h10v4.2h-10Z"/>
                  <path d="M59,31v24.2h-5.6v-22.4c0-3-.9-5.4-2.7-7.2-1.8-1.8-4.1-2.7-7.1-2.7s-6,1.3-8,3.8c-2,2.5-3,5.7-3,9.8v18.8h-5.7V5.8h5.7v23.6h.4c.5-3.5,1.9-6.3,4.2-8.5,2.4-2.2,5.3-3.2,8.7-3.2s7.1,1.2,9.5,3.7c2.4,2.5,3.6,5.7,3.6,9.7Z"/>
                  <path d="M70.8,37.9c0,4.3,1.2,7.6,3.5,10,2.3,2.3,5.3,3.5,8.9,3.5s5.3-.8,7.3-2.5c1.9-1.7,3.1-3.8,3.7-6.5h5.8c-.5,4.2-2.3,7.5-5.4,10.1-3.1,2.5-6.9,3.8-11.4,3.8s-9.8-1.7-13.1-5-4.9-8.1-4.9-14.5.7-7.5,2.2-10.4c1.5-2.9,3.6-5.1,6.3-6.6,2.7-1.5,5.8-2.3,9.3-2.3s6.3.8,9,2.3c2.6,1.6,4.7,3.7,6.1,6.3,1.4,2.7,2.2,5.6,2.2,8.9v2.7h-29.5ZM70.8,34h23.7c-.2-3.5-1.4-6.3-3.4-8.3-2-2-4.8-3.1-8.2-3.1s-6.2,1-8.4,3c-2.2,2-3.4,4.8-3.7,8.4Z"/>
                  <path d="M125,37.9c0,4.3,1.2,7.6,3.5,10,2.3,2.3,5.3,3.5,8.9,3.5s5.3-.8,7.3-2.5c1.9-1.7,3.1-3.8,3.7-6.5h5.8c-.5,4.2-2.3,7.5-5.4,10.1-3.1,2.5-6.9,3.8-11.4,3.8s-9.8-1.7-13.1-5-4.9-8.1-4.9-14.5.7-7.5,2.2-10.4c1.5-2.9,3.6-5.1,6.3-6.6,2.7-1.5,5.8-2.3,9.3-2.3s6.3.8,9,2.3c2.6,1.6,4.7,3.7,6.1,6.3,1.4,2.7,2.2,5.6,2.2,8.9v2.7h-29.5ZM125,34h23.7c-.2-3.5-1.4-6.3-3.4-8.3-2-2-4.8-3.1-8.2-3.1s-6.2,1-8.4,3c-2.2,2-3.4,4.8-3.7,8.4Z"/>
                  <path d="M160.8,5.8h5.6v18.8c0,3.7,0,8.1-.1,13.4h.3c1.1-1.5,2.2-2.9,3.3-4,1.1-1.2,2.7-2.7,4.5-4.4l11.6-10.8h7.2l-7.5,6.9c-4.9,4.6-7.9,7.2-8.9,7.9v.2h1.5c2.7,0,4.9.7,6.5,2,1.6,1.3,2.8,3.1,3.6,5.4l4.8,14h-5.8l-4-11.3c-.8-2.1-1.6-3.5-2.4-4.3-.8-.8-2.2-1.1-4.1-1.1h-4.9l-5.6,5.2v11.5h-5.6V5.8Z"/>
                  <path d="M194.6,43.6h5.8c.3,2.5,1.3,4.4,3.2,5.8,1.9,1.3,4.5,2,7.8,2s5.2-.5,6.8-1.6c1.7-1.1,2.5-2.5,2.5-4.3s-.4-2.3-1.2-3.1c-.8-.8-2.1-1.3-3.9-1.8l-10.7-2.5c-2.9-.6-5.2-1.8-6.9-3.4-1.7-1.6-2.5-3.7-2.5-6.2s1.3-6,4-8c2.6-2,6.3-2.9,10.9-2.9s8.7,1.1,11.5,3.4c2.8,2.3,4.2,5.4,4.2,9.3h-5.8c0-2.4-.9-4.3-2.7-5.7-1.8-1.4-4.2-2.1-7.3-2.1s-5.1.5-6.8,1.6c-1.7,1-2.5,2.4-2.5,4.2s.5,2.2,1.4,3.1c.9.9,2.2,1.5,3.7,1.9l10.5,2.4c3.4.8,5.9,1.9,7.4,3.4,1.5,1.5,2.3,3.5,2.3,6.2s-1.4,6.1-4.1,8.1c-2.7,2-6.4,3-11,3s-9.2-1.1-12.1-3.3c-2.9-2.2-4.5-5.3-4.7-9.4Z"/>
                  <path d="M266.1,26.9c1.4,2.9,2,6.3,2,10.2s-.7,7.3-2,10.2c-1.4,2.9-3.3,5.2-5.8,6.8-2.5,1.6-5.4,2.4-8.6,2.4s-6.2-1.1-8.6-3.2c-2.4-2.1-4-4.9-4.8-8.5h-.3v23.4h-5.6V18.8h5.4l.3,10.6h.3c.8-3.5,2.4-6.4,4.8-8.5,2.5-2.2,5.4-3.2,8.6-3.2s6.1.8,8.6,2.4c2.5,1.6,4.4,3.9,5.8,6.8ZM262.4,37.1c0-4.3-1.1-7.8-3.3-10.4-2.3-2.6-5.2-3.9-8.9-3.9s-4.5.6-6.3,1.7c-1.8,1.1-3.3,2.7-4.3,4.5-1,1.9-1.5,4-1.5,6.2v3.7c0,2.3.5,4.4,1.5,6.2,1,1.9,2.5,3.4,4.3,4.5,1.8,1.1,3.9,1.7,6.3,1.7,3.7,0,6.6-1.3,8.9-3.9,2.2-2.6,3.3-6.1,3.3-10.4Z"/>
                  <path d="M278.4,37.9c0,4.3,1.2,7.6,3.5,10,2.3,2.3,5.3,3.5,8.9,3.5s5.3-.8,7.3-2.5c1.9-1.7,3.1-3.8,3.7-6.5h5.8c-.5,4.2-2.3,7.5-5.4,10.1-3.1,2.5-6.9,3.8-11.4,3.8s-9.8-1.7-13.1-5c-3.3-3.3-4.9-8.1-4.9-14.5s.7-7.5,2.2-10.4c1.5-2.9,3.6-5.1,6.3-6.6,2.7-1.5,5.8-2.3,9.3-2.3s6.3.8,9,2.3c2.6,1.6,4.6,3.7,6.1,6.3,1.4,2.7,2.2,5.6,2.2,8.9v2.7h-29.5ZM278.4,34h23.7c-.2-3.5-1.4-6.3-3.4-8.3-2-2-4.8-3.1-8.2-3.1s-6.2,1-8.4,3c-2.2,2-3.4,4.8-3.7,8.4Z"/>
                  <path d="M324.9,21.6c2.4-2.2,5.8-3.3,10.4-3.3v5.1c-3.8.2-6.8,1-9.1,2.4-2.2,1.4-3.8,3.4-4.9,6.1-1,2.6-1.5,6.1-1.5,10.4v13h-5.6V18.8h5.4l.2,13.8h.3c.8-5.1,2.4-8.8,4.8-11Z"/>
                  <path d="M350.2,23v22.8c0,1.9.4,3.2,1.2,3.8.8.6,2.2.9,4.2.9s2.8,0,4.7-.2v5c-2,.1-3.7.2-5.2.2-2.8,0-4.8-.3-6.3-.8-1.4-.5-2.5-1.4-3.2-2.8-.7-1.3-1-3.3-1-5.9v-23.2h-6.5v-4.2h6.5v-9.5h5.4l.2,9.5h10v4.2h-10Z"/>
                  <path d="M362.8,43.6h5.8c.3,2.5,1.3,4.4,3.2,5.8,1.9,1.3,4.5,2,7.8,2s5.2-.5,6.8-1.6c1.7-1.1,2.5-2.5,2.5-4.3s-.4-2.3-1.2-3.1c-.8-.8-2.1-1.3-3.9-1.8l-10.7-2.5c-2.9-.6-5.2-1.8-6.9-3.4-1.7-1.6-2.5-3.7-2.5-6.2s1.3-6,4-8c2.6-2,6.3-2.9,10.9-2.9s8.7,1.1,11.5,3.4c2.8,2.3,4.2,5.4,4.2,9.3h-5.8c0-2.4-.9-4.3-2.7-5.7-1.8-1.4-4.2-2.1-7.3-2.1s-5.1.5-6.8,1.6c-1.7,1-2.5,2.4-2.5,4.2s.5,2.2,1.4,3.1c.9.9,2.2,1.5,3.7,1.9l10.5,2.4c3.4.8,5.9,1.9,7.4,3.4,1.5,1.5,2.3,3.5,2.3,6.2s-1.4,6.1-4.1,8.1c-2.7,2-6.4,3-11,3s-9.2-1.1-12.1-3.3c-2.9-2.2-4.5-5.3-4.7-9.4Z"/>
                </g>
              </g>
            </g>
          </g>
        </svg>
          </Link>
          <Link href="/" className='lg:hidden block '>
          <svg 
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 185.9 185.9"
    width="26"
    height="25"
    fill="currentColor"
  >
    <g>
      <g id="Layer_1">
        <g>
          <rect y="119.2" width="66.7" height="66.7"/>
          <path d="M66.7,0v109.5h-27.8C17.4,109.5,0,92.1,0,70.6V0h66.7Z"/>
          <path d="M185.9,119.2v66.7h-72.8c-20.3,0-36.7-16.4-36.7-36.7v-30h109.5Z"/>
          <path d="M185.7,47.2l-62.3,62.3h-47v-31.2c0-10.3,4.1-20.2,11.4-27.5L138.5,0l47.2,47.2Z"/>
        </g>
      </g>
    </g>
  </svg>
                    </Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden space-x-6 px-8 py-4 rounded-[10px] relative">
          <Link href="/web-analysis" className={`text-gray-700 ${isActive('/')}`}>web-analysis</Link>
          <span className="text-gray-300">|</span>
          
          {/* Services Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={`text-gray-700 ${isActive('/services')}`}>Services</span>
            {isServicesMenuOpen && (
              <div className="absolute left-0 mt-2 w-[220px] bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-transform duration-300">
                <ul className="flex flex-col divide-y divide-gray-100">
                  <li className="group">
                    <Link
                      href="/services/salesforce"
                      className={`block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-t-lg transition-colors duration-200 ${isActive('/services/salesforce')}`}
                    >
                      Salesforce
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/services/website"
                      className={`block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 ${isActive('/services/website')}`}
                    >
                      Website
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/services/customdevelopment"
                      className={`block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 ${isActive('/services/customdevelopment')}`}
                    >
                      Custom Development
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/services/graphicdesign"
                      className={`block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-b-lg transition-colors duration-200 ${isActive('/services/graphicdesign')}`}
                    >
                      Graphic Design
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/services/bookyourekspert"
                      className={`block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 ${isActive('/services/bookyourekspert')}`}
                    >
                      Book Your Ekspert
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span className="text-gray-300">|</span>
          <Link href="/agency" className={`text-gray-700 ${isActive('/agency')}`}>Agentur</Link>
          <span className="text-gray-300">|</span>
          <Link href="/projekte" className={`text-gray-700 ${isActive('/projekte')}`}>Projekte</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className={`text-gray-700 ${isActive('/contact')}`}>Kontakt</Link>
        </nav>

        {/* Call to Action */}
        <a href="https://calendly.com/fisnik-salihu-the-eksperts/30min" className="inline-block hidden lg:inline-block hover-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="220" height="40" viewBox="0 0 220 40" fill="none" className="cursor-pointer">
            <path d="M1.5 34V14.2353L15.4504 2H216.5V34H1.5Z" stroke="#0009FF" strokeWidth="3" className="svg-path"/>
            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#0009FF" fontSize="16" fontWeight="bold" className="svg-text">
              Jetzt Gespräch buchen
            </text>
          </svg>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-[#F1F1F1] p-4 mt-2 rounded-lg">
          <ul className="space-y-4 text-center">
            <li><Link href="/" onClick={closeMenu} className={`${isActive('/')}`}>Home</Link></li>
            <li>
              <details>
                <summary className="cursor-pointer">Services</summary>
                <ul className="mt-2 space-y-2 pl-4 font-[300]">
                  <li>
                    <Link href="/services/salesforce" onClick={closeMenu} className={`${isActive('/services/salesforce')}`}>Salesforce</Link>
                  </li>
                  <li>
                    <Link href="/services/website" onClick={closeMenu} className={`${isActive('/services/website')}`}>Website</Link>
                  </li>
                  <li>
                    <Link href="/services/customdevelopment" onClick={closeMenu} className={`${isActive('/services/customdevelopment')}`}>Custom Development</Link>
                  </li>
                  <li>
                    <Link href="/services/graphicdesign" onClick={closeMenu} className={`${isActive('/services/graphicdesign')}`}>Graphic Design</Link>
                  </li>
                  <li>
                    <Link href="/services/bookyourekspert" onClick={closeMenu} className={`${isActive('/services/bookyourekspert')}`}>Book Your Ekspert</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li><Link href="/agency" onClick={closeMenu} className={`${isActive('/agency')}`}>Agentur</Link></li>
            <li><Link href="/projekte" onClick={closeMenu} className={`${isActive('/projekte')}`}>Projekte</Link></li>
            <li><Link href="/contact" onClick={closeMenu} className={`${isActive('/contact')}`}>Kontakt</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default LandingPageHeader;
