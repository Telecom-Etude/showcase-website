/**
 * @file middleware.ts
 * Middleware module for handling authentication and localization routing.
 * This module exports a default function that acts as a middleware for Next.js.
 * It is responsible for redirecting or rewriting URLs based on the authentication status and locale.
 * The module also exports a configuration object for specifying the URL matcher.
 * The middleware is great as it intercepts all requests before they reach the page.
 *
 * @module middleware
 * @donotmove
 */

import { NextResponse } from 'next/server';

import { auth } from '@/auth/auth';
import { NextAuthRequest, SIGNIN_PATH, SIGNOUT_PATH, getAuthorisationCode } from '@/auth/routes';
import { getLocaleRoutesProps } from '@/locales/routing';

/**
 * A redirection will change the URL of the page and render the page at the new URL.
 */
function redirect(url: string, req: NextAuthRequest) {
    return NextResponse.redirect(new URL(url, req.nextUrl.href));
}

/**
 * A rewrite will render the page of the specified url, but will not change the window URL.
 */
function rewrite(url: string, req: NextAuthRequest, code: number) {
    const new_url = req.nextUrl.clone();
    new_url.pathname = url;
    const res = NextResponse.rewrite(new_url);
    return new NextResponse(res.body, { status: code, headers: res.headers });
}

export default auth(async (req: NextAuthRequest) => {
    const { hasLocale, locale, pathnameWithoutLocale } = getLocaleRoutesProps(req);
    const code = getAuthorisationCode(req, pathnameWithoutLocale);
    if (code == 404) return;
    if (code != 200) return rewrite(`/${locale}/error/${code}`, req, code);
    if (pathnameWithoutLocale.startsWith('/auth')) {
        const authed = req.auth?.user.email;
        if (pathnameWithoutLocale === SIGNIN_PATH && authed) {
            return redirect(`/${locale}`, req);
        }
        if (pathnameWithoutLocale === SIGNOUT_PATH && !authed) {
            return redirect(`/${locale}`, req);
        }
    } else {
        if (!hasLocale)
            return redirect(`/${locale}${pathnameWithoutLocale}${req.nextUrl.search}`, req);
    }
    const headers = new Headers(req.headers);
    headers.set('x-current-path', req.nextUrl.pathname);
    return NextResponse.next({ headers });
});

/**
 * @property {string[]} matcher - An array of URL patterns to match against. The middleware will solely be applied to URLs that match this patterns.
 */
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|logo.*g|fr/plaquette.pdf|en/plaquette.pdf).*)',
    ],
};
