"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../Home.module.scss";
import Link from "next/link";

export default function Category({ item, delay }) {
  const delayTime = delay / 2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: delayTime + 0.2 }}
      viewport={{ once: true }}
      className={styles.HomeCategory}
    >
      <Link
        href={`/search?c=${item.index}`}
        className={styles.CategoryContainer}
      >
        <div className={styles.Left}>{item.label}</div>
        {item.icon}
      </Link>
    </motion.div>
  );
}
