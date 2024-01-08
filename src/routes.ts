import { Application } from "express";
import { authRoutes } from "@auth/routes/auth.route";
import { currentUserRoutes } from "@auth/routes/current.route";
import { userRoutes } from "@user/routes/user.routes";
import { cityRoutes } from "@city/routes/city.route";
import { hallRoutes } from "@hall/routes/hall.route";
import { movieRoutes } from "@movie/routes/movie.route";

const BASE_PATH = "/api/v1";

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, authRoutes.routes());
    app.use(BASE_PATH, authRoutes.signoutRoute());
    app.use(BASE_PATH, currentUserRoutes.routes());
    app.use(BASE_PATH, userRoutes.routes());
    app.use(BASE_PATH, cityRoutes.routes());
    app.use(BASE_PATH, hallRoutes.routes());
    app.use(BASE_PATH, movieRoutes.routes());
  };
  routes();
};
