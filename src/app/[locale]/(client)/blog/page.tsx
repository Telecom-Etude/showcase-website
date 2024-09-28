import { LocaleParams } from "@/locales/config";
import BlogPage from "./client";
import { auth } from "@/auth/auth";
import { getValidatedBlogsFromLocale } from "@/db/blogs";
import { getLocaleLabels } from "@/db/labels";
import { ComboLabels } from "@/components/meta-components/combobox";
import { getDictionary } from "@/locales/dictionaries";
import { redirect } from "next/navigation";

export default async function Page({ params: { locale } }: LocaleParams) {
    const posts = await getValidatedBlogsFromLocale(locale);
    const session = await auth();
    const labels = await getLocaleLabels(locale);
    const t = getDictionary(locale).pages.blog;

    if (!labels || !posts) {
        redirect("/error/404");
    }

    return (
        <div className="flex flex-col items-center p-10 space-y-10">
            <h1>{t.title}</h1>
            <BlogPage
                dbLabels={labels.reduce((acc: ComboLabels, { id, name }) => {
                    acc[id] = name;
                    return acc;
                }, {})}
                locale={locale}
                isEditor={session?.user?.rights?.blogAuthor || false}
                email={session?.user?.email || undefined}
                posts={posts}
                t_none={t.none}
            />
        </div>
    );
}
