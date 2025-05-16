import { redirect } from 'next/navigation';

import { Block } from '@/components/styles/blocks';
import { getValidatedBlogs } from '@/db/blogs';
import { LocalePostParams } from '@/locales/config';
import { nav } from '@/locales/routing';

import ClientBlog from './client';

export default async function BlogPage({ params }: LocalePostParams) {
    const { locale, postId } = await params;
    const slug = postId;
    const posts = await getValidatedBlogs(locale);
    if (!posts) {
        redirect(nav(locale, '/error/404'));
    }
    const localePost = posts.find((blog) => blog.slug === slug);
    if (!localePost) {
        redirect(nav(locale, '/error/404'));
    } else {
        return (
            <Block>
                <ClientBlog locale={locale} localePost={localePost} />
            </Block>
        );
    }
}
