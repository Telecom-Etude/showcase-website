import { auth } from "@/auth/auth";
import { QuillEditor } from "./quill-editor";
import { Block } from "@/components/styles/blocks";
import { getLocaleLabels } from "@/db/labels";
import { Locale, LocalePostParams } from "@/locales/config";
import { redirect } from "next/navigation";
import { getBlog } from "@/db/blogs";
import { UnValidate } from "./unvalidate";
import { nav } from "@/locales/routing";

export default async function EditBlog({ params: { postId, locale } }: LocalePostParams) {
    const id = parseInt(postId);
    const blog = await getBlog(id);
    const email = (await auth())?.user.email;
    if (!email) {
        redirect(nav(locale, "/error/401"));
    }
    if (Number.isNaN(id) || !blog) {
        redirect(nav(locale, "/error/404"));
    }
    if (!blog.authors.map(a => a.email).includes(email)) {
        redirect(nav(locale, "/error/403"));
    }
    const blogLocale: Locale = blog.locale as Locale;
    const localeLabels = await getLocaleLabels(blogLocale);
    const labels = (localeLabels || []).map(({ name }) => name);
    return (
        <Block className="w-full">
            <h1>{blog.title}</h1>
            {blog.validated && <UnValidate locale={locale} id={id} />}
            <QuillEditor
                locale={locale}
                id={id}
                content={JSON.parse(blog.content)}
                title={blog.title}
                dbLabels={labels}
                blogLabels={blog.labels.map(label => label.name)}
            />
        </Block>
    );
}
