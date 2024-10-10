"use server";

import { db } from "@/lib/db";
import { Locale } from "@/locales/config";
import { Op } from "quill/core";
import { PostPresentation } from "@/app/[locale]/(client)/blog/client";
import { getUserName } from "@/lib/users";
import { Label, Post, User } from "@prisma/client";

export const createBlog = async (authorEmail: string, title: string, locale: Locale): Promise<number> => {
    try {
        const author = await db.user.findUnique({ where: { email: authorEmail } });
        if (!author) {
            throw new Error("User not found");
        }
        const blog = await db.post.create({
            data: {
                authors: {
                    connect: [{ id: author.id }]
                },
                locale,
                title,
                content: "[]"
            }
        });
        return blog.id;
    } catch (e) {
        console.error("[createBlog] ", e);
        throw new Error();
    }
};

export const updateLocaleBlogContent = async (id: number, content: Op[]) => {
    try {
        await db.post.update({
            where: { id: id },
            data: { content: JSON.stringify(content) }
        });
    } catch (e) {
        console.error("[updateBlogContent] ", e);
    }
};

export const getBlogContent = async (id: number): Promise<Op[] | undefined> => {
    try {
        const blog = await db.post.findUnique({
            where: { id: id },
            select: { content: true }
        });
        return JSON.parse(blog!.content);
    } catch (e) {
        // console.error("[getLocaleBlogContent] ", e);
    }
};

export const getValidatedBlogs = async (locale: Locale): Promise<PostPresentation[] | undefined> => {
    try {
        const dbBlogs = await db.post.findMany({
            include: { authors: true, labels: true }
        })!;
        const blogs = dbBlogs
            .filter(blog => blog.validated && blog.locale == locale)
            .map(({ authors, labels, updatedAt, ...blog }) => ({
                authors: authors.map(author => getUserName(author.email)),
                emails: authors.map(author => author.email),
                date: updatedAt,
                labels: labels.filter(l => l.locale === locale).map(l => l.name),
                ...blog
            }));
        return blogs;
    } catch (e) {
        console.error("[getBlogs] ", e);
    }
};

export type UserPost = {
    authors: User[];
    labels: Label[];
} & Post;

export const getAllBlog = async (): Promise<UserPost[]> => {
    try {
        return (await db.post.findMany({ include: { authors: true, labels: true } })) || [];
    } catch (e) {
        console.error("[getBlog] ", e);
        return [];
    }
};
export const getBlog = async (id: number): Promise<UserPost | undefined> => {
    try {
        return (await db.post.findUnique({ where: { id: id }, include: { authors: true, labels: true } })) || undefined;
    } catch (e) {
        console.error("[getBlog] ", e);
    }
};

export const deleteBlog = async (id: number) => {
    try {
        await db.post.delete({ where: { id: id } });
    } catch (e) {
        console.error("[deleteBlog] ", e);
    }
};

export const renameBlog = async (id: number, title: string) => {
    try {
        await db.post.update({
            where: { id: id },
            data: { title }
        });
    } catch (e) {
        console.error("[renameLocaleBlog] ", e);
    }
};

export const validateBlog = async (id: number) => {
    try {
        await db.post.update({ where: { id }, data: { validated: true } });
    } catch (e) {
        console.error("[validateBlog] ", e);
    }
};

export const unvalidateBlog = async (id: number) => {
    try {
        await db.post.update({ where: { id }, data: { validated: false } });
    } catch (e) {
        console.error("[unvalidateBlog] ", e);
    }
};
