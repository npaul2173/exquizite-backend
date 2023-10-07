import { Application } from "express";
import express from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import { EmployeeModel } from "../models/user";
import colors from "@colors/colors";
import Logging from "../utils/library/logging";
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
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      Logging.info(`App listening on the port ${this.port} 🤞`);
      Logging.warn(`App listening on the port ${this.port} 🤞`);
      Logging.error(`App listening on the port ${this.port} 🤞`);
      Logging.warn(`App listening on the port ${this.port} 🤞`);
      // console.log(`App listening on the port ${this.port} 🤞`);

      // console.log(colors.green("hello")); // outputs green text
      // console.log(colors.red.underline("i like cake and pies")); // outputs red underlined text
      // console.log(colors.inverse("inverse the color")); // inverses the color
      // console.log(colors.rainbow("OMG Rainbows!")); // rainbow
      // console.log(colors.trap("Run the trap")); // Drops the bass
    });
  }
}

export default App;
