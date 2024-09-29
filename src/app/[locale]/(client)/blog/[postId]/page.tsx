import { LocaleParams, LocalePostParams } from "@/locales/config";
import ClientBlog from "./client";
import { redirect } from "next/navigation";
import { Block } from "@/components/styles/blocks";
import { getValidatedBlogs } from "@/db/blogs";
import { nav } from "@/locales/routing";

export default async function BlogPage({ params: { locale, postId } }: LocalePostParams) {
    const id = parseInt(postId);
    const posts = await getValidatedBlogs(locale);
    if (!posts) {
        redirect(nav(locale, "/error/404"));
    }
    const localePost = posts.find(blog => blog.id === id);
    if (!localePost) {
        redirect(nav(locale, "/error/404"));
    } else {
        return (
            <Block>
                <ClientBlog locale={locale} localePost={localePost} />
            </Block>
        );
    }
}
