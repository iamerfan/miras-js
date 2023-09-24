"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/Header/Header.module.scss";
import Image from "next/image";
import CategoriesList from "./CategoriesList";
import HeaderDropdown from "../HeaderDropdown";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function CategoryDropdown({ isActive, handleClick }) {
  const [categoryIndex, setCategoryIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (categoryIndex < 6) setCategoryIndex((prev) => prev + 1);
      if (categoryIndex === 6) setCategoryIndex(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [categoryIndex]);

  const Images = [
    "/clothing/men1.jpg",
    "/clothing/women1.jpg",
    "/clothing/kid1.jpg",
    "/clothing/sport1.jpg",
    "/clothing/accessories.jpg",
    "/clothing/skincare.jpg",
  ];
  const path = usePathname();

  useEffect(() => {
    handleClick(0);
  }, [path]);
  const router = useRouter();
  const handlePush = (id) => router.push(`/search/?c=${id + 1}`);
  return (
    <HeaderDropdown
      active={isActive}
      on={() => handleClick(1)}
      off={() => handleClick(0)}
      title="محصولات"
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.DropdownBig}>
        {Images.map(
          (img, i) =>
            categoryIndex === i + 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layoutId="img"
                onClick={() => handlePush(i)}
                key={i}
                className={styles.ImageContainer}
              >
                <Image fill alt="" src={img} />
                <button className={styles.SeeButton}>
                  <Link href={`/search?c=${i + 1}`}>
                    <ArrowLeft />
                    مشاهده محصولات
                  </Link>
                </button>
              </motion.div>
            )
        )}
        <CategoriesList
          activeIndex={categoryIndex}
          handleActiveIndex={(value) => setCategoryIndex(value)}
        />
      </div>
    </HeaderDropdown>
  );
}
