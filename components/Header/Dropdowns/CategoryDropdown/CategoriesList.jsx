"use client";
import { categories as data } from "@/lib/data";
import styles from "../../Header.module.scss";
import { motion } from "framer-motion";

export default function CategoriesList({ activeIndex, handleActiveIndex }) {
  return (
    <div className={styles.CategoriesList}>
      <ul>
        {data.map((item) => {
          return (
            <li
              key={item.index}
              className={`${activeIndex === item.index && styles.active}`}
              onClick={() => {
                handleActiveIndex(item.index);
              }}
            >
              {item.icon}
              <label>{item.label}</label>
              {activeIndex === item.index && (
                <motion.span layoutId="underline" className={styles.Span} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
