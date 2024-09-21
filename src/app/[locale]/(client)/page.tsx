import TelecomParis from "@/../public/images/global/tp.jpeg";
import GroupPhoto from "@/../public/images/global/group_photo.jpg";
import Image from "next/image";

import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { BirdLogo } from "@/components/telecom-etude/logos";
import { BtnLink } from "@/components/telecom-etude/contact";
import { nav } from "@/locales/routing";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.home;
    return (
        <>
            <div className="border-8 h-full w-full items-center flex justify-center">
                <h1>Telecom Etude</h1>
            </div>
            {/* <div className="grid grid-cols-2">

                <div className="max-h-[300px] flex justify-center">
                    <BirdLogo />
                </div>

                <div className="flex flex-col items-center justify-center h-full space-y-2 p-6 text-center">
                    <h1>
                        Telecom Etude
                    </h1>
                    <h2>
                        {t.subtitle}
                    </h2>
                    <div className="flex flex-col items-center space-y-2">
                        <p>{t.contact.description}</p>
                        <Button asChild><Link href={nav(locale, "/contact")}>{t.contact.button}</Link></Button>
                    </div>
                </div>
            </div> */}
        </>
    );
}
