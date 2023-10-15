import { Application } from "express";
import { authRoutes } from "@auth/routes/auth.route";
import { currentUserRoutes } from "@auth/routes/current.route";
import { userRoutes } from "@user/routes/user.routes";
import { cityRoutes } from "@city/routes/city.route";
import { authMiddleware } from "@global/helpers/auth-middleware";
import { hallRoutes } from "@hall/routes/hall.route";

const BASE_PATH = "/api/v1";

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, authRoutes.routes());
    app.use(BASE_PATH, authRoutes.signoutRoute());
    app.use(BASE_PATH, authMiddleware.verifyUser, currentUserRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, userRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, cityRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, hallRoutes.routes());
  };
  routes();
};
