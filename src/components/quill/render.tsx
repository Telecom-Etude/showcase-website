"use client";

import Quill from "quill";
import { Op } from "quill/core";

export const RenderQuill = ({ content }: { content: Op[] }) => {
    function quillGetHTML(inputDelta: Op[]) {
        var tempCont = document.createElement("div");
        new Quill(tempCont).setContents(inputDelta);
        return tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
    }

    return <div dangerouslySetInnerHTML={{ __html: quillGetHTML(content) }} />;
};
