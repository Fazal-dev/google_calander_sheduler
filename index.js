import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import eventRouter from "./routes/eventRouter.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// server listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// route to authenticate
app.use("/auth", authRouter);

// event routes
app.use("/", eventRouter);
