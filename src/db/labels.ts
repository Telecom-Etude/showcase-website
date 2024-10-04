"use server";

import { db } from "@/lib/db";
import { Locale } from "@/locales/config";

export async function getLocaleLabels(locale: Locale): Promise<{ id: number; name: string }[] | undefined> {
    try {
        return await db.label.findMany({ where: { locale } });
    } catch (e) {
        console.error("[getLocaleLabels] ", e);
    }
}

// export async function updateLabels(locale: Locale, id: number, labels: string[]) {
//     try {
//         Promise.all()
//         await db.label.findUnique
//         await db.post.update({ where: { id }, data: { labels: [] } });
//     } catch (e) {
//         console.error("[updateLabels] ", e);
//     }
// }

export async function updatePostLabels(labels: string[], id: number, locale: Locale) {
    try {
        const dbLabels: { id: number }[] = await Promise.all(
            labels.map(async name => ({ id: (await db.label.findUnique({ where: { locale_name: { name, locale } } }))!.id }))
        );
        await db.post.update({
            where: { id },
            data: {
                labels: {
                    connect: dbLabels
                }
            }
        });
    } catch (e) {
        console.error("[addLabelsToBlog] ", e);
    }
}
