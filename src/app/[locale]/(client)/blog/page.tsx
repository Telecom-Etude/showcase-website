"use client";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ManyComboBox } from "@/components/meta-components/combobox";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getValidatedBlogsFromLocale, NamedAuthor } from "@/db/blogs";
import { User } from "@prisma/client";

const keywords = [
    "events",
    "missions",
    "data",
    "cyber",
    "ia",
    "chatbot",
    "se",
    "web",
    "mobile",
    "cloud",
    "devops",
    "dev",
    "iot",
    "blockchain",
    "crypto",
    "startup"
];

const vocab = {
    events: "Événements",
    missions: "Missions",
    data: "Données",
    cyber: "Cybersécurité",
    ia: "IA",
    chatbot: "Chatbot",
    se: "SE",
    web: "Web",
    mobile: "Mobile",
    cloud: "Cloud",
    devops: "DevOps",
    dev: "Développement",
    iot: "IoT",
    blockchain: "Blockchain",
    crypto: "Cryptomonnaie",
    startup: "Startup"
} as const;

interface PostPresentation {
    title: string;
    content: string;
    authors: NamedAuthor[];
    date: Date;
    labels: string[];
}

const allLabelsInValue = (postLabels: string[], selectedLabels: string[]) =>
    selectedLabels.filter(label => postLabels.includes(label)).length === selectedLabels.length;

const displayAuthors = (authors: NamedAuthor[]) => {
    const last = authors.pop();
    const beforelast = authors.pop();
    if (!last) {
        console.error("Error while fetching user data.");
        return "";
    } else if (!beforelast) {
        return `${last.firstname} ${last.lastname}`;
    } else {
        const end = `${beforelast.firstname} ${beforelast.lastname} & ${last.firstname} ${last.lastname}`;
        return authors.reduce((acc, author) => `${acc}${author.firstname} ${author.lastname}, `, "") + end;
    }
};

export default function BlogPage({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.blog;
    const [value, setValue] = useState<string[]>([]);
    const addRemoveValue = (v: string) => {
        if (value.includes(v)) {
            setValue(value.filter(val => val !== v));
        } else if (value.length < 3) {
            setValue([...value, v]);
        }
    };

    const [dbBlogs, setDbBlogs] = useState<PostPresentation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getValidatedBlogsFromLocale(locale).then(blogs => {
            setDbBlogs(blogs);
            4;
            setLoading(false);
        });
    }, [locale]);

    return (
        <div className="flex flex-col items-center p-10 space-y-10">
            <h1>Nos actualités</h1>
            <div className="flex flex-col sm:flex-row justify-between w-full">
                <div className="sm:hidden">
                    <ManyComboBox selectedKeys={value} addRemoveKey={addRemoveValue} items={vocab} />
                </div>
                <div className="flex flex-col justify-center md:flex-row overflow-clip space-x-2">
                    {value.map((keyword, i) => (
                        <div key={i} className="flex items-center bg-muted px-2 m-2 space-x-2 rounded-full w-fit">
                            <span>{vocab[keyword as keyof typeof vocab]}</span>
                            <Button variant="ghost" onClick={() => addRemoveValue(keyword)} className="hover:bg-transparent p-0 m-0">
                                <X className="h-4 w-4 p-0 m-0" />
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:block">
                    <ManyComboBox selectedKeys={value} addRemoveKey={addRemoveValue} items={vocab} />
                </div>
            </div>
            {loading ? (
                <p>Loading</p>
            ) : dbBlogs.length == 0 ? (
                <p>No blogs found.</p>
            ) : (
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                    {dbBlogs
                        .filter(post => allLabelsInValue(post.labels, value))
                        .map((post, i) => (
                            <div key={i} className="h-full">
                                <div className="w-[300px] shadow-lg bg-gradient-to-tl from-primary to-destructive p-[1px] rounded-[10px]">
                                    <Card className="rounded-[9px] border-0 h-full">
                                        <CardHeader>
                                            <CardTitle>{post.title}</CardTitle>
                                            <CardDescription>
                                                <div>
                                                    <p className="italic text-gray text-sm">
                                                        {t.date.posted_by +
                                                            " " +
                                                            displayAuthors(post.authors) +
                                                            " " +
                                                            t.date.on +
                                                            " " +
                                                            post.date.toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <div className="flex space-x-2 pt-2">
                                                    {post.labels.map((label, i) => (
                                                        <p key={i} className="bg-gray-300 rounded-full p-1 px-2 text-black">
                                                            {label}
                                                        </p>
                                                    ))}
                                                </div>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p>{post.content}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}
