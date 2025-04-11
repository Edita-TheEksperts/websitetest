import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Layout from "../components/Layout";
import LandingPageHeader from "../components/LandingPagesComponents/LandingPageHeader";
import LandingPageFooter from "../components/LandingPagesComponents/LandingPageFooter";
import "../styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";


const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = (url) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLoading(false);

      // Track page views in Google Analytics
      if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const landingPages = ["/web-analysis", "/website-services-for-startups","/salesforce-landing-page" ,"/spring-flyer" ,"/spring-flyer-v2"];
  const isLandingPage = landingPages.includes(router.pathname);
  
  return (
    <>
      {/* Google Analytics Scripts */}
      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {isLandingPage ? (
        <>
          <LandingPageHeader />
          <main>
          <DefaultSeo {...SEO} />
            <SpeedInsights />
            <Component {...pageProps} />
          </main>
          <LandingPageFooter />
        </>
      ) : (
        <Layout>
          {loading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
            </div>
          )}
          <DefaultSeo {...SEO} />
          <SpeedInsights />
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
