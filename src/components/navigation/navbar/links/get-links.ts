import { ExtendedUser } from "@/auth/auth";
import { Locale } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { nav } from "@/locales/routing";

export interface SingleLink {
    href: string;
    title: string;
    call2action?: boolean;
}
export interface MultipleLink {
    title: string;
    links: SingleLink[];
}
export type ExtendedLink = SingleLink | MultipleLink;

export const getLinks = (locale: Locale, user: ExtendedUser) => {
    const t = getDictionary(locale).navigation;
    const s = t.sitemap;

    var authLinks: SingleLink[] = [];
    if (user?.rights?.blogAdmin) {
        authLinks.push({ href: nav(locale, "/validate-blog"), title: t.admin.validate });
    }
    if (user?.rights?.blogAuthor) {
        authLinks.push({ href: nav(locale, "/new-blog"), title: t.admin.newblog });
        authLinks.push({ href: nav(locale, "/blog"), title: t.admin.edit });
    }
    if (user?.rights?.formAdmin) {
        authLinks.push({ href: nav(locale, "/form-submission"), title: t.admin.form });
    }
    if (user?.rights?.userAdmin) {
        authLinks.push({ href: nav(locale, "/users"), title: t.admin.users });
    }
    const logoutLink = { href: nav(locale, "/auth/signout"), title: s.logout };
    authLinks.push(logoutLink);

    const authLink: ExtendedLink =
        typeof user === "undefined"
            ? { title: s.login, href: nav(locale, "/auth/signin") }
            : authLinks.length <= 1
              ? logoutLink
              : {
                    title: t.admin.account,
                    links: authLinks
                };

    const links: ExtendedLink[] = [
        {
            title: s.about,
            links: [
                { href: nav(locale, "/"), title: s.home },
                { href: nav(locale, "/about"), title: s.whoarewe },
                { href: nav(locale, "/faq"), title: "FAQ" },
                { href: nav(locale, "/commitment"), title: s.commitment },
                { href: nav(locale, "/team"), title: s.team },
                { href: nav(locale, "/plaquette.pdf"), title: s.plaquette }
            ]
        },
        {
            title: s.partners,
            links: [
                { href: nav(locale, "/partners"), title: s.company_partners },
                { href: nav(locale, "/ieseg"), title: s.ieseg }
            ]
        },
        { href: nav(locale, "/offer"), title: s.offer },
        { href: nav(locale, "/blog"), title: s.blog },
        authLink
    ] as const;

    return links;
};
