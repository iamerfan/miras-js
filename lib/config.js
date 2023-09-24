const production = process.env.NODE_ENV === "production";
export const server = production ? process.env.URL : "http://localhost:3000";
