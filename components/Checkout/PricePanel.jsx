"use client";
import { useState } from "react";
import styles from "@/components/Checkout/Checkout.module.scss";
import { BsCreditCard } from "react-icons/bs";
import { useCart, useUser } from "@/lib/hooks/useStore";
import useUserValidation from "@/lib/hooks/useUserValidation";
import { MdEditLocation } from "react-icons/md";
import Loading from "../../app/loading";
import Image from "next/image";
import { handleCount } from "../../lib/hooks/count";
import Slider from "../Slider";
import Slide from "../Slider/Slide";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { ClearAll } from "../../redux/Cart";
import notify from "@/components/Notification/notify";
import Link from "next/link";

export default function PricePanel() {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [activePM, setActivePm] = useState("melat");
  const { success, danger } = notify();

  const cart = useCart();
  const user = useUser();
  const router = useRouter();
  const dispatch = useDispatch();
  const isValid = useUserValidation();
  const isLogged = user.email ? true : false;
  console.log(isLogged, isValid);
  const allPrices = cart.map((item) => {
    return { ...item.prices[0], quantity: item.quantity };
  });
  const { discount, afterDiscount, fullPrice } = handleCount(allPrices);
  const paymentMethods = [
    "melat",
    "meli",
    "parsian",
    "tose",
    "refah",
    "khavarmiane",
  ];
  const handleOrder = async () => {
    if (!isValid) return router.push(`/profile/${user.id}`);
    setLoading(true);
    const order = { user, cart };
    try {
      const res = await axios.post("/api/order", order);
      if (res.status === 200) {
        setLoading(false);
        dispatch(ClearAll());
        success("ثبت سفارش", "ثبت سفارش شما با موفقیت انجام شد ");
        return router.push(`/history/${user.id}`);
      }
    } catch (error) {
      setLoading(false);
      danger("خطا", "خطا در ثبت سفارش ");
      console.log(error);
    }
  };

  return (
    <div className={`${styles.PricePanel} ${active && styles.active}`}>
      <div className={styles.CollapsBtn}>
        <label className={styles.title}>سبد خرید</label>
        <button onClick={() => setActive(!active)}>
          {!active ? "گزینه های کمتر" : "گزینه های بیشتر"}
        </button>
      </div>
      <div className={styles.Top}>
        <label className={styles.title}>سبد خرید</label>
        <label className={styles.status}>در انتظار پرداخت</label>
      </div>
      <div className={styles.Prices}>
        <div className={styles.Price}>
          <div className={styles.title}>مبلغ کل :</div>
          <div className={styles.data}>{fullPrice.toLocaleString()} تومان</div>
        </div>
        <div className={styles.Price}>
          <div className={styles.title}> تخفیف :</div>
          <div className={styles.data}>
            <label>{discount.price.toLocaleString()} تومان</label>
            <label>{discount.percent}%</label>
          </div>
        </div>
        <div className={`${styles.Price} ${styles.FullPrice}`}>
          <div className={styles.title}>مبلغ قابل پرداخت :</div>
          <div className={styles.data}>
            {afterDiscount.toLocaleString()} تومان
          </div>
        </div>
      </div>
      <div className={styles.PaymentMethod} style={{ direction: "rtl" }}>
        <label>درگاه پرداخت : </label>
        <Slider
          options={{
            perPage: 6,
            drag: "free",
            arrows: false,
            gap: "1rem",
            direction: "rtl",
          }}
        >
          {paymentMethods.map((src) => (
            <Slide
              className={`${styles.Payment} ${
                activePM === src && styles.activePM
              }`}
              key={src}
              onClick={() => setActivePm(src)}
            >
              <Image alt="" src={`/enamad/${src}.png`} width={20} height={20} />
            </Slide>
          ))}
        </Slider>
      </div>

      {isLogged ? (
        <button
          onClick={handleOrder}
          disabled={loading}
          className={`${styles.PaymentButton} ${!isValid && styles.compelete}`}
        >
          {isValid ? (
            <>
              <label>پرداخت وجه</label>
              <BsCreditCard />
              {loading && <Loading width="20px" height="20px" color="white" />}
            </>
          ) : (
            <>
              <label>تکمیل اطلاعات کاربری</label>
              <MdEditLocation />
            </>
          )}
        </button>
      ) : (
        <Link
          href={"/auth/login"}
          className={`${styles.PaymentButton} ${styles.compelete}`}
        >
          ورود به حساب کاربری
        </Link>
      )}
    </div>
  );
}
