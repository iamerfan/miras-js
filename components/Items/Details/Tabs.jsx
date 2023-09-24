"use client";
import styles from "@/components/Items/items.module.scss";
import { useState } from "react";
import Features from "./Features";
import Slider from "@/components/Slider";
import Slide from "@/components/Slider/Slide";

export default function Tabs({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = [
    { index: 0, name: "مشخصات", data: <Features key={0} data={data} /> },
    { index: 1, name: "توضیحات", data: data.info },
    { index: 2, name: "نمودار قیمت", data: "2" },
  ];
  return (
    <div className={styles.LeftDetails}>
      <div className={styles.tabs}>
        <Slider
          options={{ arrows: false, gap: ".5rem", direction: "rtl" }}
          className={styles.TabSlider}
        >
          {tabs.map((tab) => (
            <Slide
              key={tab.index}
              onClick={() => setActiveIndex(tab.index)}
              className={`${styles.tab} ${
                tab?.index === activeIndex && styles.active
              }`}
            >
              {tab?.name}
            </Slide>
          ))}
        </Slider>
      </div>
      <div className={styles.Data}>
        {tabs.map((tab) => tab.index === activeIndex && tab.data)}
      </div>
    </div>
  );
}
