// "use client";
// import Slider from "@/components/Slider";
// import styles from "@/components/Home/Home.module.scss";
// import React from "react";
// import Item from "@/components/Item";
// import Slide from "@/components/Slider/Slide";

// export default function ItemsSlider({ data }) {
//   return (
//     <div className={styles.SlidesContainer}>
//       <Slider
//         options={{
//           direction: "rtl",
//           perPage: 3,
//           gap: "1rem",
//           arrows: false,
//           breakpoints: { 600: { perPage: 1, arrows: true } },
//         }}
//         className={styles.ItemsSlider}
//       >
//         {data.map((item, i) => (
//           <Slide className={styles.itemSlide} key={i}>
//             <Item data={item} animated />
//           </Slide>
//         ))}
//       </Slider>
//     </div>
//   );
// }

"use client";
import React from "react";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "../Home.module.scss";

const initalOptions = {
  pagination: false,
  arrows: false,
  direction: "rtl",
  lazyLoad: true,
  rewind: false,
  speed: 2000,
  gap: 5,

  breakpoints: {
    300: {
      arrows: true,
      gap: 10,
    },
    600: {
      arrows: true,
      gap: 10,
    },
  },
};

export default function ItemsCarousel({ children, options = initalOptions }) {
  return (
    <Splide
      hasTrack={false}
      options={{ ...initalOptions, ...options }}
      className={`ItemsCarousel ${styles.ItemsCarousel}`}
    >
      <SplideTrack>{children}</SplideTrack>
    </Splide>
  );
}
