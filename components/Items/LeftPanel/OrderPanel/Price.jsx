import styles from "@/components/Items/items.module.scss";

export default function Price({ data: prices }) {
  const newPrice = Number(prices[0].newPrice).toLocaleString();
  const oldPrice = Number(prices[0].oldPrice).toLocaleString();
  const discount = prices[0].discount;
  return (
    <div className={styles.Prices}>
      {oldPrice !== newPrice && (
        <>
          <div className={styles.oldPrice}>
            <label className={styles.title}>قیمت قبلی :</label>
            <label className={styles.data}>
              <p>{oldPrice}</p> <i>تومان</i>
            </label>
          </div>
          <div className={styles.discount}>
            <label className={styles.title}>تخفیف :</label>
            <label className={styles.data}>{discount} % </label>
          </div>
        </>
      )}

      <div className={styles.newPrice}>
        <label className={styles.title}>قیمت نهایی :</label>
        <label className={styles.data}>
          {newPrice} <i>تومان</i>
        </label>
      </div>
    </div>
  );
}
