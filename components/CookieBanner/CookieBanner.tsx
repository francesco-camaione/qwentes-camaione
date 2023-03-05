import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

interface Props {
  setCookieBanner: Function;
}

const CookieBanner = (props: Props) => {

  function closeCookieBanner() {
    localStorage.setItem("shouldCkBannerBeVis", JSON.stringify(false));

    props.setCookieBanner(false);
  }

  return (
    <div className={styles.cookie_div}>
      <p>
        We use cookie or similar technologies on this website. Read more about
        our{" "}
        <Link href="/cookie-policy" className={styles.cookie_link}>
          Cookies Policy.
        </Link>
      </p>
      <button onClick={() => closeCookieBanner()}>X</button>
    </div>
  );
};

export default CookieBanner;
