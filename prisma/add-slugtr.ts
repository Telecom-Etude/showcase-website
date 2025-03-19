import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateSlugTr() {
    await prisma.post.updateMany({
        where: {
            locale: "fr",
        },
        data: {
            slugtr: {
                set: await prisma.$queryRaw`CONCAT(title, '_not_translated')`,
            },
        },
    });

    await prisma.post.updateMany({
        where: {
            locale: "en",
        },
        data: {
            slugtr: {
                set: await prisma.$queryRaw`CONCAT(title, '_not_translated')`,
            },
        },
    });
    // Cette partie ne devrait pas être incluse si les posts ont une version en français et en anglais car ces derniers seraient dupliqués.
    const posts = await prisma.post.findMany({
        include: {
            authors: true,
            labels: true,
        },
    });

    for (const post of posts) {
        const newLocale = post.locale === "fr" ? "en" : "fr";

        await prisma.post.create({
            data: {
                title: post.title + "_not_translated",
                locale: newLocale,
                slugtr: post.slugtr,
                slug: post.slug,
                authors: {
                    connect: post.authors.map(author => ({ id: author.id })),
                },
                content: "",
                validated: false,
                labels: {
                    connect: post.labels.map(label => ({ id: label.id })),
                },
            },
        });
    }
}

updateSlugTr()
    .then(() => {
        console.log("Mise à jour terminée");
        prisma.$disconnect();
    })
    .catch(error => {
        console.error("Erreur :", error);
        prisma.$disconnect();
    });
