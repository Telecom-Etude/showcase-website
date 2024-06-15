import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/locales/config";
import NextAuth, { Session } from "next-auth";
import authConfig from "@/auth/auth.config";
import { isProtected, notAllowed, notExist } from "./auth/routes";
import { auth } from "./auth/auth";

const redirect = (url: string, req: NextAuthRequest) => NextResponse.redirect(new URL(url, req.nextUrl.href));
const rewrite = (url: string, req: NextAuthRequest) => NextResponse.rewrite(new URL(url, req.nextUrl.href));

export interface NextAuthRequest extends NextRequest {
    auth: Session | null;
}

export default auth(async (req: NextAuthRequest) => {
    const { pathname } = req.nextUrl;
    const pathLocale = LOCALES.find(locale => pathname.startsWith(`/${locale}/`) || pathname === "/" + locale);
    const locale = pathLocale || DEFAULT_LOCALE;
    const localelessPath = pathname === `/${locale}` ? "/" : pathname.replace(`/${locale}`, "");

    console.log(`📲 Middleware                                !! a = ${req.auth !== null} | l = ${locale} | path = ${pathLocale} !!`);

    console.log(" ========== MIDDLEWARE RIGHTS ============ ", req.auth?.user.rights);

    if (notExist(localelessPath)) return rewrite(`/${locale}/404`, req);
    if (isProtected(localelessPath) && !req.auth?.user) return rewrite(`/${locale}/401`, req);
    if (isProtected(localelessPath) && notAllowed(localelessPath, req.auth)) return rewrite(`/${locale}/403`, req);

    if (pathLocale === undefined) return redirect(`/${locale}${localelessPath}${req.nextUrl.search}`, req);
});

export const config = {
    matcher: [
        // Match all request paths except for the ones starting with:
        // - api (API routes)
        // - _next/static (static files)
        // - public (public files)
        // - _next/image (image optimization files)
        // - favicon.ico (favicon file)
        // - __nextjs_ (internal Next.js paths)
        "/((?!api|_next/static|public|_next/image|favicon.ico|__nextjs_).*)"
    ]
};
