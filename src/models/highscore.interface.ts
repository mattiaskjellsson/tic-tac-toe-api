import { Document } from "mongoose";

export interface IHighscore extends Document { 
  name: string,
  wins: number,
}