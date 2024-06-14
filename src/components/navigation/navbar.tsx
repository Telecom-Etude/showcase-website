"use client";

import { Button } from "../ui/button";
import { FullLogo } from "../telecom-etude/logos";
import Link from "next/link";
import { MobileNavBar } from "./mobile";
import { Links } from "./links";
import { useState, useEffect } from "react";

export const NavBar = () => {
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

    return (
        <>
            <div className={`sticky z-30 top-0 ${isScrolled ? "bg-background" : "bg-transparent"}`}>
                <div className="hidden md:flex justify-between border-b-[1px] border-primary">
                    <Button asChild variant="ghost" className="rounded-none px-0 py-0">
                        <Link href="/" className="flex justify-start px-0 py-0">
                            <FullLogo />
                        </Link>
                    </Button>
                    <Links buttonStyle="rounded-none" />
                </div>
                <div className="md:hidden">
                    <MobileNavBar />
                </div>
            </div>
        </>
    );
};
