import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  function scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.social_div}>
        <Link href="https://www.instagram.com/bagparking_como/" target="_blank">
          <Image src="/images/social/ig_logo.png" width={400} height={400} alt="Instagram" className={styles.social_logo} />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=3516466607" target="_blank">
          <Image src="/images/social/whatsapp_icon.png" width={400} height={400} alt="Whatsapp" className={styles.social_logo} />
        </Link>
        {/* <Link href="">
          <Image src="/images/social/fb_icon.png" width={400} height={400} alt="Facebook" className={styles.social_logo}/>
        </Link> */}
      </div>

      <p>
        <span className={styles.color_white}> ©Bag parking {new Date().getFullYear()}. All rights reserved.</span>
      </p>
      <Link href="/cookie-policy" className={styles.cookie_link}>
        Cookies Policy
      </Link>
      <button className={styles.scrollTop_btn} onClick={() => scrollTop()}> </button>
    </footer>
  );
};

export default Footer;
