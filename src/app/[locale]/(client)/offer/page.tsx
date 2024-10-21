import { Block } from "@/components/styles/blocks";
import { DomainBlock } from "../(home)/domains";
import { Locale, LocaleParams } from "@/locales/config";
import { DesktopTimeline } from "./client";
import { Separator } from "@/components/ui/separator";
import { VariantLink } from "@/components/ui/button";
import { nav } from "@/locales/routing";
import { getDictionary } from "@/locales/dictionaries";
import { FaArrowRight } from "react-icons/fa6";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Metadata } from "next";

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
                    <AccordionContent>{text}</AccordionContent>
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
                <header className="p-8 space-y-8">
                    <h1>{t.title}</h1>
                </header>
            </Block>
            <Separator />
            <Block>
                <section className="p-8 space-y-8">
                    <h2>{t.timeline.title}</h2>
                    <p>{t.timeline.text}</p>
                    <div className="hidden md:grid grid-cols-2 place-items-center gap-8">
                        <DesktopTimeline locale={locale} />
                    </div>
                    <div className="block md:hidden">
                        <MobileTimeline locale={locale} />
                    </div>
                </section>
            </Block>
            <Separator />
            <Block>
                <section className="p-8 space-y-8">
                    <DomainBlock locale={locale} />
                </section>
            </Block>
            <Separator />
            <Block>
                <section className="p-8 space-y-8 flex flex-col items-center">
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
