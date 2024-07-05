import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "./client";
import { Locale, LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { H1 } from "@/components/styles/titles";
import { Block } from "@/components/styles/blocks";
import { EmailContact } from "@/components/telecom-etude/contact";

export default async function Contact({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.contact;

    return (
        <Block className="flex flex-col items-center">
            <H1>{t.title}</H1>
            <p className="p-2 pb-8 text-center sm:w-[80%] w-[90%]">
                {t.before}
                <EmailContact />
                {t.after}
            </p>
            <div className="bg-background w-full flex align-middle justify-center ">
                <ContactForm locale={locale} />
            </div>
        </Block>
    );
}
