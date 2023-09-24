"use client";
import CartContainer from "./CartContainer";
import EmptyCart from "./EmptyCart";
import Slide from "@/components/Slider/Slide";
import styles from "../../Header.module.scss";
import CartItem from "./CartItem";
import Slider from "@/components/Slider";
import { useCart } from "@/lib/hooks/useStore";

export default function Cart() {
  const cart = useCart();
  const isCartEmpty = cart.length > 0 ? false : true;

  return (
    <CartContainer>
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <Slider
          options={{ gap: "1rem", arrows: cart.length > 1 && true }}
          className={styles.CartSlider}
        >
          {cart.map((item) => (
            <Slide key={item.id}>
              <CartItem data={item} />
            </Slide>
          ))}
        </Slider>
      )}
    </CartContainer>
  );
}
