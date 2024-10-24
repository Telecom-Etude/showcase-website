"use server";

import { headers } from "next/headers";

export const localeIsEn = async () => {
    return headers().get("x-current-path")?.startsWith("/en");
};

export const getLocale = async () => {
    return (await localeIsEn()) ? "en" : "fr";
};
