import nodemailer from "nodemailer";

export async function sendEmail(dest_email: string[], subject: string, html: string) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: dest_email,
        subject,
        html
    };

    await transporter.sendMail(mailOptions);
}
