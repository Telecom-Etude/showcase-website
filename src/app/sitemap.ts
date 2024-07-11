import { RouteProps, ROUTES } from "@/auth/routes";
import { MetadataRoute } from "next";

const getSitemapItem = ([url, { lastModified, changeFrequency, priority }]: [string, RouteProps]) => ({
    url: "https://telecom-etude.fr" + url,
    lastModified,
    changeFrequency,
    priority
});

export default function sitemap(): MetadataRoute.Sitemap {
    return Object.entries(ROUTES).map(getSitemapItem);
}
