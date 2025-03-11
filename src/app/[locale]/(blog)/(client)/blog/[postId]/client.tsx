"use client";

import { displayAuthors } from "@/lib/users";
import { Locale } from "@/locales/config";
import { PostPresentation } from "../client";
import { RenderQuill } from "@/components/quill/render";

export default function ClientBlog({ localePost, locale }: { locale: Locale; localePost: PostPresentation }) {
    return (
        <>
            <header className="pb-6">
                <h1>{locale === "fr" ? localePost.titlefr : localePost.titleen}</h1>
                <p className="italic">{displayAuthors(locale, localePost)}</p>
            </header>
            <div className="custom-quill-styles">
                <RenderQuill content={JSON.parse(locale === "fr" ? localePost.contentFR : localePost.contentEN)} />
            </div>
        </>
    );
}
