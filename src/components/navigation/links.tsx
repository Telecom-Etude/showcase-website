import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
    onClick?: () => void;
    children: ReactNode | string;
    buttonStyle?: string;
    linkStyle?: string;
    href: string;
    variant?: "ghost" | "default";
}

const NavItem = ({ onClick, children, buttonStyle, linkStyle, href, variant = "ghost" }: NavItemProps) => (
    <Button asChild variant={variant} className={buttonStyle} onClick={onClick ? () => onClick() : undefined}>
        <Link href={href} className={linkStyle}>
            {children}
        </Link>
    </Button>
);

interface LinksProps {
    className?: string;
    onClick?: () => void;
    buttonStyle?: string;
}

export const Links = ({ className, ...itemProps }: LinksProps) => (
    <nav className={className}>
        <NavItem {...itemProps} href="/about">
            À propos
        </NavItem>
        <NavItem {...itemProps} href="/offer">
            Notre offre
        </NavItem>
        <NavItem {...itemProps} href="/assos">
            Nos engagements
        </NavItem>
        <NavItem {...itemProps} href="/blog">
            Blog
        </NavItem>
        <NavItem {...itemProps} href="/faq">
            FAQ
        </NavItem>
        <NavItem {...itemProps} href="/contact" linkStyle="flex items-center space-x-2" variant="default">
            <p>Contact</p>
            <FaArrowRight />
        </NavItem>
    </nav>
);
