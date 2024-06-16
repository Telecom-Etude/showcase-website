import { cn } from "@/lib/utils";

export const Block = ({ children, className, full }: { children: React.ReactNode; className?: string; full?: boolean }) =>
    full ? (
        <div className="p-4 sm:p-10 w-full">{children}</div>
    ) : (
        <div className="w-full h-full flex justify-center">
            <div className={cn("p-4 sm:p-10 max-w-[1200px]", className)}>{children}</div>
        </div>
    );
