import { ConnectToDatabase, Res } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(req) {
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const items = db.collection("items");
  try {
    const res = await items.find({}).toArray();
    return Res(res);
  } catch (error) {
    throw error;
  } finally {
    await close();
  }
}
