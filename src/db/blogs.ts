"use server";

import { db } from "@/lib/db";
import { Locale } from "@/locales/config";
import { Op } from "quill/core";

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
                            locale,
                            content: "[]"
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

export const updateLocaleBlogContent = async (localeBlogId: number, content: Op[]) => {
    try {
        await db.localeBlog.update({
            where: { id: localeBlogId },
            data: { content: JSON.stringify(content) }
        });
    } catch (e) {
        console.error("[updateBlogContent] ", e);
        throw new Error();
    }
};

export const getLocaleBlogContent = async (localeBlogId: number): Promise<Op[]> => {
    try {
        const blog = await db.localeBlog.findUnique({
            where: { id: localeBlogId },
            select: { content: true }
        });
        return JSON.parse(blog!.content);
    } catch (e) {
        console.error("[getLocaleBlogContent] ", e);
        throw new Error();
    }
};

export const getLocaleBlog = async (blogId: number, locale: Locale) => {
    try {
        console.log("blogId = ", blogId, "locale = ", locale);
        const blog = await db.blog.findUnique({
            where: { id: blogId },
            select: { localeBlogs: { where: { locale } } }
        });
        return blog!.localeBlogs[0];
    } catch (e) {
        console.error("[getLocaleBlogId] ", e);
        throw new Error();
    }
};

export const deleteBlog = async (blogId: number) => {
    try {
        await db.blog.delete({ where: { id: blogId } });
    } catch (e) {
        console.error("[deleteBlog] ", e);
        throw new Error();
    }
};
