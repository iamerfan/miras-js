import { SplideSlide } from "@splidejs/react-splide";

export default function Slide({ children, className, onClick }) {
  return (
    <SplideSlide onClick={onClick} className={className}>
      {children}
    </SplideSlide>
  );
}
