import React from "react";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "../Home.module.scss";

const initalOptions = {
  rewind: true,
  pagination: true,
  autoplay: true,
  arrows: true,
  pauseOnHover: true,
  direction: "rtl",
  speed: 2000,
  interval: 5000,
  lazyLoad: true,
};

export default function HomeSlider({ children, options = initalOptions }) {
  return (
    <Splide
      hasTrack={false}
      options={{ ...initalOptions, ...options }}
      className={`HomeSlider ${styles.HomeSlider}`}
    >
      <SplideTrack>{children}</SplideTrack>
    </Splide>
  );
}
