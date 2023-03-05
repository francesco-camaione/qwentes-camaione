import Link from "next/link";
import styles from "./Btn.module.css";

const WhatsAppBtn = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=3516466607"
      target="_blank"
      className={styles.a}
    >
      <button className={styles.btn} value="whatsapp">Whatsapp</button>
    </Link>
  );
};

export default WhatsAppBtn;
