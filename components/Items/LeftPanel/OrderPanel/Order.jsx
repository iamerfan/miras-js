"use client";

import styles from "@/components/Items/items.module.scss";
import { AddToCart, RemoveFromCart } from "@/redux/Cart";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

export default function Order({ data: item, order, isInCart }) {
  const dispatch = useDispatch();
  const orderConstruct = { ...item, ...order };
  const handleClick = () =>
    isInCart
      ? dispatch(RemoveFromCart(item.id))
      : dispatch(AddToCart(orderConstruct));

  return (
    <button
      className={`${styles.OrderButton} ${isInCart && styles.isInCart}`}
      onClick={handleClick}
    >
      {isInCart ? "حدف از سبد خرید" : "افزودن به سبد خرید"}
      <FiShoppingBag />
    </button>
  );
}
