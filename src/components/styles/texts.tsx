import { ElementType, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface ParagraphsProps {
    paragraphs: readonly string[];
    VariableLayout?: ElementType;
    className?: string;
    md?: boolean;
}

export const MarkDown = ({ text, className, ...props }: { text: string; className?: string }) => (
    <ReactMarkdown className={className} remarkPlugins={[remarkGfm]}>
        {text}
    </ReactMarkdown>
);

export const Paragraphs = ({ paragraphs, VariableLayout = "p", className, md = true, ...props }: ParagraphsProps) => (
    <>
        {paragraphs.map((text, key) =>
            VariableLayout === "p" && md ? (
                <MarkDown key={key} className={cn("text-justify", className)} text={text} {...props} />
            ) : md ? (
                <VariableLayout key={key} className={cn("text-justify", className)} {...props}>
                    {md ? <MarkDown className={className} text={text} /> : text}
                </VariableLayout>
            ) : (
                <VariableLayout key={key} className={cn("text-justify", className)} {...props}>
                    {text}
                </VariableLayout>
            )
        )}
    </>
);
