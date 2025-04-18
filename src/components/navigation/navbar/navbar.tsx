"use client";

import { Button } from "../../ui/button";
import { FullLogo } from "../../telecom-etude/logos";
import Link from "next/link";
import { MobileNavBar } from "./mobile";
import { Links } from "./links/links";
import { useState, useEffect } from "react";
import { Locale } from "@/locales/config";
import { ExtendedUser } from "@/auth/auth";
import { useRouter } from "next/navigation";

export const NavBar = ({ locale, user }: { locale: Locale; user?: ExtendedUser }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const router = useRouter();

    return (
        <>
            <div className="sticky z-30 top-0 bg-navigation">
                <div className="hidden lg:flex justify-between border-b-2 border-accent">
                    <Button asChild variant="ghost" className="rounded-none px-0 py-0">
                        <Link
                            href="/"
                            className="flex justify-start px-0 py-0"
                            onContextMenu={e => {
                                e.preventDefault();
                                router.push("https://github.com/telecom-etude/logos");
                            }}
                        >
                            <FullLogo />
                        </Link>
                    </Button>
                    <Links mobile={false} btnCn="rounded-none" locale={locale} user={user} />
                </div>
                <div className="lg:hidden">
                    <MobileNavBar locale={locale} user={user} />
                </div>
            </div>
        </>
    );
};
