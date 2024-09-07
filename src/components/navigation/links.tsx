import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { User } from "next-auth";
import { nav } from "@/locales/routing";

interface NavItemProps {
    onClick?: () => void;
    children: ReactNode | string;
    buttonStyle?: string;
    linkStyle?: string;
    href: string;
    variant?: "ghost" | "default";
}

const NavItem = ({ onClick, children, buttonStyle, linkStyle, href, variant = "ghost" }: NavItemProps) => (
    <Button asChild variant={variant} className={buttonStyle} onClick={onClick ? () => onClick() : undefined}>
        <Link href={href} className={linkStyle}>
            {children}
        </Link>
    </Button>
);

interface LinksProps {
    className?: string;
    locale: Locale;
    user?: User;
    onClick?: () => void;
    buttonStyle?: string;
}

export const Links = ({ className, locale, user, ...itemProps }: LinksProps) => {
    const t = getDictionary(locale).navigation.sitemap;

    return (
        <nav className={className}>
            <NavItem {...itemProps} href={nav(locale, "/about")}>
                {t.about}
            </NavItem>
            <NavItem {...itemProps} href={nav(locale, "/offer")}>
                {t.offer}
            </NavItem>
            <NavItem {...itemProps} href={nav(locale, "/commitment")}>
                {t.commitment}
            </NavItem>
            <NavItem {...itemProps} href={nav(locale, "/post")}>
                {t.blog}
            </NavItem>
            <NavItem {...itemProps} href={nav(locale, "/faq")}>
                FAQ
            </NavItem>
            {user === undefined ? (
                <NavItem {...itemProps} href={nav(locale, "/auth/signin")}>
                    {t.login}
                </NavItem>
            ) : (
                <NavItem {...itemProps} href={nav(locale, "/auth/signout")}>
                    {t.logout}
                </NavItem>
            )}
            <NavItem {...itemProps} href={nav(locale, "/contact")} linkStyle="flex items-center space-x-2" variant="default">
                <p>Contact</p>
                <FaArrowRight />
            </NavItem>
        </nav>
    );
};
