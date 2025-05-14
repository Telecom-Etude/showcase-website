import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

import { Block } from "@/components/styles/blocks";
import { BtnLink, EmailContact } from "@/components/telecom-etude/contact";
import { Metadata } from "next";
import { OrangeTitle } from "@/components/styles/texts";

export var metadata: Metadata = {
    title: "Mentions légales",
};

export default async function Legal({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.legal;
    metadata.title = t.title;
    return (
        <Block>
            <OrangeTitle title={t.title} />
            <section className="m-4">
                <h2 className="font-semibold mb-4">{t.legal.title}</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold">{t.legal.owner.title}</h3>
                        <div>
                            <p>{t.legal.owner.description}</p>
                            <p>{t.legal.owner.association}</p>
                            <p>
                                {t.legal.owner.contact} <EmailContact />
                            </p>
                        </div>
                        <div className="flex flex-col italic text-sm p-2 border-l-2">
                            <p>{t.legal.owner.siret + ": "} 332 711 522 00026</p>
                            <p>{t.legal.owner.urssaf + ": "} 757 090058076001011 8</p>
                            <p>{t.legal.owner.vat + ": "} FR 1933 2711 522 00018</p>
                            <p>{t.legal.owner.ape + ": "} 6202A</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold">{t.legal.director.title}</h3>
                        <p>{t.legal.director.description}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">{t.legal.host.title}</h3>
                        <p>{t.legal.host.description}</p>
                        <p>
                            {t.legal.host.contact} <EmailContact />
                        </p>
                        <p>
                            {t.legal.host.website} <BtnLink href="https://www.rezel.net">rezel.net</BtnLink>
                        </p>
                    </div>
                </div>
            </section>

            <section className="m-4">
                <h2 className="font-semibold mb-4">{t.property.title}</h2>
                <p>{t.property.description}</p>
            </section>

            <section className="m-4">
                <h2 className="font-semibold mb-4">{t.data.title}</h2>
                <div className="space-y-4">
                    <p>{t.data.description1}</p>
                    <p>
                        {t.data.description2} <EmailContact rgpd />
                    </p>
                    <p>{t.data.description3}</p>
                </div>
            </section>

            <section className="m-4">
                <h2 className="font-semibold mb-4">{t.cookies.title}</h2>
                <p>{t.cookies.description}</p>
            </section>

            <section className="m-4">
                <h2 className="font-semibold mb-4">{t.liability.title}</h2>
                <p>{t.liability.description}</p>
            </section>

            <section className="m-4">
                <h2 className="font-semibold mb-4">{t.law.title}</h2>
                <p>{t.law.description}</p>
            </section>
        </Block>
    );
}
