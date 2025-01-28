import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ServiceCard = ({
  title,
  description,
  category,
  isFadingIn,
  isFadingOut,
}) => {
  return (
    <div
      className={`w-full green-card-holder mb-8 text-left sticky top-24`}
      style={{
        opacity: isFadingIn ? 1 : isFadingOut ? 1 : 0,
        zIndex: isFadingIn ? 2 : 1, 
        transition: "opacity 0.5s ease-in-out", 
      }}
    >
      <div className="w-full h-[700px] rounded-3xl green-card-header bg-[#81D98E] border-t-2 border-black text-black px-6 py-7">
        <p className="text-lg text-gray-600">{category}</p>
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isFadingIn: PropTypes.bool.isRequired,
  isFadingOut: PropTypes.bool.isRequired,
};

const Section = ({ sectionData, fadeInIndex, fadeOutIndex }) => {
  return (
    <section className="container mx-auto xl:px-20">
      <div className="grid gap-8 mb-16">
        <div className="right-side-grid-holder">
          {sectionData.services.map((service, serviceIdx) => (
            <ServiceCard
              key={serviceIdx}
              title={service.title}
              description={service.description}
              category={service.category}
              isFadingIn={fadeInIndex === serviceIdx}
              isFadingOut={fadeOutIndex === serviceIdx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  sectionData: PropTypes.object.isRequired,
  fadeInIndex: PropTypes.number.isRequired,
  fadeOutIndex: PropTypes.number.isRequired,
};

const Services = () => {
  const sectionData = [
    {
      services: [
        {
          title: "Product Development",
          description:
            "We offer development-ready environment for product design, implementation, and deployment using Agile methodology.",
          category: "Software Development",
        },
        {
          title: "UX/UI Design",
          description:
            "Design user-friendly and engaging interfaces for your web applications.",
          category: "Design",
        },
        {
          title: "Consulting",
          description:
            "Providing expert advice to optimize your business processes and increase productivity.",
          category: "Consulting",
        },
        {
          title: "Maintenance",
          description:
            "We provide ongoing support and maintenance to ensure the smooth running of your systems.",
          category: "Support",
        },
      ],
    },
  ];

  const [fadeInIndex, setFadeInIndex] = useState(0); // Start by showing the first card
  const [fadeOutIndex, setFadeOutIndex] = useState(null); // No card fading out initially

  // Track the scroll position and calculate when to fade out and in cards
  const handleScroll = () => {
    const serviceCards = document.querySelectorAll(".green-card-holder");
    const viewportHeight = window.innerHeight;

    let inViewIndex = null;
    let outViewIndex = null;

    serviceCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= viewportHeight) {
        inViewIndex = index; // Kartë që po shfaqet
      }
      if (rect.bottom < 0) {
        outViewIndex = index; // Kartë që po largohet
      }
    });

    // Update the fade-out and fade-in indices
    if (inViewIndex !== null && inViewIndex !== fadeInIndex) {
      setFadeOutIndex(fadeInIndex); // Kartë aktuale që duhet të bëjë fade-out
      setFadeInIndex(inViewIndex); // Kartë që do të shfaqet dhe do të bëjë fade-in
    }

    if (outViewIndex !== null && outViewIndex !== fadeOutIndex) {
      setFadeOutIndex(outViewIndex); // Kartë që duhet të bëjë fade-out
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fadeInIndex, fadeOutIndex]);

  return (
    <div>
      <div className="container mx-auto space-y-12 py-20 px-4">
        <div className="mx-auto">
          {sectionData.map((section, index) => (
            <Section
              key={index}
              sectionData={section}
              fadeInIndex={fadeInIndex}
              fadeOutIndex={fadeOutIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
