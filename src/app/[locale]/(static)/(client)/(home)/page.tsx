import { Metadata } from 'next';
import { DeepReadonly } from 'next/dist/shared/lib/deep-readonly';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Alma from '@/../public/images/companies/trusted/Alma.jpeg';
import Bearing_Point from '@/../public/images/companies/trusted/Bearing_Point.jpg';
import BnF from '@/../public/images/companies/trusted/BnF.png';
import BNP_Paribas from '@/../public/images/companies/trusted/BNP_Paribas.png';
import France from '@/../public/images/companies/trusted/France.tv.png';
import Ministere_de_la_Culture from '@/../public/images/companies/trusted/Ministere_de_la_Culture.png';
import Mitsubishi_Motors from '@/../public/images/companies/trusted/Mitsubishi_Motors.png';
import Pont from '@/../public/images/companies/trusted/Pont-neuf.webp';
import Safran from '@/../public/images/companies/trusted/Safran.png';
import SaintGobain from '@/../public/images/companies/trusted/SaintGobain.png';
import SNCF from '@/../public/images/companies/trusted/SNCF.png';
import Telecom_Paris from '@/../public/images/companies/trusted/Telecom_Paris.png';
import fond_acc from '@/../public/images/fond_accueil.jpg';

import { LoadNumber } from '@/components/animations/load-number';
import MyCarousel from '@/components/animations/MyCarousel';
import { Block } from '@/components/styles/blocks';
import { OrangeTitle } from '@/components/styles/texts';
import { BirdLogo } from '@/components/telecom-etude/logos';
import { VariantLink } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Locale, LocaleParams } from '@/locales/config';
import { Dictionary, getDictionary } from '@/locales/dictionaries';
import { nav } from '@/locales/routing';

import { DomainBlock } from './domains';

const trusted: { src: StaticImageData; alt: string }[] = [
    { alt: 'Safran logo', src: Safran },
    { alt: 'Bearing_Point logo', src: Bearing_Point },
    { alt: 'Telecom_Paris logo', src: Telecom_Paris },
    { alt: 'Pont logo', src: Pont },
    { alt: 'SNCF logo', src: SNCF },
    { alt: 'France logo', src: France },
    { alt: 'Alma logo', src: Alma },
    { alt: 'Ministere_de_la_Culture logo', src: Ministere_de_la_Culture },
    { alt: 'SaintGobain logo', src: SaintGobain },
    { alt: 'BNP_Paribas logo', src: BNP_Paribas },
    { alt: 'Mitsubishi_Motors logo', src: Mitsubishi_Motors },
    { alt: 'BnF logo', src: BnF },
];

function NumberCard({
    nb,
    prefix,
    suffix,
    text,
}: {
    nb: number;
    prefix?: string;
    suffix?: string;
    text: string;
}) {
    return (
        <Card className="w-[200px] flex-col border-none rounded-lg bg-transparent">
            <CardHeader>
                <CardTitle className="text-center m-auto">
                    {prefix ? prefix + ' ' : ''}
                    {<LoadNumber value={nb} duration={5000} />}
                    {suffix ? ' ' + suffix : ''}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center">{text}</p>
            </CardContent>
        </Card>
    );
}

export const metadata: Metadata = {
    title: 'Accueil',
};

function CNJE({ t, locale }: { t: DeepReadonly<Dictionary['pages']['home']>; locale: Locale }) {
    return (
        <section className="bg-navigation">
            <Block className="flex flex-col sm:flex-row space-y-10 px-10 py-10 sm:space-x-10">
                <div className="flex justify-center">
                    <div className="w-[300px]">
                        <BirdLogo />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-10">
                    <q className="italic text-justify">
                        {t.cnje[0]}
                        <br />
                        <br />
                        {t.cnje[1]}
                    </q>
                    <Link
                        href="https://junior-entreprises.com/"
                        className="underline w-fit ml-auto"
                    >
                        Confédération Nationale des Junior-Entreprises
                    </Link>
                    <div>
                        <VariantLink
                            variant="call2action"
                            href={nav(locale, '/faq')}
                            btnCn="rounded-lg w-fit group"
                            className="items-center flex space-x-4"
                        >
                            <p>{t.questions}</p>
                            <FaArrowRight className="group-hover:animate-bounce-x" />
                        </VariantLink>
                    </div>
                </div>
            </Block>
        </section>
    );
}

