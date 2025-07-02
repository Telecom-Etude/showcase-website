'use server';

import { Label, Post, User } from '@prisma/client';
import { Op } from 'quill/core';

import { PostPresentation } from '@/app/[locale]/(blog)/(client)/blog/client';
import { db } from '@/lib/db';
import { Locale } from '@/locales/config';

import { generateSlug } from './slug';
import { getUserIdFromEmail } from './users';

enum BlogCreationStatus {
    Ok,
    SameTitle,
    UnknownProblem,
}

export async function createBlog(
    authorEmail: string,
    title: string,
    locale: Locale
): Promise<{ status: BlogCreationStatus; id?: number }> {
    try {
        const alreadyCreated = await db.post.findUnique({
            where: {
                title,
            },
        });

        if (alreadyCreated !== null) return { status: BlogCreationStatus.SameTitle };

        const authorId = await getUserIdFromEmail(authorEmail);
        if (!authorId) {
            throw new Error('User not found');
        }

        const blog = await db.post.create({
            data: {
                authors: {
                    connect: [{ id: authorId }],
                },
                locale,
                title,
                slug: generateSlug(title),
                content: '[]',
            },
        });

        return { status: BlogCreationStatus.Ok, id: blog.id };
    } catch (e) {
        console.error('[createBlog] ', e);
        return { status: BlogCreationStatus.UnknownProblem };
    }
}

export async function updateLocaleBlogContent(id: number, content: Op[]) {
    try {
        await db.post.update({
            where: { id: id },
            data: { content: JSON.stringify(content) },
        });
    } catch (e) {
        console.error('[updateBlogContent] ', e);
    }
}

export async function getValidatedBlogs(locale: Locale): Promise<PostPresentation[] | undefined> {
    try {
        const dbBlogs = await db.post.findMany({
            include: { authors: true, labels: true },
        })!;
        const blogs = dbBlogs
            .filter((blog) => blog.validated && blog.locale == locale)
            .map(({ authors, labels, updatedAt, ...blog }) => ({
                authors: authors.map((author) => author.name),
                emails: authors.map((author) => author.email),
                date: updatedAt,
                labels: labels.filter((l) => l.locale === locale).map((l) => l.name),
                ...blog,
            }));
        return blogs;
    } catch (e) {
        console.error('[getBlogs] ', e);
    }
}

type UserPost = {
    authors: User[];
    labels: Label[];
} & Post;

export async function getAllBlog(): Promise<UserPost[]> {
    try {
        return (await db.post.findMany({ include: { authors: true, labels: true } })) || [];
    } catch (e) {
        console.error('[getBlog] ', e);
        return [];
    }
}
export async function getBlog(id: number): Promise<UserPost | undefined> {
    try {
        return (
            (await db.post.findUnique({
                where: { id: id },
                include: { authors: true, labels: true },
            })) || undefined
        );
    } catch (e) {
        console.error('[getBlog] ', e);
    }
}

export async function deleteBlog(id: number) {
    try {
        await db.post.delete({ where: { id: id } });
    } catch (e) {
        console.error('[deleteBlog] ', e);
    }
}

export async function renameBlog(id: number, title: string) {
    try {
        await db.post.update({
            where: { id: id },
            data: { title },
        });
    } catch (e) {
        console.error('[renameLocaleBlog] ', e);
    }
}

export async function validateBlog(id: number) {
    try {
        await db.post.update({ where: { id }, data: { validated: true } });
    } catch (e) {
        console.error('[validateBlog] ', e);
    }
}

export async function unvalidateBlog(id: number) {
    try {
        await db.post.update({ where: { id }, data: { validated: false } });
    } catch (e) {
        console.error('[unvalidateBlog] ', e);
    }
}
