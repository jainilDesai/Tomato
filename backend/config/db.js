import mongoose from "mongoose";
import "dotenv/config";
export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGOOSE_DATABASE_URL)
    .then(() => console.log("db connected"));
};
