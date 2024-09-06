import { DataTable } from "@/components/meta-components/table/data-table";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { db } from "@/lib/db";
import { columns } from "./columns";
import { ValidationBlogType } from "./schema";
import { ValidationPanel } from "./validation-panel";

type X = {
    id: number;
    validated: boolean;
    authorIds: number[]
    localePosts: {
        id: number;
        locale: string;
        blogId: number;
    }[];
}

export default async function Validation() {
    const posts: ValidationBlogType[] = (await db.post.findMany({
        include: {
            localePosts: true,
            authors: true,
        }
    })).map(({ id, validated, authors, localePosts }) => ({
        id, validated, authorIds: authors.map(({ id }) => id),
        localePosts: localePosts.map(({ id, locale, blogId }) => ({ id, locale, blogId }))

    }));
    return (
        <div>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <div className="p-10">
                        <DataTable search_column="title" data={posts} columns={columns} filters={[]} />
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div className="p-10">
                        <ValidationPanel blogs={posts} />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
