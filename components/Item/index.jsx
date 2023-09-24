import styles from "./Item.module.scss";
import { motion } from "framer-motion";
import Image from "@/components/Image";
import Link from "next/link";

export default function Item({ animated, data, className }) {
  if (animated)
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href={`/item/${data.id}`}
          className={`${styles.Item} ${className}`}
        >
          {data.prices[0].discount > 0 && (
            <div className={styles.Top}>
              <label className={styles.Offer}>
                {data.discountPercent}
                {data.prices[0].discount}%
              </label>
            </div>
          )}

          <div className={styles.Main}>
            <Image alt="" src={data.imgs[0]} fill />
          </div>
          <div className={styles.Bottom}>
            <label className={styles.category}>
              {data?.category ? data?.category[0].name : "بدون دسته بندی"}
            </label>
            <label className={styles.title}>{data.name}</label>
            <div className={styles.Prices}>
              {data.prices[0].oldPrice !== data.prices[0].newPrice && (
                <label className={styles.OldPrice}>
                  {Number(data?.prices[0].oldPrice).toLocaleString()}{" "}
                  <i>تومان</i>
                </label>
              )}
              <label className={styles.NewPrice}>
                {Number(data?.prices[0].newPrice).toLocaleString()} <i>تومان</i>
              </label>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  return <div className={styles.Item}></div>;
}
