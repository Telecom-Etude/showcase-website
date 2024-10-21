import { ErrorPage } from "@/components/navigation/errors";
import { LocaleParams } from "@/locales/config";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Erreur"
};
type Params = LocaleParams & {
    params: { code: string };
};

const Errors = ({ params: { locale, code } }: Params) => {
    return <ErrorPage code={code} locale={locale} />;
};

export default Errors;
