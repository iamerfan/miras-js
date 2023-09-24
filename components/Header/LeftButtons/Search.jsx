import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "../Header.module.scss";
import Link from "next/link";

export default function Search() {
  return (
    <>
      <Link href={`/search`} className={styles.LeftButton}>
        <HiMagnifyingGlass />
        <label className={styles.label}>جستجو</label>
      </Link>
      <div className={styles.SearchContainer}></div>
    </>
  );
}
