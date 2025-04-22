import { Session } from "next-auth";
import { Rights } from "./auth";
import { NextRequest } from "next/server";
import { MetadataRoute } from "next";

// 200: ✅ allowed
// 401: 🔒 logged in but not allowed
// 403: 🔒 route protected and user not logged in
// 404: 🚫 page doesn't exist
type AuthorisationCode = 200 | 401 | 403 | 404;

interface RouteProps {
    code?: AuthorisationCode;
    auth?: (req: NextAuthRequest) => AuthorisationCode;
}

export interface NextAuthRequest extends NextRequest {
    auth: Session | null;
}

export const SIGNIN_PATH = "/auth/signin";
export const SIGNOUT_PATH = "/auth/signout";

const checkAdminRights = (check: (rights: Rights) => boolean) => (req: NextAuthRequest) => {
    if (process.env.DEV_MODE) {
        return 200;
    }
    const rights = req.auth?.user.rights;
    if (rights && check(rights)) {
        return 200;
    } else if (rights) {
        return 403;
    } else {
        return 401;
    }
};

export interface SiteMapRouteProps extends RouteProps {
    priority?: number;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
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
    "/commitment": { priority: 0.5, lastModified: "10/24/2024" },
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
    "/list-blog": { auth: checkAdminRights(r => r.blogAdmin || r.blogAuthor) },
};

function getCode(req: NextAuthRequest, routeProps: RouteProps): AuthorisationCode {
    if (routeProps.code) {
        return routeProps.code;
    } else if (routeProps.auth) {
        return routeProps.auth(req);
    } else {
        return 200;
    }
}

const PREFIX_ROUTES: { [key: string]: RouteProps } = {
    "/edit-blog": { auth: checkAdminRights(r => r.blogAuthor) },
    "/blog": {},
    "/list-blog": { auth: checkAdminRights(r => r.blogAdmin || r.blogAuthor) },
    "/error": {},
};

/**
 * Checks if the route is authorised for a given person.
 *
 * @export
 * @param {NextAuthRequest} req - incoming request of the middleware
 * @param {string} pathnameWithoutLocale - the pathname of the url, without the locale prefix (e.g., if the page is `/en/blog`, the pathnameWithoutLocale is `/blog`)
 * @returns {AuthorisationCode} - the response code
 */
export function getAuthorisationCode(req: NextAuthRequest, pathnameWithoutLocale: string): AuthorisationCode {
    if (pathnameWithoutLocale in ALL_ROUTES) {
        return getCode(req, ALL_ROUTES[pathnameWithoutLocale as keyof typeof ALL_ROUTES]);
    }
    for (const [path, props] of Object.entries(PREFIX_ROUTES)) {
        const regex = new RegExp(`^${path}/\\d+$`);
        if (regex.test(pathnameWithoutLocale)) {
            return getCode(req, props);
        }
    }
    return 404;
}
