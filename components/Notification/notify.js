"use client";
import { Notification } from "@/redux/Message";
import { useDispatch } from "react-redux";

export default function useNotification() {
  const dispatch = useDispatch();
  const success = (title, message) =>
    dispatch(Notification({ type: "success", title, message }));
  const warning = (title, message) =>
    dispatch(Notification({ type: "warning", title, message }));
  const danger = (title, message) =>
    dispatch(Notification({ type: "danger", title, message }));
  const info = (title, message) =>
    dispatch(Notification({ type: "info", title, message }));

  return { success, warning, danger, info };
}
