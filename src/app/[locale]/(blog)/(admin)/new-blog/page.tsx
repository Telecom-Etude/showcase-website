import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import NewPostForm from "./client";
import { auth } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LocaleParams } from "@/locales/config";
import { nav } from "@/locales/routing";
import { getDictionary } from "@/locales/dictionaries";

export default async function NewBlog({ params: { locale } }: LocaleParams) {
    const session = await auth();
    const email = session?.user?.email as string;
    const t = getDictionary(locale).navigation.admin.blog;
    return (
        <div className="flex-grow flex justify-center items-center">
            <Card className="min-w-[50vw] max-w-[1000px] bg-accent">
                <CardHeader>
                    <CardTitle className="w-full text-center p-4">{t.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <NewPostForm email={email} locale={locale} />
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button variant="link" asChild>
                        <Link href={nav(locale, "/list-blog")}>{t.edit}</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
