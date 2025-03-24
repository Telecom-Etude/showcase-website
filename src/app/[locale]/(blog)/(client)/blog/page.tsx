import { getValidatedBlogs } from "@/db/blogs";
import { getLocaleLabels } from "@/db/labels";
import { LocaleParams, LOCALES } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";
import { nav } from "@/locales/routing";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import BlogPage from "./client";
import { OrangeTitle } from "@/components/styles/texts";

export var metadata: Metadata = {
    title: "Blog",
};

export const dynamicParams = false;

export async function generateStaticParams() {
    return LOCALES.map(locale => ({
        locale,
    }));
}

export default async function Page({ params: { locale } }: LocaleParams) {
    const posts = await getValidatedBlogs(locale);
    const labels = await getLocaleLabels(locale);
    const t = getDictionary(locale).pages.blog;
    metadata.title = t.tabTitle;

    if (typeof labels === "undefined" || typeof posts === "undefined") {
        redirect(nav(locale, "/error/404"));
    }

    return (
        <div className="flex flex-col items-center p-10 space-y-10">
            <OrangeTitle title={t.title} />
            <BlogPage dbLabels={labels.map(({ name }) => name)} locale={locale} posts={posts} t_none={t.none} />
        </div>
    );
}
