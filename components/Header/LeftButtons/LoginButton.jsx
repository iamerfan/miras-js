"use client";
import styles from "../Header.module.scss";
import { Logout } from "@/redux/User";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@/lib/hooks/useStore";
import Image from "next/image";

export default function LoginButton() {
  const user = useUser();
  const [dropdownActive, setDropdownActive] = useState(false);
  const isLogged = user.email ? true : false;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (e) => {
    e.stopPropagation();
    setDropdownActive(!dropdownActive);
  };
  const signOut = (e) => {
    e.stopPropagation();
    dispatch(Logout());
    router.push("/auth/login");
  };
  const path = usePathname();

  useEffect(() => {
    const dropdownOff = () => setDropdownActive(false);
    window.addEventListener("click", dropdownOff);
    return () => window.removeEventListener("click", dropdownOff);
  }, []);
  useEffect(() => {
    dropdownActive && setDropdownActive(false);
  }, [path]);

  const isLoggedComponent = (
    <div className={styles.LeftButton} onClick={handleClick}>
      <FiUser />
      <label className={styles.label}>پروفایل</label>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.userDropdown} ${dropdownActive && styles.active}`}
      >
        <div className={styles.user}>
          <Image alt="" src={"/user.jpg"} width={70} height={70} />
          <label className={styles.email}>{user.email}</label>
        </div>
        <Link href={`/profile/${user.id}`}>اطلاعات کاربری</Link>
        <Link href={`/history/${user.id}`}>سابقه سفارشات</Link>
        <button onClick={signOut} className={styles.signoutButton}>
          خروج
        </button>
      </div>
    </div>
  );
  const LoginComponent = (
    <Link href={"/auth/login"} className={styles.LeftButton}>
      <FiUser />
      <label className={styles.label}> وارد شوید</label>
    </Link>
  );

  if (isLogged) return isLoggedComponent;
  return LoginComponent;
}
