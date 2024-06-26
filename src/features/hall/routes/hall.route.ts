import express, { Router } from "express";
import { authMiddleware } from "@global/helpers/auth-middleware";
import { Get } from "@hall/controllers/get";
import { Create } from "@hall/controllers/create";
import { Update } from "@hall/controllers/update";
import { Delete } from "@hall/controllers/delete";

class HallRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routes(): Router {
    this.router.post("/hall", authMiddleware.verifyUser, Create.prototype.create);
    this.router.get("/halls", Get.prototype.halls);
    this.router.get("/hall/:hallId", Get.prototype.hall);
    this.router.get("/halls/:city", Get.prototype.hallByCity);
    this.router.put("/hall/:hallId", authMiddleware.verifyUser, Update.prototype.hall);
    this.router.delete("/hall/:hallId", authMiddleware.verifyUser, Delete.prototype.hall);
    return this.router;
  }
}
export const hallRoutes: HallRoutes = new HallRoutes();
