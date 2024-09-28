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
