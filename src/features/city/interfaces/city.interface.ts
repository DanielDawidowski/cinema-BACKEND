import mongoose, { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface ICityDocument extends Document {
  _id: string | ObjectId;
  name: string;
  halls: mongoose.Types.ObjectId[];
  createdAt?: Date;
}
