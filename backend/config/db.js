import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MOGOOSE_DB_URL}`)
    .then(() => console.log("db connected"));
};
