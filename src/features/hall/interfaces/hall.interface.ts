import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IHallDocument extends Document {
  _id: string | ObjectId;
  city: string | ObjectId;
  hallNumber: number;
  seats: ISeat[];
  createdAt?: Date;
}

export interface IHallData {
  _id: string | ObjectId;
  city: string | ObjectId;
  hallNumber: number;
  seats: ISeat[];
  createdAt?: Date;
}

export interface ISeat {
  row: string;
  seat: number;
  price: number;
  status: SeatStatus;
  type: SeatType;
  color: string;
}

export enum SeatStatus {
  FREE = "FREE",
  BUSY = "BUSY",
  BOOKED = "BOOKED"
}

export enum SeatType {
  STANDARD = "STANDARD",
  VIP = "VIP",
  HANDICAPPED = "HANDICAPPED",
  EXCLUSIVE = "EXCLUSIVE"
}
