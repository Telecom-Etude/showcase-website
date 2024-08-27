import { DataTable } from "@/components/meta-components/table/data-table";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { db } from "@/lib/db";
import { columns } from "./columns";
import { ValidationBlogType } from "./schema";
import { ClassNameValue } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ValidationPanel } from "./validation-panel";

export default async function Validation() {
    const blogs: ValidationBlogType[] = await db.blog.findMany({
        where: {
            validated: false
        },
        include: {
            localeBlogs: true
        }
    });
    return (
        <div>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <div className="p-10">
                        <DataTable search_column="title" data={blogs} columns={columns} filters={[]} />
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div className="p-10">
                        <ValidationPanel blogs={blogs} />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
