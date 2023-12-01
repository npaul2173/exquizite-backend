import Logging from "@/utils/library/logging";
import { getEmailTransporter, createEmailOptions } from "@/utils/library/mail";
import ejs from "ejs";
import path from "path";

class MailService {
  async sendEmail(
    template: string,
    toEmail: string,
    content: object
  ): Promise<{ info?: any; message: string; error?: Error }> {
    return new Promise((resolve, reject) => {
      ejs.renderFile(template, content, (error, data) => {
        if (error) {
          Logging.error(error);
          reject({ error, message: "Error rendering email template" });
        } else {
          const transporter = getEmailTransporter();
          const mailOptions = createEmailOptions(data, toEmail);
          transporter.sendMail(mailOptions, (mailError, info) => {
            if (mailError) {
              Logging.error(mailError);
              reject({
                error: mailError,
                message: "Error while sending email",
              });
            }
            Logging.info("Message sent: %s", info.messageId);
            resolve({ info, message: "Mail sent successfully" });
          });
        }
      });
    });
  }

  async sendOTPEmail(verificationCode: string) {
    const templateDir = path.join(
      __dirname,
      "../templates/ejs/emailVerification/index.ejs"
    );
    const content = { verificationCode };
    return await this.sendEmail(templateDir, "npaul2173@gmail.com", content);
  }

  async greetingsMail(toEmail: string) {
    const templateDir = path.join(__dirname, "../templates/ejs/mail/index.ejs");
    const content = {
      receiver: "Nabendu Paul",
      content: "Greetings to ExQuizite",
    };

    return await this.sendEmail(templateDir, toEmail, content);
  }
}

export default MailService;
