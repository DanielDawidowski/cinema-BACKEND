import express, { Router } from "express";
import { authMiddleware } from "@global/helpers/auth-middleware";
import { Create } from "@city/controllers/create";
import { Get } from "@city/controllers/get";
import { Update } from "@city/controllers/update";
import { Delete } from "@city/controllers/delete";

class CityRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routes(): Router {
    this.router.post("/city", authMiddleware.verifyUser, Create.prototype.create);
    this.router.get("/cities", Get.prototype.cities);
    this.router.get("/city/:cityId", Get.prototype.city);
    this.router.put("/city/:cityId", Update.prototype.city);
    this.router.delete("/city/:cityId", authMiddleware.checkAuthentication, Delete.prototype.city);
    return this.router;
  }
}
export const cityRoutes: CityRoutes = new CityRoutes();
