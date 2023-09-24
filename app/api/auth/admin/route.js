import { ConnectToDatabase, Res } from "@/lib/db";

export async function POST(req) {
  const { item } = await req.json();
  if (!item) return Res("Error in receiving product information", 403);

  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const items = db.collection("items");

  const lastItem = await items.find().sort({ id: -1 }).limit(1).toArray();
  const lastItemId = lastItem.length > 0 ? Number(lastItem[0].id) : 0;
  const data = { ...item, id: (lastItemId + 1).toString() };

  try {
    const res = await items.insertOne(data);
    return Res(res, 200);
  } catch (error) {
    return Res(error, 500);
  } finally {
    await close();
  }
}
