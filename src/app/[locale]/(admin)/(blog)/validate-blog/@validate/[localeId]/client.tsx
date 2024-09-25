"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { validateBlog } from "@/db/blogs";
import { useRouter } from "next/navigation";
import Quill from "quill";
import { Op } from "quill/core";

export const ValidateButton = ({ localePostId }: { localePostId: number }) => {
    const router = useRouter();

    const validateBlogInterface = () => {
        window.alert(`on va valider ${localePostId}`);
        validateBlog(localePostId)
            .then(() => {
                window.alert("VALIDER ! ");
                router.refresh();
            })
            .catch(() => {
                toast({
                    title: "Erreur innnatendue",
                    description: "Un erreure innatendu s'est produite lors de la validation du blog. Réeassayez plus tard ou contactez la DSI.",
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

export const Render = ({ content }: { content: Op[] }) => {
    function quillGetHTML(inputDelta: Op[]) {
        var tempCont = document.createElement("div");
        new Quill(tempCont).setContents(inputDelta);
        return tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
    }

    return <div dangerouslySetInnerHTML={{ __html: quillGetHTML(content) }} />;
};
