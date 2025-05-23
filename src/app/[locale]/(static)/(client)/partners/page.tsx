import { Metadata } from 'next';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { MdOpenInNew } from 'react-icons/md';

import Bain from '@/../public/images/companies/partners/bain.svg';
import BearingPoint from '@/../public/images/companies/partners/bearingpoint.svg';
import KPMG from '@/../public/images/companies/partners/kpmg.svg';

import { Block } from '@/components/styles/blocks';
import { OrangeTitle } from '@/components/styles/texts';
import { BtnLink } from '@/components/telecom-etude/contact';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LocaleParams } from '@/locales/config';
import { getDictionary } from '@/locales/dictionaries';

export const metadata: Metadata = {
    title: 'Nos partenaires',
};

interface PartnerProps {
    title: string;
    logo: StaticImport;
    t: { text: string; type: string };
    url: string;
    linkWord: string;
}

function Partner({ title, logo, t, url, linkWord }: PartnerProps) {
    return (
        <section className="p-4">
            <div className="p-[2px] rounded-lg bg-gradient-to-tl from-primary to-destructive">
                <Card className="rounded-lg">
                    <CardHeader>
                        <CardTitle className="w-full text-center">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center">
                            <p>{t.type}</p>
                            <BtnLink
                                href={url}
                                isNewTab
                                isForeign
                                className="flex items-center space-x-1"
                            >
                                <p>{linkWord}</p>
                                <MdOpenInNew />
                            </BtnLink>
                            <Separator className="my-6" />
                            <a href={url} target="_blank" rel="noopener noreferrer nofollow">
                                <Image src={logo} alt={title + ' logo'} width={400} />
                            </a>
                        </div>
                        <Separator className="my-6" />
                        <p>{t.text}</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export const dynamicParams = false;

export default async function Page({ params }: LocaleParams) {
    const { locale } = await params;
    const t = getDictionary(locale).pages.partners;
    metadata.title = t.title;
    return (
        <Block>
            <header className="w-full flex flex-col items-center justify-center space-y-8 pb-8">
                <OrangeTitle title={t.title} />
                <p className="text-lg max-w-[500px] text-center">{t.text}</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <Partner
                    title="KPMG"
                    linkWord={t.linkWord}
                    url="https://www.kpmg.com"
                    logo={KPMG}
                    t={t.kpmg}
                />
                <Partner
                    title="BearingPoint"
                    linkWord={t.linkWord}
                    url="https://www.bearingpoint.com"
                    logo={BearingPoint}
                    t={t.bearingPoint}
                />
                <Partner
                    title="Bain"
                    linkWord={t.linkWord}
                    url="https://www.bain.com"
                    logo={Bain}
                    t={t.bain}
                />
            </div>
        </Block>
    );
}
