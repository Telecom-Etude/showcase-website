import { IoClose } from 'react-icons/io5';

import { auth } from '@/auth/auth';
import { RenderQuill } from '@/components/quill/render';
import { VariantLink } from '@/components/ui/button';
import { getBlog } from '@/db/blogs';
import { LocalePostParams } from '@/locales/config';
import { getDictionary } from '@/locales/dictionaries';
import { nav } from '@/locales/routing';

import { WrongId } from '../wrong-id';

import { ValidateButton } from './client';

export default async function Page({ params }: LocalePostParams) {
    const { locale, postId } = await params;
    const id = parseInt(postId);
    const blog = await getBlog(id);
    const isAdmin = (await auth())?.user.rights?.blogAdmin;

    if (!blog || Number.isNaN(id)) {
        return <WrongId />;
    }

    return (
        <div>
            <div className="space-y-4">
                <div className="flex justify-between items-center space-x-4">
                    <h1 className="truncate">{blog.title}</h1>
                    <VariantLink
                        variant="call2action"
                        btnCn="min-w-0 aspect-square rounded-full"
                        href={nav(locale, '/list-blog')}
                    >
                        <IoClose className="w-4 h-4" />
                    </VariantLink>
                </div>
                <div className="custom-quill-styles">
                    <RenderQuill content={JSON.parse(blog.content)} />
                </div>
            </div>
            {isAdmin && (
                <div className="w-full flex justify-center p-4">
                    <ValidateButton
                        locale={locale}
                        id={id}
                        t={getDictionary(locale).navigation.errors.unknown}
                    />
                </div>
            )}
        </div>
    );
}
