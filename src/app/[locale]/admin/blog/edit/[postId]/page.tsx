import { Op } from "quill/core";
import { QuillEditor } from "./quill-editor";
import { getLocaleBlogContent, getLocaleBlog } from "@/db/blogs";
import { H1 } from "@/components/styles/titles";

export default async function EditBlog({ params: { postId } }: { params: { postId: string } }) {
    const blogId = parseInt(postId);
    const localeBlog = await getLocaleBlog(blogId, "fr");
    const realContent = await getLocaleBlogContent(localeBlog.id);
    return (
        <div>
            <H1>{localeBlog.title}</H1>
            <p>{JSON.stringify(realContent)}</p>
            <QuillEditor localeBlogId={localeBlog.id} content={realContent} />;
        </div>
    );
}
