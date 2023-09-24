"use client";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Notification from "@/components/Notification";
import Footer from "@/components/Footer";
import ProgressBar from "@/lib/Nprogress";
import Header from "@/components/Header/";
import { usePathname } from "next/navigation";

export function Providers({ children }) {
  const path = usePathname();
  const noLayout = ["/auth/login", "/auth/signup"];

  const isValid = () => {
    if (noLayout.indexOf(path) > -1) return true;
    else return false;
  };

  const Layout = isValid() ? (
    children
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );

  return (
    <Provider store={store}>
      <Notification />
      <ProgressBar />
      <PersistGate persistor={persistor}>{Layout}</PersistGate>
    </Provider>
  );
}
