import styles from "@/components/Home/Home.module.scss";
import Image from "next/image";

import Link from "next/link";

export default function Blog({ data }) {
  return (
    <Link href={data.href} className={styles.Blog}>
      <label className={`${data.position === "right" && styles.right}`}>
        {data.title}
      </label>
      <Image alt="" fill src={data.img} />
    </Link>
  );
}
