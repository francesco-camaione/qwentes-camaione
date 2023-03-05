import ContactDiv from "../ContactDiv/ContactDiv";
import styles from "./PricesDiv.module.css";
import Image from "next/image";
import Link from "next/link";

const PricesDiv = () => {
  return (
    <div className={styles.prices_div}>
      <h3 className="our-services">OUR SERVICES</h3>

      <div className={styles.prices_options_div}>

        <div className={styles.prices_options}>
          <h4>Baggage collection and transport to our deposit</h4>
          <ul className={styles.ul}>
            <li>We collect your luggage within an area of 10km from any facility. To be booked up to 24 hours in advance.</li>
          </ul>
          <p className={styles.text_center}>10€</p>
          <p className={styles.info_p}>Would you like this service outside Como? Write to us  <Link
            href="https://api.whatsapp.com/send?phone=3516466607"
            target="_blank"
            className={styles.text_underlined}
          >
            +39 3516466607</Link>
          </p>
          <Image src="/images/van_icon.png" width={400} height={300} alt={""} className={styles.van_img} />
        </div>

        <div className={styles.prices_options}>
          <h4>Deposit includes</h4>
          <ul className={styles.ul}>
            <li>Luggage insured</li>
            <li>Available 7/7</li>
            <li>Chaired by staff</li>
            <li>Free pick up and return service from Como San Giovanni station</li>
          </ul>
          <p className={styles.text_center}>5€</p>
          <ul className={styles.timetables}>
            <li>Open: 08:45am</li>
            <li>Close: 08:00pm</li>
          </ul>
          <p className={styles.info_p}>Do you want to leave your suitcase for more days? Write us for a quote <Link
            href="https://api.whatsapp.com/send?phone=3516466607"
            target="_blank"
            className={styles.text_underlined}
          >
            +39 3516466607</Link></p>
         
          <Image src="/images/van_icon.png" width={400} height={300} alt={""} className={styles.van_img} />
          <Image src="/images/luggage_icon.png" width={400} height={300} alt={""} className={styles.luggage_img} />
        </div>


        <div className={styles.prices_options}>
          <h4>Deposit transfer to train station</h4>
          <ul className={styles.ul}>
            <li>We return your luggage within a radius of 10 km from Como. To be booked up to 24 hours in advance.</li>
          </ul>
          <p className={styles.text_center}>10€</p>
          <p className={styles.info_p}>Would you like this service outside Como? Write to us  <Link
            href="https://api.whatsapp.com/send?phone=3516466607"
            target="_blank"
            className={styles.text_underlined}
          >
            +39 3516466607</Link>
          </p>
          <Image src="/images/van_icon.png" width={400} height={300} alt={""} className={styles.van_img} />
        </div>
        <div className={styles.prices_options}>
          <h4>Transfer by reservation</h4>
          <ul className={styles.ul}>
            <li>We organize your transfer by reservation Write to us <Link
            href="https://api.whatsapp.com/send?phone=3516466607"
            target="_blank"
            className={styles.text_underlined}
          >
            +39 3516466607</Link></li>
          </ul>
          <Image src="/images/van_icon.png" width={400} height={300} alt={""} className={styles.van_img} />
        </div>
      </div>
      <ContactDiv />
    </div>
  );
};

export default PricesDiv;
