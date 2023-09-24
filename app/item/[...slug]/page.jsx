import Details from "@/components/Items/Details";
import LeftPanel from "@/components/Items/LeftPanel";
import styles from "@/components/Items/items.module.scss";
import { server } from "@/lib/config";

export default async function Item({ params }) {
  const data = await getData(params.slug[0]);

  return (
    <div className={styles.main}>
      <Details data={data} />
      <LeftPanel data={data} />
    </div>
  );
}

async function getData(params) {
  const url = `${server}/api/item/${params}`;
  const res = await fetch(url);
  return res.json();
}
