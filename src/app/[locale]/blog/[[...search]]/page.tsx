"use client";

import { ChevronsUpDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

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
};

interface PostPresentation {
    title: string;
    description: string;
    authorFirstName: string;
    authorLastName: string;
    date: Date;
}

const posts: PostPresentation[] = [
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    },
    {
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
        authorFirstName: "Bob",
        authorLastName: "Bob",
        date: new Date("12/12/2021")
    }
];

const Combobox = ({ value, addRemoveValue }: { value: string[]; addRemoveValue: (v: string) => void }) => {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open}>
                    Filtrer avec des mots clefs...
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="  p-0">
                <Command>
                    <CommandInput placeholder="Filtrer avec des mots clefs..." />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {keywords.map((word, i) => (
                                <CommandItem
                                    key={i}
                                    value={word}
                                    onSelect={val => addRemoveValue(val)}
                                    className={value.length == 6 && !value.includes(word) ? "cursor-not-allowed" : "cursor-pointer"}
                                >
                                    <Checkbox
                                        className={cn("mr-2 h-4 w-4", value.includes(word) ? "opacity-100" : "opacity-0")}
                                        checked={value.includes(word)}
                                    />
                                    {vocab[word as keyof typeof vocab]}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default function Blog() {
    const [value, setValue] = useState<string[]>([]);
    const addRemoveValue = (v: string) => {
        if (value.includes(v)) {
            setValue(value.filter(val => val !== v));
        } else if (value.length < 6) {
            setValue([...value, v]);
        }
    };
    return (
        <div className="flex flex-col items-center p-10 space-y-10">
            <h1 className="text-4xl">Nos actualités</h1>
            <div className="flex justify-between w-full">
                <div className="flex overflow-clip space-x-2">
                    {value.map((keyword, i) => (
                        <div key={i} className="flex items-center bg-muted px-2 space-x-2 rounded-full">
                            <span>{vocab[keyword as keyof typeof vocab]}</span>
                            <Button variant="ghost" className="hover:bg-transparent p-0 m-0" onClick={() => addRemoveValue(keyword)}>
                                <X className="h-4 w-4 p-0 m-0" />
                            </Button>
                        </div>
                    ))}
                </div>
                <Combobox value={value} addRemoveValue={addRemoveValue} />
            </div>
            <div className="grid xl:grid-cols-3">
                {posts.map((post, i) => (
                    <div className="w-[300px] h-[300px] bg-blue-100 flex flex-col space-y-8  p-4 m-10" key={i}>
                        <h2 className="text-2xl">{post.title}</h2>
                        <p className=" overflow-clip">{post.description}</p>
                        <p>
                            Posté par {post.authorFirstName} {post.authorLastName} le {post.date.toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
