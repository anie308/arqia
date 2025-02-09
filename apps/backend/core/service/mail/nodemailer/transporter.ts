import nodemailer from "nodemailer"
import { Configs } from "../../../configs";

function sslSecurity() {
  if (Configs.mail.port == 465) {
    return true
  }
  return false
}

async function nodemailerTransporter() {
  const transporter = nodemailer.createTransport({
    host: Configs.mail.host,
    port: Configs.mail.port,
    secure: sslSecurity(),
    auth: {
      user: Configs.mail.user,
      pass: Configs.mail.pass
    }
  });

  return transporter
}

export default nodemailerTransporter