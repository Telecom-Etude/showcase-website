"use server";

import { signOut } from "@/auth/auth";
import { EmailContact } from "@/components/telecom-etude/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LocaleParams } from "@/locales/config";
import { getDictionary } from "@/locales/dictionaries";

export default async function SignIn({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).navigation.auth.signout;
    return (
        <div className="flex items-center w-full h-full flex-1 justify-center p-10">
            <div className="bg-gradient-to-br from-primary to-destructive p-[2px] rounded-[12px]">
                <Card className="p-4 bg-muted rounded-[10px]">
                    <CardHeader className="p-6">
                        <CardTitle className="w-full text-center pb-2">{t.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form
                            action={async () => {
                                "use server";
                                await signOut();
                            }}
                        >
                            <Button type="submit" variant="link" className="text-foreground bg-white space-x-2 w-full">
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
