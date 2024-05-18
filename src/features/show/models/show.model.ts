import mongoose, { Model, model, Schema } from "mongoose";
import { IShowDocument } from "@show/interfaces/show.interface";

const showSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  username: { type: String, default: "" },
  city: { type: String, default: "" },
  hall: { type: mongoose.Schema.Types.ObjectId, ref: "Hall", index: true },
  movie: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", index: true },
    name: { type: String, default: "" },
    img: { type: String, default: "" }
  },
  time: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

const ShowModel: Model<IShowDocument> = model<IShowDocument>("Show", showSchema, "Show");
export { ShowModel };
