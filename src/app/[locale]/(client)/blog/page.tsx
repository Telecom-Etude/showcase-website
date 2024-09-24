import { LocaleParams } from "@/locales/config";
import BlogPage, { PostPresentation } from "./client";
import { auth } from "@/auth/auth";
import { getValidatedBlogsFromLocale } from "@/db/blogs";

export default async function Page({ params: { locale } }: LocaleParams) {
    const posts: PostPresentation[] = await getValidatedBlogsFromLocale(locale);
    const session = await auth();

    return <BlogPage locale={locale} isEditor={session?.user?.rights?.blogAuthor || false} email={session?.user?.email || undefined} posts={posts} />;
}
