"use server";

import { PostPresentation } from "@/app/[locale]/(blog)/(client)/blog/client";
import { db } from "@/lib/db";
import { Locale } from "@/locales/config";
import { Label, Post, User } from "@prisma/client";
import { Op } from "quill/core";
import { generateSlug } from "./slug";

export async function createBlog(authorEmail: string, title: string, locale: Locale): Promise<number> {
    try {
        if (!authorEmail) {
            throw new Error("Author email is undefined");
        }
        const author = await db.user.findUnique({ where: { email: authorEmail } });
        if (!author) {
            throw new Error("User not found");
        }
        if (locale === "fr") {
            const blog = await db.post.create({
                data: {
                    authors: {
                        connect: [{ id: author.id }],
                    },
                    locale,
                    titlefr: title,
                    titleen: "Title not defined",
                    slugfr: generateSlug(title),
                    slugen: generateSlug(title) + "_not_translated",
                    contentFR: "[]",
                    contentEN: "[]",
                },
            });
            return blog.id;
        } else {
            const blog = await db.post.create({
                data: {
                    authors: {
                        connect: [{ id: author.id }],
                    },
                    locale,
                    titlefr: "Titre non défini",
                    titleen: title,
                    slugfr: generateSlug(title) + "_non_traduit",
                    slugen: generateSlug(title),
                    contentFR: "[]",
                    contentEN: "[]",
                },
            });
            return blog.id;
        }
    } catch (e) {
        console.error("[createBlog] ", e);
        throw new Error();
    }
}

export async function updateLocaleBlogContent(id: number, content: Op[], locale: Locale) {
    try {
        if (locale === "fr") {
            await db.post.update({
                where: { id: id },
                data: { contentFR: JSON.stringify(content) },
            });
        } else {
            await db.post.update({
                where: { id: id },
                data: { contentEN: JSON.stringify(content) },
            });
        }
    } catch (e) {
        console.error("[updateBlogContent] ", e);
    }
}

export async function getBlogContent(id: number, locale: Locale): Promise<Op[] | undefined> {
    try {
        const blog = await db.post.findUnique({
            where: { id: id },
            select: { contentFR: true, contentEN: true },
        });
        if (locale === "fr") {
            return JSON.parse(blog!.contentFR);
        } else {
            return JSON.parse(blog!.contentEN);
        }
    } catch (e) {
        // console.error("[getLocaleBlogContent] ", e);
    }
}

export async function getValidatedBlogs(locale: Locale): Promise<PostPresentation[] | undefined> {
    try {
        const dbBlogs = await db.post.findMany({
            include: { authors: true, labels: true },
        })!;
        const blogs = dbBlogs
            .filter(blog => blog.validated && blog.locale == locale)
            .map(({ authors, labels, updatedAt, titlefr, titleen, slugfr, slugen, locale, ...blog }) => ({
                titlefr: titlefr,
                titleen: titlefr,
                slugfr: slugfr,
                slugen: slugen,
                authors: authors.map(author => author.name),
                emails: authors.map(author => author.email),
                date: updatedAt,
                labels: labels.filter(l => l.locale === locale).map(l => l.name),
                content: locale === "fr" ? blog.contentFR : blog.contentEN,
                ...blog,
            }));
        return blogs;
    } catch (e) {
        console.error("[getBlogs] ", e);
    }
}

export type UserPost = {
    authors: User[];
    labels: Label[];
} & Post;

export async function getAllBlog(): Promise<UserPost[]> {
    try {
        return (await db.post.findMany({ include: { authors: true, labels: true } })) || [];
    } catch (e) {
        console.error("[getBlog] ", e);
        return [];
    }
}
export async function getBlog(id: number): Promise<UserPost | undefined> {
    try {
        return (await db.post.findUnique({ where: { id: id }, include: { authors: true, labels: true } })) || undefined;
    } catch (e) {
        console.error("[getBlog] ", e);
    }
}

export async function deleteBlog(id: number) {
    try {
        await db.post.delete({ where: { id: id } });
    } catch (e) {
        console.error("[deleteBlog] ", e);
    }
}

export async function renameBlog(id: number, title: string, locale: Locale) {
    try {
        await db.post.update({
            where: { id: id },
            data: { titlefr: locale === "fr" ? title : "", titleen: locale === "en" ? title : "" },
        });
    } catch (e) {
        console.error("[renameLocaleBlog] ", e);
    }
}

export async function validateBlog(id: number) {
    try {
        await db.post.update({ where: { id }, data: { validated: true } });
    } catch (e) {
        console.error("[validateBlog] ", e);
    }
}

export async function unvalidateBlog(id: number) {
    try {
        await db.post.update({ where: { id }, data: { validated: false } });
    } catch (e) {
        console.error("[unvalidateBlog] ", e);
    }
}
