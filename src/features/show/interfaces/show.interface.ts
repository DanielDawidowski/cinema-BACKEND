import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IShowDocument extends Document {
  _id: string | ObjectId;
  userId: string | ObjectId;
  username: string;
  city: string;
  hall: string | ObjectId;
  movie: string | ObjectId;
  time: string;
  createdAt?: Date;
}

export interface IShowData {
  _id: string | ObjectId;
  userId: string | ObjectId;
  username: string;
  city: string;
  hall: string | ObjectId;
  movie: string | ObjectId;
  time: string;
  createdAt?: Date;
}

export interface IMovieQuery {
  city?: string;
  movieId?: string;
}
