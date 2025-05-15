'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { validateBlog } from '@/db/blogs';
import { Locale } from '@/locales/config';
import { nav } from '@/locales/routing';

export const ValidateButton = ({
    id,
    t,
    locale,
}: {
    locale: Locale;
    id: number;
    t: { title: string; description: string };
}) => {
    const router = useRouter();

    const validateBlogInterface = () => {
        validateBlog(id)
            .then(() => {
                router.push(nav(locale, '/list-blog'));
            })
            .catch(() => {
                toast({
                    ...t,
                    variant: 'destructive',
                });
            });
    };

    return (
        <Button onClick={() => validateBlogInterface()}>
            <p>Valider</p>
        </Button>
    );
};
