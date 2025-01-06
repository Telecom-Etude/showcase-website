import { createBlog } from "@/db/blogs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { authorEmail, title, locale } = await request.json();
        const blogId = await createBlog(authorEmail, title, locale);
        return NextResponse.json({ blogId });
    } catch (error) {
        console.error("[API Error] Failed to create blog:", error);
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}
