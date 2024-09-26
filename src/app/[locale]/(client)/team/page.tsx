import { LocaleParams } from "@/locales/config";
import { Dictionary, getDictionary } from "@/locales/dictionaries";
import { DEPARTMENTS, PersonProps } from "./members";
import { Block } from "@/components/styles/blocks";
import { auth } from "@/auth/auth";
import { cn } from "@/lib/utils";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { ReactNode } from "react";

function PersonBackground({ children, linkedin, imageCn }: { children: ReactNode; linkedin?: string; imageCn: string }) {
    const className = cn(imageCn, "bg-cover rounded-lg group");
    if (linkedin) {
        return (
            <Link href={linkedin} className={className}>
                {children}
            </Link>
        );
    } else {
        return <div className={className}>{children}</div>;
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 ">
            {department.map(({ name, ...person }, i) => (
                <PersonBackground key={i} {...person}>
                    <Person job={t[person.id]} name={name} linkedin={typeof person.linkedin !== "undefined"} />
                </PersonBackground>
            ))}
        </div>
    );
}

export default async function Team({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.team;
    return (
        <Block>
            <header>
                <h1 className="font-bold">{t.title}</h1>
            </header>
            {DEPARTMENTS.map(({ id, members }, i) => (
                <section key={i} className="py-6">
                    <h2 className="p-2">{t.poles[id]}</h2>
                    <Department department={members} t={t.members} />
                </section>
            ))}
        </Block>
    );
}
