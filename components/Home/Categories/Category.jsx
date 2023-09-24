"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../Home.module.scss";
import Link from "next/link";

export default function Category({ item, className, delay }) {
  const delayTime = delay / 2;
  return (
    <Link href={`/search?c=${item.index}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: delayTime + 0.2 }}
        viewport={{ once: true }}
        className={className}
      >
        <h1>
          {item.icon}
          {item.label}
        </h1>
        <div className={styles.mainSection}>
          <Image alt="" src={item.image} fill />
        </div>
      </motion.div>
    </Link>
  );
}
