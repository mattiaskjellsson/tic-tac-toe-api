import { model } from "mongoose";
import { IHighscore } from './highscore.interface';
import { HighscoreSchema } from './highscore.schema';

export const Highscore = model<IHighscore>('Highscore', HighscoreSchema);