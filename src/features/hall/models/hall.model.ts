import { Model, model, Schema } from "mongoose";
import { IHallDocument } from "@hall/interfaces/hall.interface";

const hallSchema: Schema = new Schema({
  hallNumber: { type: Number, default: 0 },
  city: { type: String, default: "" },
  seats: [
    {
      row: { type: String, default: "" },
      seat: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
      status: { type: String, default: "" },
      type: { type: String, default: "" },
      color: { type: String, default: "" }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const HallModel: Model<IHallDocument> = model<IHallDocument>("Hall", hallSchema, "Hall");
export { HallModel };
