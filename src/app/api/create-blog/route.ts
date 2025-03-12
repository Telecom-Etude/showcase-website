import { auth } from "@/auth/auth";
import { createBlog } from "@/db/blogs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { authorEmail, title, locale } = await request.json();
        const session = await auth();
        if (session?.user.email !== authorEmail) throw new Error("Email mismatch: Not allowed");
        const blogId = await createBlog(authorEmail, title, locale, title + "_not_defined");
        const blogIdTr = await createBlog(authorEmail, title + "_not_defined", locale === "fr" ? "en" : "fr", title);
        return NextResponse.json({ blogId });
    } catch (error) {
        console.error("[API Error] Failed to create blog:", error);
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}
