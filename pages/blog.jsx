import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    image: "/images/Salesforce--Consultant.png",
    alt: "Was unterscheidet dich von anderen Salesforce Consultants?",
    title: "Was unterscheidet dich von anderen Salesforce Consultants?",
    readTime: "Lesedauer: ca. 3–4 Minuten",
    categories: [" Salesforce & CRM"],
  },
  {
    href: "/blog/der-start-deiner-salesforce-zertifizierungs-reise",
    image: "/images/Salesforce-Journe.png",
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
    image: "/images/blogDer unterschätzte Boost-the eksperts.svg",
    alt: "Der unterschätzte Boost",
    title: "Der unterschätzte Boost",
    readTime: "Lesedauer: ca. 2 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },

  {
    href: "/blog/website-erstellen-schweiz-guide",
    image: "/images/Blog1-the eksperts.svg",
    alt: "Der ultimative Guide: Website erstellen Schweiz – Ihr Sprungbrett zum Online-Erfolg",
    title:
      "Der ultimative Guide: Website erstellen Schweiz – Ihr Sprungbrett zum Online-Erfolg",
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
    alt: "Website für KMU Schweiz: So stärken Sie Ihr kleines oder mittleres Unternehmen digital",
    title:
      "Website für KMU Schweiz: So stärken Sie Ihr kleines oder mittleres Unternehmen digital",
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
    alt: "Was kostet eine Website für ein KMU in der Schweiz? Transparenz und ROI",
    title:
      "Was kostet eine Website für ein KMU in der Schweiz? Transparenz und ROI",
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
    alt: "Website selbst erstellen oder Agentur beauftragen? Der grosse Vergleich für Ihr Schweizer Business ",
    title:
      "Website selbst erstellen oder Agentur beauftragen? Der grosse Vergleich für Ihr Schweizer Business ",
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
    alt: "WordPress Website Schweiz: Warum die meistgenutzte Plattform auch für Sie die Richtige sein könnte",
    title:
      "WordPress Website Schweiz: Warum die meistgenutzte Plattform auch für Sie die Richtige sein könnte",
    readTime: "Lesedauer: ca. 2 Minuten",
    categories: ["CMS & Plattformen", "SEO & Online Marketing"],
  },
  {
    href: "/blog/website-baukaesten-schweiz",
    image: "/images/blog6-the-eksperts.svg",
    alt: "Wix, Jimdo, Editor X & Co.: Website Baukästen für Einsteiger – Was geht, was nicht?",
    title:
      "Wix, Jimdo, Editor X & Co.: Website Baukästen für Einsteiger – Was geht, was nicht?",
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
    alt: "Webagentur und Digitalagentur St. Gallen: Ihr digitaler Partner im Herzen der Ostschweiz ",
    title:
      "Webagentur und Digitalagentur St. Gallen: Ihr digitaler Partner im Herzen der Ostschweiz",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: ["  Lokale Präsenz & Standorte", ""],
  },
  {
    href: "/blog/website-coiffeur-friseur-schweiz",
    image: "/images/blog8-the eksperts.svg",
    alt: "Website für Coiffeur / Friseur: So gewinnen Sie online neue Kunden in der Schweiz",
    title:
      "Website für Coiffeur / Friseur: So gewinnen Sie online neue Kunden in der Schweiz",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: ["Zielgruppen & Branchen"],
  },
  {
    href: "/blog/moderne-business-website-design-trends",
    image: "/images/blog9-the eksperts.svg",
    alt: "Moderne Business-Website: Design-Trends, die Ihr Schweizer Unternehmen 2025 braucht",
    title:
      "Moderne Business-Website: Design-Trends, die Ihr Schweizer Unternehmen 2025 braucht",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },
  {
    href: "/blog/responsive-webdesign-schweiz",
    image: "/images/blog10-the eksperts.svg",
    alt: "Responsive Webdesign Schweiz: Warum Ihre Website auf jedem Gerät perfekt aussehen muss",
    title:
      "Responsive Webdesign Schweiz: Warum Ihre Website auf jedem Gerät perfekt aussehen muss",
    readTime: "Lesedauer: ca. 3 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },
  {
    href: "/blog/mobile-first-website-schweiz",
    image: "/images/blog11-the eksperts.svg",
    alt: "Mobile First Website Schweiz: Der Schlüssel zum Erfolg im Zeitalter des Smartphones",
    title:
      "Mobile First Website Schweiz: Der Schlüssel zum Erfolg im Zeitalter des Smartphones",
    readTime: "Lesedauer: ca. 3 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },
  {
    href: "/blog/ux-ui-design-website-kundenbindung",
    image: "/images/blog12-the eksperts.svg",
    alt: "UX/UI Design Website: Wie eine gute User Experience Ihre Kunden bindet",
    title:
      "UX/UI Design Website: Wie eine gute User Experience Ihre Kunden bindet",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: ["Webdesign & User Experience (UX/UI)"],
  },
  {
    href: "/blog/landing-page-erstellen-schweiz",
    image: "/images/blog13-the eksperts.svg",
    alt: "Landing Page erstellen Schweiz: So generieren Sie mehr Leads und Verkäufe",
    title:
      "Landing Page erstellen Schweiz: So generieren Sie mehr Leads und Verkäufe",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: ["Website Erstellung & Planung"],
  },
  {
    href: "/blog/onepager-freelancer-schweiz",
    image: "/images/blog14-the eksperts.svg",
    alt: "Onepager für Freelancer und Selbständige: Minimalistisch und doch wirkungsvoll",
    title:
      "Onepager für Freelancer und Selbständige: Minimalistisch und doch wirkungsvoll",
    readTime: "Lesedauer: ca. 3 Minuten",
    categories: ["Website Erstellung & Planung", "Zielgruppen & Branchen"],
  },
  {
    href: "/blog/website-anwaelte-zahnaerzte-architekten",
    image: "/images/blog15-the eksperts.svg",
    alt: "Branchenfokus: Ihre Website als digitaler Anker für Anwälte, Zahnärzte & Architekten in der Schweiz",
    title:
      "Branchenfokus: Ihre Website als digitaler Anker für Anwälte, Zahnärzte & Architekten in der Schweiz",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: ["Zielgruppen & Branchen"],
  },
  {
    href: "/blog/digitalagentur-zuerich-wirtschaft ",
    image: "/images/blog16-the-eksperts.svg",
    alt: "Digitalagentur Zürich: Ihr Wegbereiter im Zentrum der Schweizer Wirtschaft & Technologie",
    title:
      "Digitalagentur Zürich: Ihr Wegbereiter im Zentrum der Schweizer Wirtschaft & Technologie",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: [" Lokale Präsenz & Standorte"],
  },
  {
    href: "/blog/seo-website-erstellen-schweiz",
    image: "/images/blog17-the eksperts.svg",
    alt: "SEO-optimierte Website erstellen lassen: Ihr Weg zu mehr Sichtbarkeit in der Schweiz",
    title:
      "SEO-optimierte Website erstellen lassen: Ihr Weg zu mehr Sichtbarkeit in der Schweiz",
    readTime: "Lesedauer: ca. 5 Minuten",
    categories: ["SEO & Online Marketing"],
  },
  {
    href: "/blog/website-selbststaendige-schweiz",
    image: "/images/blog18-the eksperts.svg",
    alt: " Website für Selbständige: Ihr persönlicher Online-Auftritt, der überzeugt",
    title:
      " Website für Selbständige: Ihr persönlicher Online-Auftritt, der überzeugt",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: [
      "Business Strategie & Digitalisierung",
      "Zielgruppen & Branchen",
    ],
  },
  {
    href: "/blog/website-relaunch-agentur-schweiz",
    image: "/images/blog19-the eksperts.svg",
    alt: "Website-Relaunch Agentur Schweiz: Frischer Wind für Ihre bestehende Online-Präsenz",
    title:
      "Website-Relaunch Agentur Schweiz: Frischer Wind für Ihre bestehende Online-Präsenz",
    readTime: "Lesedauer: ca. 4 Minuten",
    categories: ["Website Erstellung & Planung", "Agentur & Zusammenarbeit "],
  },
  {
    href: "/blog/jetzt-website-erstellen-schweiz",
    image: "/images/blog20-the eksperts.svg",
    alt: " Jetzt Website erstellen lassen: Warum The Eksperts Ihr idealer Partner in der Schweiz ist",
    title:
      " Jetzt Website erstellen lassen: Warum The Eksperts Ihr idealer Partner in der Schweiz ist",
    readTime: "Lesedauer: ca. 3 Minuten",
    categories: ["Website Erstellung & Planung", "Agentur & Zusammenarbeit "],
  },
];

const categories = [
  "Alle",
  ...new Set(
    blogPosts
      .flatMap((post) => post.categories)
      .map((c) => c.trim())
      .filter((c) => c)
  ),
];

const Blog = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [modalCategories, setModalCategories] = useState([]);

  const openModal = (categories) => setModalCategories(categories);
  const closeModal = () => setModalCategories([]);

  const filteredPosts =
    selectedCategory === "Alle"
      ? blogPosts
      : blogPosts.filter((post) =>
          post.categories.some((cat) => cat.trim() === selectedCategory)
        );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Head>
        <title>Blog | the eksperts</title>
        <meta
          name="description"
          content="Latest blog posts and insights from the eksperts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png"
        />
      </Head>

      <main className="font-matt max-w-[1440px] mx-auto px-4 mb-[100px]">
        <header className="text-center mt-[100px] mb-[60px]">
          <h1 className="text-[70px] lg:text-[120px] leading-[1] font-black uppercase text-gray-900 tracking-tight">
            Gut zu wissen
          </h1>
          <p className="text-lg font-light text-gray-600 mt-3">
            Sie haben die eksperts gefunden. Entdecken Sie unsere neuesten
            Blogposts!
          </p>
        </header>

        <div className="lg:hidden max-h-[220px] overflow-y-auto mb-6 space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex flex-wrap justify-center gap-4 mb-[60px]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white via-white to-transparent pointer-events-none block lg:hidden"></div>
        {/* Optional gradient edge on right */}
        <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white via-white to-transparent pointer-events-none block lg:hidden"></div>

        <section className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, index) => {
              const trimmedCategories = post.categories.map((c) => c.trim());
              const visibleCategories = trimmedCategories.slice(0, 2);
              const hiddenCategories = trimmedCategories.slice(2);

              return (
                <div
                  key={index}
                  className="relative flex flex-col justify-between bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div>
                    <div className="relative">
                      <Link href={post.href} legacyBehavior>
                        <a>
                          <img
                            src={post.image}
                            alt={post.alt}
                            className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                            {post.readTime}
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div className="p-5">
                      <Link href={post.href} legacyBehavior>
                        <a>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition min-h-[56px]">
                            {post.title}
                          </h3>
                        </a>
                      </Link>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {visibleCategories.map((cat, i) => (
                          <span
                            key={i}
                            className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-medium"
                          >
                            {cat}
                          </span>
                        ))}
                        {hiddenCategories.length > 0 && (
                          <button
                            onClick={() => openModal(trimmedCategories)}
                            className="text-blue-600 text-xs underline cursor-pointer"
                          >
                            +mehr
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <Link href={post.href} legacyBehavior>
                      <a className="text-sm text-blue-700 font-semibold hover:underline">
                        Jetzt lesen →
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="text-center mt-[80px]">
          <Link href="/kontakt">
            <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Kontaktieren Sie uns →
            </button>
          </Link>
        </div>

        {/* Modal */}
        {modalCategories.length > 0 && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
              <button
                className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Alle Kategorien
              </h2>
              <div className="flex flex-wrap gap-2">
                {modalCategories.map((cat, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full uppercase font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
export default Blog;
