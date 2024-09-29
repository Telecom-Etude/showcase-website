import { auth } from "@/auth/auth";
import { QuillEditor } from "./quill-editor";
import { Block } from "@/components/styles/blocks";
import { getLocaleLabels } from "@/db/labels";
import { LocalePostParams } from "@/locales/config";
import { redirect } from "next/navigation";
import { getBlog } from "@/db/blogs";
import { UnValidate } from "./unvalidate";

export default async function EditBlog({ params: { postId, locale } }: LocalePostParams) {
    const id = parseInt(postId);
    const blog = await getBlog(id);
    const email = (await auth())?.user.email;
    if (!email) {
        redirect("/error/401");
    }
    if (Number.isNaN(id) || !blog) {
        redirect("/error/404");
    }
    if (!blog.authors.map(a => a.email).includes(email)) {
        redirect("/error/403");
    }
    const localeLabels = await getLocaleLabels(locale);
    const labels = (localeLabels || []).map(({ name }) => name);
    return (
        <Block className="w-full">
            <h1>{blog.title}</h1>
            {blog.validated && <UnValidate locale={locale} id={id} />}
            <QuillEditor id={id} content={JSON.parse(blog.content)} title={blog.title} dbLabels={labels} />
        </Block>
    );
}
