"use client";

import { RenderQuill } from "@/components/quill/render";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { validateBlog } from "@/db/blogs";
import { Locale } from "@/locales/config";
import { nav } from "@/locales/routing";
import { useRouter } from "next/navigation";

export const ValidateButton = ({ id, t, locale }: { locale: Locale; id: number; t: { title: string; description: string } }) => {
    const router = useRouter();

    const validateBlogInterface = () => {
        validateBlog(id)
            .then(() => {
                router.push(nav(locale, "/validate-blog"));
            })
            .catch(() => {
                toast({
                    ...t,
                    variant: "destructive"
                });
            });
    };
    return (
        <Button onClick={() => validateBlogInterface()}>
            <p>Valider</p>
        </Button>
    );
};
