import styles from "@/components/Home/Home.module.scss";
import Image from "@/components/Image";
import React from "react";

export default function CategoryOffer() {
  return (
    <div className={styles.CategoryOffer}>
      <div className={styles.Offer}>
        <Image alt="" src={"/home/categoryOffer2.webp"} fill />
      </div>
      <div className={styles.Offer}>
        <Image alt="" src={"/home/categoryOffer1.webp"} fill />
      </div>
      <div className={styles.Offer}>
        <Image alt="" src={"/home/categoryOffer3.webp"} fill />
      </div>
      <div className={styles.Offer}>
        <Image alt="" src={"/home/categoryOffer4.webp"} fill />
      </div>
    </div>
  );
}
