import { motion } from "framer-motion";
import Image from "next/image";
import { SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import styles from "../Home.module.scss";
import LazyImg from "@/components/LazyImg";

const HomeSlide = ({ item }) => {
  return (
    <SplideSlide className={styles.HomeSlide}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 * 0.1 }}
      >
        <Link href={"/search?c=1"}>
          <LazyImg priority alt="" src={`/home/${item}`} />
        </Link>
      </motion.div>
    </SplideSlide>
  );
};
export default HomeSlide;
