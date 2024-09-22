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

interface PartnerProps {
    title: string;
    logo: StaticImport;
    paragraphs: string[];
    url: string;
}

function Partner({ title, logo, paragraphs, url }: PartnerProps) {
    return (
        <section className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle className="w-full text-center">{title}</CardTitle>
                    <CardDescription className="flex justify-center">
                        <BtnLink href={url} target="blank" className="flex items-center space-x-1">
                            <p>Link</p>
                            <MdOpenInNew />
                        </BtnLink>
                    </CardDescription>
                    <Separator />
                </CardHeader>
                <CardContent>
                    <Image src={logo} alt={title + " logo"} width={400} />
                    <Separator className="my-6" />
                    <div>
                        <Paragraphs paragraphs={paragraphs} />
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export default function Partners({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale);
    return (
        <Block>
            <header className="w-full h-[300px] max-h-dvh flex flex-col items-center justify-center space-y-4">
                <h1 className="font-bold">Nos entreprises partenaires</h1>
                <p className="text-lg max-w-[500px] text-center">Telecom Etude a des entreprises par</p>
            </header>
            <div className="flex flex-col sm:flex-row">
                <Partner title="Bain" url="https://www.bain.com" logo={Bain} paragraphs={[]} />
                <Partner title="BearingPoint" url="https://www.bearingpoint.com" logo={BearingPoint} paragraphs={[]} />
                <Partner title="KPMG" url="https://www.kpmg.com" logo={KPMG} paragraphs={[]} />
            </div>
        </Block>
    );
}
