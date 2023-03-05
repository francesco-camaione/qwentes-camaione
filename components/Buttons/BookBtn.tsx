import Link from "next/link";
import styles from "./Btn.module.css";

const BookBtn = () => {
  return (
    <Link
        href="https://api.whatsapp.com/send?phone=3516466607"
        target="_blank"
        className={styles.a_book}
      >
        <button className={styles.bookbtn}>Book Now</button>
    </Link>
  );
};

export default BookBtn;
