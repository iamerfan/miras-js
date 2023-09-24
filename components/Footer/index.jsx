import Image from "next/image";
import Logo from "../Header/Logo";
import styles from "./Footer.module.scss";
import { categories } from "@/lib/data";
import { BiPhone, BiTime } from "react-icons/bi";
import { MdContactSupport, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.main}>
        <div className={styles.start}>
          <Logo />
        </div>
        <div className={styles.middle}>
          <ul>
            {categories.map((item) => (
              <li key={item.index}>{item.label}</li>
            ))}
            <li>خرید هدیه</li>
            <li>درباره فروشگاه</li>
            <li>پرسش های متداول</li>
            <li>شرایط بازگشت کالا</li>
          </ul>
        </div>
        <div className={styles.end}>
          <Image alt="" src={"/enamad/enamad.png"} width={70} height={70} />
          <Image alt="" src={"/enamad/enamad2.png"} width={70} height={70} />
          <Image alt="" src={"/enamad/enamad3.png"} width={70} height={70} />
          <Image alt="" src={"/enamad/enamad4.png"} width={70} height={70} />
          <Image alt="" src={"/enamad/enamad5.png"} width={70} height={70} />
          <Image alt="" src={"/enamad/enamad6.png"} width={70} height={70} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.contact}>
          <label>
            <MdContactSupport />
            ارتباط با فروشگاه
          </label>
          <p>
            <BiPhone />
            0212413232
          </p>
          <p>
            <MdEmail />
            erfanhosseinizadeh@gmail.com
          </p>
        </div>
        <div className={styles.hours}>
          <label>
            <BiTime />
            ساعت کاری
          </label>
          <p>شنبه تا پنجشنبه از ساعت ۸:۳۰ الی ۲۴</p>
          <p>جمعه و ایام تعطیل رسمی از ساعت ۹:۰۰ الی ۱۹</p>
        </div>
        <div className={styles.email}>
          <label>عضویت در خبرنامه : </label>
          <div>
            <input type="text" placeholder="ایمیل خود را وارد کنید ..." />
            <button>عضویت</button>
          </div>
        </div>
      </div>
    </div>
  );
}
