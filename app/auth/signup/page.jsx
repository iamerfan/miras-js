"use client";
import SignupForm from "@/components/Form/SignupForm";
import styles from "@/components/Auth/Auth.module.scss";
import useAuth from "@/lib/hooks/useAuth";

export default function Signup() {
  const { isLogged, router } = useAuth();
  if (isLogged) return router.push("/");

  return (
    <div className={styles.AuthPanel}>
      <label className={styles.Title}>ثبت نام کابران</label>
      <SignupForm />
    </div>
  );
}
