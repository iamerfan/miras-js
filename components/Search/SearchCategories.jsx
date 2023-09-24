"use client";
import styles from "./Search.module.scss";
import { categories } from "@/lib/data";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCaretDown } from "react-icons/rx";

export default function SearchCategories({ category, handleCategories }) {
  const [activeIndex, setActiveIndex] = useState(category ? category : -1);
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  const handleIndex = (i) => {
    setActiveIndex(i);
    handleCategories(i);
  };

  return (
    <div className={styles.SearchCategories}>
      <div className={styles.top} onClick={handleClick}>
        <HiBars3BottomRight />
        دسته بندی ها
        <RxCaretDown />
      </div>
      <ul className={`${active && styles.activeDropdown}`}>
        {categories.map((item) => (
          <li
            onClick={() => handleIndex(item.index)}
            className={`${activeIndex === item.index && styles.active}`}
            key={item.index}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
