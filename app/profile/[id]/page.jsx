import React from "react";
import ProfilePanel from "@/components/Profile";
import axios from "axios";
import { server } from "@/lib/config";

const getData = async (id) => {
  try {
    const res = await axios.get(`${server}/api/auth/profile/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Profile({ params }) {
  const data = await getData(params.id);
  return <ProfilePanel {...data} />;
}
