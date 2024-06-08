import { Document } from "mongoose";
import { ObjectId } from "mongodb";
import { ISeat } from "@hall/interfaces/hall.interface";
import { IShowData } from "@show/interfaces/show.interface";

export interface ITicketDocument extends Document {
  _id: string | ObjectId;
  show: ITicketShow;
  seats: ISeat[];
  price: number;
  name: ITicketName;
  createdAt?: Date;
}

export interface ITicketData {
  _id: string | ObjectId;
  show: ITicketShow;
  seats: ISeat[];
  price: number;
  name: ITicketName;
  createdAt?: Date;
}

export interface ITicketName {
  name: string;
  email: string;
}

export type ITicketShow = Pick<IShowData, "_id" | "city" | "hall" | "movie" | "time">;

export interface ITicket {
  price_data: {
    currency: string;
    product_data: {
      name: string;
    };
    unit_amount: number;
  };
  quantity: number;
}

export interface ITicketWithPrice extends ISeat {
  price: number;
}
