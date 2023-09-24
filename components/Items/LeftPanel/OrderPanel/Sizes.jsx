"use client";
import styles from "@/components/Items/items.module.scss";
import { useEffect, useState } from "react";

export default function Sizes({ data: sizes, handleOrder }) {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const handleSize = (value) => setActiveSize(value);
  // eslint-disable-next-line
  useEffect(() => handleOrder(activeSize.enTitle), [activeSize]);

  return (
    <div className={styles.sizes}>
      <label className={styles.title}>: سایز ها</label>
      <div className={styles.ActiveSize}>
        <div className={styles.size}>
          <label>{activeSize.enTitle}</label>
        </div>
        <label>{activeSize.title}</label>
      </div>

      <div className={styles.OtherSizes}>
        {sizes.map((size) => {
          if (activeSize.index === size.index) return;

          return (
            <div
              onClick={() => handleSize(size)}
              className={styles.size}
              key={size.index}
            >
              <label>{size.enTitle}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
