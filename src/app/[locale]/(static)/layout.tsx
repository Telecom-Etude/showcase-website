import { LocaleParams, LOCALES } from "@/locales/config";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
    return LOCALES.map(locale => ({
        locale,
    }));
}

interface LayoutProps extends LocaleParams {
    children: ReactNode;
}

export default function Layout({ children, params: { locale } }: LayoutProps) {
    if (!LOCALES.includes(locale)) {
        notFound();
    }

    return children;
}
