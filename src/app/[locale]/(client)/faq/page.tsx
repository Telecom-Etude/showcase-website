import { AppearOnScroll } from "@/components/animations/scroll";
import { Paragraphs } from "@/components/styles/texts";
import { BtnLink, EmailContact } from "@/components/telecom-etude/contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import Link from "next/link";

interface FaqItem {
    question: string;
    answer: string[];
}

export default function FAQ({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.faq;
    return (
        <div className="p-10 space-y-10">
            <h1 className="text-4xl text-center">{t.title}</h1>
            <p className="text-center max-w-[1000px] m-auto">
                {t.text.before}
                <EmailContact underline /> {t.text.between}
                <BtnLink underline href="/contact">
                    {t.text.form}
                </BtnLink>{" "}
                {t.text.after}
            </p>
            <Accordion type="single" collapsible className="w-full">
                {t.list.map((item: FaqItem, idx: number) => (
                    <AppearOnScroll key={idx}>
                        <AccordionItem value={idx.toString()} className="shadow-lg m-2">
                            <AccordionTrigger className="border-[1px] border-primary px-4">{item.question}</AccordionTrigger>
                            <AccordionContent className="p-4">
                                <Paragraphs paragraphs={item.answer} />
                            </AccordionContent>
                        </AccordionItem>
                    </AppearOnScroll>
                ))}
            </Accordion>
        </div>
    );
}
