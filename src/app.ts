import express from "express";
import cors from "cors";
import { config } from "dotenv";

import { rootRouter } from "./routers";
import { connectToDatabase } from "./database";

import { checkEnvVariables } from "./utils/inspectEnvFile";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", rootRouter);

app.listen(5000, async () => {
  try {
    checkEnvVariables();
    connectToDatabase();
  } catch (error) {
    console.log(error);
  }
});
