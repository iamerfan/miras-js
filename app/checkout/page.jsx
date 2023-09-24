"use client";
import CheckoutOrder from "@/components/Checkout";
import PricePanel from "@/components/Checkout/PricePanel";
import styles from "@/components/Checkout/Checkout.module.scss";
import { useCart } from "../../lib/hooks/useStore";

export default function Checkout() {
  const cart = useCart();
  return (
    <div className={styles.Checkout}>
      <CheckoutOrder />
      {cart.length > 0 && <PricePanel />}
    </div>
  );
}
