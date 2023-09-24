import styles from "@/components/Home/Home.module.scss";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ItemsSlider from "./ItemsSlider";

export default function Items({ id, data, title }) {
  return (
    <div className={styles.Items}>
      <h2 className={styles.title}>
        <label>{title}</label>
        <Link href={`/search?c=${id}`}>
          مشاهده همه
          <BsArrowLeft />
        </Link>
      </h2>

      <ItemsSlider data={data} />
    </div>
  );
}
