"use client";

import { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill, { QuillOptions } from "quill";
import { updateLocaleBlogContent } from "@/db/blogs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaSave } from "react-icons/fa";
import { Op } from "quill/core";

export const QuillEditor = ({ localeBlogId, content }: { localeBlogId: number; content: Op[] }) => {
    const editorRef = useRef(null);
    const [quill, setQuill] = useState<Quill | null>(null);
    const [value, setValue] = useState(JSON.stringify(content));
    const [saving, setSaving] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (quill === null && editorRef.current && typeof window !== "undefined" && Quill) {
            const toolbar = [
                [{ header: [1, 2, 3, 4, false] }],
                ["bold", "italic", "underline", "strike"], // toggled buttons
                ["blockquote", "code-block"],

                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }], // superscript/subscript
                [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                [{ direction: "rtl" }], // text direction

                [{ size: ["small", false, "large", "huge"] }], // custom dropdown
                [{ header: "1" }, { header: "2" }], // custom button values
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                [{ font: [] }],
                [{ align: [] }],

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
            console.log("created");
            q.on("text-change", () => {
                console.log(q.getContents().ops);
                setValue(JSON.stringify(q.getContents().ops));
                if (!saving) {
                    setSaving(true);
                    updateLocaleBlogContent(localeBlogId, q.getContents().ops)
                        .then(() => router.refresh())
                        .finally(() => setSaving(false));
                }
            });
        }
    }, [quill, content, localeBlogId, router, saving]);

    return (
        <div>
            <div ref={editorRef} className="h-[200px] " />
            <div className="mt-[20px] ">
                <Button
                    variant="ghost"
                    onClick={() => {
                        if (quill) {
                            updateLocaleBlogContent(localeBlogId, quill.getContents().ops);
                        }
                    }}
                >
                    <FaSave />
                </Button>
                <p> ? = {JSON.stringify(content) === value ? "Saved" : "Save"}</p>
                <p> C = {JSON.stringify(content)}</p>
                <p> V = {value}</p>
                <h3>Output:</h3>
                <div dangerouslySetInnerHTML={{ __html: value }} />
            </div>
        </div>
    );
};
