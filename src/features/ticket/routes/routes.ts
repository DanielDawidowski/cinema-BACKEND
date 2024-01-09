import express, { Router } from "express";
import { authMiddleware } from "@global/helpers/auth-middleware";
import { Create } from "@ticket/controllers/create";
import { Get } from "@ticket/controllers/get";
import { Update } from "@ticket/controllers/update";
import { Delete } from "@ticket/controllers/delete";

class TicketRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routes(): Router {
    this.router.post("/ticket", authMiddleware.verifyUser, Create.prototype.ticket);
    this.router.get("/tickets", Get.prototype.tickets);
    this.router.get("/ticket/:ticketId", Get.prototype.ticket);
    this.router.put("/ticket/:ticketId", authMiddleware.verifyUser, Update.prototype.ticket);
    this.router.delete("/ticket/:ticketId", authMiddleware.verifyUser, Delete.prototype.ticket);
    return this.router;
  }
}
export const ticketRoutes: TicketRoutes = new TicketRoutes();
