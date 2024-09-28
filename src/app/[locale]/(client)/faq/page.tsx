import { Paragraphs } from "@/components/styles/texts";
import { BtnLink, EmailContact } from "@/components/telecom-etude/contact";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface FaqItem {
    question: string;
    answer: readonly string[];
}

export default function FAQ({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.faq;
    return (
        <div className="p-10 space-y-10">
            <h1 className="text-center">{t.title}</h1>
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
