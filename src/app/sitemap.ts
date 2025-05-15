import { MetadataRoute } from 'next';

import { SiteMapRouteProps, SITEMAP_ROUTES } from '@/auth/routes';
import { DEFAULT_LOCALE, LOCALES } from '@/locales/config';

function getSitemapItem([url, { lastModified, changeFrequency, priority }]: [
    string,
    SiteMapRouteProps,
]) {
    return {
        url: process.env.WEBSITE_URL + '/' + DEFAULT_LOCALE + url,
        lastModified: new Date(Date.parse(lastModified)),
        changeFrequency: changeFrequency || 'yearly',
        priority: priority || 0,
        alternates: {
            languages: LOCALES.reduce(
                (o, locale) => ({ ...o, [locale]: process.env.WEBSITE_URL + '/' + locale + url }),
                {}
            ),
        },
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
    return Object.entries(SITEMAP_ROUTES).map(getSitemapItem);
}
