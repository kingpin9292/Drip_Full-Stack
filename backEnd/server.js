import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.port || 4000;
connectDb();
//middleware
app.use(express.json());
app.use(cors());

//api endpoints

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server runnning on port:${port}`));
