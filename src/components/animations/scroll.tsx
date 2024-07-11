"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect } from "react";

interface AppearOnScrollProps {
    children: ReactNode;
    invisible?: string[];
    className?: string;
}

export const AppearOnScroll = ({ children, invisible = ["opacity-0", "translate-y-40"], className }: AppearOnScrollProps) => {
    const reveal = () => {
        var reveals = document.querySelectorAll(".scroll-appear-layout-div");
        for (const elt of Array.from(reveals)) {
            var widnowHeight = window.innerHeight;
            var revealTop = elt.getBoundingClientRect().top;
            var revealpoint = widnowHeight / 50;

            if (revealTop < widnowHeight - revealpoint) {
                for (const cn of invisible) {
                    elt.classList.remove(cn);
                }
            } else {
                for (const cn of invisible) {
                    elt.classList.add(cn);
                }
            }
        }
    };
    useEffect(() => {
        reveal();
        window.addEventListener("scroll", reveal);
        return () => {
            window.removeEventListener("scroll", reveal);
        };
    });
    return <div className={cn("scroll-appear-layout-div relative transition-all duration-2000 ease-in-out", className, invisible.join(" "))}>{children}</div>;
};
