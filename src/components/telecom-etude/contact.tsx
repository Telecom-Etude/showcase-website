import Link from "next/link";
import { Button } from "../ui/button";
import { HTMLAttributeAnchorTarget, ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Url } from "url";

export const EmailContact = ({ rgpd = false, dsi = false, text, underline = false }: { rgpd?: boolean; dsi?: boolean; text?: string; underline?: boolean }) => {
    const email = rgpd ? "secretaire.general@telecom-etude.fr" : dsi ? "info.telecom-paris.fr" : "contact@telecom-etude.fr";
    return (
        <BtnLink underline={underline} href={"mailto:" + email}>
            {text || email}
        </BtnLink>
    );
};

export const BtnLink = ({
    children,
    href,
    underline = false,
    target,
    className
}: {
    children: ReactNode;
    href: string;
    underline?: boolean;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
}) => (
    <Button variant="link" className={cn("py-0 px-0 text-inherit underline-offset-1 h-fit", underline && "underline")} asChild>
        <Link href={href} target={target} className={cn("font-bold ", className)}>
            {children}
        </Link>
    </Button>
);
