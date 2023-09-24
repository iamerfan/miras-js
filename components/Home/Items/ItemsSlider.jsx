"use client";
import Slider from "@/components/Slider";
import styles from "@/components/Home/Home.module.scss";
import React from "react";
import Item from "@/components/Item";
import Slide from "@/components/Slider/Slide";

export default function ItemsSlider({ data }) {
  return (
    <div className={styles.SlidesContainer}>
      <Slider
        options={{
          direction: "rtl",
          perPage: 3,
          gap: "1rem",
          arrows: false,
          breakpoints: { 600: { perPage: 1, arrows: true } },
        }}
        className={styles.ItemsSlider}
      >
        {data.map((item, i) => (
          <Slide className={styles.itemSlide} key={i}>
            <Item data={item} animated />
          </Slide>
        ))}
      </Slider>
    </div>
  );
}
