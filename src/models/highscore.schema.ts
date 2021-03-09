import { Schema } from "mongoose";

export const HighscoreSchema = new Schema({
  name: { type: String, required: [true, "Field is required"] },
  wins: { type: Number, required: [true, "Field is required"] },
});