import { Document } from "mongoose";
import { ObjectId } from "mongodb";
import { ISeat } from "@hall/interfaces/hall.interface";

export interface ITicketDocument extends Document {
  _id: string | ObjectId;
  movie: string;
  show: string;
  seats: ISeat[];
  price: number;
  name: ITicketName;
  createdAt?: Date;
}

export interface ITicketData {
  _id: string | ObjectId;
  movie: string;
  show: string;
  seats: ISeat[];
  price: number;
  name: ITicketName;
  createdAt?: Date;
}

export interface ITicketName {
  name: string;
  lastName: string;
  email: string;
}
