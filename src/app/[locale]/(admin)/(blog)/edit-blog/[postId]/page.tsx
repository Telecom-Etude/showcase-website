import { QuillEditor } from "./quill-editor";
import { Block } from "@/components/styles/blocks";
import { getBlog, getBlogContent } from "@/db/blogs";
import { Locale, LocalePostParams } from "@/locales/config";
import { redirect } from "next/navigation";

export default async function EditBlog({ params: { postId, locale } }: LocalePostParams) {
    const id = parseInt(postId);
    const blog = await getBlog(id);
    if (Number.isNaN(id) || !blog) {
        redirect("/error/404");
    }
    return (
        <Block className="w-full">
            <h1>{blog.title}</h1> h2
            <QuillEditor id={id} content={JSON.parse(blog.content)} title={blog.title} />
        </Block>
    );
}
