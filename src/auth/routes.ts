import { Session } from "next-auth";
import { Rights } from "./auth";
import { NextRequest } from "next/server";
import { MetadataRoute } from "next";

export interface NextAuthRequest extends NextRequest {
    auth: Session | null;
}

export const SIGNIN_PATH = "/auth/signin";
export const SIGNOUT_PATH = "/auth/signout";

const checkAdminRights = (check: (rights: Rights) => boolean) => (req: NextAuthRequest) => {
    const rights = req.auth?.user.rights;
    if (rights && check(rights)) {
        console.log("✅ allowed");
        return 200;
    } else if (rights) {
        console.log("🚫 logged in but not allowed");
        return 403;
    } else {
        console.log("🔒 protected and not logged in");
        return 401;
    }
};

export interface RouteProps {
    code?: 401 | 403 | 404;
    auth?: (req: NextAuthRequest) => number;
    priority?: number;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    lastModified?: Date;
}

export const ROUTES: { [key: string]: RouteProps } = {
    "/": {},
    "/about": {},
    "/blog": {},
    "/team": {},
    "/contact": {},
    "/test": process.env.DEV_MODE ? {} : { code: 404 },
    "/form": {},
    "/faq": {},
    "/ieseg": {},
    "/offer": {},
    "/legal": {},
    "/plaquette.pdf": {},
    "/orga.png": {},
    "/commitment": {},
    "/partners": {},
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

export const getAuthorisationCode = (req: NextAuthRequest, localelessPath: string): number => {
    if (localelessPath in ROUTES) {
        return getCode(req, ROUTES[localelessPath as keyof typeof ROUTES]);
    } else if (localelessPath.startsWith("/edit-blog/")) {
        return checkAdminRights(r => r.blogAuthor)(req);
    } else if (localelessPath.startsWith("/validate-blog")) {
        return checkAdminRights(r => r.blogAdmin)(req);
    } else {
        return 404;
    }
};
