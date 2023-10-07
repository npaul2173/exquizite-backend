"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const logging_1 = __importDefault(require("../utils/library/logging"));
class App {
    constructor(port) {
        this.port = port;
        this.express = (0, express_1.default)();
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.initializeDatabaseConnection();
        this.initializeControllers();
    }
    initializeDatabaseConnection() {
        mongoose_1.default
            .connect("mongodb://localhost/exquiziteDB")
            .then(() => console.log("MongoDB connected"))
            .catch((err) => console.log(err));
    }
    initializeControllers() {
        this.express.get("/", (_, res) => {
            res.status(http_status_codes_1.StatusCodes.OK).json({
                message: "Port is Healthy 💪 and running 🏃🏃",
            });
        });
        this.express.post("/employee", (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const employee = new user_1.EmployeeModel(req.body);
            yield employee.save();
            res.send({ employee: false });
        }));
    }
    listen() {
        this.express.listen(this.port, () => {
            logging_1.default.info(`App listening on the port ${this.port} 🤞`);
            logging_1.default.warn(`App listening on the port ${this.port} 🤞`);
            logging_1.default.error(`App listening on the port ${this.port} 🤞`);
            logging_1.default.warn(`App listening on the port ${this.port} 🤞`);
            // console.log(`App listening on the port ${this.port} 🤞`);
            // console.log(colors.green("hello")); // outputs green text
            // console.log(colors.red.underline("i like cake and pies")); // outputs red underlined text
            // console.log(colors.inverse("inverse the color")); // inverses the color
            // console.log(colors.rainbow("OMG Rainbows!")); // rainbow
            // console.log(colors.trap("Run the trap")); // Drops the bass
        });
    }
}
exports.default = App;
