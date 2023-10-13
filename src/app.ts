import express, { Express } from "express";
import { CinemaServer } from "@root/setupServer";
import dbConnection from "@root/setupDB";
import { config } from "@root/config";

class Application {
  public initialize(): void {
    this.loadConfig();
    dbConnection();
    const app: Express = express();
    const server: CinemaServer = new CinemaServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.initialize();
