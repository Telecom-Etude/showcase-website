import { QuillEditor } from "./quill-editor";
import { getLocaleBlogContent, getLocaleBlog, getLocaleIdsFromBlog } from "@/db/blogs";
import { H1 } from "@/components/styles/titles";
import { Block } from "@/components/styles/blocks";
import { Locale } from "@/locales/config";
import { db } from "@/lib/db";

export default async function EditBlog({ params: { postId, locale } }: { params: { postId: string, locale: Locale } }) {
    const localeBlog = await getLocaleBlog(parseInt(postId), locale);
    const content = await getLocaleBlogContent(localeBlog.id);
    const title = localeBlog.title;
    const blogId = await getLocaleIdsFromBlog(localeBlog.blogId);
    return (
        <Block className="w-full">
            <H1>{title}</H1>
            <QuillEditor localeBlogId={localeBlog.id} content={content} title={title} blogId={localeBlog.blogId} />
        </Block>
    );
}
