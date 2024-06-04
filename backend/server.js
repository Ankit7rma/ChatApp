import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5050;

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, console.log(`App running on sever ${PORT}`));
