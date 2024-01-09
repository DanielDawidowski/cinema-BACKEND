import { Model, model, Schema } from "mongoose";
import { ICityDocument } from "@city/interfaces/city.interface";

const citySchema: Schema = new Schema({
  name: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

const CityModel: Model<ICityDocument> = model<ICityDocument>("City", citySchema, "City");
export { CityModel };
