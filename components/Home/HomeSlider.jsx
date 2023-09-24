"use client";
import styles from "./Home.module.scss";
import "@splidejs/react-splide/css";
import Slide from "@/components/Slider/Slide";
import Slider from "@/components/Slider";
import PageWrapper from "../PageWrapper";
import Image from "@/components/Image";

export default function HomeSlider() {
  return (
    <PageWrapper transition={{ delay: 0 }}>
      <Slider
        className={styles.Slider}
        position="right"
        options={{
          pagination: true,
          autoplay: true,
        }}
      >
        <Slide className={styles.Slide}>
          <Image alt="" fill src={"/home/1.png"} priority />
        </Slide>
        <Slide className={styles.Slide}>
          <Image alt="" fill src={"/home/2.png"} priority />
        </Slide>
        <Slide className={styles.Slide}>
          <Image alt="" fill src={"/home/3.png"} priority />
        </Slide>
        <Slide className={styles.Slide}>
          <Image alt="" fill src={"/home/4.png"} priority />
        </Slide>
        <Slide className={styles.Slide}>
          <Image alt="" fill src={"/home/5.png"} priority />
        </Slide>
        <Slide className={styles.Slide}>
          <Image alt="" fill src={"/home/6.png"} priority />
        </Slide>
      </Slider>
    </PageWrapper>
  );
}
