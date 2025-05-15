'use client';

import { useRouter } from 'next/navigation';
import Quill, { QuillOptions } from 'quill';
import { Op } from 'quill/core';
import { useEffect, useRef, useState } from 'react';
import 'quill/dist/quill.snow.css';

import { updateLocaleBlogContent } from '@/db/blogs';
import { Locale } from '@/locales/config';

import { Actions } from './editor-actions';

export interface QuillEditorProps {
    dbLabels: string[];
    locale: Locale;
    id: number;
    content: Op[];
    title: string;
    blogLabels: string[];
}

export function QuillEditor({
    id,
    content,
    title,
    locale,
    dbLabels,
    blogLabels,
}: QuillEditorProps) {
    const [quill, setQuill] = useState<Quill | null>(null);
    const [loaded, setLoaded] = useState(false); // to do only one request to the server per render
    const [value, setValue] = useState(JSON.stringify(content));

    const editorRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            typeof document !== 'undefined' &&
            quill === null &&
            editorRef.current
        ) {
            const toolbar = [
                [{ header: [2, 3, 4, false] }],
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                [{ align: [] }],
                ['link', 'image', 'video'],
                ['clean'], // remove formatting button
            ];
            const options: QuillOptions = {
                theme: 'snow',
                placeholder: 'Écrivez votre article ici...',
                modules: { toolbar },
            };
            try {
                const q = new Quill(editorRef.current, options);
                setQuill(q);
            } catch (_) {}
        }
    }, [quill]);

    useEffect(() => {
        if (quill !== null && !loaded) {
            quill.setContents(content);
            quill.on('text-change', () => {
                setValue(JSON.stringify(quill.getContents().ops));
                const newContent = quill.getContents().ops;
                if (newContent != content) {
                    updateLocaleBlogContent(id, newContent).finally(() => router.refresh());
                }
            });
            setLoaded(true);
        }
    }, [quill, content, id, router, loaded]);

    return (
        <div className="w-full">
            <Actions
                {...{
                    locale,
                    setToBeChanged: () => {},
                    content,
                    value,
                    id,
                    title,
                    dbLabels,
                    blogLabels,
                }}
            />
            <div ref={editorRef} />
        </div>
    );
}
