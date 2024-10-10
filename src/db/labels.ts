"use server";

import { db } from "@/lib/db";
import { Locale } from "@/locales/config";

export type DbLabels = { id: number; name: string }[];

export async function getLocaleLabels(locale: Locale): Promise<DbLabels | undefined> {
    try {
        return await db.label.findMany({ where: { locale } });
    } catch (e) {
        console.error("[getLocaleLabels] ", e);
    }
}

export async function updatePostLabels(labels: string[], id: number, locale: Locale) {
    try {
        // console.clear();
        const currentLabels = await db.post.findUnique({
            where: { id },
            select: { labels: true }
        });

        // console.log("old labels = ", currentLabels?.labels);

        if (currentLabels?.labels) {
            await db.post.update({
                where: { id },
                data: {
                    labels: {
                        disconnect: currentLabels.labels.map(label => ({ id: label.id }))
                    }
                }
            });
        }

        // const intermediateLabels = await db.post.findUnique({
        //     where: { id },
        //     select: { labels: true }
        // });
        // console.log("intermediate labels", intermediateLabels);

        const dbLabels = await Promise.all(
            labels.map(async name => {
                let label = await db.label.findUnique({ where: { locale_name: { name, locale } } });
                if (!label) {
                    label = await db.label.create({ data: { name, locale } });
                }
                return { id: label.id };
            })
        );

        await db.post.update({
            where: { id },
            data: {
                labels: {
                    connect: dbLabels
                }
            }
        });

        // const endLabels = await db.post.findUnique({
        //     where: { id },
        //     select: { labels: true }
        // });
        // console.log("end labels", endLabels);
    } catch (e) {
        console.error("[updatePostLabels] ", e);
    }
}
