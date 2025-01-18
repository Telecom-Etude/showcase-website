import { ErrorPage } from "@/components/navigation/errors";
import { LocaleParams } from "@/locales/config";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Erreur"
};
type Params = LocaleParams & {
    params: { code: string };
};

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "fr" }];
}

export const dynamicParams = false;

export default function Page({ params: { locale, code } }: Params) {
    return <ErrorPage code={code} locale={locale} />;
}
