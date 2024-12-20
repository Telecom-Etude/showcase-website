import { ReactNode } from "react";
import { auth, ExtendedUser } from "@/auth/auth";
import { Locale } from "@/locales/config";
import { Footer } from "@/components/navigation/footer";
import { NavBar } from "@/components/navigation/navbar/navbar";
import { CookieConsent } from "@/components/analytics";

export default async function LocaleLayout({
    children,
    params: { locale }
}: Readonly<{
    children: ReactNode;
    params: { locale: Locale };
}>) {
    const user: ExtendedUser = (await auth())?.user;
    return (
        <>
            <NavBar locale={locale} user={user} />
            <main className="flex flex-col h-full flex-grow">{children}</main>
            <Footer locale={locale} />
            {process.env.ANALYTICS && <CookieConsent locale={locale} />}
        </>
    );
}
