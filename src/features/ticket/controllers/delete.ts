import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import { ticketService } from "@service/db/ticket.service";

export class Delete {
  public async ticket(req: Request, res: Response): Promise<void> {
    const { ticketId } = req.params;
    await ticketService.deleteTicket(ticketId);
    res.status(HTTP_STATUS.OK).json({ message: "Ticket deleted" });
  }
}
