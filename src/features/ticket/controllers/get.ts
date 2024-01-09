import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { ticketService } from "@service/db/ticket.service";

export class Get {
  public async tickets(req: Request, res: Response): Promise<void> {
    const list = await ticketService.getTickets();
    res.status(HTTP_STATUS.OK).json({ message: "tickets list", total: list.length, list });
  }

  public async ticket(req: Request, res: Response): Promise<void> {
    const { ticketId } = req.params;
    const ticket = await ticketService.getTicket(ticketId);
    res.status(HTTP_STATUS.OK).json({ message: "ticket", ticket });
  }
}
