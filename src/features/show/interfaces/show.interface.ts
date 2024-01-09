import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IShowDocument extends Document {
  _id: string | ObjectId;
  userId: string | ObjectId;
  username: string;
  hall: string | ObjectId;
  movie: string | ObjectId;
  time: string;
  date: string;
  createdAt?: Date;
}

export interface IShowData {
  _id: string | ObjectId;
  userId: string | ObjectId;
  username: string;
  hall: string | ObjectId;
  movie: string | ObjectId;
  time: string;
  date: string;
  createdAt?: Date;
}
