import { Schema, model } from "mongoose";

export const UserRole = model(
  "user-role",
  new Schema({
    role: {
      type: String,
      required: true,
      unique: true
    },
  })
);
