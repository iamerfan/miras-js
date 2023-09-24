"use client";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Item from "../Item";
import styles from "./Search.module.scss";
import { useSearchParams } from "next/navigation";

export default function SearchResults({ filter, category, value, data }) {
  const query = useSearchParams().get("q");

  if (!data) return <h3>یافت نشد</h3>;
  if (data.length === 0 && !query && !filter && !category)
    return (
      <div className={styles.SearchResults}>
        <div className={styles.BackTitle}>
          <HiMagnifyingGlass />
          <h3>جستجو</h3>
          <p>لطفا از منوی بالا محصول مورد نظر خود را جستجو کنید</p>
        </div>
      </div>
    );
  return (
    <div className={styles.SearchResults}>
      <div className={styles.top}>
        <label> {value && `نتایج جستجو برای : ${value}`}</label>
        <label>{data?.length} محصول</label>
      </div>
      <div className={styles.results}>
        {data?.length > 0 &&
          data?.map((item, i) => <Item data={item} animated key={i} />)}
        {data?.length <= 0 && <h3>یافت نشد</h3>}
      </div>
    </div>
  );
}
