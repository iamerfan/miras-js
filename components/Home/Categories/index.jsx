import { categories } from "@/lib/data";
import styles from "../Home.module.scss";
import Category from "./Category";

export default function Categories() {
  return (
    <div className={styles.Categories}>
      <div className={styles.CategoriesContainer}>
        {categories.map((item, i) => (
          <Category item={item} key={i} delay={i} className={styles.Category} />
        ))}
      </div>
    </div>
  );
}
