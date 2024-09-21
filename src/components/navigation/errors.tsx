import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/locales/dictionaries";
import { nav } from "@/locales/routing";
import { BirdBackground } from "../telecom-etude/bird-backgroud";

import { Locale } from "@/locales/config";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ErrorPage({ code, locale, message }: { code: string; locale: Locale; message?: string }) {
    const errorsVocab = getDictionary(locale).navigation.errors;
    var pageInfo;
    switch (code) {
        case "401":
            pageInfo = {
                http: errorsVocab.httpError + " 401",
                t: errorsVocab.unauthorized,
                href: "/api/auth/signin"
            };
            break;
        case "403":
            pageInfo = {
                http: errorsVocab.httpError + " 403",
                t: errorsVocab.forbidden,
                href: nav(locale, "/")
            };
            break;
        case "404":
            pageInfo = {
                http: errorsVocab.httpError + " 404",
                t: errorsVocab.notfound,
                href: nav(locale, "/")
            };
            break;
        default:
            console.error("Unexpected error code: " + code);
            pageInfo = {
                http: errorsVocab.httpError + " " + code,
                t: errorsVocab.unknown,
                href: nav(locale, "/")
            };
            break;
    }

    const t = pageInfo.t;
    const href = pageInfo.href;
    const http = pageInfo.http;

    return (
        <BirdBackground>
            <Card className="bg-muted">
                <CardHeader>
                    <CardTitle >{t.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {message ? (
                        <div className="flex flex-col items-center w-full space-y-4">
                            <p>{http}</p>
                            <p>{message}</p>
                        </div>
                    ) : (
                        http
                    )}
                </CardContent>
                <CardFooter className="w-full flex flex-col space-y-4 items-center">
                    <Button variant="call2action" asChild>
                        <Link href={href}>{t.button}</Link>
                    </Button>
                    {t.contact && (
                        <Button variant="link" asChild>
                            <Link href="mailto:jet.info@telecom-etude.fr">{t.contact}</Link>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </BirdBackground>
    );
}
