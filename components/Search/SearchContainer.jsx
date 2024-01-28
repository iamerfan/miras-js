"use client";
import SearchCategories from "@/components/Search/SearchCategories";
import SearchFilters from "@/components/Search/SearchFilters";
import SearchPanel from "@/components/Search/SearchPanel";
import SearchResults from "@/components/Search/SearchResults";
import styles from "@/components/Search/Search.module.scss";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../lib/config";

export default function SearchContainer({ data }) {
  const params = useSearchParams();
  const query = params.get("q")?.toString();
  const filter = Number(params.get("f")?.toString());
  const category = Number(params.get("c")?.toString());
  const [filteredData, setFilteredData] = useState([...data]);
  const [loading, setLoading] = useState(false);

  const handleFilters = (i, categoryId) => {
    let sortedData = [...data]; // Create a copy of the data array
    switch (i) {
      case 1: // Sort by ID
        sortedData.sort((a, b) => b.id - a.id);
        break;
      case 2: // Sort by visited
        sortedData.sort((a, b) => b.visited - a.visited);
        break;
      case 3: // Filter by offered (discount > 0)
        sortedData = data.filter((item) => item.prices[0].discount > 0);
        break;
      case 4: // Sort by cheapest (newPrice)
        sortedData.sort((a, b) => a.prices[0].newPrice - b.prices[0].newPrice);
        break;
      default:
        break;
    }
    if (categoryId) {
      sortedData = sortedData.filter(
        (item) => Number(item.category[0].id) === categoryId
      );
    }
    setFilteredData(sortedData);
  };
  useEffect(() => {
    if (filter || category) handleFilters(filter ? filter : -1, category);
  }, [filter, category]);

  const fetchData = async (value) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${server}/api/search?q=${query === value ? query : value}`
      );
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.SearchContainer}>
      <div className={styles.main}>
        <SearchPanel
          loading={loading}
          value={query}
          handleFetch={(value) => fetchData(value)}
        />
        <SearchResults
          filter={filter}
          category={category}
          value={query}
          data={filteredData}
        />
      </div>
      <div className={styles.SidePanel}>
        <SearchFilters
          filter={filter}
          handleFilters={(i) => handleFilters(i)}
        />
        <SearchCategories
          category={category}
          handleCategories={(categoryId) => handleFilters(-1, categoryId)}
        />
      </div>
    </div>
  );
}
