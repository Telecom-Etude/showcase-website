import { MdOpenInNew } from "react-icons/md";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { getDictionary } from "@/locales/dictionaries";
import { LocaleParams } from "@/locales/config";

import { Block } from "@/components/styles/blocks";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Paragraphs } from "@/components/styles/texts";
import { BtnLink } from "@/components/telecom-etude/contact";

import Bain from "@/../public/images/companies/partners/bain.svg";
import BearingPoint from "@/../public/images/companies/partners/bearingpoint.svg";
import KPMG from "@/../public/images/companies/partners/kpmg.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos partenaires"
};

interface PartnerProps {
    title: string;
    logo: StaticImport;
    t: { text: string; type: string };
    url: string;
}

function Partner({ title, logo, t, url }: PartnerProps) {
    return (
        <section className="p-4">
            <div className="p-[2px] rounded-lg bg-gradient-to-tl from-primary to-destructive">
                <Card className="rounded-lg">
                    <CardHeader>
                        <CardTitle className="w-full text-center">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center">
                            <p>{t.type}</p>
                            <BtnLink href={url} target="blank" className="flex items-center space-x-1">
                                <p>Link</p>
                                <MdOpenInNew />
                            </BtnLink>
                            <Separator className="my-6" />
                            <Image src={logo} alt={title + " logo"} width={400} />
                        </div>
                        <Separator className="my-6" />
                        <p>{t.text}</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "fr" }];
}

export const dynamicParams = false;

export default function Page({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.partners;
    return (
        <Block>
            <header className="w-full flex flex-col items-center justify-center space-y-8 pb-8">
                <h1 className="font-bold text-center">{t.title}</h1>
                <p className="text-lg max-w-[500px] text-center">{t.text}</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <Partner title="KPMG" url="https://www.kpmg.com" logo={KPMG} t={t.kpmg} />
                <Partner title="BearingPoint" url="https://www.bearingpoint.com" logo={BearingPoint} t={t.bearingPoint} />
                <Partner title="Bain" url="https://www.bain.com" logo={Bain} t={t.bain} />
            </div>
        </Block>
    );
}
