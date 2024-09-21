import { NavBar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { auth } from "@/auth/auth";
import { Locale } from "@/locales/config";
import { ReactNode } from "react";

export default async function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: ReactNode;
    params: { locale: Locale };
}>) {
    const user = (await auth())?.user;
    return (
        <>
            <NavBar locale={locale} user={user} />
            <main className="flex flex-col h-full flex-grow">{children}</main>
            <Footer locale={locale} />
        </>
    );
}
