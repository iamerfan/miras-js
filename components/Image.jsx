import React from "react";
import Image from "next/image";

export default function ImageComponent({
  alt = "",
  src,
  width,
  fill = false,
  priority = false,
  quality = 80,
  height,
  sizes = "(max-width: 768px) 100vw",
}) {
  return (
    <Image
      alt={alt}
      src={src}
      quality={quality}
      priority={priority}
      sizes={sizes}
      fill={fill}
      width={width}
      height={height}
    />
  );
}
