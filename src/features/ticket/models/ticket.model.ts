import mongoose, { Model, model, Schema } from "mongoose";
import { ITicketDocument } from "@ticket/interfaces/ticket.interface";

const ticketSchema: Schema = new Schema({
  show: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "Show", index: true },
    city: { type: String, default: "" },
    hall: { type: Number, default: "" },
    movie: {
      _id: { type: String, default: "" },
      name: { type: String, default: "" },
      img: { type: String, default: "" },
      category: [{ type: String, default: "" }],
      description: { type: String, default: "" }
    },
    time: { type: String, default: "" }
  },
  seats: [
    {
      row: { type: String, default: "" },
      seat: { type: Number, default: 0 },
      status: { type: String, default: "" },
      type: { type: String, default: "" }
    }
  ],
  price: { type: Number, default: 0 },
  name: {
    name: { type: String, default: "" },
    email: { type: String, default: "" }
  },
  createdAt: { type: Date, default: Date.now }
});

const TicketModel: Model<ITicketDocument> = model<ITicketDocument>("Ticket", ticketSchema, "Ticket");
export { TicketModel };
