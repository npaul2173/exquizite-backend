"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("@colors/colors"));
class Logging {
}
_a = Logging;
Logging.log = (args) => _a.info(args);
Logging.info = (args) => console.log(colors_1.default.grey(`[${new Date().toLocaleString()}]`), colors_1.default.brightCyan(" [INFO]"), typeof args === "string" ? colors_1.default.cyan(args) : args);
Logging.warn = (args) => console.log(colors_1.default.grey(`[${new Date().toLocaleString()}]`), colors_1.default.brightYellow(" [WARN]"), typeof args === "string" ? colors_1.default.yellow(args) : args);
Logging.error = (args) => console.log(colors_1.default.red(`[${new Date().toLocaleString()}]`), colors_1.default.brightRed(" [ERROR]"), typeof args === "string" ? colors_1.default.red(args) : args);
exports.default = Logging;
