"use client";

import { Fragment, useState } from "react";

import { Locale } from "@/locales/config";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/locales/dictionaries";

export function DesktopTimeline({ locale }: { locale: Locale }) {
    const [selected, setSelected] = useState<number>(0);
    const t = getDictionary(locale).pages.offer.timeline;
    return (
        <>
            <div className="flex flex-col items-center w-fit">
                {t.steps.map(({ title }, i) => (
                    <Fragment key={i}>
                        <Button
                            variant="ghost"
                            className={cn("border-[3px]  border-primary", selected === i ? "bg-primary hover:bg-primary" : "")}
                            key={i}
                            onClick={() => setSelected(i)}
                        >
                            <p>{title}</p>
                        </Button>
                        <div className="h-[10px] w-[3px] bg-primary" />
                    </Fragment>
                ))}
                <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[14px] border-t-primary" />
            </div>
            <div className="h-full flex items-center">
                <p>{t.steps[selected].text}</p>
            </div>
        </>
    );
}
