import { QuillEditor } from "./quill-editor";
import { getLocaleBlogContent, getLocaleBlog, getLocaleIdsFromBlog } from "@/db/blogs";
import { Block } from "@/components/styles/blocks";
import { Locale } from "@/locales/config";
import { redirect } from "next/navigation";

export default async function EditBlog({ params: { postId, locale } }: { params: { postId: string; locale: Locale } }) {
    const localeBlog = await getLocaleBlog(parseInt(postId), locale);
    if (!localeBlog) {
        redirect("/error/404");
    }
    const content = await getLocaleBlogContent(localeBlog.id);
    if (!content) {
        redirect("/error/404");
    }
    const title = localeBlog.title;
    const blogId = await getLocaleIdsFromBlog(localeBlog.blogId);
    return (
        <Block className="w-full">
            <h1>{title}</h1> h2
            <QuillEditor localeBlogId={localeBlog.id} content={content} title={title} blogId={localeBlog.blogId} />
        </Block>
    );
}
