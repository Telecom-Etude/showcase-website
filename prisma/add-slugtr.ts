import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateSlugTr() {
    try {
        // Ajoute la colonne "slugtr" si elle n'existe pas déjà
        await prisma.$executeRawUnsafe(`
        ALTER TABLE Post ADD COLUMN slugtr TEXT;
      `);

        console.log('La colonne "slugtr" a été ajoutée');
    } catch (error) {
        console.error("Erreur à l'ajout de la colonne", error);
    }

    var posts = await prisma.post.findMany({
        where: {
            locale: "fr",
        },
    });

    for (const post of posts) {
        await prisma.post.update({
            where: { id: post.id },
            data: {
                slugtr: post.title + "_pas_traduit",
            },
        });
    }

    posts = await prisma.post.findMany({
        where: {
            locale: "en",
        },
    });

    for (const post of posts) {
        await prisma.post.update({
            where: { id: post.id },
            data: {
                slugtr: post.title + "_not_translated",
            },
        });
    }
    // Cette partie ne devrait pas être incluse si les posts ont une version en français et en anglais car ces derniers seraient dupliqués.
    const posts_to_dupe = await prisma.post.findMany({
        include: {
            authors: true,
            labels: true,
        },
    });

    for (const post of posts_to_dupe) {
        const newLocale = post.locale === "fr" ? "en" : "fr";

        await prisma.post.create({
            data: {
                title: post.title + "_not_translated",
                locale: newLocale,
                slug: post.slugtr === null ? "undefined" : post.slugtr,
                slugtr: post.slug,
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
