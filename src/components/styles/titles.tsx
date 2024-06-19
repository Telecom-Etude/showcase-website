import { cn } from "@/lib/utils";

export const H1 = ({ children, className }: { children: string; className?: string }) => (
    <h1 className={cn("text-3xl font-semibold", className)}>{children}</h1>
);

export const H2 = ({ children, className }: { children: string; className?: string }) => (
    <h2 className={cn("text-2xl font-semibold", className)}>{children}</h2>
);

export const H3 = ({ children, className }: { children: string; className?: string }) => <h3 className={cn("text-xl font-semibold", className)}>{children}</h3>;

export const H4 = ({ children, className }: { children: string; className?: string }) => <h4 className={cn("text-lg font-semibold", className)}>{children}</h4>;

export const H5 = ({ children, className }: { children: string; className?: string }) => <h5 className={cn("font-semibold", className)}>{children}</h5>;
