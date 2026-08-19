import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 5000,

  NODE_ENV:
    process.env.NODE_ENV || "development",

  CLIENT_URL:
    process.env.CLIENT_URL || "http://localhost:3000",

  MONGODB_URI:
    process.env.MONGODB_URI || "",

  JWT_SECRET:
    process.env.JWT_SECRET || "",
};