import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { DEFAULT_LOCALE, LOCALES, Locale } from "./config";
import { NextAuthRequest } from "@/auth/routes";

export const nav = (locale: Locale, href: string) => `/${locale}${href}`;

export const getHeaderLocale = (headers: Headers): Locale => {
    try {
        const negociator_headers = {
            "accept-language": headers.get("accept-language") || undefined
        };
        let languages = new Negotiator({ headers: negociator_headers }).languages();
        return match(languages, LOCALES, DEFAULT_LOCALE) as Locale;
    } catch (e) {
        console.error("Error occured while fetching locale: ", e);
        return DEFAULT_LOCALE;
    }
};

export const getLocaleRoutesProps = (req: NextAuthRequest) => {
    const { pathname } = req.nextUrl;
    const pathLocale = LOCALES.find(locale => pathname.startsWith(`/${locale}/`) || pathname === "/" + locale);
    const locale = pathLocale || getHeaderLocale(req.headers);
    const localelessPath = pathname === `/${locale}` ? "/" : pathname.replace(`/${locale}`, "");
    return { hasLocale: !!pathLocale, locale, localelessPath };
};
