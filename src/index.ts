import "dotenv/config";
import { cleanEnv, num, str } from "envalid";
import App from "./app/app";
import { IUser } from "./models/user/type";

declare global {
  namespace Express {
    interface Request {
      userData?: IUser;
    }
  }
}
// Define all the environment variables here with proper types and defaults (if required)
export const envVar = cleanEnv(process.env, {
  PORT: num(),
  EMAIL_FROM: str(),
  EMAIL_PASSWORD: str(),
  JSON_SECRET_KEY: str(),
  DB_PATH: str(),
});

const app = new App(envVar.PORT);
app.listen();
