import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { ObjectId } from "mongodb";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { ticketSchema } from "@ticket/schemes/ticket.scheme";
import { ITicketDocument } from "@ticket/interfaces/ticket.interface";
import { ticketService } from "@service/db/ticket.service";

export class Create {
  @joiValidation(ticketSchema)
  public async ticket(req: Request, res: Response): Promise<void> {
    const { show, seats, price, name } = req.body;
    const ticketObjectId: ObjectId = new ObjectId();
    const createdTicket: ITicketDocument = {
      _id: ticketObjectId,
      show,
      seats,
      price,
      name,
      createdAt: new Date()
    } as ITicketDocument;

    await ticketService.addTicketToDB(createdTicket);
    res.status(HTTP_STATUS.CREATED).json({ message: "Ticket added", createdTicket });
  }
}
