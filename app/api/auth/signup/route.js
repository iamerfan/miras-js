import { ConnectToDatabase, Res } from "@/lib/db";

export async function POST(req) {
  const data = await req.json();
  const { db, close, connect } = await ConnectToDatabase();
  await connect();

  const users = db.collection("users");
  const notUnique = await users.findOne({ email: data.email });
  if (notUnique)
    return Res({
      message: "ایمیل شما قبلا در سیستم ثبت شده است",
      status: "not unique",
    });

  try {
    const user = await users.insertOne(data);
    if (user)
      return Res({
        status: "success",
        data: { ...data, password: "", id: user.insertedId.toString() },
      });
  } catch (error) {
    return Res(error, 500);
  } finally {
    await close();
  }
}
