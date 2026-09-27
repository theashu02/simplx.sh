import nodemailer from "nodemailer";

export async function sendWaitlistEmail(to: string) {
  const port = parseInt(process.env.SMTP_PORT || "587");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || '"simplx.sh" <hello@simplx.sh>',
    to,
    subject: "You're on the waitlist! 🎉",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">

                <!-- Header Banner -->
                <tr>
                  <td style="background-color: #012f2c; padding: 48px 40px 40px; text-align: center;">
                    <h1 style="margin: 0 0 8px; font-size: 36px; font-weight: 900; color: #e4fdb0; letter-spacing: -2px; line-height: 1;">
                      Simplx.sh
                    </h1>
                    <p style="margin: 0; font-size: 11px; color: #e4fdb0; opacity: 0.5; letter-spacing: 4px; text-transform: uppercase;">
                      Something big is coming
                    </p>
                  </td>
                </tr>

                <!-- Body Content -->
                <tr>
                  <td style="padding: 32px 40px 16px;">
                    <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 800; color: #012f2c; line-height: 1.3;">
                      You're on the list! ✓
                    </h2>
                    <p style="margin: 0 0 12px; font-size: 15px; color: #333333; line-height: 1.7;">
                      Hey there 👋
                    </p>
                    <p style="margin: 0 0 12px; font-size: 15px; color: #333333; line-height: 1.7;">
                      Thanks for joining the <strong style="color: #012f2c;">simplx.sh</strong> waitlist. We're thrilled to have you on board!
                    </p>
                    <p style="margin: 0 0 24px; font-size: 15px; color: #333333; line-height: 1.7;">
                      We're building something exciting and can't wait to share it with you. You'll be the first to know when we launch.
                    </p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding: 0 40px;">
                    <hr style="border: none; border-top: 1px solid #e8e8e8; margin: 0;" />
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 24px 40px 36px; text-align: center;">
                    <p style="margin: 0 0 4px; font-size: 13px; color: #999999;">
                      Built with ❤️ in Bharat, by Ashu
                    </p>
                    <p style="margin: 0; font-size: 12px; color: #cccccc;">
                      © ${new Date().getFullYear()} simplx.sh — All rights reserved
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${to} | Message ID: ${info.messageId}`);
    return { success: true };
  } catch (error) {
    console.error(`❌ Failed to send email to ${to}:`, error);
    return { success: false, error };
  }
}
