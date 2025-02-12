import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import AFNOR from "@/../public/images/about/afnor.png";
import CNJE from "@/../public/images/about/cnje_text.png";
import GroupPhoto from "@/../public/images/about/group_photo.jpg";
import TP from "@/../public/images/about/tp.jpeg";
import ICP from "@/../public/images/ieseg/logo.webp";

import { cn } from "@/lib/utils";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

import { Block } from "@/components/styles/blocks";
import { Paragraphs } from "@/components/styles/texts";
import { VariantLink } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { nav } from "@/locales/routing";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos"
};

function Text({ title, children }: { title: string | ReactNode; children: ReactNode }) {
    return (
        <section className="flex flex-col pb-10 justify-evenly h-full items-center space-y-4 text-lg">
            <h2>{title}</h2>
            {children}
        </section>
    );
}

function SideImage({ src, alt, className, ...props }: { src: StaticImageData; alt: string; className?: string }) {
    return <Image placeholder="blur" src={src} alt={alt} className={cn("w-auto m-auto max-h-[300px] rounded-2xl", className)} {...props} />;
}

function TopLeft({ title, pars, right }: { title: string | ReactNode; pars: ReactNode; right: ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center xl:flex-row p-10 xl:space-x-10 xl:space-y-0 space-y-10 max-w-[800px] xl:max-w-[2000px] m-auto">
            <div className="xl:w-1/2">
                <Text title={title}>{pars}</Text>
            </div>
            <div className="xl:w-1/2">{right}</div>
        </div>
    );
}

function TopRight({ title, pars, left }: { title: string | ReactNode; pars: ReactNode; left: ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center xl:flex-row p-10 xl:space-x-10 xl:space-y-0 space-y-10 max-w-[800px] xl:max-w-[2000px] m-auto">
            <div className="xl:hidden">
                <Text title={title}>{pars}</Text>
            </div>
            <div className="xl:w-1/2">{left}</div>
            <div className="xl:block hidden w-1/2">
                <Text title={title}>{pars}</Text>
            </div>
        </div>
    );
}

export default function Page({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.about;
    return (
        <Block full>
            <h1 className="p-10">
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-primary">Telecom Etude</strong>
                <p>{t.description}</p>
            </h1>
            <TopLeft
                right={<SideImage src={GroupPhoto} alt={t.alt.mandat} />}
                title={t.titles.ourje}
                pars={
                    <>
                        <Paragraphs paragraphs={t.ourje} />
                        <VariantLink variant="call2action" href="/team" className="flex items-center space-x-2 text-xl p-2">
                            <p>{t.ourMandate}</p>
                            <ArrowRight />
                        </VariantLink>
                    </>
                }
            />
            <Separator />
            <TopRight
                left={<SideImage src={TP} alt={t.alt.tp} />}
                title={t.titles.ourschool}
                pars={
                    <>
                        <p>{t.ourshool.chooseTP}</p>
                        <ul className="list-disc">
                            <Paragraphs paragraphs={t.ourshool.rankings} VariableLayout="li" />
                        </ul>
                    </>
                }
            />
            <Separator />
            <TopLeft
                right={<SideImage src={AFNOR} alt={t.alt.afnor} />}
                title={t.titles.quality}
                pars={
                    <ul>
                        <Paragraphs paragraphs={t.quality} className="text-xl text-center p-2" />
                    </ul>
                }
            />
            <Separator />
            <TopRight left={<SideImage src={CNJE} alt={t.alt.cnje} />} title={t.titles.satisfaction} pars={<Paragraphs paragraphs={[t.satisfaction]} />} />
            <Separator />
            <TopLeft
                right={
                    <div className="flex flex-col space-y-10 items-center justify-between">
                        <SideImage src={ICP} alt="Logo IESEG Conseil Paris" className="bg-[#151f2a]" />
                        <VariantLink variant="call2action" href={nav(locale, "/ieseg")} className="flex items-center space-x-2 text-xl p-2">
                            <p>{t.moreInfo}</p>
                            <ArrowRight />
                        </VariantLink>
                    </div>
                }
                title={t.titles.ieseg}
                pars={<Paragraphs paragraphs={t.ieseg} />}
            />
        </Block>
    );
}
