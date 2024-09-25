"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { VariantLink } from "../../../ui/button";
import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { User } from "next-auth";
import { nav } from "@/locales/routing";
import {
    DeployableListItem,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ExtendedUser } from "@/auth/auth";
import { ContactButton } from "./contact-button";
import { LocaleSwitch } from "./locale-switcher";
import { getLinks, SingleLink, ExtendedLink } from "./get-links";

interface LinksProps {
    className?: string;
    locale: Locale;
    user?: User;
    onClick?: () => void;
    btnCn?: string;
}

const MobileLinks = ({ className, locale, user, ...itemProps }: LinksProps) => {
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

const DesktopLinks = ({ links, contactLink, locale, className }: { className?: string; links: ExtendedLink[]; contactLink: SingleLink; locale: Locale }) => {
    const navLinks = links.map((link: ExtendedLink, i: number) =>
        "href" in link ? (
            <NavigationMenuItem key={i}>
                <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{link.title}</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        ) : (
            <NavigationMenuItem key={i}>
                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid grid-cols-2 w-[400px] p-2">
                        {link.links.map(({ title, href }, i) => (
                            <DeployableListItem key={i} title={title} href={href}>
                                {/* {title} */}
                            </DeployableListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        )
    );
    navLinks.push(<LocaleSwitch locale={locale} />);
    navLinks.push(<ContactButton link={contactLink} />);

    return (
        <NavigationMenu className={className}>
            <NavigationMenuList>{navLinks.map(elt => elt)}</NavigationMenuList>
        </NavigationMenu>
    );
};

export const Links = ({
    locale,
    user,
    onClick,
    btnCn,
    mobile
}: {
    mobile: boolean;
    locale: Locale;
    user?: ExtendedUser;
    onClick?: () => void;
    btnCn?: string;
}) => {
    const t = getDictionary(locale).navigation.sitemap;
    if (mobile) {
        return (
            <DesktopLinks
                links={getLinks(locale, user)}
                locale={locale}
                contactLink={{ href: nav(locale, "/contact"), title: t.contact_form }}
                className="flex flex-col"
            />
        );
        // return <MobileLinks locale={locale} user={user} btnCn={btnCn} onClick={onClick} />;
    } else {
        return <DesktopLinks links={getLinks(locale, user)} locale={locale} contactLink={{ href: nav(locale, "/contact"), title: t.contact_form }} />;
    }
};
