import { router } from "@/routes";
import DatabaseSeed from "@/seeders/database.seed";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import Logging from "@/utils/library/logging";
import express, { Application, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import morgan from "morgan";
import { envVar } from "..";

class App {
  public express: Application;
  public port: number;
  private databaseSeed: DatabaseSeed;

  constructor(port: number) {
    this.port = port;
    this.express = express();
    this.databaseSeed = new DatabaseSeed();
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(morgan("dev"));
    this.initializeDatabaseConnection()
      .then(() => {
        this.initializeControllers();
        this.databaseSeed.initializeDatabaseModels();
        // generatePermissionEnums();
      })
      .catch((error) => {
        console.error("Error initializing database:", error);
      });

    this.handleError();
  }

  private async initializeDatabaseConnection() {
    try {
      mongoose
        .connect(envVar.DB_PATH)
        .then(() => Logging.log("MongoDB connected-"))
        .catch((err) => Logging.error(err));
    } catch (error) {
      throw new Error("Error ---> " + error);
    }
  }

  private async handleError() {
    this.express.use((err: any, req: IReq, res: IRes, next: NextFunction) => {
      // Handle the error here.
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Something went wrong!  - Error Thrown");
    });
  }
  private initializeControllers(): void {
    this.express.get("/", (_, res) => {
      res.status(StatusCodes.OK).json({
        message: "Port is Healthy 💪 and running 🏃🏃",
      });
    });
    this.express.use(router);
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      Logging.info(`App listening on the port ${this.port} 🤞`);
    });
  }
}

export default App;
