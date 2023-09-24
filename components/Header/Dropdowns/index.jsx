"use client";
import Link from "next/link";
import styles from "../Header.module.scss";
import { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import CategoryDropdown from "./CategoryDropdown";
import { List as data } from "@/lib/data";

export default function Dropdowns() {
  const [index, setIndex] = useState(0);
  const [collaps, setCollaps] = useState(false);
  const DropdownActive = (i) => setIndex(i);
  const handleCollapse = () => setCollaps(!collaps);

  return (
    <>
      <div className={`${styles.Dropdowns} ${collaps && styles.Collapsed}`}>
        <CategoryDropdown
          isActive={index === 1 && true}
          handleClick={(i) => DropdownActive(i)}
        />
        {data.map((item, i) => (
          <Link key={i} href={item.href} className={styles.Link}>
            {item.icon}
            <label>{item.label}</label>
          </Link>
        ))}
      </div>
      <button
        className={`${styles.LeftButton} ${styles.Colaps}`}
        onClick={handleCollapse}
      >
        {collaps ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>
    </>
  );
}
