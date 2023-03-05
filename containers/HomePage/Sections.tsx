import styles from "./Main.module.css";
import Image from "next/image";
import Link from "next/link";
import DetailsArea from "./Details";

const Sections = () => {
  return (
    <section className={styles.what_section}>
      <h2 className={styles.what_we_do}>WHAT WE DO</h2>
      <div className={styles.divs}>
        <div className={styles.what_div}>
          <h2 className={styles.step_1}>
            We pick up your suitcases wherever you prefer
          </h2>
        </div>
        <div className={styles.what_div}>
          <h2 className={styles.step_2}>
            We keep your luggage of any weight and size with the utmost care
          </h2>
        </div>

        <div className={styles.what_div}>
          <h2 className={styles.step_3}>
            We bring your luggage where it is most convenient for you
          </h2>
        </div>
      </div>
      <DetailsArea />
      <div className={styles.map_div}>
        <h4>We are close to every point of interest</h4>
        <div className={styles.map_link_div}>
          <div>
            <Link
              href="https://www.google.com/maps/place/Bag+parking/@45.81207,9.088362,15.96z/data=!4m5!3m4!1s0x47869d517289c953:0x7daec7b65aee5ea4!8m2!3d45.8115364!4d9.0866123?hl=en"
              target="_blank"
            >
              <Image
                src="/images/maps-image.jpg"
                width={973}
                height={982}
                alt="map store position"
                className={styles.map_image}
              />
              <p className={styles.address}>Via Rodari 1, 22100 Como CO</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
