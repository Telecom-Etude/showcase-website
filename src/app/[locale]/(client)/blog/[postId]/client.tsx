"use client";

import { displayAuthors } from "@/lib/users";
import { Locale } from "@/locales/config";
import { PostPresentation } from "../client";
import { RenderQuill } from "@/components/quill/render";

export default function ClientBlog({ localePost, locale }: { locale: Locale; localePost: PostPresentation }) {
    return (
        <>
            <header className="pb-6">
                <h1>{localePost.title}</h1>
                <p className="italic">{displayAuthors(locale, localePost)}</p>
            </header>
            <RenderQuill content={JSON.parse(localePost.content)} />
        </>
    );
}
