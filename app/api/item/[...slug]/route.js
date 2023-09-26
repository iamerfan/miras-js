import { ConnectToDatabase, Res } from "@/lib/db";
export const runtime = "edge";
export async function GET(req) {
  const { pathname } = new URL(req.url);
  const id = handleSlug(pathname, "item/");
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const items = db.collection("items");
  try {
    const updatedItem = await items.findOneAndUpdate(
      { id },
      { $inc: { visited: 1 } },
      { returnDocument: "after" }
    );
    return Res(updatedItem.value);
  } catch (error) {
    throw error;
  } finally {
    await close();
  }
}
