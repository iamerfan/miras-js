import { useEffect } from "react";
import styles from "../Header.module.scss";
import { RxCaretDown } from "react-icons/rx";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function HeaderDropdown({
  title,
  children,
  active,
  hover,
  on,
  off,
}) {
  useEffect(() => {
    window.addEventListener("click", off);
    return () => window.removeEventListener("click", off);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.DropdownContainer} onMouseEnter={hover}>
      <button
        onMouseEnter={hover}
        onClick={(e) => {
          e.stopPropagation();
          !active ? on() : off();
        }}
        className={`${styles.DropdownButton} ${active && styles.active}`}
      >
        <HiBars3BottomRight />
        {title}
        <RxCaretDown className={`${active && styles.active}`} />
      </button>
      <div className={`${styles.Dropdown} ${active && styles.active}`}>
        {children}
      </div>
    </div>
  );
}
