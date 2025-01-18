import React, { ReactNode } from "react";

import { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Locale } from "@/locales/config";

import ContactForm from "@/components/meta-components/contact-form";

import IcpGraph from "@/../public/images/ieseg/icpgraph.png";
import Logo from "@/../public/images/ieseg/logo.webp";
import { getDictionary } from "@/locales/dictionaries";

export const metadata: Metadata = {
    title: "Offre commune | Telecom Etude & IÉSEG Conseil Paris",
    description:
        "IÉSEG Conseil Paris (ICP) et Telecom Etude (TE) s'associent pour offrir une gamme complète de services de consulting, combinant leurs expertises en ingénierie et en commerce pour répondre aux besoins variés des entreprises. Leur offre commune se décline en plusieurs volets, notamment la maîtrise des données de marché, l'analyse marketing, l'optimisation de l'expérience client, et l'acquisition digitale. Par exemple, pour l'implantation de nouvelles technologies, ils proposent une approche intégrée pour évaluer la faisabilité technique et la demande du marché, en utilisant à la fois l'analyse sectorielle, le benchmark et le prototypage. En matière d'analyse de l'expérience client, ICP réalise des visites mystères et des interviews de sortie pour évaluer objectivement le service, tandis que TE développe des modèles de prédiction pour anticiper les heures de pointe. En marketing digital, ICP crée des stratégies de communication et de référencement, tandis que TE se concentre sur le développement d'outils digitaux tels que des sites web et des applications. Cette synergie entre ICP, fort de ses nombreuses études et de ses ressources documentaires, et TE, reconnue pour son excellence en ingénierie numérique, permet d'offrir des solutions complètes et adaptées aux besoins spécifiques des entreprises, allant de petites PME aux grands comptes."
};

const Paragraph = ({ title, children }: { title: string; children: ReactNode }) => (
    <div className="sm:w-2/3 w-full">
        <h2 className="font-semibold mb-4">{title}</h2>
        <p className="text-lg">{children}</p>
    </div>
);

const section = "flex flex-col items-center justify-center mb-12 space-x-0 space-y-10 p-10";

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "fr" }];
}

export const dynamicParams = false;

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
    const t = getDictionary(locale).pages.ieseg;
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="font-bold">{t.title}</h1>
                <p className="text-xl font-semibold mt-4 text-center">{t.subtitle}</p>
            </header>
            <section className={section}>
                <Paragraph title={t.presentation.title}>{t.presentation.par}</Paragraph>
                <Image className="xl:w-1/3 sm:w-2/3 w-full bg-[#151f2a]" placeholder="blur" src={Logo} alt="Graphique Telecom Etude IÉSEG Conseil Paris" />
            </section>
            <div>
                <section className={section}>
                    <Paragraph title={t.complementary.title}>
                        {t.complementary.before}
                        <strong className="font-semibold">{t.complementary.strong}</strong>
                        {t.complementary.after}
                    </Paragraph>
                    <Image placeholder="blur" className="xl:w-1/3 sm:w-2/3 w-full" src={IcpGraph} alt={t.complementary.alt} />
                </section>
            </div>
            <div>
                <section className={section}>
                    <Paragraph title={t.innovation.title}>
                        {t.innovation.before}
                        <strong className="font-semibold">{t.innovation.strong}</strong>
                    </Paragraph>
                </section>
            </div>
            <div>
                <section className={section}>
                    <Paragraph title="Approche Personnalisée">
                        Chaque projet est unique. Nous adaptons nos services à vos besoins spécifiques, que ce soit pour évaluer la faisabilité d&apos;un
                        nouveau produit, optimiser votre service client ou améliorer votre stratégie marketing.
                        <strong className="font-semibold">
                            {" "}
                            Notre approche personnalisée garantit des résultats concrets en s&apos;appuyant sur des visites mystères, des exit interviews et des
                            benchmarks sectoriels adaptés à vos enjeux particuliers.
                        </strong>
                    </Paragraph>
                    {/* <div className="w-1/2 flex flex-col items-center space-y-6">
                        <p className="text-center">Vous voulez voir des exemples de mission que nous avons réaliser en partenariat avec l&apos;IÉSEG ? </p>
                        <Button variant="call2action">
                            <Link href="/post?s=missions+ieseg/" className="flex items-center space-x-2">
                                <p>Voir les exemples</p>
                                <ArrowRight />
                            </Link>
                        </Button>
                    </div> */}
                </section>
            </div>
            <div>
                <section className={section}>
                    <Paragraph title={t.gain.title}>
                        {t.gain.before}
                        <strong className="font-semibold">{t.gain.strong}</strong>
                    </Paragraph>
                </section>
            </div>
            <div>
                <section className={cn(section, "space-y-0")}>
                    <div className="w-full sm:w-2/3">
                        <h2 className="text-left w-full font-semibold mb-4">{t.contact}</h2>
                        <ContactForm emails={[process.env.FORM_DEST_EMAIL, process.env.IESEG_EMAIL]} locale={locale} />
                    </div>
                </section>
            </div>
        </div>
    );
}
