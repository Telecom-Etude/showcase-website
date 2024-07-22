import { Locale, LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { H1 } from "@/components/styles/titles";
import { Block } from "@/components/styles/blocks";
import { EmailContact } from "@/components/telecom-etude/contact";
import ContactForm from "@/components/meta-components/contact-form";
import { FORM_DEST_EMAIL } from "@/mail/consts";

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
            <div className="bg-background w-full flex items-center justify-center ">
                <ContactForm locale={locale} emails={[FORM_DEST_EMAIL]} />
            </div>
        </Block>
    );
}
