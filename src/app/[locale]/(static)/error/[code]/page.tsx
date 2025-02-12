import { ErrorPage } from "@/components/navigation/errors";
import { LocaleParams } from "@/locales/config";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Erreur"
};
type Params = LocaleParams & {
    params: { code: string };
};

export default function Page({ params: { locale, code } }: Params) {
    return <ErrorPage code={code} locale={locale} />;
}
