"use client";
import styles from "@/components/Checkout/Checkout.module.scss";
import Slider from "../Slider";
import { useDispatch } from "react-redux";
import Slide from "../Slider/Slide";
import CartItem from "../Header/LeftButtons/Cart/CartItem";
import EmptyCart from "../Header/LeftButtons/Cart/EmptyCart";
import { MdClearAll } from "react-icons/md";
import { ClearAll } from "@/redux/Cart";
import { useCart } from "@/lib/hooks/useStore";

export default function Checkout() {
  const cart = useCart();
  const isEmpty = cart?.length > 0 ? false : true;
  const dispatch = useDispatch();
  const handleClear = () => dispatch(ClearAll());
  if (isEmpty)
    return (
      <div className={styles.Empty}>
        <EmptyCart />
      </div>
    );

  return (
    <div className={styles.CheckoutPanel}>
      <div className={styles.top}>
        <h3>سبد خرید</h3>
        <div className={styles.left}>
          <label>{cart?.length} محصول</label>
          <button className={styles.close} onClick={handleClear}>
            <MdClearAll />
          </button>
        </div>
      </div>
      <p>برای مشاهده محصولات خود ورق بزنید</p>
      <Slider
        className={styles.CheckoutSlider}
        options={{
          direction: "rtl",
          gap: "1rem",
          arrows: false,
          pagination: true,
          breakpoints: {
            700: { perPage: 1 },
            2000: { perPage: 2 },
          },
        }}
      >
        {cart.map((item) => (
          <Slide key={item.id}>
            <CartItem data={item} />
          </Slide>
        ))}
      </Slider>
    </div>
  );
}
