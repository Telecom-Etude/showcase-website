import { LocaleParams } from "@/locales/config";
import { Dictionary, getDictionary } from "@/locales/dictionaries";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { DEPARTMENTS, PersonProps } from "./members";
import { OrangeTitle } from "@/components/styles/texts";

export var metadata: Metadata = {
    title: "Notre équipe",
};
function Linkedin({ children, linkedin }: { children: ReactNode; linkedin?: string }) {
    if (linkedin) {
        return <Link href={linkedin}>{children}</Link>;
    } else {
        return <div>{children}</div>;
    }
}

function Department({ department, t }: { t: Dictionary["pages"]["team"]["members"]; department: PersonProps[] }) {
    return (
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-6 gap-6 w-fit">
            {department.map(({ linkedin, name, id, image }, i) => (
                <Linkedin key={i} linkedin={linkedin}>
                    <div className="relative m-2 w-[300px] h-[300px]  ">
                        <div className=" absolute">
                            <Image src={image} alt={name} width={300} height={300} className="rounded-lg" />
                        </div>
                        <div className="bg-black bg-opacity-20 absolute w-[300px] h-[300px] rounded-lg"></div>
                        <div className="text-white font-semibold absolute bottom-0 p-2">
                            <h3>{name}</h3>
                            <p className="text-left">{t[id]}</p>
                        </div>
                    </div>
                </Linkedin>
            ))}
        </div>
    );
}

export const dynamicParams = false;

export default async function Team({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.team;
    metadata.title = t.title;
    return (
        <div className="p-4 flex flex-col items-center">
            <header>
                <OrangeTitle title={t.title} />
            </header>
            {DEPARTMENTS.map(({ id, members }, i) => (
                <section key={i} className="py-6">
                    <h2 className="p-2 text-center md:text-left font-semibold">{t.poles[id]}</h2>
                    <div className="flex justify-center">
                        <Department department={members} t={t.members} />
                    </div>
                </section>
            ))}
        </div>
    );
}
