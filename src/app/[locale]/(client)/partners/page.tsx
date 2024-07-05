import { Block } from "@/components/styles/blocks";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Bain from "@/../public/images/partenaires/bain.svg";
import BearingPoint from "@/../public/images/partenaires/bearingpoint.svg";
import KPMG from "@/../public/images/partenaires/kpmg.svg";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Paragraphs } from "@/components/styles/texts";
import { getDictionary } from "@/locales/dictionaries";
import { LocaleParams } from "@/locales/config";

interface PartnerProps {
    title: string;
    logo: StaticImport;
    paragraphs: string[];
}

function Partner({ title, logo, paragraphs }: PartnerProps) {
    return (
        <section className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle className="w-full text-center pb-6">{title}</CardTitle>
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
                <h1 className="text-4xl font-bold">Nos entreprises partenaires</h1>
                <p className="text-lg max-w-[500px] text-center">Telecom Etude a des entreprises par</p>
            </header>
            <div className="flex flex-col sm:flex-row">
                <Partner title="Bain" logo={Bain} paragraphs={[]} />
                <Partner title="BearingPoint" logo={BearingPoint} paragraphs={[]} />
                <Partner title="KPMG" logo={KPMG} paragraphs={[]} />
            </div>
        </Block>
    );
}
