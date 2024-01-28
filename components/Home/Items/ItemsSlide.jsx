"use client";
import { SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import styles from "../Home.module.scss";

export default function ItemsSlide({ children }) {
  return (
    <SplideSlide className={styles.ItemsSlide}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 * 0.1 }}
      >
        {children}
      </motion.div>
    </SplideSlide>
  );
}
