"use client";
import React, { useEffect } from "react";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import { useDispatch, useSelector } from "react-redux";
import { ClearNotif } from "@/redux/Message";

export default function Notification() {
  const ops = {
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__backInDown"],
    animationOut: ["animate__animated", "animate__backOutUp"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  };
  const notification = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const { message, type, title } = notification;
  const notify = (value) => Store.addNotification({ ...ops, ...value });

  useEffect(() => {
    if (!message) return;
    notify({ message, type, title });
    dispatch(ClearNotif());
    // eslint-disable-next-line
  }, [notification]);
  return <ReactNotifications className={"notification"} />;
}
