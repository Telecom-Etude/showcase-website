'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import { ExtendedUser } from '@/auth/auth';
import { ThemeSwitch } from '@/components/themes';
import { Button } from '@/components/ui/button';
import {
    DeployableListItem,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Locale } from '@/locales/config';
import { getDictionary } from '@/locales/dictionaries';
import { nav } from '@/locales/routing';

import { getLinks, SingleLink, ExtendedLink, MultipleLink } from './get-links';
import { LocaleSwitch } from './locale-switcher';

const ContactButton = ({
    link,
    onClick,
    setOpened,
}: {
    link: SingleLink;
    onClick: () => void;
    setOpened: (open: null | number) => void;
}) => (
    <Button
        asChild
        variant="call2action"
        className="w-full rounded-none group/buttoncontact"
        onClick={() => {
            onClick();
            setOpened(null);
        }}
    >
        <NavigationMenuItem className="pt-0 pb-0 pl-0 pr-0">
            <NavigationMenuLink
                href={link.href}
                className="w-full flex space-x-2 justify-center items-center px-4 h-full "
            >
                <p>{link.title}</p>
                <FaArrowRight className="group-hover/buttoncontact:animate-bounce-x" />
            </NavigationMenuLink>
        </NavigationMenuItem>
    </Button>
);

const MultipleMobileLinks = ({
    link,
    isOpen,
    setOpen,
    onClick,
    router,
}: {
    router: AppRouterInstance;
    onClick: () => void;
    isOpen: boolean;
    setOpen: () => void;
    link: MultipleLink;
}) => (
    <>
        <Button
            variant="ghost"
            onClick={() => setOpen()}
            className={cn('w-full flex items-center space-x-2', isOpen && 'bg-muted')}
        >
            <p>{link.title}</p>
            {isOpen ? <FaChevronUp className="w-2 h-2" /> : <FaChevronDown className="w-2 h-2" />}
        </Button>

        {isOpen && (
            <div className="border-b-2">
                {link.links.map((singleLink, i) => (
                    <Button
                        className="w-full"
                        variant="ghost"
                        onClick={() => {
                            onClick();
                            router.push(singleLink.href);
                        }}
                        key={i}
                    >
                        <p className="italic">{singleLink.title}</p>
                    </Button>
                ))}
            </div>
        )}
    </>
);

const MobileLinks = ({
    links,
    contactLink,
    locale,
    onClick,
}: {
    onClick: () => void;
    links: ExtendedLink[];
    contactLink: SingleLink;
    locale: Locale;
}) => {
    const [opened, setOpened] = useState<null | number>(null);
    const router = useRouter();

    const navLinks = links.map((link: ExtendedLink, i: number) => (
        <NavigationMenuItem key={i} className="w-full">
            {'href' in link ? (
                <Button
                    className="w-full"
                    variant="ghost"
                    onClick={() => {
                        setOpened(null);
                        onClick();
                        router.push(link.href);
                    }}
                >
                    {link.title}
                </Button>
            ) : (
                <MultipleMobileLinks
                    router={router}
                    onClick={onClick}
                    link={link}
                    isOpen={opened === i}
                    setOpen={() => setOpened((last) => (last === i ? null : i))}
                />
            )}
        </NavigationMenuItem>
    ));
    navLinks.push(<ThemeSwitch onClick={onClick} setOpened={setOpened} />);
    navLinks.push(<LocaleSwitch locale={locale} mobile onClick={onClick} setOpened={setOpened} />);
    navLinks.push(<ContactButton link={contactLink} onClick={onClick} setOpened={setOpened} />);

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex flex-col border-y-[1px] border-primary w-screen">
                {navLinks.map((elt, i) => (
                    <Fragment key={i}>{elt}</Fragment>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
const DesktopLinks = ({
    links,
    contactLink,
    locale,
}: {
    links: ExtendedLink[];
    contactLink: SingleLink;
    locale: Locale;
}) => {
    const navLinks = links.map((link: ExtendedLink, i: number) => (
        <NavigationMenuItem key={i}>
            {'href' in link ? (
                <NavigationMenuLink
                    href={link.href}
                    className={cn(navigationMenuTriggerStyle(), 'rounded-none bg-navigation')}
                >
                    {link.title}
                </NavigationMenuLink>
            ) : (
                <>
                    <NavigationMenuTrigger className="rounded-none bg-navigation">
                        {link.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid grid-cols-2 w-[700px] p-2">
                            {link.links.map(({ title, href, newTab }, i) => (
                                <DeployableListItem
                                    key={i}
                                    title={title}
                                    href={href}
                                    target={newTab ? '_blank' : undefined}
                                >
                                    {/* {title} */}
                                </DeployableListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </>
            )}
        </NavigationMenuItem>
    ));
    navLinks.push(<ThemeSwitch onClick={() => {}} setOpened={() => {}} />);
    navLinks.push(
        <LocaleSwitch locale={locale} mobile={false} onClick={() => {}} setOpened={() => {}} />
    );
    navLinks.push(<ContactButton link={contactLink} onClick={() => {}} setOpened={() => {}} />);

    return (
        <NavigationMenu>
            <NavigationMenuList>
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
    mobile,
}: {
    mobile: boolean;
    locale: Locale;
    user?: ExtendedUser;
    onClick?: () => void;
}) => {
    const t = getDictionary(locale).navigation.sitemap;
    if (mobile) {
        return (
            <MobileLinks
                onClick={onClick!}
                links={getLinks(locale, user)}
                locale={locale}
                contactLink={{ href: nav(locale, '/contact'), title: t.contact_form }}
            />
        );
    } else {
        return (
            <DesktopLinks
                links={getLinks(locale, user)}
                locale={locale}
                contactLink={{ href: nav(locale, '/contact'), title: t.contact_form }}
            />
        );
    }
};
