import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_Db = process.env.MONGODB_Db;

export async function ConnectToDatabase() {
  const client = new MongoClient(MONGODB_URI);
  const db = client.db(MONGODB_Db);

  const connect = async () => {
    await client.connect();
    console.log(`Connected)`);
  };

  const close = async () => {
    await client.close();
    console.log(`Disconnected)`);
  };
  return { connect, close, db, client };
}

export function Res(message, status, statusText) {
  return new Response(message && JSON.stringify(message), {
    status: status ? status : 200,
    statusText,
  });
}
