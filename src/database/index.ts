import { connect } from "mongoose";

export const connectToDatabase = async () => {
  try {
    await connect(process.env.MONGO_URI as string);
    console.log("connected to database successfully");
  } catch (error) {
    console.log(error);
  }
};
