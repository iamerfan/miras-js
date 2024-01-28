"use client";
import HomeSlider from "./HomeSlider";
import HomeSlide from "./HomeSlide";

export default async function HomeCarousel() {
  const slides = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  return (
    <div>
      <HomeSlider>
        {slides.map((item, i) => (
          <HomeSlide item={item} key={i} />
        ))}
      </HomeSlider>
    </div>
  );
}
