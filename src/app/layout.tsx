import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import localFont from "next/font/local";
import { getLocale } from "@/headers";

export { generateMetadata } from "./metadata";

const avenir = localFont({
    src: [
        {
            path: "../fonts/Avenir-Bold.otf",
            weight: "700",
            style: "normal"
        },
        {
            path: "../fonts/Avenir-Demi.otf",
            weight: "600",
            style: "normal"
        },
        {
            path: "../fonts/Avenir-DemiIt.otf",
            weight: "600",
            style: "italic"
        },
        {
            path: "../fonts/Avenir-It.otf",
            weight: "400",
            style: "italic"
        },
        {
            path: "../fonts/Avenir-Regular.otf",
            weight: "400",
            style: "normal"
        }
    ]
});

export default async function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    const locale = await getLocale();
    return (
        <html lang={locale}>
            <body className={cn(avenir.className, "min-h-dvh flex flex-col")}>
                <svg width="0" height="0">
                    <linearGradient id="te-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="var(--destructive)" offset="0%" />
                        <stop stopColor="var(--primary)" offset="100%" />
                    </linearGradient>
                </svg>
                {children}
            </body>
        </html>
    );
}
