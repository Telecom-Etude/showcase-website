import { Locale, LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { nav } from "@/locales/routing";

import { Metadata } from "next";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import { Block } from "@/components/styles/blocks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { VariantLink } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { DomainBlock } from "../(home)/domains";
import { DesktopTimeline } from "./client";
import { OFFER_IMAGES } from "./images";

export const metadata: Metadata = {
    title: "Notre offre"
};

function MobileTimeline({ locale }: { locale: Locale }) {
    const t = getDictionary(locale).pages.offer.timeline;
    return (
        <Accordion type="single" collapsible>
            {t.steps.map(({ title, text }, i) => (
                <AccordionItem value={title} key={i}>
                    <AccordionTrigger className="flex justify-start space-x-2">
                        <div className="bg-primary aspect-square rounded-full p-1 w-8 h-8">{i + 1}</div>
                        <p>{title}</p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col items-center justify-center space-y-4">
                        <p>{text}</p>
                        <Image src={OFFER_IMAGES[i]} alt="" width={200} />
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default function Page({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.offer;
    return (
        <>
            <Block>
                <h1 className="font-semibold text-center bg-gradient-to-r from-primary to-destructive w-fit m-auto text-transparent bg-clip-text">
                        {t.title}
                </h1>
            </Block>
            <Block>
                <section className="space-y-4">
                    <h2><b>{t.timeline.title}</b></h2>
                    <p>{t.timeline.text}</p>
                    <div className="p-4 hidden md:grid grid-cols-2 place-items-center gap-4">
                        <DesktopTimeline locale={locale} />
                    </div>
                    <div className="p-4  block md:hidden">
                        <MobileTimeline locale={locale} />
                    </div>
                </section>
            </Block>
            <Separator />
            <Block>
                <section className="p-4 space-y-4">
                    <DomainBlock locale={locale} />
                </section>
            </Block>
            <Separator />
            <Block>
                <section className="p-4 space-y-4 flex flex-col items-center">
                    <h2>{t.plaquette.title}</h2>
                    <p>{t.plaquette.text}</p>
                    <VariantLink
                        target="_blank"
                        btnCn="w-fit group"
                        className="flex space-x-2 items-center"
                        variant="call2action"
                        href={nav(locale, "/plaquette.pdf")}
                    >
                        <p>{t.plaquette.button}</p>
                        <FaArrowRight className="group-hover:animate-bounce-x" />
                    </VariantLink>
                </section>
            </Block>
        </>
    );
}
