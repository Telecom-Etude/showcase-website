import { SiteMapRouteProps, SITEMAP_ROUTES } from "@/auth/routes";
import { Locale, LOCALES } from "@/locales/config";
import { MetadataRoute } from "next";

const getSitemapItem = ([url, { lastModified, changeFrequency, priority }]: [string, SiteMapRouteProps]) => ({
    url: "https://telecom-etude.fr" + url,
    lastModified: new Date(Date.parse(lastModified)),
    changeFrequency: changeFrequency || "yearly",
    priority: priority || 0,
    alternates: {
        languages: LOCALES.reduce((o, key) => ({ ...o, [key]: "https://telecom-etude.fr/" + key + url }), {})
    }
});

export default function sitemap(): MetadataRoute.Sitemap {
    return Object.entries(SITEMAP_ROUTES).map(getSitemapItem);
}
