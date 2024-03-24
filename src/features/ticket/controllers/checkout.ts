import { ITicket, ITicketWithPrice } from "@ticket/interfaces/ticket.interface";
import { Request, Response } from "express";
import HTTP_STATUS from "http-status-codes";
import stripe from "stripe";
import { config } from "@root/config";

const stripeSecretKey = "sk_test_51OxpfHACVUz2DqQwusCTCTFEkUfm55f46TRQ9IvYKrYmBcF8aj7pw0MdyHCKnBJUoYkacgnb0MNjtx9dxrFZcf0H00SxTYzRkO";
const stripeInstance = new stripe(stripeSecretKey);

export class Checkout {
  public async ticket(req: Request, res: Response): Promise<void> {
    const { seats } = req.body;
    const items: ITicket[] = [];

    const transactionFee = 0.5;

    seats.forEach((item: ITicketWithPrice) => {
      const unitAmount = Math.floor(parseFloat((item.price as number).toFixed(2)) * 100);
      items.push({
        price_data: {
          currency: "pln",
          product_data: {
            name: `Row ${item.row} - Seat ${item.seat}`
          },
          unit_amount: unitAmount
        },
        quantity: 1
      });
    });

    items.push({
      price_data: {
        currency: "pln",
        product_data: {
          name: "Transaction Fee"
        },
        unit_amount: Math.floor(transactionFee * 100)
      },
      quantity: 1
    });

    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card", "blik", "p24"],
      line_items: items,
      mode: "payment",
      success_url: `${config.CLIENT_URL!}/success`,
      cancel_url: `${config.CLIENT_URL!}/cancel`
    });

    res.status(HTTP_STATUS.CREATED).json({ url: session.url });
  }
}
