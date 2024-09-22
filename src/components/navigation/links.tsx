import { FaArrowRight } from "react-icons/fa";
import { VariantLink } from "../ui/button";
import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { User } from "next-auth";
import { nav } from "@/locales/routing";

interface LinksProps {
    className?: string;
    locale: Locale;
    user?: User;
    onClick?: () => void;
    btnCn?: string;
}

export const Links = ({ className, locale, user, ...itemProps }: LinksProps) => {
    const t = getDictionary(locale).navigation.sitemap;

    return (
        <nav className={className}>
            <VariantLink {...itemProps} variant="ghost" href={nav(locale, "/about")}>
                {t.about}
            </VariantLink>
            <VariantLink {...itemProps} variant="ghost" href={nav(locale, "/offer")}>
                {t.offer}
            </VariantLink>
            <VariantLink {...itemProps} variant="ghost" href={nav(locale, "/commitment")}>
                {t.commitment}
            </VariantLink>
            <VariantLink {...itemProps} variant="ghost" href={nav(locale, "/blog")}>
                {t.blog}
            </VariantLink>
            <VariantLink {...itemProps} variant="ghost" href={nav(locale, "/faq")}>
                FAQ
            </VariantLink>
            {user === undefined ? (
                <VariantLink {...itemProps} variant="ghost" href={nav(locale, "/auth/signin")}>
                    {t.login}
                </VariantLink>
            ) : (
                <VariantLink {...itemProps} variant="ghost" href={nav(locale, "/auth/signout")}>
                    {t.logout}
                </VariantLink>
            )}
            <VariantLink {...itemProps} href={nav(locale, "/contact")} btnCn="group rounded-none" className="flex items-center space-x-2" variant="default">
                <p>Contact</p>
                <FaArrowRight className="group-hover:animate-bounce-x" />
            </VariantLink>
        </nav>
    );
};
