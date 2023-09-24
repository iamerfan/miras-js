"use client";
import styles from "@/components/Items/items.module.scss";
import { useEffect, useState } from "react";

export default function Colors({ data: colors, handleOrder }) {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const handleColor = (value) => setActiveColor(value);
  // eslint-disable-next-line
  useEffect(() => handleOrder(activeColor), [activeColor]);

  return (
    <div className={styles.colors}>
      <label className={styles.title}> رنگ ها :</label>
      <div className={styles.ActiveColor}>
        <div
          className={styles.inside}
          style={{ backgroundColor: activeColor.enTitle }}
        />
        <label>{activeColor.title}</label>
      </div>
      <div className={styles.OtherColors}>
        {colors.map((color) => {
          if (activeColor.index === color.index) return;

          return (
            <div
              onClick={() => handleColor(color)}
              className={styles.color}
              style={{ backgroundColor: color.colorHex }}
              key={color.index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
