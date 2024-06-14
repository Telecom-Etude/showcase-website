import { cn } from "@/lib/utils";

export const Paragraphs = ({ paragraphs, className, ...props }: { paragraphs: string[]; className?: string }) => (
    <>
        {paragraphs.map((paragraph, index) => (
            <p key={index} className={cn("text-justify", className)} {...props}>
                {paragraph}
            </p>
        ))}
    </>
);
