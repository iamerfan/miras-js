"use client";
import styles from "./Search.module.scss";
import { List } from "@/lib/data";
import { useState, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCaretDown } from "react-icons/rx";

export default function SearchFilters({ filter, handleFilters }) {
  const [activeIndex, setActiveIndex] = useState(filter ? filter : -1);
  const [active, setActive] = useState(false);

  const handleIndex = (i) => {
    setActiveIndex(i);
    handleFilters(i);
  };
  const handleClick = () => setActive(!active);

  useEffect(() => {
    filter && handleIndex(filter);
  }, []);

  return (
    <div className={styles.SearchFilters}>
      <div className={styles.top} onClick={handleClick}>
        <HiBars3BottomRight />
        فیلتر ها
        <RxCaretDown />
      </div>
      <ul className={`${active && styles.activeDropdown}`}>
        {List.map((item) => (
          <li
            onClick={() => handleIndex(item.id)}
            className={`${activeIndex === item.id && styles.active}`}
            key={item.id}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
