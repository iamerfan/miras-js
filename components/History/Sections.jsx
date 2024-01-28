import React from "react";
import styles from "./History.module.scss";
import Image from "next/image";

import { useMemo } from "react";

// export default function Sections({ orders }) {
//   const mapOrders = () => {
//     const allPrices = [];
//     const allOrders = [];
//     orders?.map((item) => {
//       allOrders.push(item);
//       if (item.length > 1) {
//         return item.map((skak) => allPrices.push(skak.prices[0]));
//       }
//       return allPrices.push(item[0].prices[0]);
//     });
//     return { allPrices, allOrders };
//   };
//   const { allPrices: prices, allOrders } = mapOrders();
//   const allPrices = prices.map((item) => Number(item.newPrice));
//   const allDiscount = prices.map((item) => {
//     if (item.oldPrice && item.discount)
//       return Math.floor(item.oldPrice - item.newPrice);
//     return 0;
//   });
//   const sum = (arry) =>
//     arry.reduce((accum, current) =>
//       Math.floor(accum + current).toLocaleString()
//     );

//   const sections = [
//     { title: "تعداد سفارشات ", data: `${allOrders.length} عدد` },
//     {
//       title: "تعداد کل محصولات سفارش داده شده ",
//       data: `${allPrices.length} عدد`,
//     },
//     { title: "جمع کل مبالغ", data: `${sum(allPrices)}  تومان` },
//     {
//       title: "جمع کل تخفیف ها",
//       data: `${sum(allDiscount)}  تومان`,
//     },
//   ];
//   const mapSections = sections.map((section, i) => (
//     <div key={i} className={styles.section}>
//       <h4>{section.title} :</h4>
//       <h1>{section.data}</h1>
//     </div>
//   ));

//   return (
//     <div className={styles.Sections}>
//       <Image
//         className={styles.img}
//         alt=""
//         src={"/history.jpg"}
//         width={200}
//         height={250}
//       />
//       {mapSections}
//     </div>
//   );
// }
export default function Sections({ orders }) {
  const calculateTotalPrices = useMemo(() => {
    const orderItemsArray = orders.map((item) => item.length);
    const allOrders = [...orderItemsArray].reduce(
      (total, currentValue) => total + currentValue,
      0
    );

    const totalOldPrice = orders.reduce((acc, order) => {
      if (Array.isArray(order) && order.length > 0) {
        return acc + (order[0].prices[0]?.oldPrice || 0);
      }
      return acc;
    }, 0);

    const totalNewPrice = orders.reduce((acc, order) => {
      if (Array.isArray(order) && order.length > 0) {
        return acc + (order[0].prices[0]?.newPrice || 0);
      }
      return acc;
    }, 0);

    const totalDiscount = totalOldPrice - totalNewPrice;

    return { totalOldPrice, totalNewPrice, totalDiscount, allOrders };
  }, [orders]);

  const sections = [
    { title: "تعداد سفارشات ", data: `${orders.length} عدد` },
    {
      title: "تعداد کل محصولات سفارش داده شده ",
      data: `${calculateTotalPrices.allOrders} عدد`,
    },
    {
      title: "جمع کل مبالغ",
      data: `${calculateTotalPrices.totalOldPrice.toLocaleString()}  تومان`,
    },
    {
      title: "پرداخت شده",
      data: `${calculateTotalPrices.totalNewPrice.toLocaleString()}  تومان`,
    },
    {
      title: "جمع کل تخفیف ها",
      data: `${calculateTotalPrices.totalDiscount.toLocaleString()}  تومان`,
    },
  ];
  const mapSections = sections.map((section, i) => (
    <div key={i} className={styles.section}>
      <h4>{section.title} :</h4>
      <h1>{section.data}</h1>
    </div>
  ));
  return (
    <div className={styles.Sections}>
      <Image
        className={styles.img}
        alt=""
        src={"/history.jpg"}
        width={200}
        height={250}
      />
      {mapSections}
    </div>
  );
}
