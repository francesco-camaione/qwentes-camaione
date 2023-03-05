import styles from "./InfoCard.module.css";
import Image from "next/image";

const InfoCard = (props: any) => {
    const { src, title, body, link } = props;

    return (
        <article className={styles.info_div}>
            <Image
                src={src}
                width={1920}
                height={1080}
                alt={title + " image"}
                className={styles.bg_img}
            />
            <div className={styles.info_text_div}>
                <h2>{title}</h2>
                <div className={styles.info}>
                    <p>{body}</p>
                    <a href={"/" + link} target="_blank" rel='external'>
                        <p className={styles.arrow_link}>&#8599;</p>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default InfoCard;
