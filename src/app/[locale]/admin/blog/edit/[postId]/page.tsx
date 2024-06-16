import { Op } from "quill/core";
import { QuillEditor } from "./quill-editor";
import { getLocaleBlogContent, getLocaleBlog } from "@/db/blogs";
import { H1 } from "@/components/styles/titles";
import { Block } from "@/components/styles/blocks";

export default async function EditBlog({ params: { postId } }: { params: { postId: string } }) {
    const blogId = parseInt(postId);
    const localeBlog = await getLocaleBlog(blogId, "fr");
    const content = await getLocaleBlogContent(localeBlog.id);
    const title = localeBlog.title;
    return (
        <Block className="w-full">
            <H1>{title}</H1>
            <QuillEditor localeBlogId={localeBlog.id} content={content} title={title} />
        </Block>
    );
}
