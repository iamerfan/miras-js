import styles from "@/components/Items/items.module.scss";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { BsEye, BsTruck } from "react-icons/bs";

export default function TopSection({ data, collapsed, handleCollapsed }) {
  return (
    <div className={styles.top}>
      <label className={styles.title}>خرید محصول</label>
      <div className={styles.Left}>
        <label className={styles.quentity}>
          <BsTruck />
          {data.quantity > 0 ? " موجود در انبار" : " موجود نیست"}
        </label>
        <label className={styles.quentity}>
          <BsEye />
          {data.visited} بازدید
        </label>
        <button className={styles.CollapsedBtn} onClick={handleCollapsed}>
          {collapsed ? "رنگ و سایز" : "گزینه های کمتر"}
          {collapsed ? <BiCaretUp /> : <BiCaretDown />}
        </button>
      </div>
    </div>
  );
}
