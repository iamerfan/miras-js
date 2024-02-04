"use client";
import React from "react";
import styles from "../../Header.module.scss";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { Decrease, Increase, RemoveFromCart } from "@/redux/Cart";
import Link from "next/link";
import LazyImg from "@/components/LazyImg";

export default function CartItem({ data }) {
  const price = data.prices[0].newPrice;
  const handlePrice = Math.floor(price * data.quantity).toLocaleString();
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.CartItem}>
        <Link href={`/item/${data.id}`}>
          <LazyImg
            src={data.img || data.imgs[0]}
            width={180}
            height={250}
            alt=""
          />
        </Link>
        <div className={styles.Details}>
          <div className={styles.Top}>
            <button
              className={styles.Delete}
              onClick={() => dispatch(RemoveFromCart(data.id))}
            >
              حذف
            </button>
            <div
              className={styles.color}
              style={{
                backgroundColor: data.colors[0].enTitle,
              }}
            ></div>
          </div>

          <div className={styles.Titles}>
            <h4>{data.category[0].name}</h4>
            <h3>{data.name}</h3>
            <div className={styles.QuantityPanel}>
              <div className={styles.quantity}>
                تعداد : <label>{data.quantity}</label>
              </div>
              <div className={styles.functions}>
                <button onClick={() => dispatch(Increase(data.id))}>+</button>
                <button onClick={() => dispatch(Decrease(data.id))}>-</button>
              </div>
            </div>
            <div className={styles.PriceAndRemove}>
              <label className={styles.labelTitle}>قیمت : </label>
              <label className={styles.labelValue}>{handlePrice} تومان</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
