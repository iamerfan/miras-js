import Image from "next/image";

import styles from "@/components/Home/Home.module.scss";

export default function Rules() {
  return (
    <div className={styles.Rules}>
      <div>
        <Image alt="" src={"/rule1.jpg"} width={50} height={50} />
        <label>ضمانت اصالت کالا</label>
      </div>
      <div>
        <Image alt="" src={"/rule2.jpg"} width={50} height={50} />
        <label>امکان پرداخت در محل</label>
      </div>
      <div>
        <Image alt="" src={"/rule3.jpg"} width={50} height={50} />
        <label>ارسال اکسپرس کالا</label>
      </div>
      <div>
        <Image alt="" src={"/rule4.jpg"} width={50} height={50} />
        <label>بازگشت رایگان تا 7 روز</label>
      </div>
    </div>
  );
}
