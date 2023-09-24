import styles from "@/components/Items/items.module.scss";
import Link from "next/link";

export default function Features({ data }) {
  const dinamicFeatures = data.features?.map((feature, i) => (
    <Feature key={i} name={feature.title} data={feature.data} />
  ));
  return (
    <div className={styles.Features}>
      <Feature name="نام محصول" data={data.name} />
      <Feature name="کد محصول" data={data.id} />
      {dinamicFeatures}
      <Feature name="سایز ها" sizes={data.sizes} />
      <Feature name="رنگ ها" colors={data.colors} />
      <Feature name="برچسب ها" tags={data.tags} />
    </div>
  );
}

export function Feature({ name, data, tags, sizes, colors }) {
  return (
    <div className={styles.Feature}>
      <div className={styles.name}>{name} : </div>
      {data && <div className={styles.data}>{data}</div>}
      {tags && (
        <div className={`${styles.data} ${styles.tag}`}>
          {tags?.map((tag, i) => (
            <Link key={tag} href={`/search?q=${tag}`}>
              {i < tags.length - 1 ? "#" + tag + " , " : tag}
            </Link>
          ))}
        </div>
      )}
      {sizes && (
        <div className={styles.data}>
          {sizes?.map(({ enTitle }, i) =>
            i < sizes.length - 1 ? enTitle + " , " : enTitle
          )}
        </div>
      )}
      {colors && (
        <div className={styles.data}>
          {colors?.map(({ title }, i) =>
            i < colors.length - 1 ? title + " , " : title
          )}
        </div>
      )}
    </div>
  );
}
