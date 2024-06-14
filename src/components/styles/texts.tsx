import { cn } from "@/lib/utils";

export const Paragraphs = ({ vocab, className, ...props }: { vocab: { paragraphs: string[] }; className?: string }) => (
    <>
        {vocab.paragraphs.map((paragraph, index) => (
            <p key={index} className={cn("text-justify", className)} {...props}>
                {paragraph}
            </p>
        ))}
    </>
);
