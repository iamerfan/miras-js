import { BsCalendar2Date } from "react-icons/bs";
import { SiHotjar } from "react-icons/si";
import { MdOutlineDiscount } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import {
  MdChildCare,
  MdHealthAndSafety,
  MdMan,
  MdSportsFootball,
  MdWatch,
  MdWoman,
} from "react-icons/md";

export const categories = [
  {
    label: "آقایان",
    image: "/categories/men.png",
    icon: <MdMan />,
    index: 1,
    href: "/search?category=1",
  },
  {
    label: "بانوان",
    image: "/categories/women.png",
    icon: <MdWoman />,
    index: 2,
    href: "/search?category=2",
  },
  {
    label: "کودکان",
    image: "/categories/kid.png",
    icon: <MdChildCare />,
    index: 3,
    href: "/search?category=3",
  },
  {
    label: "ورزشی",
    image: "/categories/sport.png",
    icon: <MdSportsFootball />,
    index: 4,
    href: "/search?category=4",
  },
  {
    label: "اکسسوری",
    image: "/categories/accessory.png",
    icon: <MdWatch />,
    index: 5,
    href: "/search?category=5",
  },
  {
    label: "زیبایی",
    image: "/categories/skin.png",
    icon: <MdHealthAndSafety />,
    index: 6,
    href: "/search?category=6",
  },
];
export const List = [
  {
    id: 1,
    label: "جدیدترین ها",
    icon: <BsCalendar2Date />,
    href: "/search?f=1",
  },
  {
    id: 2,
    label: "محبوبترین ها",
    icon: <SiHotjar />,
    href: "/search?f=2",
  },
  {
    id: 3,
    label: "تحفیف دار",
    icon: <MdOutlineDiscount />,
    href: "/search?f=3",
  },
  {
    id: 4,
    label: "ارزان ترین",
    icon: <BiTrendingUp />,
    href: "/search?f=4",
  },
];
export const DefaultItems = [
  {
    id: "0",
    title: "تیشرت مردانه مشکی ساده",
    tags: ["تیشرت", "مردانه", "مشکی", "ساده"],
    img: "/items/men.png",
    prices: [{ oldPrice: 100000, newPrice: 80000 }],
  },
  {
    id: "0",
    title: "تیشرت مردانه مشکی ساده",
    tags: ["تیشرت", "مردانه", "مشکی", "ساده"],
    img: "/items/men.png",
    prices: [{ oldPrice: 100000, newPrice: 80000 }],
  },
  {
    id: "0",
    title: "تیشرت مردانه مشکی ساده",
    tags: ["تیشرت", "مردانه", "مشکی", "ساده"],
    img: "/items/men.png",
    prices: [{ oldPrice: 100000, newPrice: 80000 }],
  },
  {
    id: "0",
    title: "تیشرت مردانه مشکی ساده",
    tags: ["تیشرت", "مردانه", "مشکی", "ساده"],
    img: "/items/men.png",
    prices: [{ oldPrice: 100000, newPrice: 80000 }],
  },
  {
    id: "0",
    title: "تیشرت مردانه مشکی ساده",
    tags: ["تیشرت", "مردانه", "مشکی", "ساده"],
    img: "/items/men.png",
    prices: [{ oldPrice: 100000, newPrice: 80000 }],
  },
];
export const sizes = [
  { index: 0, enTitle: "XS", title: "خیلی کوچک" },
  { index: 1, enTitle: "S", title: "کوچک" },
  { index: 2, enTitle: "M", title: "متوسط" },
  { index: 3, enTitle: "L", title: "بزرگ" },
  { index: 4, enTitle: "XL", title: "خیلی بزرگ" },
  { index: 5, enTitle: "XXL", title: "سایز بالا" },
];
export const colors = [
  { index: 0, enTitle: "red", title: "قرمز" },
  { index: 1, enTitle: "blue", title: "آبی" },
  { index: 2, enTitle: "green", title: "سبز" },
  { index: 3, enTitle: "yellow", title: "زرد" },
  { index: 4, enTitle: "orange", title: "نارنجی" },
  { index: 5, enTitle: "purple", title: "بنفش" },
  { index: 6, enTitle: "pink", title: "صورتی" },
  { index: 7, enTitle: "brown", title: "قهوه‌ای" },
  { index: 8, enTitle: "gray", title: "خاکستری" },
  { index: 9, enTitle: "black", title: "سیاه" },
];
export const brands = [
  {
    label: "",
    image: "/brands/1.png",
    href: "",
  },
  {
    label: "",
    image: "/brands/2.png",
    href: "",
  },
  {
    label: "",
    image: "/brands/3.png",
    href: "",
  },
  {
    label: "",
    image: "/brands/4.png",
    href: "",
  },
  {
    label: "",
    image: "/brands/5.png",
    href: "",
  },
  {
    label: "",
    image: "/brands/6.png",
    href: "",
  },
  {
    label: "",
    image: "/brands/7.png",
    href: "",
  },
  {
    label: "",
    image: "/brands/8.png",
    href: "",
  },
];
