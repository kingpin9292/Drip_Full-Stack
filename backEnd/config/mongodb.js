import mongoose from "mongoose";
import "dotenv/config";
const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Mongodb connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URL}`);
};

export default connectDb;
