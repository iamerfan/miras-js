"use client";
import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/loading";

export default function SearchPanel({ loading, handleFetch, value }) {
  const query = useSearchParams().get("q");
  const [searchValue, setSearchValue] = useState(query);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchValue}`);
  };
  const handleChange = (e) => setSearchValue(e.target.value);

  return (
    <div className={styles.SearchPanel}>
      <div className={styles.InputPanel}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="جستجو کنید ... "
            defaultValue={value}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={loading}
            onClick={() => handleFetch(searchValue)}
          >
            {loading ? (
              <Loading color="white" width="20px" height="20px" />
            ) : (
              "بگرد"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
