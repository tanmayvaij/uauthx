import express from "express";
import cors from "cors";
import { config } from "dotenv";

import { rootRouter } from "./routers";
import { connectToDatabase } from "./database";

import fs from "fs"
import { load } from "js-yaml"
import { UserModel } from "./models";

config();

const app = express();

app.use(cors());
app.use(express.json())

app.use("/", rootRouter);

// connectToDatabase();

app.listen(5000, () => {

  try {
    
    console.log("Trying to load user schema");
    const yamlData = fs.readFileSync("user.yaml", "utf-8")
    const jsonData = JSON.stringify(load(yamlData), null, 4)
    
    console.log("server started successfully");
  }
  catch(error) {
    console.log(error);
  }


});
