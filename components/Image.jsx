import React from "react";
import Image from "next/image";

export default function ImageComponent({
  alt = "",
  src,
  width,
  height,
  priority,
  sizes = "(max-width: 768px) 100vw",
}) {
  return (
    <img
      alt={alt}
      src={src}
      fetchPriority={priority ? "high" : "auto"}
      sizes={sizes}
      width={width}
      height={height}
    />
  );
}
