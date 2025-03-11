import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    if (!slug) return res.status(400).json({ error: "Missing post slug" });

    try {
        const post = await db.post.findFirst({
            where: { slug: slug as string },
            select: { slugtr: true },
        });

        if (!post) return res.status(404).json({ error: "Post not found" });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
