import styles from "@/components/Auth/Auth.module.scss";
import BackButton from "@/components/Auth/BackButton";
import Logo from "@/components/Header/Logo";

export const metadata = {
  title: "Authentication",
};

export default function AuthLayout({ children }) {
  return (
    <div className={styles.AuthContainer}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <BackButton />
      <div className={styles.Auth}>{children}</div>
    </div>
  );
}
