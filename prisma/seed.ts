import { PrismaClient } from "@prisma/client";
require("dotenv").config({ path: ".env.local" });

const prisma = new PrismaClient();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

if (ADMIN_EMAIL) {
    console.log("Creating administrator with email ", ADMIN_EMAIL);
} else {
    throw new Error("Missing ADMIN_EMAIL in .env.local. Please add it and try again.");
}

async function main() {
    await prisma.user.upsert({
        where: { email: "bobbob75105@gmail.com" },
        update: {},
        create: {
            email: "bobbob75105@gmail.com",
            blogAdmin: true,
            userAdmin: true,
            blogAuthor: true,
            formAdmin: true
        }
    });

    const labelsData = [
        { fr: "Événements", en: "Events" },
        { fr: "Missions", en: "Missions" },
        { fr: "Données", en: "Data" },
        { fr: "Cybersécurité", en: "Cybersecurity" },
        { fr: "IA", en: "IA" },
        { fr: "Chatbot", en: "Chatbot" },
        { fr: "SE", en: "SE" },
        { fr: "Web", en: "Web" },
        { fr: "Mobile", en: "Mobile" },
        { fr: "Cloud", en: "Cloud" },
        { fr: "DevOps", en: "DevOps" },
        { fr: "Développement", en: "Development" },
        { fr: "IoT", en: "IoT" },
        { fr: "Blockchain", en: "Blockchain" },
        { fr: "Cryptomonnaie", en: "Cryptomonnaie" },
        { fr: "Startup", en: "Startup" }
    ];

    for (const label of labelsData) {
        const createdLabel = await prisma.label.create({
            data: {}
        });

        await prisma.localeLabel.createMany({
            data: [
                { name: label.fr, locale: "fr", labelId: createdLabel.id },
                { name: label.en, locale: "en", labelId: createdLabel.id }
            ]
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
        console.log("Success");
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
