import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { StaticImageData } from "next/image";

import { Locale, LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { nav } from "@/locales/routing";

import { Separator } from "@/components/ui/separator";
import { LoadNumber } from "@/components/animations/load-number";
import { Block } from "@/components/styles/blocks";
import { BirdLogo } from "@/components/telecom-etude/logos";
import { VariantLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Data from "@/../public/images/domains/icons/data.png";
import Cyber from "@/../public/images/domains/icons/cyber.png";
import Ima from "@/../public/images/domains/icons/image.png";
import Se from "@/../public/images/domains/icons/se.png";
import Market from "@/../public/images/domains/icons/market.png";
import Dev from "@/../public/images/domains/icons/dev.png";
import LogoBirdSvg from "@/../public/icons/logo-bird.svg";

const NumberCard = ({ nb, prefix, suffix, text }: { nb: number; prefix?: string; suffix?: string; text: string }) => {
    return (
        <Card className="w-[200px] h-full flex-col border-none rounded-lg">
            <CardHeader>
                <CardTitle className="text-center">
                    {prefix ? prefix + " " : ""}
                    {<LoadNumber value={nb} duration={5000} />}
                    {suffix ? " " + suffix : ""}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center">{text}</p>
            </CardContent>
        </Card>
    );
};

const DomainCard = ({ title, id, image, locale }: { title: string; id: string; image: StaticImageData; locale: Locale }) => {
    return (
        <Link href={nav(locale, id)} className="p-4 hover:p-0 transition-all duration-300 h-[400px] w-[300px]">
            <Card className="w-full h-full flex-col border-none bg-primary-muted rounded-lg">
                <CardHeader>
                    <CardTitle className="text-center h-[52px] w-[180px] m-auto font-normal">{title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 block">
                    <Image src={image} className="m-auto overflow-clip" alt={title} />
                </CardContent>
            </Card>
        </Link>
    );
};

export default function Home({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.home;
    return (
        <>
            <header className="py-20 px-8 space-y-4">
                <h1 className="font-semibold text-center">Telecom Etude</h1>
                <p className="text-center">{t.subtitle}</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 justify-center">
                    <VariantLink variant="outline" href={nav(locale, "/about")} btnCn="rounded-lg group" className="items-center flex space-x-2">
                        <p>Qui sommes-nous ?</p>
                        <FaArrowRight className="group-hover:animate-bounce-x" />
                    </VariantLink>
                    <VariantLink variant="call2action" href={nav(locale, "/contact")} btnCn="rounded-lg group" className="items-center flex space-x-2">
                        <p>Contactez-nous</p>
                        <FaArrowRight className="group-hover:animate-bounce-x" />
                    </VariantLink>
                </div>
            </header>
            <Separator />
            <Block className="flex flex-col sm:flex-row space-y-4 px-8 py-20 sm:space-x-10">
                <div className="flex justify-center">
                    <div className="w-[300px]">
                        <BirdLogo />
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-2">
                    <q className="italic text-justify">
                        Les Junior-Entreprises sont des associations pédagogiques de conseil de loi 1901 ayant pour objet social la montée en compétences des
                        étudiants à travers la réalisation de prestations de service pour des professionnels.
                    </q>
                    <Link href="https://junior-entreprises.com/" className="underline w-fit ml-auto">
                        Confédération Nationale des Junior-Entreprises
                    </Link>
                </div>
            </Block>
            <Separator />
            <section className="py-20">
                <Block>
                    <h2 className="text-center pb-8">Telecom Etude en quelques chiffres</h2>
                    <div className="flex lg:flex-row flex-col items-center w-full border-y-2 border-primary justify-around">
                        <NumberCard nb={97} suffix="%" text="Clients satisfaits" />
                        <NumberCard nb={60} text="Projets chaque année" />
                        <NumberCard nb={45} text="Années d'expérience" />
                        <NumberCard nb={800} prefix="+" text="Élèves ingénieurs qualifés" />
                        <NumberCard nb={33} text="Administrateurs à votre écoute" />
                    </div>
                </Block>
            </section>
            <Separator />
            <section className="py-20">
                <h2 className="text-center pb-8">Nos domaines de prédilection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 3xl:grid-cols-6 space-x-0 max-w-[2000px] m-auto">
                    <DomainCard title="Data science, Intelligence artificielle & Machine learning" id="data" image={Data} locale={locale} />
                    <DomainCard title="Développement Logiciel, Applications & Web" id="dev" image={Cyber} locale={locale} />
                    <DomainCard title="Cybersécurité, Réseaux, Cryptographie & Blockchain" id="cyber" image={Ima} locale={locale} />
                    <DomainCard title="Traitement d'images & Modélisation 3D" id="image" image={Se} locale={locale} />
                    <DomainCard title="Études de marchés, États de l'art & Audits" id="marrket" image={Market} locale={locale} />
                    <DomainCard title="Système embarqués" id="marrket" image={Dev} locale={locale} />
                </div>
            </section>
        </>
    );
}
