import { Res } from "@/lib/db";
import fs from "fs";
export const runtime = "edge";
export async function POST(req) {
  try {
    const formData = await req.formData();
    const formDataEntryValues = Array.from(formData.values());
    const urlArrays = [];
    for (const formDataEntryValue of formDataEntryValues) {
      if (
        typeof formDataEntryValue === "object" &&
        "arrayBuffer" in formDataEntryValue
      ) {
        const file = formDataEntryValue;
        const buffer = Buffer.from(await file.arrayBuffer());
        const extension = file.name.split(".").pop();
        const name = `/clothing/${Date.now()}.${extension}`;
        fs.writeFileSync(`public${name}`, buffer);
        urlArrays.push(name);
      }
    }
    return Res(urlArrays);
  } catch (error) {
    console.error("Error uploading files:", error);
  }
}
