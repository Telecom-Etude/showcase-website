import { LocaleParams } from "@/locales/config";
import { Dictionary, getDictionary } from "@/locales/dictionaries";
import { DEPARTMENTS, PersonProps } from "./members";
import { Block } from "@/components/styles/blocks";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

function Linkedin({ children, linkedin }: { children: ReactNode; linkedin?: string }) {
    if (linkedin) {
        return <Link href={linkedin}>{children}</Link>;
    } else {
        return <div>{children}</div>;
    }
}

function Person({ name, job, linkedin }: { name: string; job: string; linkedin: boolean }) {
    return (
        <div className="rounded-lg font-semibold space-y-2 aspect-square w-full bg-black bg-opacity-20 text-secondary">
            <div className="p-4 flex flex-col justify-end bg-orange-400 bg-opacity-0 h-full group-hover:bg-opacity-20">
                <div className="flex justify-between">
                    <h3>{name}</h3>
                    {linkedin && <FaLinkedin className="w-6 h-6" />}
                </div>
                <h4>{job}</h4>
            </div>
        </div>
    );
}

function Department({ department, t }: { t: Dictionary["pages"]["team"]["members"]; department: PersonProps[] }) {
    return (
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 ">
            {department.map(({ linkedin, name, id, image }, i) => (
                <Linkedin key={i} linkedin={linkedin}>
                    <div className="relative m-2 w-[300px] h-[300px]  ">
                        <div className=" absolute">
                            <Image src={image} alt="ezr" width={300} height={300} className="rounded-lg" />
                        </div>
                        <div className="bg-black bg-opacity-20 absolute w-[300px] h-[300px] rounded-lg"></div>
                        <div className="text-background font-semibold absolute bottom-0 p-2">
                            <h3>{name}</h3>
                            <p>{t[id]}</p>
                        </div>
                    </div>
                </Linkedin>
            ))}
        </div>
    );
}

export default async function Team({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.team;
    return (
        <Block>
            <header>
                <h1 className="text-center font-bold">{t.title}</h1>
            </header>
            {DEPARTMENTS.map(({ id, members }, i) => (
                <section key={i} className="py-6">
                    <h2 className="p-2 font-semibold">{t.poles[id]}</h2>
                    <Department department={members} t={t.members} />
                </section>
            ))}
        </Block>
    );
}
