"use client";
import Link from "next/link";
import FormInput from "./FormInput";
import styles from "../Auth/Auth.module.scss";
import { useState, useId, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { server } from "@/lib/config";
import { useDispatch } from "react-redux";
import { Login } from "@/redux/User";
import { Notification } from "@/redux/Message";
import Loading from "@/app/loading";

export default function SignupForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/auth/signup`,
        credentials
      );
      if (data.status === "success") {
        dispatch(
          Notification({
            type: "success",
            message: data.message,
            title: "ورود موفق",
          })
        );
        dispatch(Login(data.data));
        router.push("/");
      }
      if (data.status === "not unique") {
        dispatch(
          Notification({
            type: "danger",
            message: data.message,
            title: "ایمیل تکراری",
          })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(
        Notification({ type: "danger", message: "خطا سرور", title: "خطا" })
      );
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className={styles.Form}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <FormInput title={"ایمیل"} name="email" />
      <FormInput title={"رمز ورود"} name={"password"} />

      <button disabled={loading} type="submit">
        {loading ? (
          <Loading color={"#fff"} height={20} width={20} />
        ) : (
          "ثبت نام"
        )}
      </button>
      <Link className={styles.Link} href="/auth/login">
        ثبت نام کرده اید ؟<p>وارد شوید</p>
      </Link>
    </form>
  );
}
