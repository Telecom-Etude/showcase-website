import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

import ContactForm from "@/components/meta-components/contact-form";
import { Block } from "@/components/styles/blocks";
import { EmailContact } from "@/components/telecom-etude/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact"
};

export default async function Page({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.contact;

    return (
        <Block className="py-10 space-y-10 flex flex-col items-center">
            <img className="w-32" src="/icons/contact_icon.png" alt="Contactez-nous"/>
            <h1 className="font-semibold text-center bg-gradient-to-r from-primary to-destructive w-fit m-auto text-transparent bg-clip-text">
                        {t.title}
                </h1>
            <p className="pb-8 text-center sm:w-[80%] w-[90%]">
                {t.before}
                <EmailContact />
                {t.after}
            </p>
            <div className="bg-background w-full flex items-center justify-center ">
                <ContactForm locale={locale} emails={[process.env.FORM_DEST_EMAIL]} />
            </div>
        </Block>
    );
}
