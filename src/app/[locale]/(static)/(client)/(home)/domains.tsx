import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import Cyber from '@/../public/images/domains/icons/cyber.png';
import Data from '@/../public/images/domains/icons/data.png';
import Dev from '@/../public/images/domains/icons/dev.png';
import Ima from '@/../public/images/domains/icons/image.png';
import Market from '@/../public/images/domains/icons/market.png';
import Se from '@/../public/images/domains/icons/se.png';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Locale } from '@/locales/config';
import { getDictionary } from '@/locales/dictionaries';

export function DomainBlock({ locale }: { locale: Locale }) {
    const t = getDictionary(locale).pages.home.domains;
    return (
        <section className="py-10 space-y-10 bg-background">
            <h2 className="text-center">{t.title}</h2>
            <h3 className="text-center">{t.subtitle}</h3>
            <p className="text-center">{t.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 space-x-0 max-w-[2000px] m-auto">
                <DomainCard title={t.data} image={Data} />
                <DomainCard title={t.web} image={Dev} />
                <DomainCard title={t.cyber} image={Cyber} />
                <DomainCard title={t.image} image={Ima} />
                <DomainCard title={t.market} image={Market} />
                <DomainCard title={t.se} image={Se} />
            </div>
        </section>
    );
}

function ThemedCard({ children }: { children: ReactNode }) {
    return (
        <>
            <Card className="dark:hidden hover:-translate-y-1 w-full h-full hover:scale-105 transition-all ease-out bg-gradient-to-br from-primary via-primary to-destructive hover:opacity-80 duration-500 grid grid-cols-3 xs:grid-cols-2 rounded-lg">
                {children}
            </Card>
            <Card className="hidden hover:-translate-y-1 w-full h-full hover:scale-105 transition-all ease-out bg-gradient-to-br from-primary via-destructive to-destructive hover:opacity-80 duration-500 dark:grid grid-cols-3 xs:grid-cols-2 rounded-lg">
                {children}
            </Card>
        </>
    );
}

function DomainCard({ title, image }: { title: string; image: StaticImageData }) {
    return (
        // <Link href={nav(locale, `/offer/${id}`)} className="p-4 w-full h-full">
        <div className="p-4 w-full h-full">
            <ThemedCard>
                <CardHeader className="">
                    <CardTitle className="m-auto font-normal text-sm xs:text-xl leading-6">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="col-span-2 xs:col-span-1  flex p-0 ">
                    <Image placeholder="blur" src={image} alt={title} />
                </CardContent>
            </ThemedCard>
        </div>
        // </Link>
    );
}
