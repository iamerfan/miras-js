import { ConnectToDatabase, Res } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(req) {
  const data = await req.json();
  if (!data) if (!data) return Res("اشکال در دریافت اطلاعات کاربر", 403);
  const { email, password } = data;

  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const users = db.collection("users");

  try {
    const user = await users.findOne({ email, password });
    if (!user) return Res({ status: "not correct" });
    return Res({
      status: "success",
      user: { ...user, password: "" },
    });
  } catch (error) {
    return Res(error, 500);
  } finally {
    await close();
  }
}
