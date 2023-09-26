import { ConnectToDatabase, Res } from "@/lib/db";
import { handleQuery } from "@/lib/hooks/handleQuery";
import queryString from "query-string";
export const runtime = "edge";
export async function GET(req) {
  // Extract the URL and query parameters from the request object
  const { href } = new URL(req.url);
  const query = handleQuery(href);
  const { q } = queryString.parse(query);

  // Connect to the database and retrieve the collection of items
  const { connect, close, db } = await ConnectToDatabase();
  try {
    connect();
    const items = db.collection("items");

    // Create a filter object based on the 'q' parameter and if it doesnt exist then return all items
    let filter = {};
    if (q)
      filter = {
        $or: [
          { title: q },
          { tags: q },
          { colors: { $elemMatch: { $or: [{ enTitle: q }, { title: q }] } } },
        ],
      };

    // Find the items matching the filter and return the result
    const res = await items.find(filter).toArray();
    return Res(res);
  } catch (error) {
    console.log(error);
  } finally {
    // Close the database connection
    await close();
  }
}
