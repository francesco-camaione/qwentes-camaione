import { useEffect, useState } from "react";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";

function HomePage() {
  useEffect(() => {
    const shouldCkBannerBeVis = JSON.parse(localStorage.getItem("shouldCkBannerBeVis") ?? '{ "shouldCkBannerBeVis": null }');
    setCookieBanner(shouldCkBannerBeVis);
  }, []);

  const [cookieBannerVisible, setCookieBanner] = useState(true);

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
      {cookieBannerVisible && (
        <CookieBanner setCookieBanner={setCookieBanner} />
      )}
    </>
  );
}

export default HomePage;
