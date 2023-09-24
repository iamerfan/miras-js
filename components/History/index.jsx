import React from "react";
import styles from "@/components/History/History.module.scss";
import Main from "./Main";
import Sections from "./Sections";

export default function History({ data }) {
  if (!data) return <h3>سفارشی تا کنون ثبت نشده است</h3>;
  return (
    <div className={styles.HistoryContainer}>
      <div className={styles.History}>
        <Main data={data} />
        <Sections orders={data.order} />
      </div>
    </div>
  );
}
