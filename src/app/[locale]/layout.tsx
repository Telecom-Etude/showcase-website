import { auth, ExtendedUser } from "@/auth/auth";
import { CookieConsent } from "@/components/analytics";
import { Footer } from "@/components/navigation/footer";
import { NavBar } from "@/components/navigation/navbar/navbar";
import { Locale, LOCALES } from "@/locales/config";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export default async function LocaleLayout({
    children,
    params: { locale },
}: Readonly<{
    children: ReactNode;
    params: { locale: Locale };
}>) {
    const user: ExtendedUser = (await auth())?.user;

    if (!LOCALES.includes(locale)) {
        notFound();
    }

    return (
        <>
            <NavBar locale={locale} user={user} />
            <main className="flex flex-col h-full flex-grow">{children}</main>
            <Footer locale={locale} />
            {process.env.ANALYTICS && <CookieConsent locale={locale} />}
        </>
    );
}
