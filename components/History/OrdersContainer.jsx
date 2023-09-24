"use client";
import React from "react";
import Slider from "../Slider";
import styles from "@/components/History/History.module.scss";
import Slide from "../Slider/Slide";
import Order from "./Order";

export default function OrdersContainer({ orders }) {
  console.log(orders);

  return (
    <Slider
      className={styles.Orders}
      options={{
        arrows: false,
        direction: "rtl",
        pagination: true,
        gap: "1rem",
        dragMinThreshold: 30,
        breakpoints: {
          700: { perPage: 1 },
          2000: { perPage: orders.length > 1 ? 2 : 1 },
        },
      }}
    >
      {orders.map((item, i) => {
        return (
          <Slide key={i} className={styles.OrderContainer}>
            <Slider
              options={{
                arrows: item.length > 1 && true,
                direction: "rtl",
                gap: "2rem",
                drag: false,
                dragAngleThreshold: 0,
              }}
              className={styles.Order}
            >
              {item.map((orderItem, orderId) => (
                <Order data={orderItem} key={orderId} length={item.length} />
              ))}
            </Slider>
          </Slide>
        );
      })}
    </Slider>
  );
}
