'use server';

import Image from 'next/image';

import Google from '@/../public/icons/google.svg';

import { EmailContact } from '@/components/telecom-etude/contact';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LocaleParams } from '@/locales/config';
import { getDictionary } from '@/locales/dictionaries';

import { googleSignin } from './signin';

export default async function SignIn({ params }: LocaleParams) {
    const { locale } = await params;
    const t = getDictionary(locale).navigation.auth.signin;
    return (
        <div className="flex items-center w-full h-full flex-1 justify-center p-10">
            <div className="bg-gradient-to-br from-primary to-destructive p-[2px] rounded-[12px]">
                <Card className="p-4 bg-muted rounded-[10px]">
                    <CardHeader className="p-6">
                        <CardTitle className="w-full text-center pb-2">{t.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form action={googleSignin}>
                            <Button
                                type="submit"
                                variant="link"
                                className="text-black bg-white space-x-2 border-0 rounded-[6px] w-full"
                            >
                                <Image src={Google} alt="Google Logo" />
                                <p>{t.buttonText}</p>
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="p-6 flex justify-center">
                        <EmailContact dsi text={t.contact} />
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
