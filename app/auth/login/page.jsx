"use client";
import LoginForm from "@/components/Form/LoginForm";
import styles from "@/components/Auth/Auth.module.scss";
import useAuth from "@/lib/hooks/useAuth";
import { useEffect } from "react";

export default function Login() {
  const { isLogged, router } = useAuth();

  useEffect(() => {
    isLogged && router.push("/");
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.AuthPanel}>
      <label className={styles.Title}>ورود کاربران</label>
      <LoginForm />
    </div>
  );
}
