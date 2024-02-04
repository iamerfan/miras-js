"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyImg({ alt = "", ...rest }) {
  return (
    <LazyLoadImage alt={alt} effect="blur" useIntersectionObserver {...rest} />
  );
}
