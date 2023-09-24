import { ConnectToDatabase, Res } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = params;
  console.log(id);
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const users = db.collection("users");
  const _id = new ObjectId(id[0]);
  try {
    const user = await users.findOne({ _id });
    if (!user) return Res({ status: "403" }, 403);
    return Res({ ...user, password: null });
  } catch (error) {
    console.log(error);
    return Res(error, 500);
  } finally {
    await close();
  }
}
