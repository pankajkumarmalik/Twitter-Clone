import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

//middlewears
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  connectMongoDB();
});
