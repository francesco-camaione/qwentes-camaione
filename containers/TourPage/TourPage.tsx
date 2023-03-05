import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./TourPage.module.css";
import infocard from "../../config/infoCard.json"
import InfoCard from "../../components/InfoCard/InfoCard";
import { InfiniteSlider } from "../../components/InfiniteSlider/InfiniteSlider"
import Link from "next/link";

const TourPage = () => {

  return (
    <>
      <Navbar />

      <div className={styles.container}>

        <div className={styles.card}>
          <h3 className={styles.h3}>COMO IS A BEAUTIFUL TOWN SITUATED BETWEEN LAKE COMO AND THE ITALIAN ALPS</h3>
          <div className={styles.infocard_container} >
            {infocard.visitComo.map((info) => {
              return (
                <InfoCard
                  key={info.title}
                  src={info.src}
                  title={info.title}
                  body={info.body}
                  link={info.link}
                />
              )
            })}
          </div>
        </div>
        {/* THINGS TO DO SECTION
        <div className={styles.card}>
          <h3 className={styles.h3}>Things to do</h3>
          <div className={styles.infocard_container} >
            {infocard.thingsToDo.map((info) => {
              return (
                <InfoCard
                  key={info.title}
                  src={info.src}
                  title={info.title}
                  body={info.body}
                  link={info.link}
                />
              )
            })}
          </div>
        </div> */}
        <div className={styles.card}>
          <h3 className={styles.h3}>Top experiences - THE BEST EXPERIENCES TO DO ON THE COMO LAKE</h3>
          <div className={styles.infocard_container} >
            {infocard.experiences.map((info) => {
              return (
                <InfoCard
                  key={info.title}
                  src={info.src}
                  title={info.title}
                  body={info.body}
                  link={info.link}
                />
              )
            })}
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.h3}>Movements on Lake Como</h3>
          <div className={styles.infocard_container} >
            {infocard.movements.map((info) => {
              return (
                <InfoCard
                  key={info.title}
                  src={info.src}
                  title={info.title}
                  body={info.body}
                  link={info.link}
                />
              )
            })}
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.h3}>Suggested shops - BE ENCHANTED BY THE BEAUTY OF MADE IN ITALY</h3>
          <div className={styles.infocard_container} >
            {infocard.suggestedShops.map((info) => {
              return (
                <InfoCard
                  key={info.title}
                  src={info.src}
                  title={info.title}
                  body={info.body}
                  link={info.link}
                />
              )
            })}
          </div>
        </div>

        <div className={styles.card_partner}>
          <h3 className={styles.h3_partner}>Partner in Como</h3>
          <div className="partner_container" >
            {infocard.partner.map((info, index) => {
              return (
                <InfiniteSlider
                  key={index}
                  className={"inner"}
                  title={info.title}
                />
              )
            })}
          </div>
        </div>

        <div className={styles.card_partner}>
          <h3 className={styles.h3_partner}>Partner beyond Como</h3>
          <div className="beyondcomo_container" >
            {infocard.beyondComo.map((info, index) => {
              return (
                <InfiniteSlider
                  key={index}
                  className={"inner2"}
                  title={info.title}
                />
              )
            })}
          </div>
        </div>
        <p className={styles.p}>Are you our partner? Contact us at <Link
            href="https://api.whatsapp.com/send?phone=3516466607"
            target="_blank"
            className={styles.text_underlined}
          >
            +39 3516466607
          </Link>
        </p>

      </div>

      {/* ****OLD TOUR SECTION*****
      <div className={styles.container}>
        {articles.articles.map((art: any, n: number) => {
          return (
            <TourArticlesDiv
              key={n}
              src={art.src}
              title={art.title}
              body={art.body}
            />
          );
        })}
      </div> 
      */}
      <Footer />
    </>
  );
};

export default TourPage;
