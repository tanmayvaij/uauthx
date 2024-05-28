import express from "express";
import cors from "cors";
import { config } from "dotenv";

import { rootRouter } from "./routers";
import { connectToDatabase } from "./database";

config();

const app = express();

app.use(cors());
app.use(express.json())

app.use("/", rootRouter);

connectToDatabase();

app.listen(5000, () => {
  console.log("server started successfully");
});
