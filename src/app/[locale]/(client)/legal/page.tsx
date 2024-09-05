import Link from "next/link";
import React from "react";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

import { EmailContact } from "@/components/telecom-etude/contact";
import { nav } from "@/locales/routing";

const PartText = ({ children }: { children: React.ReactNode }) => <div className="space-y-4">{children}</div>;

export default async function Legal({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.legal;
    const titleSyle = "text-center pt-10";
    return (
        <div className="p-8 pt-0 ">
            <h1 className={titleSyle}>{t.title}</h1>
            <h2 className={titleSyle}>{t.credits}</h2>
            <h3 className={titleSyle}>{t.dev}</h3>
            <PartText>
                <p className="text-center">{t.madeBy}</p>
                <p className="text-center">{t.loi.host}</p>
            </PartText>
            <h2 className={titleSyle}>Telecom Etude</h2>
            <PartText>
                <p className="text-center">{t.loi1901}</p>
                <p className="text-center">{t.siegesocial}</p>
                <div className="text-center flex space-x-4">
                    <p>{t.contact}</p>
                    <EmailContact />
                </div>
                <p className="text-center">{t.siret}</p>
                <p className="text-center">{t.tva}</p>
            </PartText>
            <h2 className={titleSyle}>RGPD</h2>
            <PartText>
                <div className="text-center">{t.respoRGPD}</div>
                <div className="text-center">
                    {t.contact}
                    <EmailContact rgpd />
                </div>
                <p className="text-center">
                    <>{t.loi.rgpd.before}</>
                    <EmailContact rgpd />
                    <>{t.loi.rgpd.in}</>
                    <Link href={nav(locale, "/contact")}>{t.loi.rgpd.contact}</Link>
                    <>{t.loi.rgpd.after}</>
                </p>
            </PartText>
            <h2 className={titleSyle}>{t.hosting}</h2>
            <PartText>
                <div className="text-center">Rezel Hosting (Rezel)</div>
                <div className="text-center">{t.rezelsiege}</div>
                <div className="text-center">
                    <Link className="hover:underline" href="rezel.net">
                        rezel.net
                    </Link>
                </div>
            </PartText>
        </div>
    );
}
