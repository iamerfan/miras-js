import { ConnectToDatabase, Res } from "@/lib/db";
import { NextRequest } from "next/server";
export const runtime = "edge";
export async function POST(req) {
  const data = await req.json();
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const users = db.collection("users");

  if (!data) return Res("اشکال در دریافت اطلاعات کاربر", 403);
  const { id } = data;
  try {
    const user = await users.findOne({ id });
    if (!user) return Res({ status: "not correct" }, 403, "not correct");
    return Res({ user: { ...user, password: "" } });
  } catch (error) {
    console.log(error);
    return Res(error, 500);
  } finally {
    await close();
  }
}

export async function PUT(req) {
  const data = await req.json();
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const users = db.collection("users");
  if (!data) return Res("اشکال در دریافت اطلاعات کاربر", 403);
  const { email, password } = data;

  try {
    const user = await users.findOne({ email });
    if (password !== user?.password) return Res("not correct", 403);
    const updatedData = data.newPassword
      ? { ...data, password: data.newPassword }
      : { ...data };
    const { value } = await users.findOneAndUpdate(
      { email },
      { $set: { ...updatedData } },
      { returnDocument: "after" }
    );
    if (!value) throw new Error();
    return Res({ user: { ...value, password: "" } }, 200);
  } catch (error) {
    return Res(error, 500);
  } finally {
    await close();
  }
}
