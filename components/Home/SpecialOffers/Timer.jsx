"use client";
import { useState, useEffect } from "react";
import styles from "@/components/Home/Home.module.scss";
import { motion } from "framer-motion";
import { useNumToTime } from "@/lib/hooks/useNumToTime";
import useInterval from "@/lib/hooks/useInterval";

export default function Timer({ time }) {
  const [timer, setTimer] = useState(time ? time : 0);
  useInterval(() => timer > 0 && setTimer((prev) => prev - 1), 1000);
  const { hours, minutes, seconds } = useNumToTime(timer);
  return (
    <div className={styles.Timer}>
      <h2>زمان باقی مانده تا پایان فروش ویژه : </h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {hours()}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {minutes()}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {seconds()}
      </motion.div>
    </div>
  );
}
