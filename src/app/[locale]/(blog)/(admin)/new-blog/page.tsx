import { auth } from '@/auth/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LocaleParams } from '@/locales/config';

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
                    <NewPostForm email={email} locale={locale} />
                </CardContent>
            </Card>
        </div>
    );
}
