import { Schema, model } from "mongoose";

export const User = model(
  "user",
  new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);
