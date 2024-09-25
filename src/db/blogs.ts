"use server";

import { db } from "@/lib/db";
import { Locale } from "@/locales/config";
import { Op } from "quill/core";
import { getUserName } from "./users";
import { Label } from "@prisma/client";

export const createBlog = async (authorEmail: string, title: string, locale: Locale) => {
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
                localePosts: {
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
        await db.localePost.update({
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
        const blog = await db.localePost.findUnique({
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
        const blog = await db.post.findUnique({
            where: { id: blogId },
            select: { localePosts: { where: { locale } } }
        });
        return blog!.localePosts[0];
    } catch (e) {
        console.error("[getLocaleBlogId] ", e);
        throw new Error();
    }
};

export interface NamedAuthor {
    firstname: string;
    lastname: string;
}

const getLabelNames = async (labels: Label[], locale: Locale) => {
    return Promise.all(
        labels.map(
            async label =>
                (await db.label.findUnique({ where: { id: label.id }, include: { localeLabels: true } }))!.localeLabels.find(
                    localeLabel => localeLabel.locale === locale
                )!.name
        )
    );
};

export const getValidatedBlogsFromLocale = async (
    locale: Locale
): Promise<{ authors: { firstname: string; lastname: string }[]; content: string; title: string; date: Date; labels: string[]; id: number }[]> => {
    try {
        const blogs = (await db.post.findMany({
            include: { authors: true, localePosts: true, labels: true }
        }))!.filter(blog => blog.validated);
        return await Promise.all(
            blogs.map(async ({ localePosts, labels, authors, createdAt, id }) => {
                return {
                    ...localePosts.find(localeBlog => localeBlog.locale === locale)!,
                    authors: authors.map(author => getUserName(author)),
                    labels: await getLabelNames(labels, locale),
                    date: createdAt,
                    id
                };
            })
        );
    } catch (e) {
        console.error("[getBlogs] ", e);
        throw new Error();
    }
};

export const deleteBlog = async (blogId: number) => {
    try {
        await db.post.delete({ where: { id: blogId } });
    } catch (e) {
        console.error("[deleteBlog] ", e);
        throw new Error();
    }
};

export const renameLocaleBlog = async (localeBlogId: number, title: string) => {
    try {
        await db.localePost.update({
            where: { id: localeBlogId },
            data: { title }
        });
    } catch (e) {
        console.error("[renameLocaleBlog] ", e);
        throw new Error();
    }
};

export const getLocaleIdsFromBlog = async (blogId: number) => {
    try {
        const blog = await db.post.findUnique({ where: { id: blogId }, include: { localePosts: true } });
        return blog?.localePosts;
    } catch (e) {
        console.error("[getLocaleIdsFromBlog]", e);
    }
};

export const validateBlog = async (localePostId: number) => {
    try {
        const localPost = await db.localePost.findUnique({ where: { id: localePostId } })!;
        await db.post.update({ where: { id: localPost!.blogId }, data: { validated: true } });
    } catch (e) {
        console.error("[validateBlog] ", e);
    }
};
