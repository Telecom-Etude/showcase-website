import Link from "next/link";
import { Button } from "../ui/button";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EmailBtn = ({ underline = false, email, text }: { underline?: boolean; email: string; text?: string }) => (
    <BtnLink underline={underline} href={"mailto:" + email}>
        {text || email}
    </BtnLink>
);

export const EmailContact = ({ rgpd = false, dsi = false, text, underline = false }: { rgpd?: boolean; dsi?: boolean; text?: string; underline?: boolean }) => {
    return (
        <EmailBtn
            underline={underline}
            email={rgpd ? "secretaire.general@telecom-etude.fr" : dsi ? "info.telecom-paris.fr" : "contact@telecom-etude.fr"}
            text={text}
        />
    );
};

/** isForeign is used to secure a foreign link with rel="noopener noreferrer nofollow" */
export const BtnLink = ({
    children,
    href,
    underline = false,
    className,
    isNewTab,
    isForeign,
}: {
    children: ReactNode;
    href: string;
    underline?: boolean;
    className?: string;
    isNewTab?: boolean;
    isForeign?: boolean;
}) => (
    <Button variant="link" className={cn("py-0 px-0 text-inherit underline-offset-1 w-fit h-fit justify-start", underline && "underline")} asChild>
        <Link href={href} target={isNewTab ? "_blank" : undefined} className={cn("font-bold ", className)} rel={isForeign ? "noopener noreferrer nofollow" : undefined}>
            {children}
        </Link>
    </Button>
);
