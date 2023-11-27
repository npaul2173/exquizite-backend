import Logging from "@/utils/library/logging";
import { getEmailTransporter, createEmailOptions } from "@/utils/library/mail";
import ejs from "ejs";
import path from "path";

class MailService {
  async greetingsMail(
    toEmail: string
  ): Promise<{ info?: any; message: string; error?: Error }> {
    const templateDir = path.join(__dirname, "../templates/ejs/mail/index.ejs");

    return new Promise((resolve, reject) => {
      ejs.renderFile(
        templateDir,
        { receiver: "Nabendu Paul", content: "Greetings to ExQuizite" },
        (error, data) => {
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
        }
      );
    });
  }
}

export default MailService;