function Description({
    locale,
    className,
    t,
}: {
    t: DeepReadonly<Dictionary['pages']['home']>;
    locale: Locale;
    className?: string;
}) {
    return (
        <>
            <p className={cn('text-center text-white', className)}>{t.description}</p>
            <div
                className={cn(
                    'flex flex-col sm:flex-row space-y-10 sm:space-x-10 sm:space-y-0 justify-center',
                    className
                )}
            >
                <VariantLink
                    variant="outline"
                    href={nav(locale, '/about')}
                    btnCn="rounded-lg group"
                    className="items-center flex space-x-4"
                >
                    <p>{t.whoarewe}</p>
                    <FaArrowRight className="group-hover:animate-bounce-x" />
                </VariantLink>
                <VariantLink
                    variant="call2action"
                    href={nav(locale, '/contact')}
                    btnCn="rounded-lg group"
                    className="items-center flex space-x-4"
                >
                    <p>{t.contact}</p>
                    <FaArrowRight className="group-hover:animate-bounce-x" />
                </VariantLink>
            </div>
        </>
    );
}

function Trusted({ t }: { t: DeepReadonly<Dictionary['pages']['home']> }) {
    return (
        <Block className="bg-background">
            <section className="py-10 space-y-10 ">
                <h2 className="text-2xl font-bold text-center">{t.trust}</h2>
                {t.opinions.length > 0 && (
                    <div className="relative group">
                        <MyCarousel opinions={t.opinions} />
                    </div>
                )}
                <div className="grid grid-cols-3 md:grid-cols-6 bg-white">
                    {trusted.map(({ alt, src }, i) => (
                        <div key={i} className="w-full h-full items-center justify-center flex">
                            <div className="w-[70%] p-4">
                                <Image placeholder="blur" src={src} alt={alt} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Block>
    );
}

function Numbers({ t }: { t: DeepReadonly<Dictionary['pages']['home']> }) {
    return (
        <section className="p-10 space-y-10 bg-navigation">
            <h2 className="text-center">{t.numbers.title}</h2>
            <div className="grid lg:grid-cols-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center border-y-2 border-primary justify-around">
                <NumberCard nb={97} suffix="%" text={t.numbers.clients} />
                <NumberCard nb={45} text={t.numbers.years} />
                <NumberCard nb={800} prefix="+" text={t.numbers.pupils} />
                <NumberCard nb={40} text={t.numbers.projects} />
                <NumberCard nb={24} text={t.numbers.admins} />
                <NumberCard nb={30} prefix="L" text={t.numbers.l30} />
            </div>
        </section>
    );
}

function Header({ t, locale }: { locale: Locale; t: DeepReadonly<Dictionary['pages']['home']> }) {
    return (
        <header>
            <div className="backdrop-blur-[1px] bg-zinc-900/60 p-6 w-full space-y-4 flex flex-col items-center justify-center sm:min-h-[40vw] rounded ">
                <OrangeTitle className="m-0" title="Telecom Etude" />
                <h2 className="text-center text-white font-bold">{t.subtitle}</h2>
                <div className="lg:block hidden pt-10 space-y-10">
                    <Description t={t} locale={locale} />
                </div>
            </div>
            <div className="bg-background lg:hidden">
                <Block className="space-y-6">
                    <Description t={t} locale={locale} />
                </Block>
            </div>
        </header>
    );
}

export default async function Page({ params }: LocaleParams) {
    const { locale } = await params;
    const t = getDictionary(locale).pages.home;
    metadata.title = t.title;
    return (
        <>
            <Separator />
            <Image
                src={fond_acc}
                alt="image de Telecom"
                className="w-full h-[40vw]  sm:absolute sticky -z-10 top-10"
                style={{ aspectRatio: 'auto' }}
            />
            <Header t={t} locale={locale} />
            <Separator />
            <Numbers t={t} />
            <Separator />
            <DomainBlock locale={locale} />
            <Separator />
            <CNJE locale={locale} t={t} />
            <Separator />
            <Trusted t={t} />
        </>
    );
}
