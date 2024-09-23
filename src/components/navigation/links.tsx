"use client";

import { FaArrowRight } from "react-icons/fa";
import { Button, VariantLink } from "../ui/button";
import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { User } from "next-auth";
import { nav } from "@/locales/routing";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport
} from "@/components/ui/navigation-menu";

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

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FaPencil } from "react-icons/fa6";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response."
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link."
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content."
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    }
];

const DesktopLinks = ({ links }: { links: Links }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <FaPencil className="w-6 h-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>*/}

                {links.map(({ type, ...link }: Link, i: number) =>
                    link?.call2action ? (
                        <Button asChild key={i} variant="call2action" className="rounded-none">
                            <NavigationMenuItem>
                                <Link href={link.href} legacyBehavior passHref>
                                    <NavigationMenuLink className="flex space-x-2 items-center group/buttoncontact">
                                        <p>{link.title}</p>
                                        <FaArrowRight className="group-hover/buttoncontact:animate-bounce-x" />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </Button>
                    ) : type === "single" ? (
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
                                        <ListItem key={i} title={title} href={href}>
                                            {/* {title} */}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

interface SingleLink {
    type: "single";
    href: string;
    title: string;
    call2action?: boolean;
}
interface MultipleLink {
    type: "multiple";
    title: string;
    links: SingleLink[];
}
type Link = SingleLink | MultipleLink;

export const Links = ({ locale, user, onClick, btnCn, mobile }: { mobile: boolean; locale: Locale; user?: User; onClick?: () => void; btnCn?: string }) => {
    const t = getDictionary(locale).navigation.sitemap;

    const links: Link[] = [
        {
            type: "multiple",
            title: "About us",
            links: [
                { type: "single", href: nav(locale, "/"), title: t.home },
                { type: "single", href: nav(locale, "/whoarewe"), title: t.whoarewe },
                { type: "single", href: nav(locale, "/about"), title: t.about },
                { type: "single", href: nav(locale, "/faq"), title: "FAQ" },
                { type: "single", href: nav(locale, "/commitment"), title: t.commitment },
                { type: "single", href: nav(locale, "/team"), title: t.team }
            ]
        },
        {
            type: "multiple",
            title: t.partners,
            links: [
                { type: "single", href: nav(locale, "/partners"), title: t.company_partners },
                { type: "single", href: nav(locale, "/ieseg"), title: "IESEG" }
            ]
        },
        { type: "single", href: nav(locale, "/offer"), title: t.offer },
        { type: "single", href: nav(locale, "/blog"), title: t.blog },
        { type: "single", href: nav(locale, user === undefined ? "/auth/signin" : "/auth/signout"), title: user === undefined ? t.login : t.logout },
        { type: "single", href: nav(locale, "/contact"), title: t.contact_form, call2action: true }
    ] as const;

    if (mobile) {
        return <MobileLinks locale={locale} user={user} btnCn={btnCn} onClick={onClick} />;
    } else {
        return <DesktopLinks links={links} />;
    }
};
