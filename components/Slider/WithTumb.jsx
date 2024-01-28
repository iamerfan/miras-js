"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";

import React, { useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import styles from "@/components/Items/items.module.scss";
import { RxCaretRight } from "react-icons/rx";
import { server } from "@/lib/config";

export default function WithTumb({ data }) {
  const mainRef = React.createRef();
  const thumbsRef = React.createRef();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
    // eslint-disable-next-line
  }, []);

  const renderSlides = () => {
    return data.map((slide, i) => (
      <SplideSlide key={i}>
        <a
          target="_blank"
          href={`${server}/${slide}`}
          rel="noopener noreferrer"
        >
          <Image src={slide} alt={""} fill />
        </a>
      </SplideSlide>
    ));
  };
  const renderThumbs = () => {
    return data.map((slide, i) => (
      <SplideSlide key={i} className={styles.thumb}>
        <Image src={slide} alt={""} width={400} height={300} />
      </SplideSlide>
    ));
  };

  const mainOptions = {
    type: "loop",
    perPage: 1,
    gap: "1rem",
    perMove: 1,
    pagination: false,
    height: "25rem",
    direction: "rtl",
    width: "100%",
    breakpoints: {
      300: {
        width: "100vw",
      },
    },
  };

  const thumbsOptions = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    direction: "rtl",
    fixedWidth: 120,
    fixedHeight: 100,
    arrows: false,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  return (
    <div className={styles.wrapper}>
      <Splide
        hasTrack={false}
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="main"
      >
        <SplideTrack>{renderSlides()}</SplideTrack>

        <div className="splide__arrows">
          <button className={`splide__arrow splide__arrow--prev Arrow`}>
            <RxCaretRight />
          </button>
          <button className={`splide__arrow splide__arrow--next Arrow`}>
            <RxCaretRight />
          </button>
        </div>
      </Splide>

      <Splide options={thumbsOptions} ref={thumbsRef} aria-label="thumbs">
        {renderThumbs()}
      </Splide>
    </div>
  );
}
