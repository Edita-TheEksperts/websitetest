import React, { useRef, useEffect } from "react";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";
const TopSectorPage = () => {
  const scrollContainerRef = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 2;
    const scrollDelay = 20;
    const duplicateItems = () => {
      const items = Array.from(scrollContainer.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    };

    duplicateItems();

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;
        scrollAmount += scrollStep;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      type: "image",
      imageSrc: "/slideImage/1.webp",
      title: t("carousel.oneMoreDay"),
    },
    {
      type: "image",
      imageSrc: "/slideImage/5.jpg",
      title: t("carousel.fireplaceTales"),
    },
    {
      type: "image",
      imageSrc: "/slideImage/4.jpg",
      title: t("carousel.memoriesLoveFound"),
    },
    {
      type: "image",
      imageSrc: "/slideImage/evente.jpg",
      title: t("carousel.memoriesLoveFound"),
    },
  ];

  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
};
export default TopSectorPage;