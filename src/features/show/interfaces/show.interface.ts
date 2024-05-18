import { Document } from "mongoose";
import { ObjectId } from "mongodb";
import { IMovieData } from "./../../movie/interfaces/movie.interface";

export interface IShowDocument extends Document {
  _id: string | ObjectId;
  userId: string | ObjectId;
  username: string;
  city: string;
  hall: string | ObjectId;
  movie: IMovieShow;
  time: string;
  createdAt?: Date;
}

export interface IShowData {
  _id: string | ObjectId;
  userId: string | ObjectId;
  username: string;
  city: string;
  hall: string | ObjectId;
  movie: IMovieShow;
  time: string;
  createdAt?: Date;
}

export interface IMovieQuery {
  city?: string;
  movieId?: string;
}

export type IMovieShow = Pick<IMovieData, "_id" | "name" | "img">;
