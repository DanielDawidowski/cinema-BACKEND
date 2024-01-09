import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface ICityDocument extends Document {
  _id: string | ObjectId;
  name: string;
  createdAt?: Date;
}
