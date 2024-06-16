"use server";

import { db } from "@/lib/db";
import { Locale } from "@/locales/config";

export const createBlog = async (authorEmail: string, title: string, locale: Locale) => {
    try {
        const blog = await db.blog.create({
            data: {
                author: {
                    connect: {
                        email: authorEmail
                    }
                },
                localeBlogs: {
                    create: [
                        {
                            title,
                            locale
                        }
                    ]
                }
            }
        });
        return blog.id;
    } catch (e) {
        console.error("[createBlog] ", e);
        throw new Error();
    }
};
