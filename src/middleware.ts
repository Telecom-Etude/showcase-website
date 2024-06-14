import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./locales/config";
import { Session } from "next-auth";
import { auth } from "./auth";

const redirect = (url: string, req: NextAuthRequest) => NextResponse.redirect(new URL(url, req.nextUrl.href));
const rewrite = (url: string, req: NextAuthRequest) => NextResponse.rewrite(new URL(url, req.nextUrl.href));

export interface NextAuthRequest extends NextRequest {
    auth: Session | null;
}

export default auth((req: NextAuthRequest) => {
    const { pathname } = req.nextUrl;
    const pathLocale = LOCALES.find(locale => pathname.startsWith(`/${locale}/`) || pathname === "/" + locale);
    const locale = pathLocale || DEFAULT_LOCALE;
    const localelessPath = pathname === `/${locale}` ? "/" : pathname.replace(`/${locale}`, "");

    console.log(
        `>>>>>>>>>> Middleware [[ auth = ${req.auth} | locale = ${locale} | pathLocale = ${pathLocale} | pathname = ${pathname} | localelessPath = ${localelessPath}]]`
    );

    if (localelessPath === "/admin") return redirect(`/${locale}/not-found`, req);
    if (localelessPath.startsWith("/admin/") && !req.auth) return redirect(`/${locale}/denied`, req);
    if (localelessPath.startsWith("/admin/")) return; // if (pathname === "/" + DEFAULT_LOCALE || pathname.startsWith("/" + DEFAULT_LOCALE + "/")) {
    //     return redirect(pathname.replace("/" + DEFAULT_LOCALE, "/"), req);
    // }>

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
