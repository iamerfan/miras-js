"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function useAuth() {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const isLogged = user.email ? true : false;
  return { isLogged, router };
}
