"use client"

import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Locale } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

import Data from "@/../public/images/domains/icons/data.png";
import Cyber from "@/../public/images/domains/icons/cyber.png";
import Ima from "@/../public/images/domains/icons/image.png";
import Se from "@/../public/images/domains/icons/se.png";
import Market from "@/../public/images/domains/icons/market.png";
import Dev from "@/../public/images/domains/icons/dev.png";
import React, { ReactNode, useState, isValidElement } from "react";

export function DomainBlock({ locale }: { locale: Locale }) {
    const t = getDictionary(locale).pages.home.domains;

    const messageData = "Notre offre : la création d'IAs et de bases de données adaptées à vos besoins, de la data analyse, de l'exploitation de données et de la visualisation de données.";
    const messageWeb = "Notre offre : le développement de vos sites internet, de vos applications, de vos logiciels, du développement de nouveaux outils, de l'automatisation de vos outils";
    const messageCyber = "Notre offre : de l'analyse de votre cyberdéfense, de la simulation de cyber-attaque, la cryptographie de vos données";
    const messageImage = "Notre offre : du traitement d'image, la modification de moteur de rendu, la modélisation 3D, le rendu d'image de synthèse";
    const messageMarket = "Notre offre : etude de marché, audit";
    const messageSE = "Notre offre : développement de frimware pour systèmes embarqués, réalisation de Poc";

    return (
        <>
            <h2 className="text-center">{t.title}</h2>
            <h3 className="text-center">{t.subtitle}</h3>
            <p className="text-center">{t.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 space-x-0 max-w-[2000px] m-auto">
                <DomainCard title={t.data} message={messageData} image={Data} locale={locale} />
                <DomainCard title={t.web} message={messageWeb} image={Dev} locale={locale} />
                <DomainCard title={t.cyber} message={messageCyber} image={Cyber} locale={locale} />
                <DomainCard title={t.image} message={messageImage} image={Ima} locale={locale} />
                <DomainCard title={t.market} message={messageMarket} image={Market} locale={locale} />
                <DomainCard title={t.se} message={messageSE} image={Se} locale={locale} />
            </div>
        </>
    );
}

function ThemedCard({ children, hoverState }: { children: ReactNode, hoverState: boolean }) {
    if (hoverState) {
        return (
            <>
                <Card className="dark:hidden -translate-y-1 w-full h-full scale-105 transition-all ease-out bg-gradient-to-br from-primary via-primary to-destructive opacity-20 duration-500 grid grid-cols-3 xs:grid-cols-2 rounded-lg">
                    {children}
                </Card>
                <Card className="hidden -translate-y-1 w-full h-full scale-105 transition-all ease-out bg-gradient-to-br from-primary via-destructive to-destructive opacity-20 duration-500 dark:grid grid-cols-3 xs:grid-cols-2 rounded-lg">
                    {children}
                </Card>
            </>
        )
    } else {
    return (
        <>
            <Card className="dark:hidden -translate-y-1 w-full h-full transition-all ease-out bg-gradient-to-br from-primary via-primary to-destructive duration-500 grid grid-cols-3 xs:grid-cols-2 rounded-lg">
                {children}
            </Card>
            <Card className="hidden -translate-y-1 w-full h-full transition-all ease-out bg-gradient-to-br from-primary via-destructive to-destructive duration-500 dark:grid grid-cols-3 xs:grid-cols-2 rounded-lg">
                {children}
            </Card>
        </>
    )
}}



function DomainCard({ title, image, message, locale }: { title: string; image: StaticImageData; message : string; locale: Locale }) {
    const [isHovered, setHovered] = useState(false);

    return (
        // <Link href={nav(locale, `/offer/${id}`)} className="p-4 w-full h-full">
        <div className="p-4 w-full h-full relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
            <ThemedCard hoverState = {isHovered} >
                <CardHeader className="">
                    <CardTitle className="m-auto font-normal text-sm xs:text-xl leading-6">{title}</CardTitle>
                </CardHeader>
                <CardContent className="col-span-2 xs:col-span-1  flex p-0">
                    <Image placeholder="blur" src={image} alt={title} />
                </CardContent>
            </ThemedCard>
            <Card
                className="transition-all duration-300"
                style={{ opacity: isHovered? 1 : 0,
                }}>
                <p className="m-auto font-semibold text-sm xs:text-xl leading-6 scale-90 absolute inset-0 flex justify-center items-center text-white">{message}</p>
            </Card>
        </div>
        // </Link>
    );
}
