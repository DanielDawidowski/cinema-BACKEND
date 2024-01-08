import mongoose, { Model, model, Schema } from "mongoose";
import { IMovieDocument } from "@movie/interfaces/movie.interface";

const movieSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  username: { type: String },
  name: { type: String, default: "" },
  img: { type: String, default: "" },
  imgId: { type: String, default: "" },
  imgVersion: { type: String, default: "" },
  category: [{ type: String, default: "" }],
  description: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

const MovieModel: Model<IMovieDocument> = model<IMovieDocument>("Movie", movieSchema, "Movie");
export { MovieModel };
