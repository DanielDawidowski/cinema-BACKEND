import express, { Router } from "express";
import { Create } from "@ticket/controllers/create";
import { Get } from "@ticket/controllers/get";
import { Update } from "@ticket/controllers/update";
import { Delete } from "@ticket/controllers/delete";
import { Checkout } from "@ticket/controllers/checkout";

class TicketRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routes(): Router {
    this.router.post("/ticket", Create.prototype.ticket);
    this.router.get("/tickets", Get.prototype.tickets);
    this.router.get("/ticket/:ticketId", Get.prototype.ticket);
    this.router.put("/ticket/:ticketId", Update.prototype.ticket);
    this.router.delete("/ticket/:ticketId", Delete.prototype.ticket);
    this.router.post("/checkout", Checkout.prototype.ticket);
    return this.router;
  }
}
export const ticketRoutes: TicketRoutes = new TicketRoutes();
