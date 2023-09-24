import styles from "@/components/Items/items.module.scss";
import WithTumb from "@/components/Slider/WithTumb";
import Tabs from "./Tabs";
import Link from "next/link";
import { RxCaretLeft } from "react-icons/rx";

export default function Details({ data }) {
  return (
    <div className={styles.Details}>
      <div className={styles.Images}>
        <div className={styles.links}>
          <Link href={`/`}>خانه</Link>
          <RxCaretLeft />
          <Link href={`/search?c=${data.category[0].id}`}>
            {data.category[0].name}
          </Link>
          <RxCaretLeft />
          <label>{data.name}</label>
        </div>
        <WithTumb data={data.imgs} />
      </div>
      <Tabs data={data} />
    </div>
  );
}
