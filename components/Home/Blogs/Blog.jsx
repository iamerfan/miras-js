import styles from "@/components/Home/Home.module.scss";
import LazyImg from "@/components/LazyImg";
import Link from "next/link";

export default function Blog({ data }) {
  return (
    <Link href={data.href} className={styles.Blog}>
      <label className={`${data.position === "right" && styles.right}`}>
        {data.title}
      </label>
      <LazyImg src={data.img} className={styles.BlogImg} />
    </Link>
  );
}
