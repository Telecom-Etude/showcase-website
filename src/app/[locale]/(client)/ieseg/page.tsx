import React, { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { FORM_DEST_EMAIL, IESEG_EMAIL } from "@/mail/consts";
import { Locale } from "@/locales/config";

import { Button } from "@/components/ui/button";
import ContactForm from "@/components/meta-components/contact-form";

import IcpGraph from "@/../public/images/ieseg/icpgraph.png";
import MIT from "@/../public/images/ieseg/mit.jpg";
import Logo from "@/../public/images/ieseg/logo.webp";

export const metadata: Metadata = {
    title: "Offre commune | Telecom Etude & IESEG Conseil Paris",
    description:
        "IESEG Conseil Paris (ICP) et Telecom Etude (TE) s'associent pour offrir une gamme complète de services de consulting, combinant leurs expertises en ingénierie et en commerce pour répondre aux besoins variés des entreprises. Leur offre commune se décline en plusieurs volets, notamment la maîtrise des données de marché, l'analyse marketing, l'optimisation de l'expérience client, et l'acquisition digitale. Par exemple, pour l'implantation de nouvelles technologies, ils proposent une approche intégrée pour évaluer la faisabilité technique et la demande du marché, en utilisant à la fois l'analyse sectorielle, le benchmark et le prototypage. En matière d'analyse de l'expérience client, ICP réalise des visites mystères et des interviews de sortie pour évaluer objectivement le service, tandis que TE développe des modèles de prédiction pour anticiper les heures de pointe. En marketing digital, ICP crée des stratégies de communication et de référencement, tandis que TE se concentre sur le développement d'outils digitaux tels que des sites web et des applications. Cette synergie entre ICP, fort de ses nombreuses études et de ses ressources documentaires, et TE, reconnue pour son excellence en ingénierie numérique, permet d'offrir des solutions complètes et adaptées aux besoins spécifiques des entreprises, allant de petites PME aux grands comptes."
};

const Paragraph = ({ title, children }: { title: string; children: ReactNode }) => (
    <div className="sm:w-2/3 w-full">
        <h2 className="font-semibold mb-4">{title}</h2>
        <p className="text-lg">{children}</p>
    </div>
);

const section = "flex flex-col items-center justify-center mb-12 space-x-0 space-y-10 p-10";

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="font-bold">Telecom Etude et IESEG Conseil Paris</h1>
                <p className="text-xl font-semibold mt-4 text-center">Un partenariat unique pour des solutions innovantes et efficaces</p>
            </header>
            <section className={section}>
                <Paragraph title="Présentation IESEG Conseil Paris">
                    IÉSEG CONSEIL Paris, Junior-Entreprise de l&apos;IÉSEG School of Management, est une Junior-Entreprise dont les membres sont des étudiants
                    spécialisés en Management, Marketing, Finance, Audit et Systèmes d&apos;information. Créée en 2007, IÉSEG CONSEIL Paris met à votre
                    disposition l&apos;expertise et le dynamisme de ses consultants juniors pour vous accompagner dans vos projets de conseil en stratégie,
                    organisation, marketing, finance et systèmes d&apos;information.
                </Paragraph>
                <Image className="xl:w-1/3 sm:w-2/3 w-full bg-[#151f2a]" placeholder="blur" src={Logo} alt="Graphique Telecom Etude IESEG Conseil Paris" />
            </section>
            <div>
                <section className={section}>
                    <Paragraph title="Expertise Complémentaire">
                        En combinant l&apos;expertise technique de Telecom Etude et l&apos;expertise commerciale de IESEG Conseil Paris, nous offrons une
                        solution complète qui couvre tous les aspects de vos projets, de l&apos;ingénierie à la stratégie de marché.
                        <strong>
                            {" "}
                            Notre approche permet de vous accompagner de A à Z, en intégrant une évaluation de la faisabilité technique et une analyse
                            approfondie de la demande du marché.
                        </strong>{" "}
                        Nous croyons que chaque projet a un potentiel unique. Faites le choix d&apos;une approche à double facette alliant expertise technique
                        et perspective commerciale pour explorer le potentiel de votre produit.
                    </Paragraph>
                    <Image
                        placeholder="blur"
                        className="xl:w-1/3 sm:w-2/3 w-full"
                        src={IcpGraph}
                        alt="Graphique Complémentarité Telecom Etude IESEG Conseil Paris"
                    />
                </section>
            </div>
            {/* <Separator /> */}
            <div>
                <section className={section}>
                    <Paragraph title="Solutions Innovantes">
                        Nous utilisons les dernières technologies et méthodes de data science pour analyser le marché et améliorer la visibilité en ligne de vos
                        produits, vous permettant ainsi de rester à la pointe de l&apos;innovation.
                        <strong>
                            {" "}
                            Nos services incluent l&apos;implantation de nouvelles technologies, le lancement de nouveaux produits et l&apos;optimisation de vos
                            performances grâce à des régressions multi-linéaires et des outils de visualisation de données.
                        </strong>
                    </Paragraph>
                    <Image className="xl:w-1/3 sm:w-2/3 w-full" src={MIT} alt="MIT Super Chip" />
                </section>
            </div>
            <div>
                <section className={section}>
                    <Paragraph title="Approche Personnalisée">
                        Chaque projet est unique. Nous adaptons nos services à vos besoins spécifiques, que ce soit pour évaluer la faisabilité d&apos;un
                        nouveau produit, optimiser votre service client ou améliorer votre stratégie marketing.
                        <strong>
                            {" "}
                            Notre approche personnalisée garantit des résultats concrets en s&apos;appuyant sur des visites mystères, des exit interviews et des
                            benchmarks sectoriels adaptés à vos enjeux particuliers.
                        </strong>
                    </Paragraph>
                    <div className="w-1/2 flex flex-col items-center space-y-6">
                        <p className="text-center">Vous voulez voir des exemples de mission que nous avons réaliser en partenariat avec l&apos;IESEG ? </p>
                        <Button variant="call2action">
                            <Link href="/post?s=missions+ieseg/" className="flex items-center space-x-2">
                                <p>Voir les exemples</p>
                                <ArrowRight />
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
            <div>
                <section className={section}>
                    <Paragraph title="Gain de Temps et d'Efficacité">
                        En travaillant main dans la main, nous offrons un processus intégré qui vous permet de gagner du temps et de l&apos;efficacité. Vous
                        bénéficiez de nos compétences combinées sans avoir à coordonner plusieurs prestataires.
                        <strong>
                            {" "}
                            Notre collaboration se traduit par une pré-étude détaillée, un suivi rigoureux de l&apos;avancement et des livrables clairs,
                            permettant une mise en œuvre rapide et efficace de vos projets.
                        </strong>
                    </Paragraph>
                </section>
            </div>
            <div>
                <section className={cn(section, "space-y-0")}>
                    <div className="w-full sm:w-2/3">
                        <h2 className="text-left w-full font-semibold mb-4">Contactez-nous !</h2>
                        <ContactForm emails={[FORM_DEST_EMAIL, IESEG_EMAIL]} locale={locale} />
                    </div>
                </section>
            </div>
        </div>
    );
}
