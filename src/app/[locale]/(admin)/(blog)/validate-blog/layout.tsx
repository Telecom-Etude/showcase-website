import { DataTable } from "@/components/meta-components/table/data-table";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { db } from "@/lib/db";
import { columns } from "./select/columns";
import { ValidationBlogType } from "./select/schema";
import { LocaleParams } from "@/locales/config";
import { ReactNode } from "react";
import { getAllBlog } from "@/db/blogs";

interface PageProps extends LocaleParams {
    children: ReactNode;
    validate: ReactNode;
}

export default async function Validation({ params: { locale }, validate }: PageProps) {
    const posts = await getAllBlog();
    const data: ValidationBlogType[] = posts
        .filter(post => !post.validated)
        .map(({ id, validated, authors, title, content }) => ({
            id,
            validated,
            emails: authors.map(author => author.email),
            title,
            content
        }));

    return (
        <div className="flex flex-1">
            <div className="w-full">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel>
                        <div className="p-10 h-full">
                            <DataTable search_column="title" data={data} columns={columns} filters={[]} />
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
