import { LOCALES } from "@/locales/config";
import { ReactNode } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
    return LOCALES.map(locale => ({
        locale
    }));
}

export default function Layout({ children }: { children: ReactNode }) {
    return children;
}
