import Link from "next/link";
import { useEffect, useState } from "react";
import BookBtn from "../../components/Buttons/BookBtn";
import PricesDiv from "../../components/PricesDiv/PricesDiv";
import styles from "./Main.module.css";
import Sections from "./Sections";

const Main = () => {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    scroll && document.querySelector(".our-services")?.scrollIntoView({ behavior: "smooth" })
    setScroll(false) 
  }, [scroll])

  return (
    <main className={styles.main}>
      <div className={styles.title_backg}>
        <div className={styles.div_flex}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Bag Parking</h1>
            <h2 className={styles.h2}>Luggage Storage in Como</h2>
            <h3 className={styles.h3}>We pick up, monitor and return your luggages for only 5€</h3>
            <i className={styles.find_more} onClick={() => { setScroll(true) }}>View conditions</i>
          </div>
          <BookBtn />
          <p className={styles.taxi_m}>Do you want us to arrange your transfer to and from the airport before or after you drop off your suitcase? Write to us <Link
            href="https://api.whatsapp.com/send?phone=3516466607"
            target="_blank"
            className={styles.text_underlined}
          >
            +39 3516466607</Link></p>
        </div>
      </div>
      <Sections />
      <PricesDiv />
    </main>
  );
};

export default Main;
