import styles from "@/components/Home/Home.module.scss";
import CategoryOffer from "@/components/Home/CategoryOffer";
import Brands from "@/components/Home/Brands";
import Rules from "@/components/Home/Rules";
import Items from "@/components/Home/Items";
import Blogs from "@/components/Home/Blogs";
import { server } from "@/lib/config";
import axios from "axios";
import HomeCarousel from "@/components/Home/Carousel";
import Categories from "@/components/Home/Categories";
import SpecialOffers from "@/components/Home/SpecialOffers";

export default async function Home() {
  const data = await axios(`${server}/api/home`).then((res) => res.data);

  const menItems = data.filter((item) => item.category[0].id === 1);
  const womenItems = data.filter((item) => item.category[0].id === 2);
  const special = data.filter(
    (item) => item.prices[0].discount > 0 && item.prices[0].discount < 30
  );

  return (
    <div className={styles.Container}>
      <HomeCarousel />
      <div className={styles.Main}>
        <Categories />
        <Items id={1} data={menItems} title="پوشاک مردانه" />
        <Items id={2} data={womenItems} title="پوشاک زنانه" />
        <SpecialOffers data={special} />
        <Brands />
        <CategoryOffer />
        <Rules />
        <Blogs />
      </div>
    </div>
  );
}
