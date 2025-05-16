import Link from 'next/link';

import { auth } from '@/auth/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { LocaleParams } from '@/locales/config';
import { nav } from '@/locales/routing';

import NewPostForm from './client';

export default async function NewBlog({ params }: LocaleParams) {
    const { locale } = await params;
    const session = await auth();
    const email = session?.user?.email as string;
    return (
        <div className="flex-grow flex justify-center items-center">
            <Card className="min-w-[50vw] max-w-[1000px] bg-accent">
                <CardHeader>
                    <CardTitle className="w-full text-center p-4">
                        Création d&apos;un post
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <NewPostForm email={email} />
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button variant="link" asChild>
                        <Link href={nav(locale, '/list-blog')}>Éditer un post existant</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
