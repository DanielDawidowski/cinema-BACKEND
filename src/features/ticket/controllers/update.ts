import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { joiValidation } from "@global/decorators/joi-validation.decorators";
import { ticketSchema } from "@ticket/schemes/ticket.scheme";
import { ITicketDocument } from "@ticket/interfaces/ticket.interface";
import { ticketService } from "@service/db/ticket.service";

export class Update {
  @joiValidation(ticketSchema)
  public async ticket(req: Request, res: Response): Promise<void> {
    const { ticketId } = req.params;
    const { show, movie, seats, price, name } = req.body;
    const updatedTicket: ITicketDocument = {
      _id: ticketId,
      movie,
      show,
      seats,
      price,
      name,
      createdAt: new Date()
    } as ITicketDocument;

    await ticketService.updateTicket(ticketId, updatedTicket);
    res.status(HTTP_STATUS.CREATED).json({ message: "Ticket updated", updatedTicket });
  }
}
