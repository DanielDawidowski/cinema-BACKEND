import express, { Router } from "express";
import { authMiddleware } from "@global/helpers/auth-middleware";
import { Create } from "@movie/controllers/create";
import { Get } from "@movie/controllers/get";
import { Update } from "@movie/controllers/update";
import { Delete } from "@movie/controllers/delete";

class MovieRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routes(): Router {
    this.router.post("/movie", authMiddleware.verifyUser, Create.prototype.movie);
    this.router.get("/movies", Get.prototype.movies);
    this.router.get("/movie/:movieId", Get.prototype.movie);
    this.router.put("/movie/:movieId", Update.prototype.movie);
    this.router.delete("/movie/:movieId", authMiddleware.verifyUser, Delete.prototype.movie);
    return this.router;
  }
}
export const movieRoutes: MovieRoutes = new MovieRoutes();
