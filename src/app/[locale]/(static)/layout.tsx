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

export default async function Layout({ children, params }: LayoutProps) {
    const { locale } = await params;
    if (!LOCALES.includes(locale)) {
        notFound();
    }

    return children;
}
