import mongoose, { Model, model, Schema } from "mongoose";
import { ITicketDocument } from "@ticket/interfaces/ticket.interface";

const ticketSchema: Schema = new Schema({
  show: { type: mongoose.Schema.Types.ObjectId, ref: "Show", index: true },
  seat: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

const TicketModel: Model<ITicketDocument> = model<ITicketDocument>("Ticket", ticketSchema, "Ticket");
export { TicketModel };
