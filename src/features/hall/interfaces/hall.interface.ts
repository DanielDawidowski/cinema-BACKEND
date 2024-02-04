import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IHallDocument extends Document {
  _id: string | ObjectId;
  city: string;
  hallNumber: number;
  seats: ISeat[];
  createdAt?: Date;
}

export interface IHallData {
  _id: string | ObjectId;
  city: string;
  hallNumber: number;
  seats: ISeat[];
  createdAt?: Date;
}

export interface ISeat {
  row: string;
  seat: string;
  status: SeatStatus;
  type: SeatType;
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
