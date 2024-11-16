import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://jainil:jainil9657@cluster0.i0exv.mongodb.net/food-del"
    )
    .then(() => console.log("db connected"));
};
