"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";

import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { nav } from "@/locales/routing";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, VariantLink } from "@/components/ui/button";
import { ManyComboBox, ManyComboBoxProps } from "@/components/meta-components/combobox";
import { displayAuthors } from "@/lib/users";
import { BtnLink } from "@/components/telecom-etude/contact";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Block } from "@/components/styles/blocks";

export interface PostPresentation {
    id: number;
    title: string;
    content: string;
    emails: string[];
    authors: string[];
    date: Date;
    labels: string[];
    slug: string;
}

const allLabelsInValue = (postLabels: string[], selectedLabels: string[]) =>
    selectedLabels.filter(label => postLabels.includes(label)).length === selectedLabels.length;

const LabelSelection = (props: ManyComboBoxProps) => {
    const LabelSelector = () => <ManyComboBox {...props} />;

    return (
        <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="sm:hidden">
                <LabelSelector />
            </div>
            <div className="flex flex-col justify-center md:flex-row overflow-clip space-x-2">
                {props.selected.map((name, i) => (
                    <div key={i} className="flex items-center bg-muted px-2 m-2 space-x-2 rounded-full w-fit">
                        <span>{name}</span>
                        <Button variant="ghost" onClick={() => props.addRemove(name)} className="hover:bg-transparent p-0 m-0">
                            <X className="h-4 w-4 p-0 m-0" />
                        </Button>
                    </div>
                ))}
            </div>
            <div className="hidden sm:block">
                <LabelSelector />
            </div>
        </div>
    );
};

const BlogsList = ({
    posts,
    locale,
    email,
    isEditor,
    t_none
}: {
    t_none: string;
    posts: PostPresentation[];
    locale: Locale;
    isEditor: boolean;
    email?: string;
}) =>
    posts.length == 0 ? (
        <p>{t_none}</p>
    ) : (
        <div className="flex flex-col items-start space-y-10 w-full">
            {posts.map((post, i) => (
                <div key={i} className="w-full">
                    <div className="flex items-center space-x-4">
                        <h3>
                            <Link className="hover:underline" href={nav(locale, "/blog/" + post.slug)}>
                                {post.title}
                            </Link>
                        </h3>
                        {isEditor && email && post.emails.includes(email) ? (
                            <VariantLink variant="ghost" href={nav(locale, `/edit-blog/${post.id}`)}>
                                <FaPencil className="w-4 h-4" />
                            </VariantLink>
                        ) : null}
                    </div>
                    <p className="italic text-gray text-sm">{displayAuthors(locale, post)}</p>
                    <div className="flex space-x-2 pt-2">
                        {Object.values(post.labels).map((label, i) => (
                            <p key={i} className="bg-muted rounded-full p-1 px-2">
                                {label}
                            </p>
                        ))}
                    </div>
                    <Separator className="bg-primary mt-10 w-full" />
                </div>
            ))}
        </div>
    );

export default function BlogPage({
    posts,
    locale,
    dbLabels,
    ...props
}: {
    locale: Locale;
    dbLabels: string[];
    t_none: string;
    isEditor: boolean;
    email?: string;
    posts: PostPresentation[];
}) {
    const t = getDictionary(locale).pages.blog;

    const [selectedLabels, setValue] = useState<string[]>([]);
    const addRemoveValue = (label: string) => {
        if (selectedLabels.includes(label)) {
            setValue(selectedLabels.filter(l => l !== label));
        } else if (selectedLabels.length < 3) {
            setValue([...selectedLabels, label]);
        }
    };

    return (
        <>
            <LabelSelection limit={3} selected={selectedLabels} addRemove={addRemoveValue} items={dbLabels} vocab={t.labelSelector} />
            <Block>
                <BlogsList locale={locale} posts={posts.filter(post => allLabelsInValue(post.labels, selectedLabels))} {...props} />
            </Block>
        </>
    );
}
