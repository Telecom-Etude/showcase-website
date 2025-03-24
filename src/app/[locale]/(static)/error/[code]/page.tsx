import { ErrorPage } from "@/components/navigation/errors";
import { LocaleParams } from "@/locales/config";
import { Metadata } from "next";
import { getDictionary } from "@/locales/dictionaries";

export var metadata: Metadata = {
    title: "Erreur",
};
type Params = LocaleParams & {
    params: { code: string };
};

export default function Page({ params: { locale, code } }: Params) {
    metadata.title = getDictionary(locale).navigation.errors.title;
    return <ErrorPage code={code} locale={locale} />;
}
