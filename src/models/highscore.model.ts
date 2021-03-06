import { model, Schema } from "mongoose";
import { IHighscore } from '../highscore.interface';

const HighscoreSchema = new Schema({
  name: { type: String, required: [true, "Field is required"] },
  wins: { type: Number, required: [true, "Field is required"] },
});

export const Highscore = model<IHighscore>("Highscore", HighscoreSchema);