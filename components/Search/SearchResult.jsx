import Image from "next/image";
import styles from "./Search.module.scss";
import { BsArrowLeft } from "react-icons/bs";

export default function SearchResult({ data }) {
  const price = data.prices[0].newPrice?.toLocaleString();
  const oldPrice = data.prices[0].oldPrice?.toLocaleString();

  return (
    <div className={styles.SearchResult}>
      <div className={styles.top}>
        <label className={styles.offer}>15%</label>
      </div>
      <div className={styles.main}>
        <Image src={data.img} alt="" fill sizes="" />
      </div>
      <div className={styles.bottom}>
        <label className={styles.title}>{data.title}</label>
        <div className={styles.prices}>
          <label className={styles.newPrice}>
            <p>{price}</p>
            <i>تومان</i>
          </label>
          <BsArrowLeft />
          <label className={styles.oldPrice}>
            <p>{oldPrice}</p>
          </label>
        </div>
      </div>
    </div>
  );
}
