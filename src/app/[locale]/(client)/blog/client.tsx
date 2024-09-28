"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";

import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { nav } from "@/locales/routing";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, VariantLink } from "@/components/ui/button";
import { ComboLabels, ManyComboBox, ManyComboBoxProps } from "@/components/meta-components/combobox";
import { displayAuthors } from "@/lib/users";
import { BtnLink } from "@/components/telecom-etude/contact";
import Link from "next/link";

export interface PostPresentation {
    id: number;
    title: string;
    content: string;
    emails: string[];
    authors: string[];
    date: Date;
    labels: ComboLabels;
}

const allLabelsInValue = (postLabels: number[], selectedLabels: number[]) =>
    selectedLabels.filter(label => postLabels.includes(label)).length === selectedLabels.length;

const LabelSelection = (props: ManyComboBoxProps & { dbLabels: ComboLabels }) => {
    const LabelSelector = () => <ManyComboBox {...props} />;

    return (
        <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="sm:hidden">
                <LabelSelector />
            </div>
            <div className="flex flex-col justify-center md:flex-row overflow-clip space-x-2">
                {props.selectedKeys.map((id, i) => (
                    <div key={i} className="flex items-center bg-muted px-2 m-2 space-x-2 rounded-full w-fit">
                        <span>{props.dbLabels[id]}</span>
                        <Button variant="ghost" onClick={() => props.addRemoveKey(id)} className="hover:bg-transparent p-0 m-0">
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
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
                <div key={i} className="h-full">
                    <div className="w-[300px] shadow-lg bg-gradient-to-tl from-primary to-destructive p-[1px] rounded-[10px]">
                        <Card className="rounded-[9px] border-0 h-full">
                            <CardHeader>
                                <CardTitle className="flex justify-between">
                                    <Link className="hover:underline" href={nav(locale, `/blog/${post.id}`)}>
                                        {post.title}
                                    </Link>
                                    {isEditor && email && post.emails.includes(email) ? (
                                        <VariantLink variant="ghost" href={nav(locale, `/edit-blog/${post.id}`)}>
                                            <FaPencil className="w-4 h-4" />
                                        </VariantLink>
                                    ) : null}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <p className="italic text-gray text-sm">{displayAuthors(locale, post)}</p>
                                </div>
                                <div className="flex space-x-2 pt-2">
                                    {Object.values(post.labels).map((label, i) => (
                                        <p key={i} className="bg-gray-300 rounded-full p-1 px-2 text-black">
                                            {label}
                                        </p>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    );

export default function BlogPage({
    posts,
    dbLabels,
    locale,
    ...props
}: {
    locale: Locale;
    t_none: string;
    isEditor: boolean;
    email?: string;
    posts: PostPresentation[];
    dbLabels: ComboLabels;
}) {
    const t = getDictionary(locale).pages.blog;

    const [selectedLabels, setValue] = useState<number[]>([]);
    const addRemoveValue = (labelId: keyof typeof dbLabels) => {
        if (selectedLabels.includes(labelId)) {
            setValue(selectedLabels.filter(key => key !== labelId));
        } else if (selectedLabels.length < 3) {
            setValue([...selectedLabels, labelId]);
        }
    };

    return (
        <>
            <LabelSelection
                dbLabels={dbLabels}
                limit={3}
                selectedKeys={selectedLabels}
                addRemoveKey={addRemoveValue}
                items={dbLabels}
                vocab={t.labelSelector}
            />
            <BlogsList
                locale={locale}
                posts={posts.filter(post =>
                    allLabelsInValue(
                        Object.keys(post.labels).map(id => Number(id)),
                        selectedLabels
                    )
                )}
                {...props}
            />
        </>
    );
}
