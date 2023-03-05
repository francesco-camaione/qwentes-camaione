import styles from "./InfiniteSlider.module.css"

const InfiniteSlider = (props: any) => {

  return (
    <div className={props.className}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{props.title}</h3>
      </div>
    </div>
  );
};

export { InfiniteSlider };
