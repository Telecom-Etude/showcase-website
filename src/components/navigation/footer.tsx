import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FullLogo } from "../telecom-etude/logos";
import Link from "next/link";
import { IconType } from "react-icons";
import { Button } from "../ui/button";
import { Dictionary, getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { BtnLink, EmailContact } from "../telecom-etude/contact";
import { nav } from "@/locales/routing";

const Network = ({ href, Icon, label }: { href: string; Icon: IconType; label: string }) => (
    <Link href={href} className="p-1 m-0 rounded-full" aria-label={label}>
        <Icon className="fill-[url(#te-gradient)] hover:fill-primary transition-colors duration-2000" />
    </Link>
);

const LinkItem = ({ href, name }: { href: string; name: string }) => (
    <Button variant="link" className="text-foreground py-[3px]" asChild>
        <Link className="w-fit h-fit pl-0 py-0" href={href}>
            {name}
        </Link>
    </Button>
);

const NetworkLinks = () => (
    <div className="flex space-x-4 p-2 w-full justify-evenly">
        <Network href="https://www.linkedin.com/company/telecom-etude/" Icon={FaLinkedin} label="Linkedin" />
        <Network href="https://www.facebook.com/TelecomEtude" Icon={FaFacebook} label="Facebook" />
        <Network href="https://www.instagram.com/telecometude" Icon={FaInstagram} label="Instagram" />
        <Network href="mailto:contact@telecom-etude.fr" Icon={FaEnvelope} label="Email" />
    </div>
);

const SiteMapBlock = ({ title, items, locale }: { locale: Locale; title: string; items: { name: string; href: string }[] }) => (
    <section className="flex flex-col items-center">
        <h3 className="text-lg font-semibold pb-2 pt-6 pl-0 w-fit text-center">{title}</h3>
        {items.map(({ name, href }, k) => (
            <LinkItem name={name} href={nav(locale, href)} key={k} />
        ))}
    </section>
);

const SiteMap = ({ t, locale }: { locale: Locale; t: Dictionary["navigation"]["sitemap"] }) => {
    return (
        <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10">
                <SiteMapBlock
                    locale={locale}
                    title={t.about}
                    items={[
                        { name: t.home, href: "/" },
                        { name: t.whoarewe, href: "/about" },
                        { name: t.commitment, href: "/commitment" },
                        { name: t.team, href: "/team" },
                        { name: t.plaquette, href: "/plaquette.pdf" }
                    ]}
                />
                <SiteMapBlock
                    locale={locale}
                    title={t.partners}
                    items={[
                        { name: t.company_partners, href: "/partners" },
                        { name: "IESEG Conseil Paris", href: "/ieseg" }
                    ]}
                />
                <SiteMapBlock
                    locale={locale}
                    title={t.offer}
                    items={[
                        { name: t.offer, href: "/offer" },
                        { name: "FAQ", href: "/faq" }
                    ]}
                />
                <SiteMapBlock
                    locale={locale}
                    title={t.contact_information}
                    items={[
                        { name: t.contact_form, href: "/contact" },
                        { name: t.blog, href: "/blog" },
                        { name: t.legal_mentions, href: "/legal" }
                    ]}
                />
            </div>
        </div>
    );
};

const Mentions = ({ bug }: { bug: string }) => (
    <div>
        <div className="w-[200px]">
            <FullLogo />
        </div>
        <div className="p-2 flex flex-col items-center space-y-2">
            <p>&copy;{new Date().getFullYear()} Telecom Etude</p>
            <EmailContact />
            <BtnLink href="https://maps.app.goo.gl/etZHknTudKMuTjRZ9" className="flex flex-col">
                <p>19, place Marguerite Perey</p>
                <p>91120 Palaiseau</p>
            </BtnLink>
            <EmailContact dsi text={bug} />
        </div>
    </div>
);

export const Footer = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale).navigation.sitemap;
    return (
        <div className="bg-navigation border-t-2 border-accent flex flex-col sm:flex-row items-center space-y-2 py-4 justify-around">
            <section className="p-10">
                <Mentions bug={t.bug} />
                <NetworkLinks />
            </section>
            <SiteMap t={t} locale={locale} />
        </div>
    );
};
