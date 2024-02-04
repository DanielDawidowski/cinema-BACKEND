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
  comedy = "COMEDY",
  thriller = "THRILLER",
  action = "ACTION",
  drama = "DRAMA",
  animation = "ANIMATION",
  biography = "BIOGRAPHY",
  adventure = "ADVENTURE",
  crime = "CRIME",
  history = "HISTORY"
}
