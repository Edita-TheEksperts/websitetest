import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; 
 

const blogPosts = [
  {
    href: "/blog/briefing-launch",
    image: "/images/blogVom Briefing zum Launch-the eksperts.svg",
    alt: "Vom Briefing zum Launch",
    title: "Vom Briefing zum Launch",
    readTime: "Lesedauer: ca. 4–5 Minuten",
    categories: ["Agentur & Zusammenarbeit "],
  },
  {
    href: "/blog/salesforce-berater-unterscheidung",
    image: "/images/agile1.png",
    alt: "Salesforce Consultants",
    title: "Salesforce Consultants",
    readTime: "Lesedauer: ca. 3–4 Minuten",
    categories: [" Salesforce & CRM"],
  },
  {
    href: "/blog/der-start-deiner-salesforce-zertifizierungs-reise",
    image: "/images/blogDer unterschätzte Boost-the eksperts.svg",
    alt: "Der Start deiner Salesforce-(Zertifizierung's)-Reise",
    title: "Der Start deiner Salesforce-(Zertifizierung's)-Reise",
    readTime: "Lesedauer: ca. 4–5 Minuten",
    categories: [" Salesforce & CRM "],
  },
  {
    href: "/blog/agile-projektleitung",
    image: "/images/blogAgile Projektleitung-the eksperts.svg",
    alt: " Agile Projektleitung",
    title: " Agile Projektleitung",
    readTime: "Lesedauer: ca. 4–5 Minuten",
    categories: [, "Agentur & Zusammenarbeit "],
  },
  {
    href: "/blog/ai-projektmanagement",
    image: "/images/blogAI-Projektleitung-the eksperts.svg",
    alt: " AI-Projektmanagement ",
    title: " AI-Projektmanagement ",
    readTime: "Lesedauer: ca. 4–5 Minuten",
    categories: ["KI & Technologische Trends"],
  },
  {
    href: "/blog/der-unterschatzte-boost",
    image: "/images/boost1.png",
    alt: "Der unterschätzte Boost",
    title: "Der unterschätzte Boost",
    readTime: "Lesedauer: ca. 2 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },

  {
    href: "/blog/website-erstellen-schweiz-guide",
    image: "/images/Blog1-the eksperts.svg",
    alt: "Website erstellen Schweiz",
    title: "Website erstellen Schweiz",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: [
      "Website Erstellung & Planung",
      "Business Strategie & Digitalisierung",
      "Webdesign & User Experience (UX/UI)",
      "SEO & Online Marketing",
      " Lokale Präsenz & Standorte",
    ],
  },
  {
    href: "/blog/website-kmu-schweiz-digital",
    image: "/images/blog2-the eksperts.svg",
    alt: "Website für KMU Schweiz",
    title: "Website für KMU Schweiz",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: [
      "Business Strategie & Digitalisierung",
      "SEO & Online Marketing",
      "Zielgruppen & Branchen",
      " Lokale Präsenz & Standorte",
    ],
  },
  {
    href: "/blog/website-kmu-schweiz-kosten",
    image: "/images/blog3-the eksperts.svg",
    alt: "Was kostet eine Website für ein KMU in der Schweiz",
    title: "Was kostet eine Website für ein KMU in der Schweiz",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: [
      " Website Erstellung & Planung",
      " Business Strategie & Digitalisierung",
      "SEO & Online Marketing",
      "Zielgruppen & Branchen",
    ],
  },
  {
    href: "/blog/website-selbst-oder-agentur",
    image: "/images/blog4-the eksperts.svg",
    alt: "Website selbst erstellen oder Agentur beauftragen",
    title: "Website selbst erstellen oder Agentur beauftragen",
    readTime: "Lesedauer: ca. 6 Minuten",
    categories: [
      "Website Erstellung & Planung",
      "Business Strategie & Digitalisierung",
      " Webdesign & User Experience (UX/UI)",
      " SEO & Online Marketing",
      " Agentur & Zusammenarbeit ",
    ],
  },
  {
    href: "/blog/wordpress-website-schweiz",
    image: "/images/blog5-the eksperts.svg",
    alt: "WordPress Vorteile",
    title: "WordPress Website Schweiz",
    readTime: "Lesedauer: ca. 2 Minuten",
    categories: ["CMS & Plattformen", "SEO & Online Marketing"],
  },
  {
    href: "/blog/website-baukaesten-schweiz",
    image: "/images/blog6-the-eksperts.svg",
    alt: "Wix, Jimdo, Editor X & Co.",
    title: "Wix, Jimdo, Editor X & Co.",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: [
      "Website Erstellung & Planung",
      "CMS & Plattformen",
      " SEO & Online Marketing",
      "Zielgruppen & Branchen",
    ],
  },
  {
    href: "/blog/webagentur-digitalagentur-st-gallen-ostschweiz",
    image: "/images/blog7-the-eksperts.svg",
    alt: "Webagentur Digitalagentur ",
    title: "Webagentur Digitalagentur",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: ["  Lokale Präsenz & Standorte", ""],
  },
  {
    href: "/blog/website-coiffeur-friseur-schweiz",
    image: "/images/blog8-the eksperts.svg",
    alt: "Website für Coiffeur / Friseur.",
    title: "Website für Coiffeur / Friseur.",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: ["Zielgruppen & Branchen"],
  },
  {
    href: "/blog/moderne-business-website-design-trends",
    image: "/images/blog9-the eksperts.svg",
    alt: "Moderne Business-Website",
    title: "Moderne Business-Website",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },
  {
    href: "/blog/responsive-webdesign-schweiz",
    image: "/images/blog10-the eksperts.svg",
    alt: "Responsive Webdesign Schweiz.",
    title: "Responsive Webdesign Schweiz.",
    readTime: "Lesedauer: ca. 3 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },
  {
    href: "/blog/mobile-first-website-schweiz",
    image: "/images/blog11-the eksperts.svg",
    alt: "Mobile First Website Schweiz",
    title: "Mobile First Website Schweiz",
    readTime: "Lesedauer: ca. 3 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },
  {
    href: "/blog/ux-ui-design-website-kundenbindung",
    image: "/images/blog12-the eksperts.svg",
    alt: "UX/UI Design Website.",
    title: "UX/UI Design Website.",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },
  {
    href: "/blog/landing-page-erstellen-schweiz",
    image: "/images/blog13-the eksperts.svg",
    alt: "Landing Page erstellen Schweiz",
    title: "Landing Page erstellen Schweiz",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: ["Website Erstellung & Planung"],
  },
  {
    href: "/blog/onepager-freelancer-schweiz",
    image: "/images/blog14-the eksperts.svg",
    alt: "Onepager für Freelancer und Selbständige.",
    title: "Onepager für Freelancer und Selbständige",
    readTime: "Lesedauer: ca. 3 Minuten",
    categories: ["Website Erstellung & Planung", "Zielgruppen & Branchen"],
  },
  {
    href: "/blog/website-anwaelte-zahnaerzte-architekten",
    image: "/images/blog15-the eksperts.svg",
    alt: "Branchenfokus",
    title: "Branchenfokus",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: ["Zielgruppen & Branchen"],
  },
  {
    href: "/blog/digitalagentur-zuerich-wirtschaft ",
    image: "/images/blog16-the-eksperts.svg",
    alt: "Digitalagentur Zürich: Ihr Wegbereiter im Zentrum der Schweizer Wirtschaft",
    title:
      "Digitalagentur Zürich: Ihr Wegbereiter im Zentrum der Schweizer Wirtschaft",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: [" Lokale Präsenz & Standorte"],
  },
  {
    href: "/blog/seo-website-erstellen-schweiz",
    image: "/images/blog17-the eksperts.svg",
    alt: "SEO-optimierte Website erstellen lassen",
    title: "SEO-optimierte Website erstellen lassen",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: ["SEO & Online Marketing"],
  },
  {
    href: "/blog/website-selbststaendige-schweiz",
    image: "/images/blog18-the eksperts.svg",
    alt: "Website für Selbständige",
    title: "Website für Selbständige",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: [
      "Business Strategie & Digitalisierung",
      "Zielgruppen & Branchen",
    ],
  },
  {
    href: "/blog/website-relaunch-agentur-schweiz",
    image: "/images/blog19-the eksperts.svg",
    alt: "Website-Relaunch Agentur Schweiz",
    title: "Website-Relaunch Agentur Schweiz",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: ["Website Erstellung & Planung", "Agentur & Zusammenarbeit "],
  },
  {
    href: "/blog/jetzt-website-erstellen-schweiz",
    image: "/images/blog20-the eksperts.svg",
    alt: "Jetzt Website erstellen lassen",
    title: "Jetzt Website erstellen lassen",
    readTime: "Lesedauer: ca. 3 Minuten",
    categories: ["Website Erstellung & Planung", "Agentur & Zusammenarbeit "],
  },
];

const postsWithSlug = blogPosts.map((post) => ({
  ...post,
  slug: post.href.split("/").pop(),
}));

const RelatedPostsCarouselNetflixStyle = () => {
  const router = useRouter();
  const currentSlug = router.asPath.split("/").pop();
  const timer = useRef(null);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("visitedBlogs") || "[]");
    setVisited(saved);
  }, []);

  const filteredPosts = postsWithSlug.filter((p) => p.slug !== currentSlug);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1280px)": { slides: { perView: 5 } },
      "(max-width: 1024px)": { slides: { perView: 3 } },
      "(max-width: 768px)": { slides: { perView: 2 } },
      "(max-width: 500px)": { slides: { perView: 1.2 } },
    },
  });

  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(timer.current);
  }, [instanceRef]);

  return (
    <section className="mt-[100px] px-4">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-extrabold text-gray-900 relative inline-block pb-2 after:content-[''] after:block after:h-[3px] after:w-20 after:bg-blue-600 after:mx-auto after:mt-2">
          Weitere Beiträge
        </h3>
      </div>

      <div className="relative px-4">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-blue-100 shadow-md p-2 rounded-full"
        >
          ←
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-blue-100 shadow-md p-2 rounded-full"
        >
          →
        </button>

        <div
          ref={sliderRef}
          className="keen-slider  cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: "smooth" }}
        >
          {filteredPosts.map((post, index) => {
            const isVisited = visited.includes(post.slug);
            return (
              <div key={index} className="keen-slider__slide">
                <Link
                  href={post.href}
                  className="block group"
                  onClick={() => {
                    const saved = JSON.parse(
                      localStorage.getItem("visitedBlogs") || "[]"
                    );
                    if (!saved.includes(post.slug)) {
                      saved.push(post.slug);
                      localStorage.setItem(
                        "visitedBlogs",
                        JSON.stringify(saved)
                      );
                    }
                  }}
                >
                  <div
                    className={`relative bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition duration-300 ${
                      isVisited ? "opacity-40 pointer-events-none" : ""
                    }`}
                  >
                    {isVisited && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs rounded-full animate-pulse shadow">
                        Gerade gelesen <span className="ml-1">🧠</span>
                      </div>
                    )}
                    <div className="h-[180px] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-[17px] font-bold text-gray-800 mb-1 leading-tight line-clamp-2 group-hover:text-blue-600">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.readTime}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link href="/blog">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md">
            Mehr Beiträge anzeigen →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RelatedPostsCarouselNetflixStyle;
