"use client";
import Link from "next/link";
import FormInput from "./FormInput";
import styles from "../Auth/Auth.module.scss";
import { useState } from "react";
import axios from "axios";
import { server } from "@/lib/config";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "@/redux/User";
import { useRouter } from "next/navigation";
import notify from "../Notification/notify";

export default function LoginForm() {
  const { success, danger } = notify();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(`${server}/api/auth/login`, {
        email,
        password,
      });
      const data = res.data;
      switch (data.status) {
        case "success":
          {
            dispatch(Login(data.user));
            success("ورود موفق", "با موفقیت وارد شدید");
            router.push("/");
          }
          break;

        case "not correct":
          const error = "نام کاربری یا رمز ورود اشتباه است";
          setError(error);
          danger("خطا", error);
          break;
        case "error":
          danger("خطا", "خطای سرور");
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <FormInput
        title="ایمیل"
        value={email}
        handleValue={(value) => setEmail(value)}
      />
      <FormInput
        title="رمز ورود"
        type="password"
        value={password}
        handleValue={(value) => setPassword(value)}
      />
      <button
        disabled={!email || !password || loading ? true : false}
        type="submit"
      >
        {loading ? "... لطفا منتظر بمانید " : "ورود"}
      </button>

      <Link className={styles.Link} href="/auth/signup">
        حساب کاربری ندارید ؟<p>ثبت نام</p>
        کنید
      </Link>
    </form>
  );
}
