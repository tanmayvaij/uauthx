import express from "express";
import cors from "cors";
import { config } from "dotenv";

import { rootRouter } from "./routers";
import { connectToDatabase } from "./database";

import { checkEnvVariables } from "./utils/checkEnvVariables";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", rootRouter);

const startServer = async () => {
  try {
    checkEnvVariables();
    await connectToDatabase();

    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
