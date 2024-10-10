"use client";

import Quill from "quill";
import { Op } from "quill/core";

export const RenderQuill = ({ content }: { content: Op[] }) => {
    function quillGetHTML(inputDelta: Op[]) {
        if (typeof window !== "undefined" && document) {
            var tempCont = document.createElement("div");
            new Quill(tempCont).setContents(inputDelta);
            return tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
        }
        return "Loading";
    }

    return <div dangerouslySetInnerHTML={{ __html: quillGetHTML(content) }} />;
};
