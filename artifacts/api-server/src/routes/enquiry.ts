import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/enquiry", async (req, res) => {
  const { name, email, phone, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    req.log.error("Email credentials not configured");
    res.status(500).json({ error: "Email service not configured." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const mailOptions = {
    from: gmailUser,
    to: "waloratimepieces@gmail.com",
    replyTo: email,
    subject: `New Enquiry from ${name} — WALORA Timepieces`,
    html: `
      <div style="font-family: Georgia, serif; background:#0a0a0a; color:#f5f0e8; padding:40px; max-width:600px; margin:0 auto; border:1px solid #c9a84c;">
        <div style="text-align:center; border-bottom:1px solid #c9a84c; padding-bottom:24px; margin-bottom:32px;">
          <h1 style="font-size:28px; color:#c9a84c; letter-spacing:0.2em; margin:0;">WALORA</h1>
          <p style="color:#c9a84c; font-size:10px; letter-spacing:0.3em; margin:6px 0 0;">TIMEPIECES</p>
        </div>

        <h2 style="font-size:18px; color:#c9a84c; letter-spacing:0.1em; margin-bottom:24px;">New Enquiry Received</h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #222; color:#c9a84c; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; width:120px;">Name</td>
            <td style="padding:12px 0; border-bottom:1px solid #222; color:#f5f0e8; font-size:15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #222; color:#c9a84c; font-size:11px; letter-spacing:0.2em; text-transform:uppercase;">Email</td>
            <td style="padding:12px 0; border-bottom:1px solid #222; color:#f5f0e8; font-size:15px;"><a href="mailto:${email}" style="color:#c9a84c;">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #222; color:#c9a84c; font-size:11px; letter-spacing:0.2em; text-transform:uppercase;">Phone</td>
            <td style="padding:12px 0; border-bottom:1px solid #222; color:#f5f0e8; font-size:15px;">${phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:16px 0; color:#c9a84c; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; vertical-align:top;">Message</td>
            <td style="padding:16px 0; color:#f5f0e8; font-size:15px; line-height:1.7;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>

        <div style="margin-top:32px; padding-top:24px; border-top:1px solid #c9a84c; text-align:center; color:#555; font-size:11px; letter-spacing:0.15em;">
          © 2026 WALORA TIMEPIECES BY ABDULLAH
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    req.log.info({ to: email }, "Enquiry email sent");
    res.status(200).json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send enquiry email");
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
