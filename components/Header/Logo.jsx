import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className={styles.Logo}>
      <Image alt="" src="/Miras.png" width="110" height="50" />
    </Link>
  );
}
