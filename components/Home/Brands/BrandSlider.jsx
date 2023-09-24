"use client";
import styles from "@/components/Home/Home.module.scss";
import Slider from "@/components/Slider";
import Slide from "@/components/Slider/Slide";
import { motion } from "framer-motion";
import { brands } from "@/lib/data";
import Image from "next/image";

export default function BrandSlider() {
  return (
    <Slider
      className={styles.BrandContainer}
      options={{ arrows: true, pagination: false, autoplay: false }}
    >
      {brands.map((brands, i) => (
        <Slide key={i} className={styles.Slide}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={styles.Brand}
          >
            <Image alt="" fill src={brands.image} />
          </motion.div>
        </Slide>
      ))}
    </Slider>
  );
}
