import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

import BugForm from "@/components/meta-components/bug-form";
import { Block } from "@/components/styles/blocks";
import { Metadata } from "next";
import { OrangeTitle } from "@/components/styles/texts";

export const metadata: Metadata = {
    title: "Bug",
};

export default async function Page({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.bug;

    return (
        <Block className="py-10 space-y-10 flex flex-col items-center">
            <OrangeTitle title={t.title} />
            <p className="pb-8 text-center sm:w-[80%] w-[90%]">
                {t.before}
            </p>
            <div className="bg-background w-full flex items-center justify-center ">
                <BugForm locale={locale} emails={[process.env.FORM_DEST_EMAIL]} />
            </div>
        </Block>
    );
}
