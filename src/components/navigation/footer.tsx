import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FullLogo } from "../telecom-etude/logos";
import Link from "next/link";
import { IconType } from "react-icons";
import { Button } from "../ui/button";
import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";

const Network = ({ href, Icon }: { href: string; Icon: IconType }) => (
    <Link href={href}>
        <Icon className="text-primary hover:text-foreground w-8 h-8" />
    </Link>
);

const LinkItem = ({ href, name }: { href: string; name: string }) => (
    <Button variant="link" className="text-foreground py-[3px]" asChild>
        <Link className="w-fit h-fit pl-0 py-0 text-center" href={href}>
            {name}
        </Link>
    </Button>
);

const h3 = "text-lg font-semibold pb-2 pt-6 pl-0 w-fit";
const section = "flex flex-col items-center";

const NetworkLinks = () => (
    <div className="flex space-x-4 p-2">
        <Network href="https://www.linkedin.com/company/telecom-etude/" Icon={FaLinkedin} />
        <Network href="https://www.facebook.com/TelecomEtude" Icon={FaFacebook} />
        <Network href="https://www.instagram.com/telecometude" Icon={FaInstagram} />
        <Network href="mailto:contact@telecom-etude.fr" Icon={FaEnvelope} />
    </div>
);

const SiteMapBlock = ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
    <section className={section}>
        <h3 className={h3}>{title}</h3>
        {items.map((item, k) => (
            <LinkItem {...item} key={k} />
        ))}
    </section>
);

const SiteMap = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale).navigation.sitemap;
    return (
        <>
            <h2 className="text-xl font-semibold">{t.title}</h2>
            <div className="flex sm:flex-row flex-col space-x-10">
                <div>
                    <SiteMapBlock
                        title={t.whoarewe}
                        items={[
                            { name: t.home, href: "/" },
                            { name: t.about, href: "/about" },
                            { name: t.commitment, href: "/commitment" },
                            { name: t.team, href: "/team" }
                        ]}
                    />
                    <SiteMapBlock
                        title={t.partners}
                        items={[
                            { name: t.company_partners, href: "/partners" },
                            { name: "IESEG Conseil Paris", href: "/ieseg" }
                        ]}
                    />
                </div>
                <div>
                    <SiteMapBlock
                        title={t.offer}
                        items={[
                            { name: t.offer, href: "/offer" },
                            { name: t.example_offers, href: "/blog/missions/" },
                            { name: "FAQ", href: "/faq" }
                        ]}
                    />
                    <SiteMapBlock
                        title={t.contact_information}
                        items={[
                            { name: t.contact_form, href: "/contact" },
                            { name: t.blog, href: "/blog" },
                            { name: t.legal_mentions, href: "/legal-mentions" }
                        ]}
                    />
                </div>
            </div>
        </>
    );
};

export const Mentions = () => (
    <div className="flex">
        <div className="w-[200px]">
            <FullLogo />
        </div>
        <div className="p-2 flex flex-col items-start space-y-2">
            <p>&copy;{new Date().getFullYear()} Telecom Etude</p>
            <Button variant="link" className="text-foreground px-0 py-0 h-fit" asChild>
                <Link href="mailto:contact@telecom-etude.fr" className="h-fit text-base font-normal">
                    contact@telecom-etude.fr
                </Link>
            </Button>
            <Button variant="link" className="text-foreground px-0 py-0 text-left h-fit text-wrap" asChild>
                <Link href="https://maps.app.goo.gl/etZHknTudKMuTjRZ9" className="h-fit text-base font-normal" target="_blank">
                    19, place Marguerite Perey, 91120 Palaiseau
                </Link>
            </Button>
        </div>
    </div>
);

export const Footer = ({ locale }: { locale: Locale }) => {
    return (
        <div className="border-t-[1px] border-primary flex flex-col items-center space-y-2 py-4">
            <NetworkLinks />
            <SiteMap locale={locale} />
            <div className="w-full border-t-[1px] border-primary"></div>
            <Mentions />
        </div>
    );
};
