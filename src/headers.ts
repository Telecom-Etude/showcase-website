"use server";

import { headers } from "next/headers";
import { Locale } from "./locales/config";

export async function localeIsEn() {
    const header = await headers();
    return header.get("x-current-path")?.startsWith("/en");
}

export async function getLocale(): Promise<Locale> {
    return (await localeIsEn()) ? "en" : "fr";
}
