import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import LandingPageHeader from "../components/LandingPagesComponents/LandingPageHeader";
import LandingPageFooter from "../components/LandingPagesComponents/LandingPageFooter";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLoading(false);
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

  const isLandingPage = router.pathname === "/web-analysis";

  return (
    <>
      {isLandingPage ? (
        <>
          <LandingPageHeader />
          <main>
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
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
