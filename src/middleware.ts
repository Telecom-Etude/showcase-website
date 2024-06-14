import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./locales/config";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === "/" + DEFAULT_LOCALE || pathname.startsWith("/" + DEFAULT_LOCALE + "/")) {
        return NextResponse.redirect(new URL(pathname.replace("/" + DEFAULT_LOCALE, "/"), request.url));
    }

    const pathnameHasLocale = LOCALES.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocale) return;

    return NextResponse.rewrite(new URL(`/${DEFAULT_LOCALE}${pathname}${request.nextUrl.search}`, request.nextUrl.href));
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)"
        // Optional: only run on root (/) URL
        // '/'
    ]
};
