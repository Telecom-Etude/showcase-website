"use client";

import React from "react";
// import { cn } from "@/lib/utils";
// import Script, { ScriptProps } from "next/script";
import { ReactNode, useEffect } from "react";

interface AppearOnScrollProps {
    children: ReactNode;
    invisible?: string[];
    className?: string;
}

export const AppearOnScroll = ({ children, className }: { children: any, className?: string }) => (<div>{children}</div>);

export const AppearOnScrollBis = ({ children, invisible = ["opacity-0", "translate-y-40"], className }: AppearOnScrollProps) => {
    return <div>{children}</div>;
    // const reveal = () => {
    //     if (!window || typeof window == "undefined") return;
    //     var reveals = document.querySelectorAll(".scroll-appear-layout-div");
    //     for (const elt of Array.from(reveals)) {
    //         var widnowHeight = window.innerHeight;
    //         var revealTop = elt.getBoundingClientRect().top;
    //         var revealpoint = widnowHeight / 50;

    //         if (revealTop < widnowHeight - revealpoint) {
    //             for (const cn of invisible) {
    //                 elt.classList.remove(cn);
    //             }
    //         } else {
    //             for (const cn of invisible) {
    //                 elt.classList.add(cn);
    //             }
    //         }
    //     }
    // };
    // const html = 'window.alert("1"); reveal(); window.addEventListener("scroll", reveal); return () => {window.removeEventListener("scroll", reveal); };'
    // useEffect(() => {
    //     reveal();
    //     window.addEventListener("scroll", reveal);
    //     return () => {
    //         window.removeEventListener("scroll", reveal);
    //     };
    // });
    // return (
    //     <div className={cn("scroll-appear-layout-div relative transition-all duration-1500 ease-in-out", className, invisible.join(" "))}>
    //         {children}
    //         <Script src="./scroll.js" strategy="lazyOnload" />
    //     </div>
    // );
};
