"use client";
import styles from "@/components/Items/items.module.scss";
import Colors from "./Colors";
import Sizes from "./Sizes";
import Price from "./Price";
import TopSection from "./TopSection";
import Order from "./Order";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function OrderPanel({ data }) {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart);
  const [isInCart, setInCart] = useState(false);

  useEffect(() => {
    const filter =
      cart.length > 0 && cart.find((cartItem) => cartItem.id === data.id);
    if (filter) return setInCart(true);
    setInCart(false);
    // eslint-disable-next-line
  }, [cart]);

  return (
    <div className={styles.OrderPanel}>
      <TopSection
        collapsed={collapsed}
        handleCollapsed={() => setCollapsed(!collapsed)}
        data={{ quantity: data.avalibaleQuantity, visited: data.visited }}
      />
      {!isInCart && (
        <div
          className={`${styles.CollapesedContainer} ${
            collapsed && styles.active
          }`}
        >
          <Colors data={data.colors} handleOrder={(value) => setColor(value)} />
          <Sizes data={data.sizes} handleOrder={(value) => setSize(value)} />
        </div>
      )}
      <Price data={data.prices} />
      <Order
        isInCart={isInCart}
        data={data}
        order={{ size, color, quantity }}
      />
    </div>
  );
}
