import { categories } from "@/lib/data";
import styles from "../Home.module.scss";
import Category from "./Category";

export default function Categories() {
  return (
    <div className={styles.HomeCategories}>
      {categories.map((item, i) => (
        <Category item={item} key={i} delay={i} />
      ))}
    </div>
  );
}
