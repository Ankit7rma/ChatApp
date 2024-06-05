import express from "express";
import dotenv from "dotenv";

import authRouter from "./routes/authRoutes.js";
import connectToMongoDB from "./db/dbConnect.js";
import messageRouter from "./routes/messageRouter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json()); //to parse the incoming requests from the json requests (req.body)

app.use("/api/auth", authRouter);
app.use("/message", messageRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`App running on sever ${PORT}`);
});
