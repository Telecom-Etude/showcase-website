"use server";

import { db } from "@/lib/db";

export const getBlogs = async (userEmail: string) => {
    try {
        const blogs = await db.blog.findMany({
            where: {
                userEmail
            }
        });
    } catch (e) {
        console.error("[getBlogs] ", e);
    }
};
