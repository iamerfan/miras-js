import styles from "@/components/Home/Home.module.scss";
import Image from "@/components/Image";
import React from "react";

export default function CategoryOffer() {
  return (
    <div className={styles.CategoryOffer}>
      <div className={styles.Offer}>
        <Image src={"/home/categoryOffer2.webp"} />
      </div>
      <div className={styles.Offer}>
        <Image src={"/home/categoryOffer1.webp"} />
      </div>
      <div className={styles.Offer}>
        <Image src={"/home/categoryOffer3.webp"} />
      </div>
      <div className={styles.Offer}>
        <Image src={"/home/categoryOffer4.webp"} />
      </div>
    </div>
  );
}
