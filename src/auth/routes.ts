import { Session } from "next-auth";
import { Rights } from "./auth";
import { NextRequest } from "next/server";

export interface NextAuthRequest extends NextRequest {
    auth: Session | null;
}

const checkAdminRights = (req: NextAuthRequest, check: (rights: Rights) => boolean) => {
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

const routes: { [key: string]: (_: NextAuthRequest) => number } = {
    "/": _ => 200,
    "/about": _ => 200,
    "/blog": _ => 200,
    "/contact": _ => 200,
    "/test": _ => (process.env.DEV_MODE ? 200 : 404),
    "/form": _ => 200,
    "/faq": _ => 200,
    "/ieseg": _ => 200,
    "/offer": _ => 200,
    "/legal-mentions": _ => 200,
    "/commitment": _ => 200,
    "/partners": _ => 200,
    "/admin/form-submission": req => checkAdminRights(req, (r: Rights) => r.formAdmin),
    "/admin/users": req => checkAdminRights(req, (r: Rights) => r.userAdmin),
    "/admin/blog/new": req => checkAdminRights(req, (r: Rights) => r.blogAuthor),
    "/admin/blog/validation": req => checkAdminRights(req, (r: Rights) => r.blogAdmin)
};

export const getAuthorisationCode = (req: NextAuthRequest, localelessPath: string): number => {
    if (localelessPath in routes) {
        const getCode = routes[localelessPath as keyof typeof routes];
        return getCode(req);
    } else if (/^\/admin\/blog\/edit\/\d+$/.test(localelessPath)) {
        return checkAdminRights(req, (r: Rights) => r.blogAuthor);
    } else {
        return 404;
    }
};
