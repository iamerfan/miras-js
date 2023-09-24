"use client";
import { motion } from "framer-motion";

export default function PageWrapper({
  children,
  className,
  initial,
  animate,
  exit,
  transition,
}) {
  return (
    <motion.div
      style={{ width: "100%" }}
      className={className}
      initial={initial ? initial : { opacity: 0 }}
      animate={animate ? animate : { opacity: 1 }}
      exit={exit ? exit : { opacity: 0 }}
      transition={
        transition
          ? transition
          : {
              delay: 0.5,
              duration: 1,
            }
      }
    >
      {children}
    </motion.div>
  );
}
