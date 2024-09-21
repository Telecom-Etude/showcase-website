import { VariantLink } from "@/components/ui/button";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { nav } from "@/locales/routing";
import { FaArrowRight } from "react-icons/fa";

export default function Home({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.home;
    return (
        <>
            <div className="p-10 space-y-4">
                <h1 className="font-semibold text-center">Telecom Etude</h1>
                <p className="text-center">La Junior Entreprise du numérique, des nouvelles technologies et de la data</p>
                <div className="flex space-x-4 justify-center">
                    <VariantLink variant="outline" href={nav(locale, "/faq")} btnCn="rounded-lg group" className="items-center flex space-x-2">
                        <p>Lire la FAQ</p>
                        <FaArrowRight className="group-hover:animate-bounce-x" />
                    </VariantLink>
                    <VariantLink variant="call2action" href={nav(locale, "/contact")} btnCn="rounded-lg group" className="items-center flex space-x-2">
                        <p>Contactez-nous</p>
                        <FaArrowRight className="group-hover:animate-bounce-x" />
                    </VariantLink>
                </div>
            </div>
        </>
    );
}
