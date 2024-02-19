import express, { Router } from "express";
import { authMiddleware } from "@global/helpers/auth-middleware";
import { Create } from "@show/controllers/create";
import { Get } from "@show/controllers/get";
import { Update } from "@show/controllers/update";
import { Delete } from "@show/controllers/delete";

class ShowRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routes(): Router {
    this.router.post("/show", authMiddleware.verifyUser, Create.prototype.show);
    this.router.get("/shows", Get.prototype.shows);
    this.router.get("/show/:showId", Get.prototype.show);
    this.router.get("/shows/city/:city", Get.prototype.getShowByCity);
    this.router.get("/shows/movie/:movieId", Get.prototype.getShowByMovie);
    this.router.get("/shows/:city?/:movieId?", Get.prototype.showByFilter);
    this.router.put("/show/:showId", authMiddleware.verifyUser, Update.prototype.show);
    this.router.delete("/show/:showId", authMiddleware.verifyUser, Delete.prototype.show);
    return this.router;
  }
}
export const showRoutes: ShowRoutes = new ShowRoutes();
