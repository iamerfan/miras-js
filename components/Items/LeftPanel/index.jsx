import styles from "@/components/Items/items.module.scss";
import OrderPanel from "./OrderPanel";
import Safety from "./Safety";

export default function LeftPanel({ data }) {
  return (
    <div className={styles.LeftPanel}>
      <OrderPanel data={data} />
      <Safety />
    </div>
  );
}
