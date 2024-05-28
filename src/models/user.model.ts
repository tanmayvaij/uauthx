import { Schema, model } from "mongoose";

export const UserModel = model(
  "user",
  new Schema({
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String,
    },
    joinedOn: {
      required: true,
      type: String
    }
  })
);
