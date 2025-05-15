import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { NextAuthRequest } from '@/auth/routes';

import { DEFAULT_LOCALE, LOCALES, Locale } from './config';

export const nav = (locale: Locale, href: string) => `/${locale}${href}`;

function getHeaderLocale(headers: Headers) {
    try {
        const negotiator_headers = {
            'accept-language': headers.get('accept-language') || undefined,
        };
        const languages = new Negotiator({ headers: negotiator_headers }).languages();
        return match(languages, LOCALES, DEFAULT_LOCALE) as Locale;
    } catch (e) {
        // console.error("Error occurred while fetching locale: ", e);
        return DEFAULT_LOCALE;
    }
}

export function getLocaleRoutesProps(req: NextAuthRequest) {
    const { pathname } = req.nextUrl;
    const pathLocale = LOCALES.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === '/' + locale
    );
    const locale = pathLocale || getHeaderLocale(req.headers);
    const pathnameWithoutLocale =
        pathname === `/${locale}` ? '/' : pathname.replace(`/${locale}`, '');
    return { hasLocale: !!pathLocale, locale, pathnameWithoutLocale };
}
