"use client";
import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "../Header.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchValue, setSearchValue] = useState();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchValue}`);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.Search}>
      <button type="submit" className={styles.SearchButton}>
        <HiMagnifyingGlass />
      </button>
    </form>
  );
}
