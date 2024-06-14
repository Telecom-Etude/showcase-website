import { FaEnvelope, FaEnvelopeOpenText, FaEnvelopeSquare, FaFacebook, FaInstagram, FaLinkedin, FaMailchimp, FaRegEnvelope } from "react-icons/fa";
import { FullLogo } from "../telecom-etude/logos";
import Link from "next/link";
import { IconType } from "react-icons";
import { Button } from "../ui/button";
import { FaLetterboxd } from "react-icons/fa6";

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

export const Footer = () => (
    <div className="border-t-[1px] border-primary flex flex-col items-center space-y-2 py-4">
        <div className="flex space-x-4 p-2">
            <Network href="https://www.linkedin.com/company/telecom-etude/" Icon={FaLinkedin} />
            <Network href="https://www.facebook.com/TelecomEtude" Icon={FaFacebook} />
            <Network href="https://www.instagram.com/telecometude" Icon={FaInstagram} />
            <Network href="mailto:contact@telecom-etude.fr" Icon={FaEnvelope} />
        </div>
        <h2 className="text-xl font-semibold">Plan du site</h2>
        <div className="flex sm:flex-row flex-col space-x-10">
            <div>
                <section className={section}>
                    <h3 className={h3}>Qui sommes-nous ?</h3>
                    <LinkItem name="Page d'accueil" href="/" />
                    <LinkItem name="À propos" href="/about" />
                    <LinkItem name="Nos engagements" href="/commitment" />
                    <LinkItem name="Notre équipe" href="/team" />
                </section>
                <section className={section}>
                    <h3 className={h3}>Nos partenaires</h3>
                    <LinkItem name="Entreprises partenaires" href="/partners" />
                    <LinkItem name="IESEG" href="/ieseg" />
                </section>
            </div>
            <div>
                <section className={section}>
                    <h3 className={h3}>Nos offres</h3>
                    <LinkItem name="Notre offre" href="/offer" />
                    <LinkItem name="Exemple d'offres" href="/blog/missions/" />
                    <LinkItem name="FAQ" href="/faq" />
                </section>
                <section className={section}>
                    <h3 className={h3}>Contact & Informations</h3>
                    <LinkItem name="Formulaire de contact" href="/contact" />
                    <LinkItem name="Actualités" href="/blog" />
                    <LinkItem name="Mentions légales" href="/legal-mentions" />
                </section>
            </div>
        </div>
        <div className="w-full border-t-[1px] border-primary"></div>
        <div className="flex">
            <div className="w-[200px]">
                <FullLogo />
            </div>
            <div className="p-2 flex flex-col items-start space-y-2">
                <p>&copy;{new Date().getFullYear()} Telecom Etude</p>
                <Button variant="link" className="text-foreground px-0 py-0 h-fit">
                    <Link href="mailto:contact@telecom-etude.fr" className="h-fit text-base font-normal">
                        contact@telecom-etude.fr
                    </Link>
                </Button>
                <Button variant="link" className="text-foreground px-0 py-0 text-left h-fit text-wrap">
                    <Link href="https://maps.app.goo.gl/etZHknTudKMuTjRZ9" className="h-fit text-base font-normal" target="_blank">
                        19, place Marguerite Perey, 91120 Palaiseau
                    </Link>
                </Button>
            </div>
        </div>
    </div>
);
