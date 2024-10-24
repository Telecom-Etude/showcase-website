import { Session } from "next-auth";
import { Rights } from "./auth";
import { NextRequest } from "next/server";
import { MetadataRoute } from "next";

export interface NextAuthRequest extends NextRequest {
    auth: Session | null;
}

export const SIGNIN_PATH = "/auth/signin";
export const SIGNOUT_PATH = "/auth/signout";

const DEV_MODE = process.env.DEV_MODE;

const checkAdminRights = (check: (rights: Rights) => boolean) => (req: NextAuthRequest) => {
    if (process.env.DEV_MODE) {
        return 200;
    }
    const rights = req.auth?.user.rights;
    if (rights && check(rights)) {
        if (DEV_MODE) console.log("✅ allowed");
        return 200;
    } else if (rights) {
        if (DEV_MODE) console.log("🚫 logged in but not allowed");
        return 403;
    } else {
        if (DEV_MODE) console.log("🔒 protected and not logged in");
        return 401;
    }
};

interface RouteProps {
    code?: 401 | 403 | 404;
    auth?: (req: NextAuthRequest) => number;
}

type SiteMap = MetadataRoute.Sitemap[number];

export interface SiteMapRouteProps extends RouteProps {
    priority?: number;
    changeFrequency?: SiteMap["changeFrequency"];
    lastModified: string;
}

export const SITEMAP_ROUTES: { [key: string]: SiteMapRouteProps } = {
    "/": { priority: 1, lastModified: "10/24/2024" },
    "/about": { priority: 1, lastModified: "10/24/2024" },
    "/blog": { priority: 0.8, changeFrequency: "weekly", lastModified: "10/24/2024" },
    "/team": { priority: 0.5, changeFrequency: "yearly", lastModified: "10/24/2024" },
    "/contact": { priority: 0, lastModified: "10/24/2024" },
    "/partners": { priority: 0.3, lastModified: "10/24/2024" },
    "/faq": { priority: 1, changeFrequency: "monthly", lastModified: "10/24/2024" },
    "/ieseg": { priority: 0.8, lastModified: "10/24/2024" },
    "/offer": { priority: 1, changeFrequency: "monthly", lastModified: "10/24/2024" },
    "/commitment": { priority: 0.5, lastModified: "10/24/2024" }
};

export const ALL_ROUTES: { [key: string]: RouteProps } = {
    ...SITEMAP_ROUTES,
    "/legal": {},
    "/test": process.env.DEV_MODE ? {} : { code: 404 },
    "/auth/signin": {},
    "/auth/signout": {},
    "/form-submission": { auth: checkAdminRights(r => r.formAdmin) },
    "/users": { auth: checkAdminRights(r => r.userAdmin) },
    "/new-blog": { auth: checkAdminRights(r => r.blogAuthor) },
    "/validate-blog": { auth: checkAdminRights(r => r.blogAdmin) }
};

const getCode = (req: NextAuthRequest, routeProps: RouteProps) => {
    if (routeProps.code) {
        return routeProps.code;
    } else if (routeProps.auth) {
        return routeProps.auth(req);
    } else {
        return 200;
    }
};

const PREFIX_ROUTES: { [key: string]: RouteProps } = {
    "/edit-blog": { auth: checkAdminRights(r => r.blogAuthor) },
    "/blog": { auth: checkAdminRights(r => r.blogAuthor) },
    "/validate-blog": { auth: checkAdminRights(r => r.blogAdmin) },
    "/error": {}
};

export const getAuthorisationCode = (req: NextAuthRequest, localelessPath: string): number => {
    if (localelessPath in ALL_ROUTES) {
        return getCode(req, ALL_ROUTES[localelessPath as keyof typeof ALL_ROUTES]);
    }
    for (const [path, props] of Object.entries(PREFIX_ROUTES)) {
        const regex = new RegExp(`^${path}/\\d+$`);
        if (regex.test(localelessPath)) {
            return getCode(req, props);
        }
    }
    return 404;
};
