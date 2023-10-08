import { EmployeeModel } from "@/models/user";
import { router } from "@/routes";
import Logging from "@/utils/library/logging";
import { Application } from "express";
import express from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

class App {
  public express: Application;
  public port: number;

  constructor(port: number) {
    this.port = port;
    this.express = express();

    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.initializeDatabaseConnection();
    this.initializeControllers();
  }

  private initializeDatabaseConnection(): void {
    mongoose
      .connect("mongodb://localhost/exquiziteDB")
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));
  }

  private initializeControllers(): void {
    this.express.get("/", (_, res) => {
      res.status(StatusCodes.OK).json({
        message: "Port is Healthy 💪 and running 🏃🏃",
      });
    });

    this.express.post("/employee", async (req, res) => {
      console.log(req.body);

      const employee = new EmployeeModel(req.body);
      await employee.save();
      res.send({ employee: false });
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
