"use client";
import axios from "axios";
import FormInput from "../Form/FormInput";
import styles from "./Profile.module.scss";
import auth from "@/components/Auth/Auth.module.scss";
import { useState } from "react";
import { server } from "@/lib/config";
import notify from "@/components/Notification/notify";
import { useDispatch } from "react-redux";
import { Login } from "@/redux/User";
import Modal from "@/components/Profile/modal";

export default function ProfilePanel(props) {
  const initials = {
    name: props.name || "",
    email: props.email || "",
    phoneNumber: props.phoneNumber || "",
    address: props.address || "",
    ostan: props.ostan || "",
    shahr: props.shahr || "",
    postalCode: props.postalCode || "",
    password: "",
    confirmPassword: "",
    newPassword: "",
  };

  const [credentials, setCredentials] = useState(initials);
  const [disabled, setDisabled] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const { success, danger } = notify();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.newPassword !== credentials.confirmPassword) {
      setModalActive(false);
      return danger("خطا", "رمز عبور جدید و تایید آن یکسان باید باشند");
    }

    const updatedData = {
      ...credentials,
      confirmNewPassword: undefined,
      newPassword: credentials.newPassword || undefined,
    };

    try {
      setLoading(true);

      const result = await axios.put(`${server}/api/auth/profile`, updatedData);
      if (result.status === 200) {
        success("عملیات موفق", "اطلاعات شما با موفقیت بروزرسانی شد");
        dispatch(Login(result.data.user));
        setModalActive(false);
        setDisabled(true);
        setCredentials({
          ...credentials,
          password: "",
        });
      }
    } catch (error) {
      if (error.response.status === 403)
        return danger("خطا", "رمز عبور وارد شده اشتباه است");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (disabled) return setDisabled(!disabled);
    if (!disabled) setModalActive(true);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.Profile}>
      <div className={styles.Container}>
        <div className={styles.Top}>
          <div>
            <h3>اطلاعات کاربری</h3>
            <p>بررسی و ویرایش اطلاعات کاربری شما </p>
          </div>
          <button onClick={handleEdit}>
            {disabled ? "ویرایش اطلاعات" : "ثبت"}
          </button>
        </div>
        <form
          className={`${auth.Form} ${styles.Form}`}
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <Modal modalActive={modalActive}>
            <div className={styles.Top}>
              <div className={styles.Title}>
                <h3>تایید هویت</h3>
                <p>برای ویرایش اطلاعات لطفا رمز عبور خود را وارد کنید</p>
              </div>
              <button
                type="button"
                className={styles.CancelModal}
                onClick={() => setModalActive(false)}
              >
                انصراف
              </button>
            </div>
            <FormInput type="password" name="password" title="رمز عبور فعلی" />
            <button
              disabled={loading || credentials.password ? false : true}
              type="submit"
            >
              {loading ? "... درحال بروزرسانی" : " ویرایش اطلاعات"}
            </button>
          </Modal>

          <div className={styles.FormDivider}>
            <FormInput
              disabled={disabled}
              value={credentials.name}
              name="name"
              title="نام و نام خانوادگی"
            />
            <FormInput
              disabled={disabled}
              name="email"
              value={credentials.email}
              title="ایمیل"
            />
            <FormInput
              disabled={disabled}
              name="address"
              value={credentials.address}
              title="آدرس"
            />
          </div>
          <div className={styles.FormDivider}>
            <FormInput
              disabled={disabled}
              value={credentials.phoneNumber}
              name="phoneNumber"
              title="شماره تلفن"
            />
            <FormInput
              disabled={disabled}
              name="postalCode"
              value={credentials.postalCode}
              title="کد پستی"
            />
            <FormInput
              disabled={disabled}
              name="ostan"
              value={credentials.ostan}
              title="استان"
            />
          </div>
          <div className={styles.FormDivider}>
            <FormInput disabled={disabled} name="shahr" title="شهر" />

            <FormInput
              disabled={disabled}
              type="password"
              name="newPassword"
              title="رمز عبور جدید(اختیاری)"
            />
            <FormInput
              disabled={disabled}
              name="confirmPassword"
              type="confirmPassword"
              title="تکرار رمز ورود جدید (اختیاری)"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
