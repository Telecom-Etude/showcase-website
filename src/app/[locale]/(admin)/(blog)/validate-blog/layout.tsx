import { DataTable } from "@/components/meta-components/table/data-table";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { db } from "@/lib/db";
import { columns } from "./select/columns";
import { ValidationBlogType } from "./select/schema";
import { LocaleParams } from "@/locales/config";
import { ReactNode } from "react";

interface PageProps extends LocaleParams {
    children: ReactNode;
    validate: ReactNode;
}

export default async function Validation({ params: { locale }, validate }: PageProps) {
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
        <div className="flex flex-1">
            <div className="w-full">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel>
                        <div className="p-10 h-full">
                            <DataTable search_column="title" data={posts} columns={columns} filters={[]} />
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel>
                        <div className="p-10 h-full">{validate}</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
