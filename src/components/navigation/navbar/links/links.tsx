"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { nav } from "@/locales/routing";
import { ExtendedUser } from "@/auth/auth";
import { LocaleSwitch } from "./locale-switcher";
import { getLinks, SingleLink, ExtendedLink } from "./get-links";
import { cn } from "@/lib/utils";

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
import { Button } from "@/components/ui/button";

const ContactButton = ({ link, mobile = false }: { link: SingleLink; mobile?: boolean }) => (
    <Button asChild variant="call2action" className="w-full rounded-none group/buttoncontact ">
        <NavigationMenuItem className="pt-0 pb-0 pl-0 pr-0">
            <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className="flex space-x-2 items-center px-4 h-full">
                    <p>{link.title}</p>
                    <FaArrowRight className="group-hover/buttoncontact:animate-bounce-x" />
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    </Button>
);

const DesktopLinks = ({ links, contactLink, locale, mobile = false }: { mobile?: boolean; links: ExtendedLink[]; contactLink: SingleLink; locale: Locale }) => {
    const navLinks = links.map((link: ExtendedLink, i: number) => (
        <NavigationMenuItem key={i} className={mobile ? "w-full" : ""}>
            {"href" in link ? (
                <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), mobile && "w-full")}>{link.title}</NavigationMenuLink>
                </Link>
            ) : (
                <>
                    <NavigationMenuTrigger className={mobile ? "w-full" : ""}>{link.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid grid-cols-2 w-screens p-2">
                            {link.links.map(({ title, href }, i) => (
                                <DeployableListItem key={i} title={title} href={href}>
                                    {/* {title} */}
                                </DeployableListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </>
            )}
        </NavigationMenuItem>
    ));
    navLinks.push(<LocaleSwitch locale={locale} mobile={mobile} />);
    navLinks.push(<ContactButton link={contactLink} mobile={mobile} />);

    return (
        <NavigationMenu>
            <NavigationMenuList className={mobile ? "flex flex-col border-y-[1px] border-primary w-screen" : ""}>
                {navLinks.map((elt, i) => (
                    <Fragment key={i}>{elt}</Fragment>
                ))}
            </NavigationMenuList>
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
            <DesktopLinks mobile={true} links={getLinks(locale, user)} locale={locale} contactLink={{ href: nav(locale, "/contact"), title: t.contact_form }} />
        );
        // return <MobileLinks locale={locale} user={user} btnCn={btnCn} onClick={onClick} />;
    } else {
        return <DesktopLinks links={getLinks(locale, user)} locale={locale} contactLink={{ href: nav(locale, "/contact"), title: t.contact_form }} />;
    }
};
