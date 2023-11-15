import nodeMailer from "nodemailer";
import Logging from "./logging";
import Mail from "nodemailer/lib/mailer";
import { INext, IRes } from "../interfaces/express.interface";

export const sendEmail = async (res: IRes) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "npaul2173@gmail.com",
      pass: "uyoz iglt ikii vkxt",
    },
  });
  // uyoz iglt ikii vkxt

  const mailOptions: Mail.Options = {
    from: "npaul2173@gmail.com",
    to: "npaul2173@gmail.com",
    subject: "TEST NODEMAILER",
    html: "<div>hello</div>",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    Logging.success("MAIL SENT");
    Logging.info(info);
    res.send({ message: "mail sent" });
  } catch (error) {
    Logging.error("Error sending email");
    Logging.error(error);
    res.send({ message: "Failed to send mail" });
  }
};
