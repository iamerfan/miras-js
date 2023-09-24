import styles from "./Header.module.scss";
import LoginButton from "./LeftButtons/LoginButton";
import Logo from "./Logo";
import Search from "./LeftButtons/Search";
import Cart from "./LeftButtons/Cart";
import Dropdowns from "./Dropdowns";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.LeftButtons}>
        <LoginButton />
        <Cart />
        <Search />
      </div>
      <div className={styles.Center}>
        <Dropdowns />
      </div>
      <Logo />
    </header>
  );
}
