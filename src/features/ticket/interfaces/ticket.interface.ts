import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface ITicketDocument extends Document {
  _id: string | ObjectId;
  movie: string;
  show: string;
  seat: string;
  createdAt?: Date;
}

export interface ITicketData {
  _id: string | ObjectId;
  movie: string;
  show: string;
  seat: string;
  createdAt?: Date;
}
