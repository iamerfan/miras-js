import React from "react";
import styles from "@/components/History/History.module.scss";
import OrdersContainer from "./OrdersContainer";

export default function Main({ data }) {
  const orders = data?.order.reverse();
  return (
    <div className={styles.main}>
      <div className={styles.Top}>
        <div className={styles.Title}>
          <h3>سابقه سفارشات </h3>
          <p>ازین قسمت شما قادر به مشاهده سابقه سفارشات خود هستید</p>
        </div>
        <div className={styles.Count}>
          <label>تعداد سفارشات : {orders?.length} سفارش</label>
        </div>
      </div>
      <div className={styles.OrdersSlider}>
        <OrdersContainer orders={orders} />
      </div>
    </div>
  );
}
