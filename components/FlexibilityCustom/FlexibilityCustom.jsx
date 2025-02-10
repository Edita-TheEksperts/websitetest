import React from 'react';

const features = [
  {
    id: 1,
    title: "Flexibilität",
    description: "Unsere Lösungen passen sich Ihrem Wachstum und sich verändernden Anforderungen an.",
    icon: (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)"}}>
        <path d="M13.0375 11.0394L16.6562 14.6582L20.275 11.0394L16.6563 7.42066L13.0375 11.0394Z" fill="white"/>
        <path d="M2.5803 8.36873L9.33919 8.36872L11.8876 10.9171L10.1939 12.6108C9.63374 13.171 8.87369 13.4839 8.08208 13.4865L2.58029 13.4865L2.5803 8.36873Z" fill="white"/>
        <path d="M6.60389 17.5326L12.5449 11.5916L14.0518 13.0986C15.2169 14.2636 15.2195 16.1545 14.0518 17.3222L10.2227 21.1514L6.60389 17.5326Z" fill="white"/>
        <path d="M6.46527 4.46722L10.084 0.848448L14.0342 4.79858C15.1335 5.89789 15.1335 7.68098 14.0342 8.78028L12.4062 10.4082L6.46527 4.46722Z" fill="white"/>
        </svg>
    ),
  },
  {
    id: 2,
    title: "Effizienz",
    description: "Wir optimieren Workflows und schaffen Automatisierungen, die Zeit und Ressourcen sparen.",
    icon: (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{ transform: "rotate(180deg)"}}>
        <path d="M13.0375 11.0394L16.6562 14.6582L20.275 11.0394L16.6563 7.42066L13.0375 11.0394Z" fill="white"/>
        <path d="M2.5803 8.36873L9.33919 8.36872L11.8876 10.9171L10.1939 12.6108C9.63374 13.171 8.87369 13.4839 8.08208 13.4865L2.58029 13.4865L2.5803 8.36873Z" fill="white"/>
        <path d="M6.60389 17.5326L12.5449 11.5916L14.0518 13.0986C15.2169 14.2636 15.2195 16.1545 14.0518 17.3222L10.2227 21.1514L6.60389 17.5326Z" fill="white"/>
        <path d="M6.46527 4.46722L10.084 0.848448L14.0342 4.79858C15.1335 5.89789 15.1335 7.68098 14.0342 8.78028L12.4062 10.4082L6.46527 4.46722Z" fill="white"/>
        </svg>
    ),
  },
  {
    id: 3,
    title: "Transparenz",
    description: "Sie bleiben während des gesamten Entwicklungsprozesses immer auf dem Laufenden.",
    icon: (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)"}}>
        <path d="M13.0375 11.0394L16.6562 14.6582L20.275 11.0394L16.6563 7.42066L13.0375 11.0394Z" fill="white"/>
        <path d="M2.5803 8.36873L9.33919 8.36872L11.8876 10.9171L10.1939 12.6108C9.63374 13.171 8.87369 13.4839 8.08208 13.4865L2.58029 13.4865L2.5803 8.36873Z" fill="white"/>
        <path d="M6.60389 17.5326L12.5449 11.5916L14.0518 13.0986C15.2169 14.2636 15.2195 16.1545 14.0518 17.3222L10.2227 21.1514L6.60389 17.5326Z" fill="white"/>
        <path d="M6.46527 4.46722L10.084 0.848448L14.0342 4.79858C15.1335 5.89789 15.1335 7.68098 14.0342 8.78028L12.4062 10.4082L6.46527 4.46722Z" fill="white"/>
        </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <div
    className="lg:p-4 py-6 lg:py-0 rounded-lg mx-auto flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-[36px]"
    style={{ maxWidth: "1276px" }} // Use max-width for better responsiveness
  >
    {/* Left Image Section */}
    <div className="lg:block hidden w-full lg:w-1/2">
      <img
        src="/images/Frame 175 (1).png"
        alt="Idealen Partner"
        className="w-full h-auto lg:h-[560px] object-cover rounded-[20px]"
      />
    </div>
  
    {/* Right Features Section */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex items-center gap-8 lg:gap-4 bg-[#0009FF] text-white lg:p-6 p-6 rounded-[20px] lg:flex-col flex-row"
        >
          <div className="text-left w-full sm:w-auto">
            <h3 className="text-[24px] font-[900] lg:text-[28px] lg:leading-[37px] font-matt uppercase mb-2">
              {feature.title}
            </h3>
            <p className="text-[16px] font-[300] lg:text-[20px] lg:leading-[33px] font-matt leading-relaxed">
              {feature.description}
            </p>
          </div>
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#0A0E80] mt-4 sm:mt-0">
            {feature.icon}
          </div>
        </div>
      ))}
    </div>
  </div>
  
  
  );
}
