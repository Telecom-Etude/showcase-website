import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { User } from "next-auth";

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
            <NavItem {...itemProps} href="/about">
                {t.about}
            </NavItem>
            <NavItem {...itemProps} href="/offer">
                {t.offer}
            </NavItem>
            <NavItem {...itemProps} href="/commitment">
                {t.commitment}
            </NavItem>
            <NavItem {...itemProps} href="/blog">
                {t.blog}
            </NavItem>
            <NavItem {...itemProps} href="/faq">
                FAQ
            </NavItem>
            {user === undefined ? (
                <NavItem {...itemProps} href="/api/auth/signin">
                    {t.login}
                </NavItem>
            ) : (
                <NavItem {...itemProps} href="/api/auth/signout">
                    {t.logout}
                </NavItem>
            )}
            <NavItem {...itemProps} href="/contact" linkStyle="flex items-center space-x-2" variant="default">
                <p>Contact</p>
                <FaArrowRight />
            </NavItem>
        </nav>
    );
};
