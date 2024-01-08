import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IMovieDocument extends Document {
  _id: string | ObjectId;
  userId: string | ObjectId;
  username: string;
  name: string;
  category: IMovieCategory[];
  description: string;
  img: string;
  imgId?: string;
  imgVersion?: string;
  createdAt?: Date;
}

export interface IMovieData {
  _id: string | ObjectId;
  userId: string | ObjectId;
  username: string;
  name: string;
  category: IMovieCategory[];
  description: string;
  img: string;
  imgId?: string;
  imgVersion?: string;
  createdAt?: Date;
}

export enum IMovieCategory {
  COMEDY = "COMEDY",
  HORROR = "HORROR",
  THRILLER = "THRILLER",
  DRAMA = "DRAMA",
  FANTASY = "FANTASY",
  ADVENTURE = "ADVENTURE",
  ACTION = "ACTION",
  ROMANCE = "ROMANCE",
  CRIME = "CRIME",
  ANIMATION = "ANIMATION",
  BIOGRAPHY = "BIOGRAPHY",
  DOCUMENTARY = "DOCUMENTARY",
  FAMILY = "FAMILY",
  HISTORY = "HISTORY",
  MUSIC = "MUSIC",
  MYSTERY = "MYSTERY",
  SCI_FI = "SCI_FI",
  SPORT = "SPORT",
  WAR = "WAR",
  WESTERN = "WESTERN"
}
