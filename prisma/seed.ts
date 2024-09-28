import { PrismaClient } from "@prisma/client";
require("dotenv").config({ path: ".env.local" });

const prisma = new PrismaClient();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

async function main() {
    await prisma.user.upsert({
        where: { email: ADMIN_EMAIL },
        update: {},
        create: {
            email: ADMIN_EMAIL,
            blogAdmin: true,
            userAdmin: true,
            blogAuthor: true,
            formAdmin: true
        }
    });
    const labels = [
        { locale: "fr", name: "Événements" },
        { locale: "en", name: "Events" },
        { locale: "fr", name: "Missions" },
        { locale: "en", name: "Missions" },
        { locale: "fr", name: "Données" },
        { locale: "en", name: "Data" },
        { locale: "fr", name: "Cybersécurité" },
        { locale: "en", name: "Cybersecurity" },
        { locale: "fr", name: "IA" },
        { locale: "en", name: "IA" },
        { locale: "fr", name: "Chatbot" },
        { locale: "en", name: "Chatbot" },
        { locale: "fr", name: "SE" },
        { locale: "en", name: "SE" },
        { locale: "fr", name: "Web" },
        { locale: "en", name: "Web" },
        { locale: "fr", name: "Mobile" },
        { locale: "en", name: "Mobile" },
        { locale: "fr", name: "Cloud" },
        { locale: "en", name: "Cloud" },
        { locale: "fr", name: "DevOps" },
        { locale: "en", name: "DevOps" },
        { locale: "fr", name: "Développement" },
        { locale: "en", name: "Development" },
        { locale: "fr", name: "IoT" },
        { locale: "en", name: "IoT" },
        { locale: "fr", name: "Blockchain" },
        { locale: "en", name: "Blockchain" },
        { locale: "fr", name: "Cryptomonnaie" },
        { locale: "en", name: "Cryptocurrency" },
        { locale: "fr", name: "Startup" },
        { locale: "en", name: "Startup" }
    ];

    for (const label of labels) {
        await prisma.label.upsert({
            where: {
                locale_name: {
                    locale: label.locale,
                    name: label.name
                }
            },
            update: {},
            create: {
                locale: label.locale,
                name: label.name
            }
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
