"use client";

import { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill, { QuillOptions } from "quill";
import { updateLocaleBlogContent } from "@/db/blogs";
import { useRouter } from "next/navigation";
import { Op } from "quill/core";
import { Actions } from "./editor-actions";

export const QuillEditor = ({ localeBlogId, content, title, blogId }: { blogId: number; localeBlogId: number; content: Op[]; title: string }) => {
    const editorRef = useRef(null);
    const [quill, setQuill] = useState<Quill | null>(null);
    const [value, setValue] = useState(JSON.stringify(content));
    const [toBeChanged, setToBeChanged] = useState(false);
    const [html, setHtml] = useState("");

    const router = useRouter();

    useEffect(() => {
        if (quill && toBeChanged) {
            const newContent = quill.getContents().ops;
            if (newContent !== content) {
                updateLocaleBlogContent(localeBlogId, newContent).finally(() => router.refresh());
            }
        }
    }, [toBeChanged, quill, content, value, localeBlogId, router]);

    useEffect(() => {
        if (quill === null && editorRef.current && typeof window !== "undefined" && Quill) {
            const toolbar = [
                [{ header: [2, 3, 4, false] }],
                ["bold", "italic", "underline", "strike"], // toggled buttons
                ["blockquote", "code-block"],

                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }], // superscript/subscript
                [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                // [{ direction: "rtl" }], // text direction

                // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
                // [{ header: "1" }, { header: "2" }], // custom button values
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                [{ align: [] }],
                ["link", "image", "video"],
                ["clean"] // remove formatting button
            ];
            const options: QuillOptions = {
                theme: "snow",
                placeholder: "Écrivez votre article ici...",
                modules: { toolbar }
            };
            const q: Quill = new Quill(editorRef.current, options);
            q.setContents(content);
            setQuill(q);
            q.on("text-change", () => {
                setValue(JSON.stringify(q.getContents().ops));
                setHtml(q.root.innerHTML);
                const newContent = q.getContents().ops;
                if (newContent != content) {
                    updateLocaleBlogContent(localeBlogId, newContent).finally(() => router.refresh());
                }
            });
        }
    }, [quill, content, localeBlogId, router]);

    return (
        <div className="w-full">
            <Actions {...{ setToBeChanged, content, value, localeBlogId, title, blogId, dbLabels: [] }} />
            <div ref={editorRef} />
        </div>
    );
};
