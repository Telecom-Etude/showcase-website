"use server";

import { headers } from "next/headers";

export async function localeIsEn() {
    return headers().get("x-current-path")?.startsWith("/en");
}

export async function getLocale() {
    return (await localeIsEn()) ? "en" : "fr";
}
