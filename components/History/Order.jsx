import React from "react";
import Slide from "../Slider/Slide";
import styles from "@/components/History/History.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import LazyImg from "../LazyImg";

export default function Order({ data, length }) {
  return (
    <Slide>
      <OrderItem data={data} length={length} />
    </Slide>
  );
}
export function OrderItem({ data, length }) {
  return (
    <div className={styles.OrderItem}>
      <div className={styles.img}>
        <LazyImg className={styles.img} src={data.img || data.imgs[0]} />
      </div>
      <div className={styles.Details}>
        <div className={styles.Top}>
          <label className={styles.Count}>{length} محصول</label>
          <label className={styles.Status}>
            {data.status || "درحال پردازش"}
          </label>
        </div>
        <div className={styles.Titles}>
          <h4>{data?.category[0].name}</h4>
          <h3 className={styles.title}>{data.name}</h3>
          <h3>{data.quantity} عدد</h3>
          <h3>سایز {data.size} </h3>
          <h3>رنگ {data.color.title} </h3>
        </div>

        <Link href={`/item/${data.id}`}>
          مشاهده محصول <BsArrowLeft />
        </Link>
      </div>
    </div>
  );
}
