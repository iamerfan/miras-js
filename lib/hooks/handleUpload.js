import fs from "fs";

export async function handleUpload(req, FileNameAndLocation) {
  const formData = await req.formData();
  const formDataEntryValues = Array.from(formData.values());
  try {
    for (const formDataEntryValue of formDataEntryValues) {
      if (
        typeof formDataEntryValue === "object" &&
        "arrayBuffer" in formDataEntryValue
      ) {
        const file = formDataEntryValue;
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(FileNameAndLocation, buffer);
      }
    }
    return "ok";
  } catch (error) {
    console.log(error);
    return "error";
  }
}
