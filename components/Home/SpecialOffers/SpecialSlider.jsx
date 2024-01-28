"use client";
import Slider from "@/components/Slider";
import styles from "@/components/Home/Home.module.scss";
import Slide from "@/components/Slider/Slide";
import Item from "@/components/Item";

export default function SpecialSlider({ data }) {
  return (
    <Slider
      className={styles.SpecialSlider}
      options={{
        direction: "rtl",
        gap: 20,
        perMove: 1,
        perPage: 2,
        breakpoints: { 600: { perPage: 1 } },
      }}
    >
      {data.map((item) => {
        if (Number(item.id) < 3) return;
        return (
          <Slide className={styles.SpecialSlide} key={item.id}>
            <Item data={item} className={styles.Special} animated />
          </Slide>
        );
      })}
    </Slider>
  );
}
