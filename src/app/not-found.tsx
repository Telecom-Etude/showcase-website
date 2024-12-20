import { ErrorPage } from "@/components/navigation/errors";
import { getLocale } from "@/headers";
import { LocaleParams } from "@/locales/config";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Erreur"
};
type Params = LocaleParams & {
    params: { code: string };
};

const Errors = async () => {
    return <ErrorPage code={"404"} locale={await getLocale()} />;
};

export default Errors;
