import { VariantLink } from "@/components/ui/button";
import { db } from "@/lib/db";
import { LocaleParams, LocalePostParams } from "@/locales/config";
import { nav } from "@/locales/routing";
import { IoClose } from "react-icons/io5";
import { ValidateButton } from "./client";
import { RenderQuill } from "@/components/quill/render";
import { getDictionary } from "@/locales/dictionaries";
import { getBlog } from "@/db/blogs";
import { WrongId } from "../wrong-id";

export default async function Page({ params: { locale, postId } }: LocalePostParams) {
    const id = parseInt(postId);
    const blog = await getBlog(id);
    if (!blog || Number.isNaN(id)) {
        return <WrongId />;
    }

    return (
        <div>
            <div className="space-y-4">
                <div className="flex justify-between items-center space-x-4">
                    <h1 className="truncate">{blog.title}</h1>
                    <VariantLink variant="call2action" btnCn="min-w-0 aspect-square rounded-full" href={nav(locale, "/validate-blog")}>
                        <IoClose className="w-4 h-4" />
                    </VariantLink>
                </div>
                <RenderQuill content={JSON.parse(blog.content)} />
            </div>
            <div className="w-full flex justify-center p-4">
                <ValidateButton id={id} t={getDictionary(locale).navigation.errors.unknown} />
            </div>
        </div>
    );
}
