import { getLocaleBlog, getValidatedBlogsFromLocale } from "@/db/blogs";
import { LocaleParams } from "@/locales/config";
import ClientBlog from "./client";
import { redirect } from "next/navigation";
import { Block } from "@/components/styles/blocks";

export default async function BlogPage({ params: { locale, localeId } }: LocaleParams & { params: { localeId: string } }) {
    const blogId = parseInt(localeId);
    const localePost = (await getValidatedBlogsFromLocale(locale)).find(blog => blog.localeId === blogId);
    if (!localePost) {
        redirect("/error/404");
    } else {
        return (
            <Block>
                <ClientBlog locale={locale} localePost={localePost} />
            </Block>
        );
    }
}
