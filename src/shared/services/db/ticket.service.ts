import { ITicketDocument } from "@ticket/interfaces/ticket.interface";
import { TicketModel } from "@ticket/models/ticket.model";

class TicketService {
  public async addTicketToDB(createdTicket: ITicketDocument): Promise<ITicketDocument> {
    const ticket = await TicketModel.create(createdTicket);
    return ticket;
  }

  public async getTickets(): Promise<ITicketDocument[]> {
    const tickets = await TicketModel.find();
    return tickets;
  }

  public async getTicket(id: string): Promise<ITicketDocument> {
    const ticket = (await TicketModel.findById(id)) as ITicketDocument;
    return ticket;
  }

  public async updateTicket(_id: string, ticketData: Partial<ITicketDocument>): Promise<ITicketDocument | null> {
    const updatedTicket: ITicketDocument | null = await TicketModel.findOneAndUpdate({ _id }, { $set: ticketData }, { new: true });
    return updatedTicket;
  }

  public async deleteTicket(_id: string): Promise<void> {
    await TicketModel.findOneAndDelete({ _id });
  }
}

export const ticketService: TicketService = new TicketService();
