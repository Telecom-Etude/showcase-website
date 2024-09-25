"use server";

import { db } from "@/lib/db";
import { Locale } from "@/locales/config";

export async function getLocaleLabels(locale: Locale): Promise<{ id: number; name: string }[]> {
    try {
        const localeLabels = await db.localeLabel.findMany({ where: { locale } });
        return localeLabels.map(({ name, labelId }) => ({ name, id: labelId }));
    } catch (e) {
        console.error("[getLocaleLabels] ", e);
        throw new Error();
    }
}
