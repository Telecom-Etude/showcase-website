import { LocaleParams } from "@/locales/config";
import BlogPage from "./client";
import { auth } from "@/auth/auth";
import { getLocaleLabels } from "@/db/labels";
import { getDictionary } from "@/locales/dictionaries";
import { redirect } from "next/navigation";
import { getValidatedBlogs } from "@/db/blogs";
import { nav } from "@/locales/routing";

export default async function Page({ params: { locale } }: LocaleParams) {
    const posts = await getValidatedBlogs(locale);
    const session = await auth();
    const labels = await getLocaleLabels(locale);
    const t = getDictionary(locale).pages.blog;

    if (typeof labels === "undefined" || typeof posts === "undefined") {
        redirect(nav(locale, "/error/404"));
    }

    return (
        <div className="flex flex-col items-center p-10 space-y-10">
            <h1>{t.title}</h1>
            <BlogPage
                dbLabels={labels.map(({ name }) => name)}
                locale={locale}
                isEditor={session?.user?.rights?.blogAuthor || false}
                email={session?.user?.email || undefined}
                posts={posts}
                t_none={t.none}
            />
        </div>
    );
}
