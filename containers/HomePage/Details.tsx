import styles from "./Main.module.css";
import Image from "next/image";

const DetailsArea = () => {
  return (
    <div className={styles.details_div}>
      <h2 className={styles.h2_why}>WHY CHOOSE <span className={styles.span_why}>BAGPARKING</span></h2>

      <div className={styles.services_div} style={{ paddingBottom: "3rem" }}>
        <div className={styles.relative}>
          <h3>2 minutes walk from Cathedral</h3>
          <p>One step away from the center to immediately immerse yourself in the city.</p>
          <Image src="/images/man_walking.png" width={200} height={100} alt={""} className={styles.man_img} />
        </div>
        <div className={styles.relative}>
          <h3>5 minutes walk from train station</h3>
          <p>No effort! Luggage will no longer be a burden.</p>
          <Image src="/images/man_walking.png" width={200} height={100} alt={""} className={styles.man_img} />
        </div>
        <div>
          <h3>Luggage insured</h3>
          <p>Sleep soundly. Your luggage will be safe in our storage.</p>
        </div>
      </div>
      <div className={styles.services_div}>
        <div>
          <h3>Fixed rate</h3>
          <p>No bad surprises. Transparency is the basis of our service.</p>
        </div>
        <div>
          <h3>Availability 7/7</h3>
          <p>Don't give up on your program.</p>
        </div>

        <div>
          <h3>Pick up service</h3>
          <p>We take care of your luggage, without leaving you with the burden of having to carry it around the city.</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsArea;
