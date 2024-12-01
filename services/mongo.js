import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("DB is Connected");
    return connection;
  } catch (error) {
    console.log(error);
  }
}
