import { getValidatedBlogsFromLocale } from "@/db/blogs";
import { LocaleParams } from "@/locales/config";
import ClientBlog from "./client";
import { redirect } from "next/navigation";
import { Block } from "@/components/styles/blocks";

export default async function BlogPage({ params: { locale, localeId } }: LocaleParams & { params: { localeId: string } }) {
    const blogId = parseInt(localeId);
    const localePosts = await getValidatedBlogsFromLocale(locale);
    if (!localePosts) {
        redirect("/error/404");
    }
    const localePost = localePosts.find(blog => blog.localeId === blogId);
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
