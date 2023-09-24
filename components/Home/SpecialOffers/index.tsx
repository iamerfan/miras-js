import styles from "@/components/Home/Home.module.scss";
import SpecialSlider from "./SpecialSlider";
import Timer from "./Timer";

export default function SpecialOffers({ data }: { data: any }) {
  return (
    <div className={styles.SpecialOffers}>
      <div className={styles.title}>
        <h1> پیشنهادات ویژه</h1>
        <p>تا 30 درصد تخفیف </p>
        <Timer time={3200} />
      </div>
      <SpecialSlider data={data} />
    </div>
  );
}
