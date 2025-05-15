import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Locale } from '@/locales/config';
import { Dictionary, getDictionary } from '@/locales/dictionaries';
import { nav } from '@/locales/routing';

import { BtnLink, EmailContact } from '../telecom-etude/contact';
import { FullLogo } from '../telecom-etude/logos';
import { Button } from '../ui/button';

const Network = ({ href, Icon, label }: { href: string; Icon: IconType; label: string }) => (
    <Link
        href={href}
        className="p-2 group"
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer nofollow"
    >
        <Icon className="group-hover:text-primary transition-colors duration-200" />
    </Link>
);

const LinkItem = ({ href, name, newTab }: { href: string; name: string; newTab?: boolean }) => (
    <Button variant="link" className="text-foreground py-[3px] !px-0" asChild>
        <Link className="w-fit h-fit pl-0 py-0" href={href} target={newTab ? '_blank' : undefined}>
            {name}
        </Link>
    </Button>
);

const NetworkLinks = () => (
    <div className="flex w-full justify-evenly">
        <Network
            href="https://www.linkedin.com/company/telecom-etude/"
            Icon={FaLinkedin}
            label="Linkedin"
        />
        <Network href="https://www.facebook.com/TelecomEtude" Icon={FaFacebook} label="Facebook" />
        <Network
            href="https://www.instagram.com/telecometude"
            Icon={FaInstagram}
            label="Instagram"
        />
        <Network href="mailto:contact@telecom-etude.fr" Icon={FaEnvelope} label="Email" />
    </div>
);

const SiteMapBlock = ({
    title,
    items,
    locale,
}: {
    locale: Locale;
    title: string;
    items: { name: string; href: string; newTab?: boolean }[];
}) => (
    <section className="flex flex-col items-center">
        <h3 className="text-center font-semibold bg-gradient-to-r from-primary to-destructive w-fit m-auto text-transparent bg-clip-text">
            {title}
        </h3>
        {items.map(({ name, href, newTab }, k) => (
            <LinkItem name={name} href={nav(locale, href)} newTab={newTab} key={k} />
        ))}
    </section>
);

const SiteMap = ({ t, locale }: { locale: Locale; t: Dictionary['navigation']['sitemap'] }) => {
    return (
        <>
            <SiteMapBlock
                locale={locale}
                title={t.about}
                items={[
                    { name: t.home, href: '/' },
                    { name: t.whoarewe, href: '/about' },
                    { name: t.commitment, href: '/commitment' },
                    { name: t.team, href: '/team' },
                    { name: t.plaquette, href: '/plaquette.pdf', newTab: true },
                ]}
            />
            <SiteMapBlock
                locale={locale}
                title={t.partners}
                items={[
                    { name: t.company_partners, href: '/partners' },
                    { name: 'IESEG Conseil Paris', href: '/ieseg' },
                ]}
            />
            <SiteMapBlock
                locale={locale}
                title={t.offer}
                items={[
                    { name: t.offer, href: '/offer' },
                    { name: 'FAQ', href: '/faq' },
                ]}
            />
            <SiteMapBlock
                locale={locale}
                title={t.contact_information}
                items={[
                    { name: t.contact_form, href: '/contact' },
                    { name: t.blog, href: '/blog' },
                    { name: t.legal_mentions, href: '/legal' },
                ]}
            />
        </>
    );
};

const Mentions = ({ bug }: { bug: string }) => (
    <div>
        <div className="p-2 flex flex-col items-center space-y-2">
            <FullLogo />
            <p>&copy;{new Date().getFullYear()} Telecom Etude</p>
            <EmailContact />
            <BtnLink
                href="https://maps.app.goo.gl/etZHknTudKMuTjRZ9"
                className="flex flex-col"
                isNewTab
                isForeign
            >
                <div>
                    <p>19, place Marguerite Perey</p>
                    <p>91120 Palaiseau</p>
                </div>
            </BtnLink>
            <EmailContact dsi text={bug} />
        </div>
    </div>
);

export const Footer = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale).navigation.sitemap;
    return (
        <footer className="bg-navigation border-t-2 border-accent flex flex-col lg:flex-row space-y-6 lg:space-y-0  items-center justify-around">
            <section className="p-4">
                <Mentions bug={t.bug} />
                <NetworkLinks />
            </section>
            <SiteMap t={t} locale={locale} />
        </footer>
    );
};
