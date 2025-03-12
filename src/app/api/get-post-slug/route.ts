/* C'est l'api utilisée par component/navigation/navbar/links/locale-switcher.tsx
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) return NextResponse.json({ error: "Missing post slug" }, { status: 400 });

    try {
        const post = await db.post.findUnique({
            where: { slug },
            select: { slugtr: true },
        });
        if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
        return NextResponse.json(slug);
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
*/
