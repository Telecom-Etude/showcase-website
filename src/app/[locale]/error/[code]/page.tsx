import { ErrorPage } from "@/components/navigation/errors";
import { LocaleParams } from "@/locales/config";

interface Params extends LocaleParams {
    params: { code: string } & LocaleParams["params"];
}

const Errors = ({ params: { locale, code } }: Params) => <ErrorPage code={code} locale={locale} />;

export default Errors;
