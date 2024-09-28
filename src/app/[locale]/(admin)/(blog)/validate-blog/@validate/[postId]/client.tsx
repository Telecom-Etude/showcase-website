"use client";

import { RenderQuill } from "@/components/quill/render";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { validateBlog } from "@/db/blogs";
import { useRouter } from "next/navigation";

export const ValidateButton = ({ id, t }: { id: number; t: { title: string; description: string } }) => {
    const router = useRouter();

    const validateBlogInterface = () => {
        validateBlog(id)
            .then(() => {
                router.refresh();
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
