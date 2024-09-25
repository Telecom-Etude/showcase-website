"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { FullLogo } from "../../telecom-etude/logos";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Links } from "./links/links";
import { Locale } from "@/locales/config";
import { User } from "next-auth";
import { ExtendedUser } from "@/auth/auth";

export const MobileNavBar = ({ locale, user }: { locale: Locale; user?: ExtendedUser }) => {
    const [deployed, setDeployed] = useState(false);
    const close = () => setDeployed(false);
    return (
        <div>
            <div className="flex justify-between border-b-[1px] border-primary">
                <Button asChild variant="ghost" className="p-2" onClick={() => close()}>
                    <Link href="/" className="flex justify-start px-0 py-0">
                        <FullLogo />
                    </Link>
                </Button>
                <Button variant="ghost" className="p-2" onClick={() => setDeployed(d => !d)}>
                    <Menu className="text-primary" />
                </Button>
            </div>
            {deployed && <Links mobile={true} locale={locale} user={user} btnCn="rounded-none w-full" />}
        </div>
    );
};
