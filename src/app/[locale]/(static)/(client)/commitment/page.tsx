import { Block } from "@/components/styles/blocks";
import Image from "next/image";

import JamaisSansElles from "@/../public/images/jamaissanselles.jpg";
import Rse from "@/../public/images/rse.jpg";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Engagements"
};

export default function Page({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.commitments;
    return (
        <Block className="space-y-10">
            <header className="flex flex-col items-center justify-center space-y-4">
                <h1 className="font-semibold">{t.title}</h1>
                <p className="text-center">{t.description}</p>
            </header>
            <section className="flex flex-col items-center justify-center space-y-4">
                <h2 className="font-semibold">{t.jamaissanselles.title}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                    <p className="text-justify">{t.jamaissanselles.text} </p>
                    <Link href="https://www.jamaissanselles.fr/">
                        <Image placeholder="blur" alt={t.jamaissanselles.alt} src={JamaisSansElles} width={300} />
                    </Link>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center space-y-4">
                <h2 className="font-semibold">{t.rse.title}</h2>
                {t.rse.paragraphs.map((text, i) => [
                    <p className="text-justify" key={i}>
                        {text}
                    </p>
                ])}
                <Image placeholder="blur" alt="Logo RSE" src={Rse} width={1000} />
            </section>
        </Block>
    );
}
