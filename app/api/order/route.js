import { ConnectToDatabase, Res } from "@/lib/db";
import { getSearchParams } from "@/lib/hooks/getSearchParams";
import { NextRequest } from "next/server";
export const runtime = "edge";
export async function POST(req) {
  const { user, cart } = await req.json();
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const orders = db.collection("orders");
  try {
    const available = await orders.findOne({ id: user.id });
    if (!available) {
      const insert = await orders.insertOne({ id: user.id, order: [cart] });
      return Res(insert);
    }
    const availableOrders = available.order;
    return Res(
      await orders.updateOne(
        { id: user.id },
        { $set: { order: [...availableOrders, cart] } }
      )
    );
  } catch (error) {
    console.log(error);
    return Res(error, 405);
  } finally {
    await close();
  }
}

export async function PUT(req) {
  const data = await req.json();
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const orders = db.collection("orders");
  try {
    const order = await orders.findOneAndReplace({ id: data.id }, data);
    return Res(order);
  } catch (error) {
    console.log(error);
    return Res(error, 405);
  }
}
export async function GET(req) {
  const id = getSearchParams(req, "id");
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const orders = db.collection("orders");
  try {
    const order = await orders.findOne({ id });
    return Res(order);
  } catch (error) {
    console.log(error);
    return Res(error, 405);
  } finally {
    await close();
  }
}

export async function DELETE(req) {
  const id = getSearchParams(req, "id");
  const { connect, close, db } = await ConnectToDatabase();
  await connect();
  const orders = db.collection("orders");
  try {
    const order = await orders.deleteOne({ orderId: id });
    console.log(order);
    return Res(order);
  } catch (error) {
    console.log(error);
    return Res(error, 405);
  } finally {
    await close();
  }
}
