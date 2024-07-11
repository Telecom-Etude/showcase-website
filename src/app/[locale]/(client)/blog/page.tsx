"use client";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ManyComboBox } from "@/components/meta-components/combobox";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AppearOnScroll } from "@/components/animations/scroll";

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
    se: "Systèmes embarqués",
    web: "Web",
    mobile: "Mobile",
    cloud: "Cloud",
    devops: "DevOps",
    dev: "Développement",
    iot: "Internet des objets",
    blockchain: "Blockchain",
    crypto: "Cryptomonnaie",
    startup: "Startup"
} as const;

interface PostPresentation {
    title: string;
    description: string;
    authorFirstName: string;
    authorLastName: string;
    date: Date;
    labels: (keyof typeof vocab)[];
}

const posts: PostPresentation[] = [
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["events"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["missions"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["data", "blockchain"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["cyber"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["ia"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["chatbot"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["cyber", "se"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["web"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["mobile"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["cloud", "devops"]
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021"),
        labels: ["dev"]
    }
];

const allLabelsInValue = (postLabels: string[], selectedLabels: string[]) =>
    selectedLabels.filter(label => postLabels.includes(label)).length === selectedLabels.length;

export default function Blog({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages;
    const [value, setValue] = useState<string[]>([]);
    const addRemoveValue = (v: string) => {
        if (value.includes(v)) {
            setValue(value.filter(val => val !== v));
        } else if (value.length < 4) {
            setValue([...value, v]);
        }
    };
    return (
        <div className="flex flex-col items-center p-10 space-y-10">
            <h1 className="text-4xl">Nos actualités</h1>
            <div className="flex flex-col sm:flex-row justify-between w-full">
                <div className="sm:hidden">
                    <ManyComboBox selectedKeys={value} addRemoveKey={addRemoveValue} items={vocab} />
                </div>
                <div className="flex flex-col sm:flex-row overflow-clip space-x-2">
                    {value.map((keyword, i) => (
                        <div key={i} className="flex items-center bg-muted px-2 m-2 space-x-2 rounded-full w-fit">
                            <span>{vocab[keyword as keyof typeof vocab]}</span>
                            <Button variant="ghost" className="hover:bg-transparent p-0 m-0" onClick={() => addRemoveValue(keyword)}>
                                <X className="h-4 w-4 p-0 m-0" />
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:block">
                    <ManyComboBox selectedKeys={value} addRemoveKey={addRemoveValue} items={vocab} />
                </div>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                {posts
                    .filter(post => allLabelsInValue(post.labels, value))
                    .map((post, i) => (
                        <AppearOnScroll key={i} className="h-full">
                            <div className="w-[300px] shadow-lg bg-gradient-to-tl from-primary to-destructive p-[1px] rounded-[10px]">
                                <Card className="rounded-[9px] border-0 h-full">
                                    <CardHeader>
                                        <CardTitle>{post.title}</CardTitle>
                                        <CardDescription>
                                            {/* {post.labels.map((label, i) => (
                                                <p key={i}>{vocab[label]}</p>
                                            ))} */}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{post.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>
                                            Posté par {post.authorFirstName} {post.authorLastName} le {post.date.toLocaleDateString()}
                                        </p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </AppearOnScroll>
                    ))}
            </div>
        </div>
    );
}
