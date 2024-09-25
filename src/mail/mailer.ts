"use server";

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

interface FormProps {
    name: string;
    email: string;
    tel?: string;
    societe?: string;
    subject: string;
    message: string;
}

export async function sendForm({ name, email, tel, societe, subject, message }: FormProps, emails: string[]) {
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
    })} ${date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`;

    const html = `        
    <!DOCTYPE html>
    <html lang="en">
        <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style>
                    body {
                        padding: 10px;
                    }
                    table{
                        width: 100%;
                    }
        
                    tr { 
                        width: 100%;
                    }
        
                        th, td {
                            padding: 8px;
                            
                            text-align: left;
                            border-bottom: 1px solid #ddd;
                        }
        
                        th {
                            background-color: #f2f2f2;
                        }
        
                    </style>
            </head>
            <body>
                <div class="infos">
                    <H1>${subject || societe || name}</H1>
                    <table>
                        <tr>
                            <td>Nom</td>
                            <td>${name}</td>
                        </tr>
                        <tr>
                            <td>Société</td>
                            <td>${societe}</td>
                        </tr>
                        <tr>
                            <td>Mail</td>
                            <td><a href="mailto:${email}">${email}</td>
                        </tr>
                        <tr>
                            <td>Téléphone</td>
                            <td><a href="tel:${tel}">${tel}</a></td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>${formattedDate}</td>
                        </tr>
        
                    </table>
                </div>
                <H2>Message</H2>
                <div class="text">${message}</div>
                </div>
            </body>
        </html>`;

    const email_subject = `[Formulaire de contact TE][${societe || name}] ${subject}`;

    await sendEmail(emails, email_subject, html);
}
