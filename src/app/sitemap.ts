import { RouteProps, SITEMAP_ROUTES } from "@/auth/routes";
import { MetadataRoute } from "next";

const getSitemapItem = ([url, { lastModified, changeFrequency, priority }]: [string, RouteProps]) => ({
    url: "https://telecom-etude.fr" + url,
    lastModified,
    changeFrequency: changeFrequency || "yearly",
    priority: priority || 0
});

export default function sitemap(): MetadataRoute.Sitemap {
    return Object.entries(SITEMAP_ROUTES).map(getSitemapItem);
}
