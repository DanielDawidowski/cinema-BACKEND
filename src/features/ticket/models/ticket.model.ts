import mongoose, { Model, model, Schema } from "mongoose";
import { ITicketDocument } from "@ticket/interfaces/ticket.interface";

const ticketSchema: Schema = new Schema({
  movie: { type: String, default: "" },
  show: { type: mongoose.Schema.Types.ObjectId, ref: "Show", index: true },
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
    lastName: { type: String, default: "" },
    email: { type: String, default: "" }
  },
  createdAt: { type: Date, default: Date.now }
});

const TicketModel: Model<ITicketDocument> = model<ITicketDocument>("Ticket", ticketSchema, "Ticket");
export { TicketModel };
