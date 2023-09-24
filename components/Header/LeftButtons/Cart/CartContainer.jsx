"use client";
import { AiOutlineShopping } from "react-icons/ai";
import styles from "../../Header.module.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearAll } from "@/redux/Cart";
import { MdClearAll } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CartContainer({ children }) {
  const [active, setActive] = useState(false);
  const cart = useSelector((state) => state.cart);
  const isEmpty = cart.length > 0 ? false : true;
  const dispatch = useDispatch();
  const path = usePathname();

  const handlePrice = () => {
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      return Math.floor(
        element.prices[0].newPrice * element.quantity
      ).toLocaleString();
    }
  };

  const handleActive = () => setActive((prev) => !prev);
  const handleClear = () => dispatch(ClearAll());

  useEffect(() => {
    const handleClick = () => setActive(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    setActive(false);
  }, [path]);

  return (
    <div className={styles.Cart} onClick={(e) => e.stopPropagation()}>
      <button
        onClick={handleActive}
        className={`${styles.LeftButton} ${active && styles.active}`}
      >
        <AiOutlineShopping />
        <label className={styles.label}>سبد خرید</label>
        {cart.length > 0 && (
          <label className={styles.counting}>{cart.length}</label>
        )}
      </button>
      <div className={`${styles.ShoppingCart} ${active && styles.active} `}>
        {!isEmpty && (
          <div className={styles.top}>
            <div className={styles.Left}>
              <label className={styles.count}>تعداد : {cart.length}</label>
              <button className={styles.close} onClick={handleClear}>
                <MdClearAll />
              </button>
            </div>

            <label className={`${styles.title} `}>سبد خرید</label>
          </div>
        )}
        <div className={styles.main}>{children}</div>
        {!isEmpty && (
          <div className={styles.bottom}>
            <div className={styles.Price}>
              <label className={styles.PriceTitle}>مبلغ قابل پرداخت :</label>
              <label className={styles.PriceValue}>{handlePrice()} تومان</label>
            </div>
            <Link href="/checkout" className={styles.checkout}>
              نهایی کردن محصولات
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
