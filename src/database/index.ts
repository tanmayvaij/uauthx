import { connect } from "mongoose";

export const connectToDatabase = () => {
  connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("connected to database successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
