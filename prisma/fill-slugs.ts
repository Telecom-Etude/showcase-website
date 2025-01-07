import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function backfillSlugs() {
    const posts = await prisma.post.findMany();

    for (const post of posts) {
        const slug = generateSlug(post.title);

        await prisma.post.update({
            where: { id: post.id },
            data: { slug }
        });

        console.log(`Updated slug for post ID ${post.id}: ${slug}`);
    }
}

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[\s]+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+|-+$/g, "");
}

backfillSlugs()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
