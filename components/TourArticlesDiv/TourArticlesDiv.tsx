import styles from "./TourArticles.module.css";
import { TourArticles } from "../../models/TourArticles";
import Image from "next/image";

const TourArticlesDiv = (props: TourArticles) => {
  const { src, title, body } = props;
  
  return (
    <article className={styles.tour_div}>
      <Image
        src={src}
        width={1920}
        height={1080}
        alt={" "}
        className={styles.bg_img}
      />
      <div className={styles.tour_text_div}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </article>
  );
};

export default TourArticlesDiv;
