import { DataTable } from "@/components/meta-components/table/data-table";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { columns } from "./select/columns";
import { ValidationBlogType } from "./select/schema";
import { LocaleParams } from "@/locales/config";
import { ReactNode } from "react";
import { getAllBlog } from "@/db/blogs";
import { auth } from "@/auth/auth";

interface PageProps extends LocaleParams {
    children: ReactNode;
    validate: ReactNode;
}

export default async function Validation({ params: { locale }, validate }: PageProps) {
    const posts = await getAllBlog();
    const allData: ValidationBlogType[] = posts.map(({ id, validated, authors, locale, title, content, createdAt, updatedAt }) => ({
        id,
        validated,
        emails: authors.map(author => author.email),
        locale,
        title,
        content,
        createdAt,
        updatedAt,
    }));
    const session = (await auth())?.user;
    const isAdmin = session?.rights?.blogAdmin;

    return (
        <div className="flex flex-1">
            <div className="w-full">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={100}>
                        <div className="p-10 h-full">
                            <DataTable
                                search_column="title"
                                data={isAdmin ? allData : allData.filter(post => post.emails.includes(session?.email!))}
                                columns={columns}
                                filters={[]}
                            />
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={100}>
                        <div className="p-10 h-full">{validate}</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
