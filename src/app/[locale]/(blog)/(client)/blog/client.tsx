"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";

import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { nav } from "@/locales/routing";

import { Button } from "@/components/ui/button";
import { MultipleSelector } from "@/components/ui/multiple-selector"; // Ensure this path is correct
import { displayAuthors } from "@/lib/users";
import { Separator } from "@/components/ui/separator";
import { Block } from "@/components/styles/blocks";
import { useRouter } from "next/navigation";

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

function LabelSelection({
    selected,
    addRemove,
    items,
    vocab,
    limit,
}: {
    selected: string[];
    addRemove: (v: string) => void;
    items: string[];
    vocab: any;
    limit: number;
}) {
    const addRemoveValue = (options: { value: string; label: string }[]) => {
        const selectedValues = options.map(option => option.value); // Extract the `value` from each `Option`
        selectedValues.forEach(value => addRemove(value)); // Update the state with each selected value
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between w-full">
            {/* Mobile View */}
            <div className="sm:hidden">
                <MultipleSelector
                    defaultOptions={selected.map(value => ({ value, label: value }))} // Convert `selected` to `Option[]`
                    placeholder={vocab.title}
                    emptyIndicator={vocab.empty} // Removed as it is not a valid prop
                    value={selected.map(value => ({ value, label: value }))} // Convert `selected` to `Option[]`
                    onChange={addRemoveValue} // Use the updated function
                    options={items.map(value => ({ value, label: value }))} // Convert `items` to `Option[]`
                    // limit={limit} // Removed as it is not a valid prop
                    maxSelected={items.length}
                    hidePlaceholderWhenSelected
                />
            </div>

            {/* Selected Labels Display */}
            <div className="flex flex-col justify-center md:flex-row overflow-clip space-x-2">
                {selected.map((name, i) => (
                    <div key={i} className="flex items-center bg-muted px-2 m-2 space-x-2 rounded-full w-fit">
                        <span>{name}</span>
                        <Button variant="ghost" onClick={() => addRemove(name)} className="hover:bg-transparent p-0 m-0">
                            <X className="h-4 w-4 p-0 m-0" />
                        </Button>
                    </div>
                ))}
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block">
                <MultipleSelector
                    defaultOptions={selected.map(value => ({ value, label: value }))} // Convert `selected` to `Option[]`
                    placeholder={vocab.title}
                    emptyIndicator={vocab.empty} // Removed as it is not a valid prop
                    value={selected.map(value => ({ value, label: value }))} // Convert `selected` to `Option[]`
                    onChange={addRemoveValue} // Use the updated function
                    options={items.map(value => ({ value, label: value }))} // Convert `items` to `Option[]`
                    // limit={limit}
                    maxSelected={items.length}
                    hidePlaceholderWhenSelected
                />
            </div>
        </div>
    );
}

function BlogsList({ posts, locale, t_none }: { t_none: string; posts: PostPresentation[]; locale: Locale }) {
    const router = useRouter();
    const displayedPosts = posts.map(post => ({ displayedAuthors: displayAuthors(locale, post), ...post }));
    return posts.length === 0 ? (
        <p>{t_none}</p>
    ) : (
        <div className="flex flex-col items-start space-y-10 w-full">
            {displayedPosts.map((post, i) => (
                <div
                    key={i}
                    className="w-full cursor-pointer"
                    onClick={() => {
                        router.push(nav(locale, "/blog/" + post.slug));
                    }}
                >
                    <div className="flex items-center space-x-4">
                        <h3>{post.title}</h3>
                    </div>
                    <p className="italic text-gray text-sm">{post.displayedAuthors}</p>
                    <p>{post.authors}</p>
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
}

export default function BlogPage({ posts, locale, dbLabels, ...props }: { locale: Locale; dbLabels: string[]; t_none: string; posts: PostPresentation[] }) {
    const t = getDictionary(locale).pages.blog;

    const [selectedLabels, setValue] = useState<string[]>([]);
    const addRemoveValue = (label: string) => {
        if (selectedLabels.includes(label)) {
            setValue(selectedLabels.filter(l => l !== label));
        } /*else if (selectedLabels.length < 3) {
            setValue([...selectedLabels, label]);
        }*/
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
