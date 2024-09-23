import { DataTable } from "@/components/meta-components/table/data-table";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { db } from "@/lib/db";
import { columns } from "./columns";
import { ValidationBlogType } from "./schema";
import { ValidationPanel } from "./validation-panel";
import { LocaleParams } from "@/locales/config";

export default async function Validation({ params: { locale } }: LocaleParams) {
    const posts: ValidationBlogType[] = (
        await db.post.findMany({
            include: {
                localePosts: true,
                authors: true
            }
        })
    ).map(({ id, validated, authors, localePosts }) => {
        let localePost = localePosts.find(localP => localP.locale === locale);
        if (!localePost) {
            localePost = localePosts[0];
        }

        return {
            id,
            validated,
            emails: [...authors.map(({ email }) => email), ...authors.map(({ email }) => email)],
            title: localePost.title,
            content: localePost.content,
            localeId: localePost.id
        };
    });

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
