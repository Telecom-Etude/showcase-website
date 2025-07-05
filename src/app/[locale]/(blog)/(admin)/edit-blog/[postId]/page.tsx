import { redirect } from 'next/navigation';

import { auth } from '@/auth/auth';
import { Block } from '@/components/styles/blocks';
import { getBlog } from '@/db/blogs';
import { getLocaleLabels } from '@/db/labels';
import { Locale, LocalePostParams } from '@/locales/config';
import { nav } from '@/locales/routing';

import { QuillEditor } from './quill-editor';
import { UnValidate } from './unvalidate';

export default async function EditBlog({ params }: LocalePostParams) {
    const { postId, locale } = await params;
    const id = parseInt(postId);
    const blog = await getBlog(id);
    const sessions = (await auth())?.user;
    const email = sessions?.email;
    if (!email) {
        redirect(nav(locale, '/error/401'));
    }
    if (Number.isNaN(id) || !blog) {
        redirect(nav(locale, '/error/404'));
    }
    if (!blog.authors.map((a) => a.email).includes(email) && !sessions.rights?.blogAdmin) {
        redirect(nav(locale, '/error/403'));
    }
    const blogLocale: Locale = blog.locale as Locale;
    const localeLabels = await getLocaleLabels(blogLocale);
    const labels = (localeLabels || []).map(({ name }) => name);
    return (
        <Block className="w-full">
            <h1>{blog.title}</h1>
            {blog.validated && <UnValidate locale={locale} id={id} />}
            <QuillEditor
                locale={blogLocale}
                id={id}
                content={JSON.parse(blog.content)}
                title={blog.title}
                dbLabels={labels}
                blogLabels={blog.labels.map((label) => label.name)}
            />
        </Block>
    );
}
