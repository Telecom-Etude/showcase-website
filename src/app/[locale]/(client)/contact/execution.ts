"use server";

import { sendEmail } from "@/mailer";

export async function sendForm(values: { name: string; email: string; tel?: string; societe?: string; subject?: string; message: string }) {
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
                    <H1>${values.subject || values.societe || values.name}</H1>
                    <table>
                        <tr>
                            <td>Nom</td>
                            <td>${values.name}</td>
                        </tr>
                        <tr>
                            <td>Société</td>
                            <td>${values.societe}</td>
                        </tr>
                        <tr>
                            <td>Mail</td>
                            <td><a href="mailto:${values.email}">${values.email}</td>
                        </tr>
                        <tr>
                            <td>Téléphone</td>
                            <td><a href="tel:${values.tel}">${values.tel}</a></td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>${formattedDate}</td>
                        </tr>
        
                    </table>
                </div>
                <H2>Message</H2>
                <div class="text">${values.message}</div>
                </div>
            </body>
        </html>`;

    const subject = `[form contact site][${values.societe || values.name}] ${values.subject || ""}`;

    await sendEmail(process.env.FORM_DEST_EMAIL?.split(";") || [], subject, html);
}
