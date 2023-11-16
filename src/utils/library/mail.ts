import nodeMailer from "nodemailer";
import Logging from "./logging";
import Mail from "nodemailer/lib/mailer";
import { INext, IRes } from "../interfaces/express.interface";
import { env } from "process";
import { envVar } from "@/index";

export const sendEmail = async (res: IRes) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: envVar.EMAIL_FROM,
      pass: envVar.EMAIL_PASSWORD,
    },
  });
  // uyoz iglt ikii vkxt

  const mailOptions: Mail.Options = {
    from: envVar.EMAIL_FROM,
    to: "npaul2173@gmail.com",
    subject: "TEST NODEMAILER",
    html: "<div>hello</div>",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.send({ message: "mail sent" });
  } catch (error) {
    res.send({ message: "Failed to send email" });
  }
};
