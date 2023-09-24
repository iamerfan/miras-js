import Image from "next/image";

import React from "react";
import styles from "../../Header.module.scss";

export default function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <Image alt="" src={"/enamad/empty-cart.svg"} width={200} height={200} />
      <h3>سبد خرید شما خالی است</h3>
    </div>
  );
}
