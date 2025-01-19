import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { nav } from "@/locales/routing";
import { DomainBlock } from "./domains";

import { Separator } from "@/components/ui/separator";
import { LoadNumber } from "@/components/animations/load-number";
import { Block } from "@/components/styles/blocks";
import { BirdLogo } from "@/components/telecom-etude/logos";
import { VariantLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Safran from "@/../public/images/companies/trusted/Safran.png";
import Bearing_Point from "@/../public/images/companies/trusted/Bearing_Point.jpg";
import Telecom_Paris from "@/../public/images/companies/trusted/Telecom_Paris.png";
import Pont from "@/../public/images/companies/trusted/Pont-neuf.webp";
import SNCF from "@/../public/images/companies/trusted/SNCF.png";
import France from "@/../public/images/companies/trusted/France.tv.png";
import Alma from "@/../public/images/companies/trusted/Alma.jpeg";
import Ministere_de_la_Culture from "@/../public/images/companies/trusted/Ministere_de_la_Culture.png";
import SaintGobain from "@/../public/images/companies/trusted/SaintGobain.png";
import BNP_Paribas from "@/../public/images/companies/trusted/BNP_Paribas.png";
import Mitsubishi_Motors from "@/../public/images/companies/trusted/Mitsubishi_Motors.png";
import BnF from "@/../public/images/companies/trusted/BnF.png";
import { Metadata } from "next";

const trusted: { src: StaticImageData; alt: string }[] = [
    { alt: "Safran logo", src: Safran },
    { alt: "Bearing_Point logo", src: Bearing_Point },
    { alt: "Telecom_Paris logo", src: Telecom_Paris },
    { alt: "Pont logo", src: Pont },
    { alt: "SNCF logo", src: SNCF },
    { alt: "France logo", src: France },
    { alt: "Alma logo", src: Alma },
    { alt: "Ministere_de_la_Culture logo", src: Ministere_de_la_Culture },
    { alt: "SaintGobain logo", src: SaintGobain },
    { alt: "BNP_Paribas logo", src: BNP_Paribas },
    { alt: "Mitsubishi_Motors logo", src: Mitsubishi_Motors },
    { alt: "BnF logo", src: BnF }
];

function NumberCard({ nb, prefix, suffix, text }: { nb: number; prefix?: string; suffix?: string; text: string }) {
    return (
        <Card className="w-[200px] flex-col border-none rounded-lg bg-transparent">
            <CardHeader>
                <CardTitle className="text-center m-auto">
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
}

export const metadata: Metadata = {
    title: "Accueil"
};

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "fr" }];
}

export const dynamicParams = false;

export default async function Page({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.home;
    return (
        <>
            <Block>
                <header className="py-10 space-y-10">
                    <h1 className="font-semibold text-center bg-gradient-to-r from-primary to-destructive w-fit m-auto text-transparent bg-clip-text">
                        Telecom Etude
                    </h1>
                    <h2 className="text-center">{t.subtitle}</h2>
                    <p>{t.description}</p>
                    <div className="flex flex-col sm:flex-row space-y-10 sm:space-x-10 sm:space-y-0 justify-center">
                        <VariantLink variant="outline" href={nav(locale, "/about")} btnCn="rounded-lg group" className="items-center flex space-x-4">
                            <p>{t.whoarewe}</p>
                            <FaArrowRight className="group-hover:animate-bounce-x" />
                        </VariantLink>
                        <VariantLink variant="call2action" href={nav(locale, "/contact")} btnCn="rounded-lg group" className="items-center flex space-x-4">
                            <p>{t.contact}</p>
                            <FaArrowRight className="group-hover:animate-bounce-x" />
                        </VariantLink>
                    </div>
                </header>
            </Block>
            <Separator />
            <section className="p-10 space-y-10 bg-navigation">
                <h2 className="text-center">{t.numbers.title}</h2>
                <div className="flex lg:flex-row flex-col items-center w-full border-y-2 border-primary justify-around">
                    <NumberCard nb={97} suffix="%" text={t.numbers.clients} />
                    <NumberCard nb={80} text={t.numbers.projects} />
                    <NumberCard nb={45} text={t.numbers.years} />
                    <NumberCard nb={800} prefix="+" text={t.numbers.pupils} />
                    <NumberCard nb={33} text={t.numbers.admins} />
                </div>
            </section>
            <Separator />
            <section className="py-10 space-y-10">
                <DomainBlock locale={locale} />
            </section>
            <Separator />
            <section className="bg-navigation">
                <Block className="flex flex-col sm:flex-row space-y-10 px-10 py-10 sm:space-x-10">
                    <div className="flex justify-center">
                        <div className="w-[300px]">
                            <BirdLogo />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-10">
                        <q className="italic text-justify">
                            {t.cnje[0]}
                            <br />
                            <br />
                            {t.cnje[1]}
                        </q>
                        <Link href="https://junior-entreprises.com/" className="underline w-fit ml-auto">
                            Confédération Nationale des Junior-Entreprises
                        </Link>
                        <div>
                            <VariantLink
                                variant="call2action"
                                href={nav(locale, "/faq")}
                                btnCn="rounded-lg w-fit group"
                                className="items-center flex space-x-4"
                            >
                                <p>{t.questions}</p>
                                <FaArrowRight className="group-hover:animate-bounce-x" />
                            </VariantLink>
                        </div>
                    </div>
                </Block>
            </section>
            <Separator />
            <Block>
                <section className="py-10 space-y-10">
                    <h2 className="text-center">{t.trust}</h2>
                    <div className="grid grid-cols-3 md:grid-cols-6 bg-white">
                        {trusted.map(({ alt, src }, i) => (
                            <div key={i} className="w-full h-full items-center justify-center flex">
                                <div className="w-[70%] p-4">
                                    <Image placeholder="blur" src={src} alt={alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Block>
        </>
    );
}
