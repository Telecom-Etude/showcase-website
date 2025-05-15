import { OrangeTitle, Paragraphs } from "@/components/styles/texts";
import { BtnLink, EmailContact } from "@/components/telecom-etude/contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { Metadata } from "next";

interface FaqItem {
    question: string;
    answer: readonly string[];
}

export var metadata: Metadata = {
    title: "Foire Aux Questions",
};

export default async function Page({ params }: LocaleParams) {
    const { locale } = await params;
    const t = getDictionary(locale).pages.faq;
    metadata.title = t.tabTitle;
    return (
        <div className="p-10 space-y-10">
            <OrangeTitle title={t.title} />
            <p className="text-center max-w-[1000px] m-auto">
                {t.text.before} <EmailContact underline /> {t.text.between}{" "}
                <BtnLink underline href="/contact">
                    {t.text.form}
                </BtnLink>{" "}
                {t.text.after}
            </p>
            <Accordion type="single" collapsible className="w-full">
                {t.list.map((item: FaqItem, idx: number) => (
                    <AccordionItem value={idx.toString()} key={idx} className="shadow-lg m-2">
                        <AccordionTrigger className="border-[1px] border-primary px-4">{item.question}</AccordionTrigger>
                        <AccordionContent className="p-4">
                            <Paragraphs paragraphs={item.answer} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
